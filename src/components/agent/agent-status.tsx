"use client";

import { ThinkingOrb } from "thinking-orbs";

export type AgentStage =
  | "idle"
  | "listening"
  | "transcribing"
  | "understanding"
  | "planning"
  | "asking"
  | "acting"
  | "verifying"
  | "done"
  | "error";

type OrbState =
  | "listening"
  | "searching"
  | "solving"
  | "shaping"
  | "working"
  | "breathing"
  | "connecting";

const STAGE_COPY: Record<
  AgentStage,
  { label: string; hint: string; ask?: boolean }
> = {
  idle: { label: "Ready", hint: "Speak when you are ready" },
  listening: { label: "Listening", hint: "Hearing your request" },
  transcribing: { label: "Transcribing", hint: "Turning speech into text" },
  understanding: { label: "Understanding", hint: "Extracting meaning" },
  planning: { label: "Planning", hint: "Building the work" },
  asking: { label: "PAL is asking", hint: "Waiting for your decision", ask: true },
  acting: { label: "Acting", hint: "Running the approved action" },
  verifying: { label: "Verifying", hint: "Confirming the outcome" },
  done: { label: "Done", hint: "Verified" },
  error: { label: "Needs attention", hint: "Something went wrong" },
};

export function orbStateForStage(stage: AgentStage): OrbState {
  switch (stage) {
    case "listening":
      return "listening";
    case "transcribing":
    case "verifying":
      return "searching";
    case "understanding":
      return "solving";
    case "planning":
      return "shaping";
    case "acting":
      return "working";
    case "error":
      return "connecting";
    default:
      return "breathing";
  }
}

type AgentStatusProps = {
  stage: AgentStage;
  size?: "sm" | "md";
  showHint?: boolean;
};

export function AgentStatus({
  stage,
  size = "md",
  showHint = true,
}: AgentStatusProps) {
  const copy = STAGE_COPY[stage];
  const orbSize = size === "sm" ? 20 : 64;
  const paused = stage === "idle" || stage === "done" || stage === "error";

  return (
    <div
      className={
        copy.ask
          ? "inline-flex items-center gap-3 rounded-full border border-accent/30 bg-elevated px-4 py-2"
          : "inline-flex items-center gap-3 rounded-full border border-border bg-surface px-4 py-2"
      }
      role="status"
      aria-live="polite"
      aria-label={copy.label}
    >
      <ThinkingOrb
        state={orbStateForStage(stage)}
        size={orbSize}
        theme="dark"
        paused={paused}
        aria-label={copy.label}
      />
      <span className="flex min-w-0 flex-col">
        <span
          className={
            copy.ask
              ? "text-sm font-medium text-ask"
              : "text-sm font-medium text-fg"
          }
        >
          {copy.label}
        </span>
        {showHint && size !== "sm" ? (
          <span className="text-xs text-subtle">{copy.hint}</span>
        ) : null}
      </span>
    </div>
  );
}
