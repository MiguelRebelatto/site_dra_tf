import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageTitle } from "@/components/Layout";

const t = "Termos de utilização — Dra. Tatiana Santiago";
const d = "Condições de utilização do site da Dra. Tatiana Fonseca Santiago.";
export const Route = createFileRoute("/termos")({
  head: () => ({ meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }], links: [{ rel: "canonical", href: "/termos" }] }),
  component: () => (
    <Layout>
      <PageTitle title="Termos de utilização" />
      <div className="mx-auto max-w-3xl px-6 space-y-4 leading-relaxed">
        <p>Texto provisório, a rever por um profissional jurídico.</p>
        <p>O conteúdo deste site tem fins informativos e não substitui a consulta médica, o diagnóstico ou o tratamento.</p>
      </div>
    </Layout>
  ),
});
