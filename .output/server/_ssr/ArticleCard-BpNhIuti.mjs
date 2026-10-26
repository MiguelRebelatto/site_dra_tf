import { i as fmtDate } from "./site-B9BjsWlf.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ArticleCard-BpNhIuti.js
var import_jsx_runtime = require_jsx_runtime();
function ArticleCard({ a }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/artigos/$slug",
		params: { slug: a.slug },
		className: "group block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: a.cover,
				alt: a.title,
				loading: "lazy",
				width: 1200,
				height: 800,
				className: "article-image aspect-[3/2] w-full object-cover"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pt-5 border-t border-gold/40 mt-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs uppercase tracking-widest text-olive",
					children: [
						a.category,
						" · ",
						fmtDate(a.published)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 text-2xl group-hover:underline",
					children: a.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: a.excerpt
				})
			]
		})]
	});
}
//#endregion
export { ArticleCard as t };
