import { SURVEY_HTML } from "./survey-html";

export const dynamic = "force-static";

export function GET() {
  return new Response(SURVEY_HTML, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "public, max-age=0, s-maxage=300",
    },
  });
}
