import { getSupabase } from "../../lib/supabase";
import { SITE } from "../../lib/site";
import OurWorkGallery from "../components/OurWorkGallery";

export const metadata = {
  title: "Our Renovation Projects in Dubai",
  description:
    "Real apartment, villa, bathroom, kitchen, MEP, landscaping and swimming pool projects delivered across Dubai by RenoFix — see the finished work and the standard we deliver.",
  alternates: { canonical: `${SITE.url}/our-work` },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: `${SITE.url}/our-work`,
    title: "Our Renovation Projects in Dubai | RenoFix",
    description:
      "Real renovation, MEP, landscaping and pool projects delivered across Dubai by RenoFix.",
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
        A selection of renovation, MEP, landscaping and pool projects delivered by RenoFix
        across Dubai.
      </p>

      <OurWorkGallery projects={projects} />
    </main>
  );
}
