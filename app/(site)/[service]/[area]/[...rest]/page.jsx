import { notFound } from "next/navigation";

// Deeper unknown URLs (3+ segments) land here so they get the site's own 404
// page. There is no app-wide root layout (English and Russian each have one),
// so without this they would fall through to Next's unstyled default 404.
export default function CatchAll() {
  notFound();
}
