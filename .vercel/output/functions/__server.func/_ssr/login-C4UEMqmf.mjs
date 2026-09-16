import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, v as Link, x as require_jsx_runtime, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as writeSession } from "./router-D5O0_Csc.mjs";
import { n as Input, t as Button } from "./input-DnQKevN4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-C4UEMqmf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const navigate = useNavigate();
	const [error, setError] = (0, import_react.useState)(null);
	function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const email = String(data.get("email") ?? "").trim();
		const password = String(data.get("password") ?? "");
		if (!email.includes("@") || password.length < 8) {
			setError("Use a valid email and a password of at least 8 characters.");
			return;
		}
		writeSession({
			email,
			name: email.split("@")[0] ?? "Owner"
		});
		navigate({ to: "/approvals" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-md flex-col items-center justify-center px-4 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full rounded-[28px] border border-border bg-surface p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs uppercase tracking-[0.28em] text-subtle",
					children: "PAL"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-2 text-center text-2xl",
					children: "Sign in"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-center text-sm text-muted",
					children: "Review what PAL is asking. Nothing consequential runs without you."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-6 flex flex-col gap-4",
					onSubmit,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex flex-col gap-1 text-sm text-muted",
							children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "email",
								type: "email",
								autoComplete: "email",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex flex-col gap-1 text-sm text-muted",
							children: ["Password", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "password",
								type: "password",
								autoComplete: "current-password",
								required: true,
								minLength: 8
							})]
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "alert",
							className: "text-sm text-danger",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							variant: "accent",
							className: "w-full",
							children: "Sign in"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-center text-sm text-muted",
					children: [
						"No account yet?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/register",
							className: "text-accent hover:underline",
							children: "Create one"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-md text-center text-xs text-subtle",
			children: "Demo workspace: sign in locally to open Approvals. Evaluation is public."
		})]
	});
}
//#endregion
export { LoginPage as component };
