"use client";

import { useEffect, useState } from "react";
import { AgentStatus, type AgentStage } from "@/components/agent/agent-status";

const STAGES: AgentStage[] = [
  "listening",
  "transcribing",
  "understanding",
  "planning",
  "asking",
  "acting",
  "verifying",
  "done",
];

const SHORT: Record<AgentStage, string> = {
  idle: "Ready",
  listening: "Speak",
  transcribing: "Hear",
  understanding: "Understand",
  planning: "Plan",
  asking: "Ask",
  acting: "Act",
  verifying: "Verify",
  done: "Done",
  error: "Error",
};

export function PipelineStageShowcase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % STAGES.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, []);

  const stage = STAGES[index]!;

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <AgentStatus stage={stage} size="md" />
      <div className="flex flex-wrap items-center justify-center gap-1">
        {STAGES.map((s, i) => (
          <button
            key={s}
            type="button"
            onClick={() => setIndex(i)}
            className={
              i === index
                ? s === "asking"
                  ? "h-8 rounded-full bg-accent/15 px-3 text-xs font-medium text-ask"
                  : "h-8 rounded-full bg-elevated px-3 text-xs font-medium text-fg"
                : "h-8 rounded-full px-3 text-xs font-medium text-subtle hover:text-muted"
            }
            aria-current={i === index ? "true" : undefined}
          >
            {SHORT[s]}
          </button>
        ))}
      </div>
    </div>
  );
}
