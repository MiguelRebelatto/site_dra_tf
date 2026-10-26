import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageTitle } from "@/components/Layout";
import { COURSES } from "@/lib/site";
import { btn } from "./index";

const t = "Cursos sobre fertilidade — Dra. Tatiana Santiago";
const d = "Cursos online da Dra. Tatiana Fonseca Santiago sobre fertilidade natural e preparação para a gravidez.";
export const Route = createFileRoute("/cursos")({
  head: () => ({ meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }], links: [{ rel: "canonical", href: "/cursos" }] }),
  component: () => (
    <Layout>
      <PageTitle eyebrow="Aprender" title="Cursos" intro="Conteúdos para o casal compreender melhor a sua fertilidade." />
      <div className="mx-auto max-w-4xl px-6 space-y-8">
        {COURSES.map((c) => (
          <article key={c.slug} className="frame-gold bg-card p-10">
            <h2 className="text-4xl">{c.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{c.desc}</p>
            <a href={c.url} target="_blank" rel="noreferrer" className={`${btn} mt-6`}>Inscrever-me na Hotmart</a>
          </article>
        ))}
      </div>
    </Layout>
  ),
});
