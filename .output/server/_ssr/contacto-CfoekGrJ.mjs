import { n as __toESM } from "../_runtime.mjs";
import { r as SITE } from "./site-B9BjsWlf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Layout, r as PageTitle } from "./Layout-CD12-Ksr.mjs";
import { n as btn, r as btnGhost } from "./routes-O1e6TuhE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contacto-CfoekGrJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var field = "w-full rounded-md border bg-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring";
function Contacto() {
	const [ok, setOk] = (0, import_react.useState)(false);
	const submit = (e) => {
		e.preventDefault();
		const f = new FormData(e.currentTarget);
		const body = `Nome: ${f.get("nome")}\nEmail: ${f.get("email")}\n\n${f.get("msg")}`;
		window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Pedido de contacto")}&body=${encodeURIComponent(body)}`;
		setOk(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
		eyebrow: "Contacto",
		title: "Fale comigo",
		intro: `Consultas em ${SITE.city}.`
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl px-6 grid gap-10 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "nome",
					required: true,
					placeholder: "Nome",
					className: field,
					maxLength: 100
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "email",
					type: "email",
					required: true,
					placeholder: "Email",
					className: field,
					maxLength: 200
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					name: "msg",
					required: true,
					rows: 5,
					placeholder: "Mensagem",
					className: field,
					maxLength: 2e3
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex gap-3 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						required: true,
						className: "mt-1"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Aceito que os meus dados sejam usados para responder a este pedido, conforme a política de privacidade (RGPD)." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: btn,
					children: "Enviar"
				}),
				ok && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-olive",
					children: "Obrigada! O seu programa de email foi aberto para enviar a mensagem."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: btn,
					href: `https://wa.me/${SITE.whatsapp}`,
					target: "_blank",
					rel: "noreferrer",
					children: "WhatsApp"
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: btnGhost,
					href: SITE.instagram,
					target: "_blank",
					rel: "noreferrer",
					children: "Instagram"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Mapa Lisboa",
					className: "w-full h-72 frame-gold mt-4",
					loading: "lazy",
					src: "https://www.google.com/maps?q=Lisboa&output=embed"
				})
			]
		})]
	})] });
}
//#endregion
export { Contacto as component };
