import { s as withBasePath } from "./site-d6Tyfikp.js";
import { t as Route$7 } from "./routes-DS-eZ7ye.js";
import { t as Route$8 } from "./artigos._slug-DrSReLvj.js";
import { useEffect } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//#region src/styles.css?url
var styles_default = "/site_dra_tf/assets/styles-DiSrf97C.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Dra. Tatiana Fonseca Santiago" },
			{
				property: "og:site_name",
				content: "Dra. Tatiana Fonseca Santiago"
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
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Nunito+Sans:wght@400;600&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: withBasePath("/favicon.ico"),
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "pt-PT",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsx(Outlet, {})
	});
}
//#endregion
//#region src/routes/contacto.tsx
var $$splitComponentImporter$5 = () => import("./contacto-CTtNM7Vx.js");
var t$5 = "Contacto e consultas em Lisboa — Dra. Tatiana Santiago";
var d$5 = "Marque a sua consulta de fertilidade em Lisboa com a Dra. Tatiana Fonseca Santiago.";
var Route$5 = createFileRoute("/contacto")({
	head: () => ({
		meta: [
			{ title: t$5 },
			{
				name: "description",
				content: d$5
			},
			{
				property: "og:title",
				content: t$5
			},
			{
				property: "og:description",
				content: d$5
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contacto"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/cursos.tsx
var $$splitComponentImporter$4 = () => import("./cursos-Dnm4Ju0C.js");
var t$4 = "Cursos sobre fertilidade — Dra. Tatiana Santiago";
var d$4 = "Cursos online da Dra. Tatiana Fonseca Santiago sobre fertilidade natural e preparação para a gravidez.";
var Route$4 = createFileRoute("/cursos")({
	head: () => ({
		meta: [
			{ title: t$4 },
			{
				name: "description",
				content: d$4
			},
			{
				property: "og:title",
				content: t$4
			},
			{
				property: "og:description",
				content: d$4
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [{
			rel: "canonical",
			href: "/cursos"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/privacidade.tsx
var $$splitComponentImporter$3 = () => import("./privacidade-RPP-ysqA.js");
var t$3 = "Política de privacidade — Dra. Tatiana Santiago";
var d$3 = "Como tratamos os seus dados pessoais, em conformidade com o RGPD.";
var Route$3 = createFileRoute("/privacidade")({
	head: () => ({
		meta: [
			{ title: t$3 },
			{
				name: "description",
				content: d$3
			},
			{
				property: "og:title",
				content: t$3
			},
			{
				property: "og:description",
				content: d$3
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [{
			rel: "canonical",
			href: "/privacidade"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/sobre.tsx
var $$splitComponentImporter$2 = () => import("./sobre-3xukUrIJ.js");
var t$2 = "Sobre a Dra. Tatiana Fonseca Santiago";
var d$2 = "Formação, percurso e áreas de atuação da Dra. Tatiana Fonseca Santiago, médica em Lisboa.";
var Route$2 = createFileRoute("/sobre")({
	head: () => ({
		meta: [
			{ title: t$2 },
			{
				name: "description",
				content: d$2
			},
			{
				property: "og:title",
				content: t$2
			},
			{
				property: "og:description",
				content: d$2
			},
			{
				property: "og:type",
				content: "profile"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [{
			rel: "canonical",
			href: "/sobre"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/termos.tsx
var $$splitComponentImporter$1 = () => import("./termos-iZeszJRR.js");
var t$1 = "Termos de utilização — Dra. Tatiana Santiago";
var d$1 = "Condições de utilização do site da Dra. Tatiana Fonseca Santiago.";
var Route$1 = createFileRoute("/termos")({
	head: () => ({
		meta: [
			{ title: t$1 },
			{
				name: "description",
				content: d$1
			},
			{
				property: "og:title",
				content: t$1
			},
			{
				property: "og:description",
				content: d$1
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [{
			rel: "canonical",
			href: "/termos"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/artigos.index.tsx
var $$splitComponentImporter = () => import("./artigos.index-DvbQf8no.js");
var t = "Artigos sobre fertilidade do casal — Dra. Tatiana Santiago";
var d = "Artigos com informação fiável sobre fertilidade, ciclo menstrual e saúde do casal.";
var Route = createFileRoute("/artigos/")({
	head: () => ({
		meta: [
			{ title: t },
			{
				name: "description",
				content: d
			},
			{
				property: "og:title",
				content: t
			},
			{
				property: "og:description",
				content: d
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [{
			rel: "canonical",
			href: "/artigos"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var IndexRoute = Route$7.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
var ContactoRoute = Route$5.update({
	id: "/contacto",
	path: "/contacto",
	getParentRoute: () => Route$6
});
var CursosRoute = Route$4.update({
	id: "/cursos",
	path: "/cursos",
	getParentRoute: () => Route$6
});
var PrivacidadeRoute = Route$3.update({
	id: "/privacidade",
	path: "/privacidade",
	getParentRoute: () => Route$6
});
var SobreRoute = Route$2.update({
	id: "/sobre",
	path: "/sobre",
	getParentRoute: () => Route$6
});
var TermosRoute = Route$1.update({
	id: "/termos",
	path: "/termos",
	getParentRoute: () => Route$6
});
var ArtigosIndexRoute = Route.update({
	id: "/artigos/",
	path: "/artigos/",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute,
	ContactoRoute,
	CursosRoute,
	PrivacidadeRoute,
	SobreRoute,
	TermosRoute,
	ArtigosSlugRoute: Route$8.update({
		id: "/artigos/$slug",
		path: "/artigos/$slug",
		getParentRoute: () => Route$6
	}),
	ArtigosIndexRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
