import { createFileRoute, Link } from "@tanstack/react-router";
import { PipelineStageShowcase } from "@/components/agent/pipeline-stage-showcase";

export const Route = createFileRoute("/")({ component: Home });

const STEPS = ["Speak", "Understand", "Plan", "Ask", "Act", "Verify"] as const;

function Home() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 py-12">
      <p className="rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium tracking-wide text-muted">
        Sahara CodeSwitch Africa Challenge
      </p>

      <p className="text-xs font-medium uppercase tracking-[0.28em] text-subtle">
        Meaning-to-Action
      </p>

      <h1 className="font-display max-w-3xl text-center text-3xl font-medium tracking-tight text-fg sm:text-5xl">
        Voice automation for African code-switching
      </h1>

      <p className="max-w-xl text-center text-lg leading-relaxed text-muted">
        The system that{" "}
        <span className="font-medium text-ask">always asks before executing</span>.
        Sahara STT, structured meaning, then a human gate.
      </p>

      <div className="flex flex-col items-stretch gap-3 sm:flex-row">
        <Link
          to="/approvals"
          className="inline-flex h-12 items-center justify-center rounded-md bg-fg px-7 text-sm font-medium text-bg"
        >
          See Approvals
        </Link>
        <Link
          to="/evaluation"
          className="inline-flex h-12 items-center justify-center rounded-md border border-border px-7 text-sm font-medium text-fg"
        >
          View evaluation
        </Link>
      </div>

      <section className="flex w-full max-w-xl flex-col items-center gap-3 rounded-[28px] border border-border bg-surface px-6 py-8">
        <p className="text-xs font-medium uppercase tracking-wide text-subtle">
          Agent state
        </p>
        <PipelineStageShowcase />
        <p className="max-w-sm text-center text-xs text-subtle">
          Each motion matches a pipeline phase. Ask uses a calm breath while you decide.
        </p>
      </section>

      <section className="grid w-full max-w-xl grid-cols-3 gap-3 rounded-[20px] border border-border bg-elevated p-5 text-center">
        <Stat value="93.5%" label="Code-switch F1" />
        <Stat value="83.9%" label="Action correctness" />
        <Stat value="0%" label="Unsafe auto-actions" />
      </section>
      <Link to="/evaluation" className="text-xs text-accent hover:underline">
        Full results
      </Link>

      <ol className="flex flex-wrap items-center justify-center gap-2 text-sm">
        {STEPS.map((step, i) => (
          <li key={step} className="flex items-center gap-2">
            <span
              className={
                step === "Ask"
                  ? "rounded-full border border-accent/40 bg-elevated px-3 py-1.5 font-medium text-ask"
                  : "rounded-full border border-border bg-surface px-3 py-1.5 text-muted"
              }
            >
              {step}
            </span>
            {i < STEPS.length - 1 ? <span className="text-subtle">→</span> : null}
          </li>
        ))}
      </ol>

      <div className="grid w-full gap-4 sm:grid-cols-3">
        <Link
          to="/approvals"
          className="rounded-[20px] border border-accent/30 bg-surface p-6"
        >
          <h2 className="text-base font-medium text-ask">PAL is asking</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Review proposals. Nothing consequential happens without you.
          </p>
        </Link>
        <Link
          to="/evaluation"
          className="rounded-[20px] border border-border bg-surface p-6"
        >
          <h2 className="text-base font-medium text-fg">Evaluation</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Sahara vs Whisper vs AfriSpeech — WER, fields, action quality.
          </p>
        </Link>
        <div className="rounded-[20px] border border-border bg-surface p-6">
          <h2 className="text-base font-medium text-fg">Safety invariant</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Agents propose. Policy decides. You approve. No model executes side effects.
          </p>
        </div>
      </div>

      <blockquote className="w-full max-w-2xl rounded-[20px] border border-border bg-surface p-6">
        <p className="font-mono text-sm text-fg sm:text-base">
          "Send <span className="text-accent">Ksh 5000</span> to{" "}
          <span className="text-accent">Mama Wanjiku</span>{" "}
          <span className="text-muted">kesho</span> by{" "}
          <span className="text-accent">5pm</span>"
        </p>
        <p className="mt-3 text-sm text-subtle">
          Mix detected · requires approval (external write)
        </p>
      </blockquote>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-mono text-xl font-medium tabular-nums text-accent">{value}</p>
      <p className="mt-1 text-xs text-subtle">{label}</p>
    </div>
  );
}
