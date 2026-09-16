import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as AgentStatus } from "./agent-status-BwB-smL3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DWW1ZwSj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STAGES = [
	"listening",
	"transcribing",
	"understanding",
	"planning",
	"asking",
	"acting",
	"verifying",
	"done"
];
var SHORT = {
	idle: "Ready",
	listening: "Speak",
	transcribing: "Hear",
	understanding: "Understand",
	planning: "Plan",
	asking: "Ask",
	acting: "Act",
	verifying: "Verify",
	done: "Done",
	error: "Error"
};
function PipelineStageShowcase() {
	const [index, setIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => {
			setIndex((i) => (i + 1) % STAGES.length);
		}, 2800);
		return () => window.clearInterval(id);
	}, []);
	const stage = STAGES[index];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-full flex-col items-center gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentStatus, {
			stage,
			size: "md"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap items-center justify-center gap-1",
			children: STAGES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setIndex(i),
				className: i === index ? s === "asking" ? "h-8 rounded-full bg-accent/15 px-3 text-xs font-medium text-ask" : "h-8 rounded-full bg-elevated px-3 text-xs font-medium text-fg" : "h-8 rounded-full px-3 text-xs font-medium text-subtle hover:text-muted",
				"aria-current": i === index ? "true" : void 0,
				children: SHORT[s]
			}, s))
		})]
	});
}
var STEPS = [
	"Speak",
	"Understand",
	"Plan",
	"Ask",
	"Act",
	"Verify"
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium tracking-wide text-muted",
				children: "Sahara CodeSwitch Africa Challenge"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.28em] text-subtle",
				children: "Meaning-to-Action"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display max-w-3xl text-center text-3xl font-medium tracking-tight text-fg sm:text-5xl",
				children: "Voice automation for African code-switching"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "max-w-xl text-center text-lg leading-relaxed text-muted",
				children: [
					"The system that",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-ask",
						children: "always asks before executing"
					}),
					". Sahara STT, structured meaning, then a human gate."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-stretch gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/approvals",
					className: "inline-flex h-12 items-center justify-center rounded-md bg-fg px-7 text-sm font-medium text-bg",
					children: "See Approvals"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/evaluation",
					className: "inline-flex h-12 items-center justify-center rounded-md border border-border px-7 text-sm font-medium text-fg",
					children: "View evaluation"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex w-full max-w-xl flex-col items-center gap-3 rounded-[28px] border border-border bg-surface px-6 py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-wide text-subtle",
						children: "Agent state"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PipelineStageShowcase, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-sm text-center text-xs text-subtle",
						children: "Each motion matches a pipeline phase. Ask uses a calm breath while you decide."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid w-full max-w-xl grid-cols-3 gap-3 rounded-[20px] border border-border bg-elevated p-5 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: "93.5%",
						label: "Code-switch F1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: "83.9%",
						label: "Action correctness"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: "0%",
						label: "Unsafe auto-actions"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/evaluation",
				className: "text-xs text-accent hover:underline",
				children: "Full results"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "flex flex-wrap items-center justify-center gap-2 text-sm",
				children: STEPS.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: step === "Ask" ? "rounded-full border border-accent/40 bg-elevated px-3 py-1.5 font-medium text-ask" : "rounded-full border border-border bg-surface px-3 py-1.5 text-muted",
						children: step
					}), i < STEPS.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-subtle",
						children: "→"
					}) : null]
				}, step))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid w-full gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/approvals",
						className: "rounded-[20px] border border-accent/30 bg-surface p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-medium text-ask",
							children: "PAL is asking"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: "Review proposals. Nothing consequential happens without you."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/evaluation",
						className: "rounded-[20px] border border-border bg-surface p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-medium text-fg",
							children: "Evaluation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: "Sahara vs Whisper vs AfriSpeech — WER, fields, action quality."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[20px] border border-border bg-surface p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-medium text-fg",
							children: "Safety invariant"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: "Agents propose. Policy decides. You approve. No model executes side effects."
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "w-full max-w-2xl rounded-[20px] border border-border bg-surface p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-sm text-fg sm:text-base",
					children: [
						"\"Send ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent",
							children: "Ksh 5000"
						}),
						" to",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent",
							children: "Mama Wanjiku"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: "kesho"
						}),
						" by",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent",
							children: "5pm"
						}),
						"\""
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-subtle",
					children: "Mix detected · requires approval (external write)"
				})]
			})
		]
	});
}
function Stat({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-mono text-xl font-medium tabular-nums text-accent",
		children: value
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 text-xs text-subtle",
		children: label
	})] });
}
//#endregion
export { Home as component };
