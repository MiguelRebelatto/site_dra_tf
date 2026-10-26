import { n as COURSES } from "./site-d6Tyfikp.js";
import { n as btn } from "./routes-DS-eZ7ye.js";
import { n as PageTitle, t as Layout } from "./Layout-BkJn-Ce2.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/cursos.tsx?tsr-split=component
var SplitComponent = () => /* @__PURE__ */ jsxs(Layout, { children: [/* @__PURE__ */ jsx(PageTitle, {
	eyebrow: "Aprender",
	title: "Cursos",
	intro: "Conteúdos para o casal compreender melhor a sua fertilidade."
}), /* @__PURE__ */ jsx("div", {
	className: "mx-auto max-w-4xl px-6 space-y-8",
	children: COURSES.map((c) => /* @__PURE__ */ jsxs("article", {
		className: "frame-gold bg-card p-10",
		children: [
			/* @__PURE__ */ jsx("h2", {
				className: "text-4xl",
				children: c.title
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-4 text-lg text-muted-foreground",
				children: c.desc
			}),
			/* @__PURE__ */ jsx("a", {
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
