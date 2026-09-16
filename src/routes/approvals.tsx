import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AgentStatus } from "@/components/agent/agent-status";
import { proposals, type Proposal } from "@/data/proposals";
import { readSession } from "@/lib/session";

export const Route = createFileRoute("/approvals")({ component: ApprovalsPage });

function ApprovalsPage() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [items, setItems] = useState(proposals);

  useEffect(() => {
    if (!readSession()) {
      void navigate({ to: "/login" });
      return;
    }
    setReady(true);
  }, [navigate]);

  if (!ready) {
    return (
      <main className="flex min-h-[50vh] items-center justify-center">
        <AgentStatus stage="planning" size="sm" showHint={false} />
      </main>
    );
  }

  function decide(id: string, status: Proposal["status"]) {
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, status } : p)));
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-subtle">
        Approvals
      </p>
      <div className="mt-3 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl tracking-tight">PAL is asking</h1>
          <p className="mt-2 text-sm text-muted">
            Review each request. Nothing consequential happens without you.
          </p>
        </div>
        <AgentStatus stage="asking" size="sm" showHint={false} />
      </div>

      <ul className="mt-8 space-y-4">
        {items.map((p) => (
          <li
            key={p.id}
            className="rounded-[20px] border border-border bg-surface p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-base font-medium text-fg">{p.title}</h2>
              <span className="text-xs uppercase tracking-wide text-subtle">
                {p.status === "asking" ? "Asking" : p.status}
              </span>
            </div>
            <p className="mt-2 font-mono text-xs text-muted">{p.utterance}</p>
            <p className="mt-3 text-sm text-fg">{p.payload}</p>
            <p className="mt-2 text-xs text-subtle">{p.why}</p>
            {p.status === "asking" ? (
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  className="h-11 rounded-md bg-fg px-4 text-sm font-medium text-bg"
                  onClick={() => decide(p.id, "approved")}
                >
                  Yes, do this
                </button>
                <button
                  type="button"
                  className="h-11 rounded-md border border-border px-4 text-sm text-fg"
                  onClick={() => decide(p.id, "rejected")}
                >
                  No, reject
                </button>
              </div>
            ) : null}
          </li>
        ))}
      </ul>

      <p className="mt-8 text-xs text-subtle">
        Demo proposals. Live execution is gated by policy in the production PAL stack.{" "}
        <Link to="/" className="text-accent hover:underline">
          Home
        </Link>
      </p>
    </main>
  );
}
