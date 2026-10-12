import Link from "next/link";
import { getSupabase } from "../../lib/supabase";
import { SITE } from "../../lib/site";
import OurWorkGallery from "../components/OurWorkGallery";

export const metadata = {
  title: "Our Renovation Projects in Dubai",
  description:
    "Real apartment, villa, bathroom, kitchen, MEP, landscaping and swimming pool projects delivered across Dubai by RenoFix Plus — see the finished work and the standard we deliver.",
  alternates: { canonical: `${SITE.url}/our-work` },
  openGraph: {
    images: [SITE.ogImage],
    type: "website",
    locale: "en_AE",
    url: `${SITE.url}/our-work`,
    title: "Our Renovation Projects in Dubai | RenoFix Plus",
    description:
      "Real renovation, MEP, landscaping and pool projects delivered across Dubai by RenoFix Plus.",
  },
};

// Rebuild the page hourly so newly added /admin projects appear and are
// server-rendered into the HTML (crawlable by Google), unlike the previous
// client-only fetch which showed search engines an empty page.
export const revalidate = 3600;

export default async function OurWorkPage() {
  let projects = [];
  try {
    const supabase = getSupabase();
    if (supabase) {
      const { data } = await supabase
        .from("projects")
        .select("id,title,category,image_url")
        .order("created_at", { ascending: false });
      projects = data || [];
    }
  } catch {
    projects = [];
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Work</h1>
      <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
        A selection of renovation, MEP, landscaping and pool projects delivered by RenoFix Plus
        across Dubai.
      </p>
      <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
        RenoFix Plus completes apartment, villa, bathroom, kitchen and MEP projects across Dubai — from
        Dubai Marina and JVC to Arabian Ranches and Dubai Hills. Every project is delivered on a fixed,
        itemised price with a 12-month workmanship warranty (T&amp;Cs apply). Browse recent work below, or{" "}
        <Link href="/request" className="font-medium text-amber-600 hover:underline dark:text-amber-400">
          request a free site visit
        </Link>
        .
      </p>

      <OurWorkGallery projects={projects} />
    </main>
  );
}
