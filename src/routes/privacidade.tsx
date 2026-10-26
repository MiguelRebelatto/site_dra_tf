import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageTitle } from "@/components/Layout";
import { SITE } from "@/lib/site";

const t = "Política de privacidade — Dra. Tatiana Santiago";
const d = "Como tratamos os seus dados pessoais, em conformidade com o RGPD.";
export const Route = createFileRoute("/privacidade")({
  head: () => ({ meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }], links: [{ rel: "canonical", href: "/privacidade" }] }),
  component: () => (
    <Layout>
      <PageTitle title="Política de privacidade" />
      <div className="mx-auto max-w-3xl px-6 space-y-4 leading-relaxed">
        <p>Texto provisório, a rever por um profissional jurídico.</p>
        <p>Os dados enviados através do formulário de contacto (nome, email e mensagem) são usados apenas para responder ao seu pedido, com base no seu consentimento, nos termos do Regulamento Geral sobre a Proteção de Dados (RGPD).</p>
        <p>Pode pedir o acesso, a retificação ou a eliminação dos seus dados através de {SITE.email}. Tem também o direito de apresentar reclamação à CNPD.</p>
      </div>
    </Layout>
  ),
});
