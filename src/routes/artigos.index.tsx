import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageTitle } from "@/components/Layout";
import { ArticleCard } from "@/components/ArticleCard";
import { sortedArticles } from "@/lib/site";

const t = "Artigos sobre fertilidade do casal — Dra. Tatiana Santiago";
const d = "Artigos com informação fiável sobre fertilidade, ciclo menstrual e saúde do casal.";
export const Route = createFileRoute("/artigos/")({
  head: () => ({ meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }], links: [{ rel: "canonical", href: "/artigos" }] }),
  component: Artigos,
});

function Artigos() {
  const all = sortedArticles();
  const cats = ["Todos", ...new Set(all.map((a) => a.category))];
  const [cat, setCat] = useState("Todos");
  const [q, setQ] = useState("");
  const list = all.filter((a) => (cat === "Todos" || a.category === cat) && (a.title + a.excerpt).toLowerCase().includes(q.toLowerCase()));
  return (
    <Layout>
      <PageTitle eyebrow="Artigos" title="Informação para o casal" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center gap-3 justify-center">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-1.5 text-sm border ${c === cat ? "bg-primary text-primary-foreground border-primary" : "hover:border-primary"}`}>{c}</button>
          ))}
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Pesquisar…" className="rounded-full border bg-card px-4 py-1.5 text-sm" />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">{list.map((a) => <ArticleCard key={a.slug} a={a} />)}</div>
        {!list.length && <p className="text-center text-muted-foreground mt-10">Nenhum artigo encontrado.</p>}
      </div>
    </Layout>
  );
}
