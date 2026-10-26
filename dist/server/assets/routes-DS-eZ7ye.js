import { r as SITE } from "./site-d6Tyfikp.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-pmv-lRo_.js");
var title = "Dra. Tatiana Fonseca Santiago — Fertilidade Restaurativa em Lisboa";
var desc = "Médica em Lisboa dedicada à fertilidade restaurativa do casal. Consultas, cursos e artigos sobre fertilidade.";
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title },
			{
				name: "description",
				content: desc
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: desc
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Physician",
				name: SITE.doctor,
				medicalSpecialty: SITE.specialty,
				address: {
					"@type": "PostalAddress",
					addressLocality: "Lisboa",
					addressCountry: "PT"
				},
				identifier: SITE.om
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var btn = "inline-flex items-center rounded-full bg-primary px-7 py-3 text-sm text-primary-foreground hover:opacity-90 transition";
var btnGhost = "inline-flex items-center rounded-full border border-primary px-7 py-3 text-sm text-primary hover:bg-primary hover:text-primary-foreground transition";
//#endregion
export { btn as n, btnGhost as r, Route as t };
