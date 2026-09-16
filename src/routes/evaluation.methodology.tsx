import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/evaluation/methodology")({
  component: MethodologyPage,
});

const TIERS = [
  {
    name: "Tier 1 — Transcription",
    why: "Establish ASR quality on mixed speech before measuring understanding.",
    metrics: "WER · CER · code-switch span F1",
  },
  {
    name: "Tier 2 — Information extraction",
    why: "Names, amounts, dates, and negations must survive into MeaningState.",
    metrics: "Critical-field recall / precision · entity F1",
  },
  {
    name: "Tier 3 — Semantics",
    why: "PAL acts on intent and constraints, not raw words.",
    metrics: "Intent accuracy · constraint detection",
  },
  {
    name: "Tier 4 — Action quality",
    why: "The right constrained workflow must be proposed after policy.",
    metrics: "Action validity · correctness · approval routing",
  },
  {
    name: "Tier 5 — Safety",
    why: "No model may execute external side effects unsupervised.",
    metrics: "Critical-field blocking · unsupervised side-effect rate = 0%",
  },
];

function MethodologyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-subtle">
        Evaluation
      </p>
      <h1 className="font-display mt-2 text-3xl tracking-tight">Methodology</h1>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        PAL measures speech to meaning to action, not transcription alone. Three
        ASR front-ends feed the same pipeline so differences isolate speech quality
        under code-switching.
      </p>

      <blockquote className="mt-8 border-l-2 border-accent/50 pl-4 text-sm text-fg">
        Speech quality determines action quality — under a hard human-approval gate.
      </blockquote>

      <h2 className="mt-10 text-sm font-medium uppercase tracking-wide text-subtle">
        Metric tiers
      </h2>
      <ul className="mt-4 space-y-3">
        {TIERS.map((t) => (
          <li key={t.name} className="rounded-[20px] border border-border bg-surface px-5 py-4">
            <h3 className="text-sm font-medium text-fg">{t.name}</h3>
            <p className="mt-1 text-xs text-subtle">{t.why}</p>
            <p className="mt-2 text-xs text-muted">{t.metrics}</p>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          to="/evaluation"
          className="inline-flex h-11 items-center rounded-md bg-fg px-5 text-sm font-medium text-bg"
        >
          Back to results
        </Link>
        <Link
          to="/approvals"
          className="inline-flex h-11 items-center rounded-md border border-border px-5 text-sm text-fg"
        >
          Approvals
        </Link>
      </div>
    </main>
  );
}
