"use client";

import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { clearSession, readSession, type PalSession } from "@/lib/session";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/evaluation", label: "Evaluation" },
  { to: "/approvals", label: "Approvals" },
] as const;

export function AppHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [session, setSession] = useState<PalSession | null>(null);

  useEffect(() => {
    const sync = () => setSession(readSession());
    sync();
    window.addEventListener("pal-session", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("pal-session", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-display text-lg tracking-tight text-fg">
            PAL
          </Link>
          <nav className="hidden items-center gap-4 sm:flex" aria-label="Primary">
            {NAV.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={
                    active
                      ? "text-sm font-medium text-accent"
                      : "text-sm text-muted hover:text-fg"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        {session ? (
          <button
            type="button"
            className="h-9 rounded-md border border-border px-3 text-sm text-muted hover:text-fg"
            onClick={() => clearSession()}
          >
            Sign out
          </button>
        ) : (
          <Link
            to="/login"
            className="inline-flex h-9 items-center rounded-md border border-border px-3 text-sm text-fg hover:bg-elevated"
          >
            Sign in
          </Link>
        )}
      </div>
      <nav
        className="flex gap-4 overflow-x-auto border-t border-border px-4 py-2 sm:hidden"
        aria-label="Mobile"
      >
        {NAV.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="whitespace-nowrap text-sm text-muted"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
