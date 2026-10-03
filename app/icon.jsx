import { ImageResponse } from "next/og";

// Favicon shown in browser tabs and next to Google search results.
// Matches the amber "R" mark in the header and footer.
export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f59e0b",
          borderRadius: 40,
          color: "#0f172a",
          fontSize: 132,
          fontWeight: 700,
        }}
      >
        R
      </div>
    ),
    size
  );
}
