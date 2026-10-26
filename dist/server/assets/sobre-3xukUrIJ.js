import { r as SITE, s as withBasePath } from "./site-d6Tyfikp.js";
import { n as PageTitle, r as Button, t as Layout } from "./Layout-BkJn-Ce2.js";
import { t as tatiana_retrato_jpg_asset_default } from "./tatiana-retrato.jpg.asset-C6TcbeuF.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight } from "lucide-react";
//#region src/routes/sobre.tsx?tsr-split=component
var SplitComponent = () => /* @__PURE__ */ jsxs(Layout, { children: [/* @__PURE__ */ jsx(PageTitle, {
	eyebrow: "Sobre",
	title: SITE.doctor,
	intro: SITE.specialty
}), /* @__PURE__ */ jsxs("section", {
	className: "mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-[.85fr_1fr] items-center pb-12",
	children: [/* @__PURE__ */ jsx("img", {
		src: withBasePath(tatiana_retrato_jpg_asset_default.url),
		alt: "Dra. Tatiana Fonseca Santiago",
		width: 640,
		height: 696,
		className: "portrait-photo fade-in"
	}), /* @__PURE__ */ jsxs("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "eyebrow section-label",
				children: "Um cuidado atento"
			}),
			/* @__PURE__ */ jsxs("h2", {
				className: "editorial-heading",
				children: [
					"A fertilidade merece",
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("em", {
						className: "text-olive",
						children: "um olhar a dois."
					})
				]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-lg text-muted-foreground",
				children: "Médica dedicada à fertilidade restaurativa, acompanha casais que procuram compreender as causas das suas dificuldades em engravidar."
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "border-y border-gold/50 py-6",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-2xl mb-4",
					children: "Áreas de atuação"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "space-y-3 text-muted-foreground",
					children: [
						/* @__PURE__ */ jsx("li", { children: "Avaliação da fertilidade do casal" }),
						/* @__PURE__ */ jsx("li", { children: "Saúde hormonal e ciclo menstrual" }),
						/* @__PURE__ */ jsx("li", { children: "Preparação para a gravidez" })
					]
				})]
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "text-xs text-olive",
				children: [
					"Inscrita na Ordem dos Médicos com a cédula profissional n.º ",
					SITE.om.replace("OM ", ""),
					"."
				]
			}),
			/* @__PURE__ */ jsx(Button, {
				asChild: true,
				className: "rounded-full h-12 px-6",
				children: /* @__PURE__ */ jsxs(Link, {
					to: "/contacto",
					children: ["Marcar consulta ", /* @__PURE__ */ jsx(ArrowUpRight, {})]
				})
			})
		]
	})]
})] });
//#endregion
export { SplitComponent as component };
