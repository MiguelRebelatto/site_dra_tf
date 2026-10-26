import { n as COURSES } from "./site-B9BjsWlf.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Layout, r as PageTitle } from "./Layout-CD12-Ksr.mjs";
import { n as btn } from "./routes-O1e6TuhE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cursos-m-wUYG3a.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
	eyebrow: "Aprender",
	title: "Cursos",
	intro: "Conteúdos para o casal compreender melhor a sua fertilidade."
}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "mx-auto max-w-4xl px-6 space-y-8",
	children: COURSES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "frame-gold bg-card p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-4xl",
				children: c.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg text-muted-foreground",
				children: c.desc
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: c.url,
				target: "_blank",
				rel: "noreferrer",
				className: `${btn} mt-6`,
				children: "Inscrever-me na Hotmart"
			})
		]
	}, c.slug))
})] });
//#endregion
export { SplitComponent as component };
