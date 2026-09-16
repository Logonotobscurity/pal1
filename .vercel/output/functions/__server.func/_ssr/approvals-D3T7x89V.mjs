import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, v as Link, x as require_jsx_runtime, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as readSession } from "./router-D5O0_Csc.mjs";
import { t as AgentStatus } from "./agent-status-BwB-smL3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/approvals-D3T7x89V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var proposals = [
	{
		id: "p1",
		title: "Send Ksh 5,000 to Mama Wanjiku",
		utterance: "Send Ksh 5000 to Mama Wanjiku kesho by 5pm",
		payload: "MPESA · Ksh 5,000 · Mama Wanjiku · tomorrow 17:00",
		risk: "financial",
		status: "asking",
		why: "External money movement. PAL will not send until you confirm the exact payload."
	},
	{
		id: "p2",
		title: "Remind Ngozi about ₦85,000",
		utterance: "Remind Ngozi to pay eighty five thousand naira by tomorrow",
		payload: "WhatsApp reminder · Ngozi · ₦85,000 · due tomorrow",
		risk: "external_write",
		status: "asking",
		why: "Customer message is an external write. PAL is asking before it acts."
	},
	{
		id: "p3",
		title: "Lookup last invoice for Chinedu",
		utterance: "Show me Chinedu last invoice",
		payload: "Read · invoices · contact: Chinedu",
		risk: "read",
		status: "approved",
		why: "Read-only lookup. Policy allowed auto-approve after meaning was sufficient."
	}
];
function ApprovalsPage() {
	const navigate = useNavigate();
	const [ready, setReady] = (0, import_react.useState)(false);
	const [items, setItems] = (0, import_react.useState)(proposals);
	(0, import_react.useEffect)(() => {
		if (!readSession()) {
			navigate({ to: "/login" });
			return;
		}
		setReady(true);
	}, [navigate]);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "flex min-h-[50vh] items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentStatus, {
			stage: "planning",
			size: "sm",
			showHint: false
		})
	});
	function decide(id, status) {
		setItems((prev) => prev.map((p) => p.id === id ? {
			...p,
			status
		} : p));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.25em] text-subtle",
				children: "Approvals"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl tracking-tight",
					children: "PAL is asking"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Review each request. Nothing consequential happens without you."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentStatus, {
					stage: "asking",
					size: "sm",
					showHint: false
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 space-y-4",
				children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-[20px] border border-border bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-base font-medium text-fg",
								children: p.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-wide text-subtle",
								children: p.status === "asking" ? "Asking" : p.status
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-mono text-xs text-muted",
							children: p.utterance
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-fg",
							children: p.payload
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-subtle",
							children: p.why
						}),
						p.status === "asking" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "h-11 rounded-md bg-fg px-4 text-sm font-medium text-bg",
								onClick: () => decide(p.id, "approved"),
								children: "Yes, do this"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "h-11 rounded-md border border-border px-4 text-sm text-fg",
								onClick: () => decide(p.id, "rejected"),
								children: "No, reject"
							})]
						}) : null
					]
				}, p.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 text-xs text-subtle",
				children: [
					"Demo proposals. Live execution is gated by policy in the production PAL stack.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-accent hover:underline",
						children: "Home"
					})
				]
			})
		]
	});
}
//#endregion
export { ApprovalsPage as component };
