import { r as SITE } from "./site-d6Tyfikp.js";
import { n as PageTitle, t as Layout } from "./Layout-BkJn-Ce2.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/privacidade.tsx?tsr-split=component
var SplitComponent = () => /* @__PURE__ */ jsxs(Layout, { children: [/* @__PURE__ */ jsx(PageTitle, { title: "Política de privacidade" }), /* @__PURE__ */ jsxs("div", {
	className: "mx-auto max-w-3xl px-6 space-y-4 leading-relaxed",
	children: [
		/* @__PURE__ */ jsx("p", { children: "Texto provisório, a rever por um profissional jurídico." }),
		/* @__PURE__ */ jsx("p", { children: "Os dados enviados através do formulário de contacto (nome, email e mensagem) são usados apenas para responder ao seu pedido, com base no seu consentimento, nos termos do Regulamento Geral sobre a Proteção de Dados (RGPD)." }),
		/* @__PURE__ */ jsxs("p", { children: [
			"Pode pedir o acesso, a retificação ou a eliminação dos seus dados através de ",
			SITE.email,
			". Tem também o direito de apresentar reclamação à CNPD."
		] })
	]
})] });
//#endregion
export { SplitComponent as component };
