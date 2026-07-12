"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

// Dependency-free ratio cropper: drag to reposition, zoom to fill.
// Exposes getBlob() via ref, returning a JPEG File cropped to the exact ratio.
const ImageCropper = forwardRef(function ImageCropper(
  { file, ratio, outputWidth = 1600 },
  ref
) {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const dragRef = useRef(null);

  const [url, setUrl] = useState(null);
  const [nat, setNat] = useState(null); // natural {w,h}
  const [base, setBase] = useState(1); // cover baseScale
  const [z, setZ] = useState(1); // zoom
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!file) return;
    const u = URL.createObjectURL(file);
    setUrl(u);
    const img = new Image();
    img.onload = () => setNat({ w: img.naturalWidth, h: img.naturalHeight });
    img.src = u;
    return () => URL.revokeObjectURL(u);
  }, [file]);

  function size() {
    const el = containerRef.current;
    if (!el) return { cW: 0, cH: 0 };
    const r = el.getBoundingClientRect();
    return { cW: r.width, cH: r.height };
  }

  function clamp(x, y, rW, rH, cW, cH) {
    return {
      x: Math.min(0, Math.max(cW - rW, x)),
      y: Math.min(0, Math.max(cH - rH, y)),
    };
  }

  function recenter(nextZ) {
    if (!nat) return;
    const { cW, cH } = size();
    if (!cW || !cH) return;
    const b = Math.max(cW / nat.w, cH / nat.h);
    setBase(b);
    const rW = nat.w * b * nextZ;
    const rH = nat.h * b * nextZ;
    setPos(clamp((cW - rW) / 2, (cH - rH) / 2, rW, rH, cW, cH));
  }

  // center whenever a new image loads
  useEffect(() => {
    recenter(z);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nat]);

  useEffect(() => {
    const onResize = () => recenter(z);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  });

  function onZoom(e) {
    const nz = parseFloat(e.target.value);
    setZ(nz);
    if (!nat) return;
    const { cW, cH } = size();
    const rW = nat.w * base * nz;
    const rH = nat.h * base * nz;
    setPos((p) => clamp(p.x, p.y, rW, rH, cW, cH));
  }

  function down(e) {
    e.currentTarget.setPointerCapture?.(e.pointerId);
    dragRef.current = { sx: e.clientX, sy: e.clientY, px: pos.x, py: pos.y };
  }
  function move(e) {
    if (!dragRef.current || !nat) return;
    const { cW, cH } = size();
    const rW = nat.w * base * z;
    const rH = nat.h * base * z;
    const nx = dragRef.current.px + (e.clientX - dragRef.current.sx);
    const ny = dragRef.current.py + (e.clientY - dragRef.current.sy);
    setPos(clamp(nx, ny, rW, rH, cW, cH));
  }
  function up() {
    dragRef.current = null;
  }

  useImperativeHandle(ref, () => ({
    async getBlob() {
      if (!nat || !imgRef.current) return file;
      const { cW, cH } = size();
      const s = base * z;
      const sx = -pos.x / s;
      const sy = -pos.y / s;
      const sw = cW / s;
      const sh = cH / s;
      const outW = outputWidth;
      const outH = Math.round(outputWidth / ratio);
      const canvas = document.createElement("canvas");
      canvas.width = outW;
      canvas.height = outH;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(imgRef.current, sx, sy, sw, sh, 0, 0, outW, outH);
      const blob = await new Promise((res) =>
        canvas.toBlob(res, "image/jpeg", 0.9)
      );
      return new File([blob], "image.jpg", { type: "image/jpeg" });
    },
  }));

  const rW = nat ? nat.w * base * z : 0;
  const rH = nat ? nat.h * base * z : 0;

  return (
    <div>
      <div
        ref={containerRef}
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
        onPointerLeave={up}
        className="relative w-full cursor-move touch-none select-none overflow-hidden rounded-xl border border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-800"
        style={{ aspectRatio: String(ratio) }}
      >
        {url && (
          <img
            ref={imgRef}
            src={url}
            alt=""
            draggable={false}
            style={{
              position: "absolute",
              left: pos.x,
              top: pos.y,
              width: rW,
              height: rH,
              maxWidth: "none",
            }}
          />
        )}
        <div className="pointer-events-none absolute inset-0 grid grid-cols-3 grid-rows-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="border border-white/15" />
          ))}
        </div>
      </div>
      <div className="mt-2 flex items-center gap-3">
        <span className="text-xs text-slate-500">Zoom</span>
        <input
          type="range"
          min="1"
          max="3"
          step="0.01"
          value={z}
          onChange={onZoom}
          className="flex-1 accent-amber-500"
        />
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400">
        Drag to reposition · zoom to fill the frame
      </p>
    </div>
  );
});

export default ImageCropper;
