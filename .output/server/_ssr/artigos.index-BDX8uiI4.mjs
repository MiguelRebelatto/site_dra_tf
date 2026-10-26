import { n as __toESM } from "../_runtime.mjs";
import { a as sortedArticles } from "./site-B9BjsWlf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Layout, r as PageTitle } from "./Layout-CD12-Ksr.mjs";
import { t as ArticleCard } from "./ArticleCard-BpNhIuti.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/artigos.index-BDX8uiI4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Artigos() {
	const all = sortedArticles();
	const cats = ["Todos", ...new Set(all.map((a) => a.category))];
	const [cat, setCat] = (0, import_react.useState)("Todos");
	const [q, setQ] = (0, import_react.useState)("");
	const list = all.filter((a) => (cat === "Todos" || a.category === cat) && (a.title + a.excerpt).toLowerCase().includes(q.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
		eyebrow: "Artigos",
		title: "Informação para o casal"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3 justify-center",
				children: [cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCat(c),
					className: `rounded-full px-4 py-1.5 text-sm border ${c === cat ? "bg-primary text-primary-foreground border-primary" : "hover:border-primary"}`,
					children: c
				}, c)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Pesquisar…",
					className: "rounded-full border bg-card px-4 py-1.5 text-sm"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 md:grid-cols-3",
				children: list.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleCard, { a }, a.slug))
			}),
			!list.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-muted-foreground mt-10",
				children: "Nenhum artigo encontrado."
			})
		]
	})] });
}
//#endregion
export { Artigos as component };
