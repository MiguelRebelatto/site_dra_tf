import { r as SITE } from "./site-B9BjsWlf.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { n as Layout, r as PageTitle, t as Button } from "./Layout-CD12-Ksr.mjs";
import { t as tatiana_retrato_jpg_asset_default } from "./tatiana-retrato.jpg.asset-C6TcbeuF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sobre-TNAEJ243.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
	eyebrow: "Sobre",
	title: SITE.doctor,
	intro: SITE.specialty
}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
	className: "mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-[.85fr_1fr] items-center pb-12",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: tatiana_retrato_jpg_asset_default.url,
		alt: "Dra. Tatiana Fonseca Santiago",
		width: 640,
		height: 696,
		className: "portrait-photo fade-in"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow section-label",
				children: "Um cuidado atento"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "editorial-heading",
				children: [
					"A fertilidade merece",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "text-olive",
						children: "um olhar a dois."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg text-muted-foreground",
				children: "Médica dedicada à fertilidade restaurativa, acompanha casais que procuram compreender as causas das suas dificuldades em engravidar."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-y border-gold/50 py-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-2xl mb-4",
					children: "Áreas de atuação"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Avaliação da fertilidade do casal" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Saúde hormonal e ciclo menstrual" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Preparação para a gravidez" })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-olive",
				children: [
					"Inscrita na Ordem dos Médicos com a cédula profissional n.º ",
					SITE.om.replace("OM ", ""),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "rounded-full h-12 px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contacto",
					children: ["Marcar consulta ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
				})
			})
		]
	})]
})] });
//#endregion
export { SplitComponent as component };
