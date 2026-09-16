import { createFileRoute, Link } from "@tanstack/react-router";
import { datasets, downstream, models, werRows } from "@/data/benchmark";

export const Route = createFileRoute("/evaluation")({ component: EvaluationPage });

function EvaluationPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-subtle">
        Evaluation
      </p>
      <h1 className="font-display mt-2 text-3xl tracking-tight">Benchmark results</h1>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
        Three speech models feed the same PAL pipeline. Safety is architecture-enforced,
        not ASR-dependent.
      </p>
      <p className="mt-2 text-sm">
        <Link to="/evaluation/methodology" className="text-accent hover:underline">
          How we measure
        </Link>
      </p>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {models.map((m) => (
          <article
            key={m.id}
            className="rounded-[20px] border border-border bg-surface p-5"
          >
            <p className="text-xs text-accent">{m.role}</p>
            <h2 className="mt-1 text-base font-medium">{m.name}</h2>
            <p className="mt-3 text-xs text-muted">Pros: {m.pros}</p>
            <p className="mt-2 text-xs text-subtle">Cons: {m.cons}</p>
          </article>
        ))}
      </section>

      <section className="mt-10 overflow-x-auto">
        <h2 className="mb-3 text-sm font-medium text-muted">WER by condition (lower is better)</h2>
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead>
            <tr className="border-b border-border text-subtle">
              <th className="py-2 pr-3 font-medium">Condition</th>
              <th className="px-2 py-2 font-medium">Sahara</th>
              <th className="px-2 py-2 font-medium">Whisper</th>
              <th className="px-2 py-2 font-medium">AfriSpeech</th>
            </tr>
          </thead>
          <tbody>
            {werRows.map((row) => (
              <tr key={row.condition} className="border-b border-border/60">
                <td className="py-2 pr-3">{row.condition}</td>
                <td className="px-2 py-2 font-mono tabular-nums text-accent">
                  {row.sahara}%
                </td>
                <td className="px-2 py-2 font-mono tabular-nums text-muted">
                  {row.whisper}%
                </td>
                <td className="px-2 py-2 font-mono tabular-nums text-muted">
                  {row.afrispeech}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-10 overflow-x-auto">
        <h2 className="mb-3 text-sm font-medium text-muted">Downstream (same PAL pipeline)</h2>
        <table className="w-full min-w-[480px] text-left text-sm">
          <thead>
            <tr className="border-b border-border text-subtle">
              <th className="py-2 pr-3 font-medium">Metric</th>
              <th className="px-2 py-2 font-medium">Sahara</th>
              <th className="px-2 py-2 font-medium">Whisper</th>
              <th className="px-2 py-2 font-medium">AfriSpeech</th>
            </tr>
          </thead>
          <tbody>
            {downstream.map((row) => (
              <tr key={row.metric} className="border-b border-border/60">
                <td className="py-2 pr-3">{row.metric}</td>
                <td className="px-2 py-2 font-mono tabular-nums text-accent">
                  {row.sahara}%
                </td>
                <td className="px-2 py-2 font-mono tabular-nums text-muted">
                  {row.whisper}%
                </td>
                <td className="px-2 py-2 font-mono tabular-nums text-muted">
                  {row.afrispeech}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-10">
        <h2 className="mb-3 text-sm font-medium text-muted">Datasets</h2>
        <ul className="space-y-3">
          {datasets.map((d) => (
            <li key={d.name} className="rounded-lg border border-border bg-surface px-4 py-3">
              <a
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent hover:underline"
              >
                {d.name}
              </a>
              <p className="text-xs text-subtle">{d.domain}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
