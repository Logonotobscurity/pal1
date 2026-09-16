import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as H } from "../_libs/thinking-orbs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/agent-status-BwB-smL3.js
var import_jsx_runtime = require_jsx_runtime();
var STAGE_COPY = {
	idle: {
		label: "Ready",
		hint: "Speak when you are ready"
	},
	listening: {
		label: "Listening",
		hint: "Hearing your request"
	},
	transcribing: {
		label: "Transcribing",
		hint: "Turning speech into text"
	},
	understanding: {
		label: "Understanding",
		hint: "Extracting meaning"
	},
	planning: {
		label: "Planning",
		hint: "Building the work"
	},
	asking: {
		label: "PAL is asking",
		hint: "Waiting for your decision",
		ask: true
	},
	acting: {
		label: "Acting",
		hint: "Running the approved action"
	},
	verifying: {
		label: "Verifying",
		hint: "Confirming the outcome"
	},
	done: {
		label: "Done",
		hint: "Verified"
	},
	error: {
		label: "Needs attention",
		hint: "Something went wrong"
	}
};
function orbStateForStage(stage) {
	switch (stage) {
		case "listening": return "listening";
		case "transcribing":
		case "verifying": return "searching";
		case "understanding": return "solving";
		case "planning": return "shaping";
		case "acting": return "working";
		case "error": return "connecting";
		default: return "breathing";
	}
}
function AgentStatus({ stage, size = "md", showHint = true }) {
	const copy = STAGE_COPY[stage];
	const orbSize = size === "sm" ? 20 : 64;
	const paused = stage === "idle" || stage === "done" || stage === "error";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: copy.ask ? "inline-flex items-center gap-3 rounded-full border border-accent/30 bg-elevated px-4 py-2" : "inline-flex items-center gap-3 rounded-full border border-border bg-surface px-4 py-2",
		role: "status",
		"aria-live": "polite",
		"aria-label": copy.label,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H, {
			state: orbStateForStage(stage),
			size: orbSize,
			theme: "dark",
			paused,
			"aria-label": copy.label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex min-w-0 flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: copy.ask ? "text-sm font-medium text-ask" : "text-sm font-medium text-fg",
				children: copy.label
			}), showHint && size !== "sm" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-subtle",
				children: copy.hint
			}) : null]
		})]
	});
}
//#endregion
export { AgentStatus as t };
