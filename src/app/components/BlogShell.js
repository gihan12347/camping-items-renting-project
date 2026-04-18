"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavBar from "./navbar.js";
import Footer from "./footer.js";
import {
  BLOG_NAV_ITEMS,
  ON_THIS_PAGE_ANCHORS,
} from "../data/blogNavLinks.js";

function pathMatches(pathname, href) {
  if (href === "/blogs") {
    return pathname === "/blogs" || pathname === "/blogs/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function BlogShell({ children }) {
  const pathname = usePathname() || "";
  const isMainGuide = pathname === "/blogs" || pathname === "/blogs/";

  return (
    <>
      <NavBar activeLink="Blogs" />

      {/* pt-0 on main: nav clearance lives on emerald strip so from-white gradient never shows under fixed nav */}
      <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50/30 to-gray-100 pt-0">
        <div className="bg-emerald-50 pt-[calc(6.25rem+env(safe-area-inset-top,0px))]">
          <div className="mx-auto w-full max-w-7xl px-4 pb-12 pt-5 sm:px-6 sm:pb-16 sm:pt-7 lg:px-8 lg:pt-10">
            {/* Tablet & phone: horizontal guide picker */}
            <div className="mb-8 lg:hidden">
            <div className="flex items-end justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                Camping guides
              </p>
              <Link
                href="/gear-rental"
                className="shrink-0 text-xs font-medium text-emerald-700 underline-offset-2 hover:underline"
              >
                Rent gear →
              </Link>
            </div>
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {BLOG_NAV_ITEMS.map((item) => {
                const active = pathMatches(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    scroll={true}
                    className={`min-h-[4.25rem] min-w-[9.5rem] max-w-[11rem] shrink-0 snap-start rounded-xl border px-3 py-3 text-left shadow-sm transition sm:min-w-[10.5rem] ${
                      active
                        ? "border-emerald-600 bg-emerald-600 text-white ring-2 ring-emerald-600/30"
                        : "border-gray-200/90 bg-white text-gray-800 hover:border-emerald-300 hover:bg-emerald-50/60"
                    }`}
                  >
                    <span className="block text-sm font-semibold leading-tight">
                      {item.title}
                    </span>
                    <span
                      className={`mt-1 block text-[11px] leading-snug sm:text-xs ${
                        active ? "text-emerald-50/95" : "text-gray-500"
                      }`}
                    >
                      {item.blurb}
                    </span>
                  </Link>
                );
              })}
            </div>

            {isMainGuide && (
              <details className="group mt-5 overflow-hidden rounded-xl border border-gray-200/90 bg-white/90 shadow-sm open:shadow-md">
                <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-gray-900 marker:hidden [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-2">
                    <span>On this page</span>
                    <span className="text-gray-400 transition group-open:rotate-180">
                      ▼
                    </span>
                  </span>
                </summary>
                <ul className="space-y-0.5 border-t border-gray-100 px-2 py-2">
                  {ON_THIS_PAGE_ANCHORS.map((a) => (
                    <li key={a.href}>
                      <a
                        href={a.href}
                        className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-900"
                      >
                        {a.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
            {/* Desktop / large tablet landscape: sticky left rail */}
            <aside className="hidden lg:block lg:w-72 lg:shrink-0">
              <nav
                aria-label="Blog guides"
                className="sticky top-[calc(6.25rem+1rem+env(safe-area-inset-top,0px))] max-h-[calc(100dvh-8rem-env(safe-area-inset-top,0px))] overflow-y-auto rounded-2xl border border-gray-200/80 bg-white p-4 shadow-md ring-1 ring-black/[0.03]"
              >
                <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                  Camping guides
                </p>
                <ul className="mt-3 space-y-1">
                  {BLOG_NAV_ITEMS.map((item) => {
                    const active = pathMatches(pathname, item.href);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`block rounded-xl px-3 py-2.5 text-sm transition ${
                            active
                              ? "bg-emerald-600 font-semibold text-white shadow-sm"
                              : "text-gray-800 hover:bg-gray-50"
                          }`}
                        >
                          <span className="block leading-snug">{item.title}</span>
                          <span
                            className={`mt-1 block text-xs font-normal leading-snug ${
                              active ? "text-emerald-100" : "text-gray-500"
                            }`}
                          >
                            {item.blurb}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-5 border-t border-gray-100 pt-4">
                  <Link
                    href="/gear-rental"
                    className="flex items-center justify-center gap-2 rounded-xl bg-emerald-50 px-3 py-2.5 text-center text-sm font-semibold text-emerald-900 ring-1 ring-emerald-200/80 transition hover:bg-emerald-100"
                  >
                    Browse gear rentals
                  </Link>
                </div>

                {isMainGuide && (
                  <>
                    <p className="mt-6 text-[11px] font-bold uppercase tracking-wider text-gray-500">
                      On this page
                    </p>
                    <ul className="mt-2 space-y-0.5">
                      {ON_THIS_PAGE_ANCHORS.map((a) => (
                        <li key={a.href}>
                          <a
                            href={a.href}
                            className="block rounded-lg px-3 py-1.5 text-sm text-gray-600 hover:bg-emerald-50/80 hover:text-emerald-900"
                          >
                            {a.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </nav>
            </aside>

            <div className="min-w-0 flex-1">{children}</div>
          </div>
        </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
