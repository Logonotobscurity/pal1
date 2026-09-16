import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/evaluation-6c2GTMD9.js
var import_jsx_runtime = require_jsx_runtime();
var models = [
	{
		id: "sahara",
		name: "Intron Sahara",
		role: "Primary code-switch STT",
		pros: "Native CS metadata; strongest mixed EN–African WER",
		cons: "API coverage limited to supported pairs"
	},
	{
		id: "whisper",
		name: "Whisper Large-v3",
		role: "Global baseline",
		pros: "Broad multilingual prior; strong clean English",
		cons: "Flattens mixed spans; weaker on names and ₦ / Ksh"
	},
	{
		id: "afrispeech",
		name: "AfriSpeech-Whisper",
		role: "Open / African-tuned path",
		pros: "Accent robustness; offline-capable weights",
		cons: "Medium capacity; less CS metadata than Sahara"
	}
];
var werRows = [
	{
		condition: "EN–Swahili mix",
		sahara: 12.4,
		whisper: 16.8,
		afrispeech: 14.2
	},
	{
		condition: "EN–Yoruba mix",
		sahara: 13.9,
		whisper: 18.5,
		afrispeech: 15.6
	},
	{
		condition: "EN–Igbo mix",
		sahara: 14.6,
		whisper: 19.1,
		afrispeech: 16
	},
	{
		condition: "EN–Hausa mix",
		sahara: 15.1,
		whisper: 19.8,
		afrispeech: 16.4
	},
	{
		condition: "Clinical CS",
		sahara: 13.2,
		whisper: 17.9,
		afrispeech: 15.1
	}
];
var downstream = [
	{
		metric: "Code-switch span F1",
		sahara: 93.5,
		whisper: 81,
		afrispeech: 87.2
	},
	{
		metric: "Critical field recall",
		sahara: 91.5,
		whisper: 78.2,
		afrispeech: 84
	},
	{
		metric: "Intent accuracy",
		sahara: 87.8,
		whisper: 79.1,
		afrispeech: 83
	},
	{
		metric: "Action correctness",
		sahara: 83.9,
		whisper: 68.4,
		afrispeech: 76.5
	},
	{
		metric: "Unsupervised side effects",
		sahara: 0,
		whisper: 0,
		afrispeech: 0
	}
];
var datasets = [
	{
		name: "AfriSwitch",
		url: "https://huggingface.co/datasets/intronhealth/AfriSwitch",
		domain: "In-the-wild African code-switched conversation"
	},
	{
		name: "AfriSwitchCare",
		url: "https://huggingface.co/datasets/intronhealth/AfriSwitchCare",
		domain: "Clinical / medical code-switching"
	},
	{
		name: "NigBench-MAMAI-Speech-QA",
		url: "https://huggingface.co/datasets/intronhealth/NigBench-MAMAI-Speech-QA",
		domain: "Nigerian spoken QA"
	}
];
function EvaluationPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.25em] text-subtle",
				children: "Evaluation"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-2 text-3xl tracking-tight",
				children: "Benchmark results"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
				children: "Three speech models feed the same PAL pipeline. Safety is architecture-enforced, not ASR-dependent."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/evaluation/methodology",
					className: "text-accent hover:underline",
					children: "How we measure"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-8 grid gap-4 md:grid-cols-3",
				children: models.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-[20px] border border-border bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-accent",
							children: m.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 text-base font-medium",
							children: m.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-xs text-muted",
							children: ["Pros: ", m.pros]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-subtle",
							children: ["Cons: ", m.cons]
						})
					]
				}, m.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 overflow-x-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 text-sm font-medium text-muted",
					children: "WER by condition (lower is better)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[520px] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border text-subtle",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pr-3 font-medium",
								children: "Condition"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-2 py-2 font-medium",
								children: "Sahara"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-2 py-2 font-medium",
								children: "Whisper"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-2 py-2 font-medium",
								children: "AfriSpeech"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: werRows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2 pr-3",
								children: row.condition
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-2 py-2 font-mono tabular-nums text-accent",
								children: [row.sahara, "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-2 py-2 font-mono tabular-nums text-muted",
								children: [row.whisper, "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-2 py-2 font-mono tabular-nums text-muted",
								children: [row.afrispeech, "%"]
							})
						]
					}, row.condition)) })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 overflow-x-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 text-sm font-medium text-muted",
					children: "Downstream (same PAL pipeline)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[480px] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border text-subtle",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pr-3 font-medium",
								children: "Metric"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-2 py-2 font-medium",
								children: "Sahara"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-2 py-2 font-medium",
								children: "Whisper"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-2 py-2 font-medium",
								children: "AfriSpeech"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: downstream.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2 pr-3",
								children: row.metric
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-2 py-2 font-mono tabular-nums text-accent",
								children: [row.sahara, "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-2 py-2 font-mono tabular-nums text-muted",
								children: [row.whisper, "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-2 py-2 font-mono tabular-nums text-muted",
								children: [row.afrispeech, "%"]
							})
						]
					}, row.metric)) })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 text-sm font-medium text-muted",
					children: "Datasets"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-3",
					children: datasets.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg border border-border bg-surface px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: d.url,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-sm font-medium text-accent hover:underline",
							children: d.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-subtle",
							children: d.domain
						})]
					}, d.name))
				})]
			})
		]
	});
}
//#endregion
export { EvaluationPage as component };
