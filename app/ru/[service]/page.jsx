import { notFound } from "next/navigation";

// There are no Russian service hub pages in the pilot; unknown /ru/<x> URLs
// get the Russian 404 page.
export default function RuServiceHub() {
  notFound();
}
