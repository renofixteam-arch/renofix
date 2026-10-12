// The admin login is not a public page: keep it out of search results.
export const metadata = {
  title: "Admin login",
  robots: { index: false, follow: false },
  alternates: { canonical: null },
};

export default function LoginLayout({ children }) {
  return children;
}
