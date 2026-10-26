import { n as __toESM } from "../_runtime.mjs";
import { r as SITE } from "./site-B9BjsWlf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as ArrowUpRight, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Layout-CD12-Ksr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var nav = [
	{
		to: "/sobre",
		label: "Sobre"
	},
	{
		to: "/cursos",
		label: "Cursos"
	},
	{
		to: "/artigos",
		label: "Artigos"
	},
	{
		to: "/contacto",
		label: "Contacto"
	}
];
function Layout({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "site-header border-b border-gold/40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6 py-5 flex items-center justify-between gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-3",
							"aria-label": "Dra. Tatiana Santiago — Início",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "brand-mark",
								"aria-hidden": "true",
								children: "ts"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-serif text-2xl text-primary leading-tight",
								children: "Dra. Tatiana Santiago"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[9px] uppercase tracking-widest text-olive",
								children: "Fertilidade restaurativa do casal"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							"aria-label": "Navegação principal",
							className: "site-nav hidden md:flex items-center gap-7 text-sm",
							children: [nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: n.to,
								activeProps: { className: "text-primary" },
								className: "hover:text-primary",
								children: n.label
							}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								className: "rounded-full border-primary text-primary px-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contacto",
									children: ["Marcar consulta ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "md:hidden",
							"aria-label": open ? "Fechar menu" : "Abrir menu",
							"aria-expanded": open,
							"aria-controls": "mobile-nav",
							onClick: () => setOpen(!open),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})
					]
				}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					id: "mobile-nav",
					"aria-label": "Navegação móvel",
					className: "md:hidden border-t px-6 py-4 flex flex-col gap-3",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "py-2 text-primary",
						children: n.label
					}, n.to))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "bg-secondary/40 mt-20 border-t border-gold/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6 py-14 grid gap-8 md:grid-cols-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-2xl text-primary",
								children: SITE.doctor
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-2",
								children: SITE.specialty
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-xs",
								children: ["Ordem dos Médicos · ", SITE.om.replace("OM ", "")]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow mb-4",
									children: "Contacto"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [SITE.city, ", Portugal"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "block hover:text-primary",
									href: `mailto:${SITE.email}`,
									children: SITE.email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "inline-flex gap-2 items-center text-primary",
									href: SITE.instagram,
									target: "_blank",
									rel: "noreferrer",
									children: ["Instagram ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow mb-4",
									children: "Informação"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/privacidade",
									className: "block hover:text-primary",
									children: "Política de privacidade"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/termos",
									className: "block hover:text-primary",
									children: "Termos de utilização"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground pt-3",
									children: "A informação deste site não substitui a consulta médica."
								})
							]
						})
					]
				})
			})
		]
	});
}
function PageTitle({ eyebrow, title, intro }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-3xl px-6 pt-16 md:pt-20 pb-12 text-center fade-in",
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-4xl md:text-6xl",
				children: title
			}),
			intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-lg text-muted-foreground",
				children: intro
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "divider-leaf mx-auto max-w-40 mt-8" })
		]
	});
}
//#endregion
export { Layout as n, PageTitle as r, Button as t };
