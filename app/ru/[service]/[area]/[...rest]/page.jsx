import { notFound } from "next/navigation";

// Deeper unknown /ru/ URLs get the Russian 404 page.
export default function CatchAll() {
  notFound();
}
