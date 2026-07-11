import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <h1 className="text-4xl font-extrabold tracking-tight">404</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400"
      >
        Back to Home
      </Link>
    </main>
  );
}
