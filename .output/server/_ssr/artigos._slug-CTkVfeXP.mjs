import { r as SITE, t as ARTICLES } from "./site-B9BjsWlf.mjs";
import { G as notFound, _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/artigos._slug-CTkVfeXP.js
var $$splitComponentImporter = () => import("./artigos._slug-Bv7sJdtV.mjs");
var Route = createFileRoute("/artigos/$slug")({
	loader: ({ params }) => {
		const a = ARTICLES.find((x) => x.slug === params.slug);
		if (!a) throw notFound();
		return a;
	},
	head: ({ loaderData: a, params }) => a ? {
		meta: [
			{ title: `${a.title} — Dra. Tatiana Santiago` },
			{
				name: "description",
				content: a.excerpt
			},
			{
				property: "og:title",
				content: a.title
			},
			{
				property: "og:description",
				content: a.excerpt
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: `/artigos/${params.slug}`
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Article",
				headline: a.title,
				datePublished: a.published,
				dateModified: a.reviewed,
				author: {
					"@type": "Physician",
					name: SITE.doctor,
					identifier: SITE.om
				}
			})
		}]
	} : { meta: [{ title: "Artigo indisponível" }, {
		name: "robots",
		content: "noindex"
	}] },
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
