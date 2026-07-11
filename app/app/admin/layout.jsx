import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { isValidToken, COOKIE_NAME } from "../../lib/auth";
import LogoutButton from "./LogoutButton";

export const dynamic = "force-dynamic";

export default function AdminLayout({ children }) {
  const val = cookies().get(COOKIE_NAME)?.value;
  if (!isValidToken(val)) redirect("/login");

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4 dark:border-slate-800">
        <div className="flex items-center gap-5">
          <span className="text-lg font-bold">RenoFix Admin</span>
          <nav className="flex gap-4 text-sm">
            <Link href="/admin/rates" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
              Rates
            </Link>
            <Link href="/admin/projects" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
              Projects
            </Link>
            <Link href="/" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
              View site
            </Link>
          </nav>
        </div>
        <LogoutButton />
      </div>
      {children}
    </div>
  );
}
