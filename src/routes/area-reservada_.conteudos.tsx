import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sprout } from "lucide-react";
import { Layout, PageTitle } from "@/components/Layout";
import { ReservedExit } from "@/components/ReservedExit";
import { getReservedContent } from "@/lib/reserved.functions";

const title = "Conteúdos reservados — Dra. Tatiana Santiago";
const description = "Conteúdos de acompanhamento disponíveis mediante código de acesso.";
export const Route = createFileRoute("/area-reservada_/conteudos")({
  loader: () => getReservedContent(),
  staleTime: 0,
  gcTime: 0,
  preload: false,
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }, { name: "robots", content: "noindex, nofollow" }] }),
  component: ReservedGallery,
});

function ReservedGallery() {
  const { protocols } = Route.useLoaderData();
  return <Layout>
    <div className="mx-auto max-w-5xl px-6 pt-8 flex justify-end"><ReservedExit /></div>
    <PageTitle eyebrow="Área reservada" title="Conteúdos" intro="Protocolos de acompanhamento. Escolha um para abrir." />
    <div className="mx-auto max-w-5xl px-6 pb-16 grid gap-6 sm:grid-cols-2">
      {protocols.map((p, i) => <Link key={p.id} to="/area-reservada/conteudos/$id" params={{ id: p.id }} preload={false} className="group frame-gold bg-card p-8 flex flex-col gap-5 transition-shadow hover:shadow-[var(--shadow-editorial)]">
        <div className="flex items-start justify-between"><span className="eyebrow">Protocolo 0{i + 1}</span><Sprout className="text-olive" size={36} strokeWidth={1} /></div>
        <h2 className="text-4xl">{p.title}</h2>
        <p className="text-muted-foreground flex-1">{p.summary}</p>
        <span className="editorial-link self-start">Abrir protocolo <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
      </Link>)}
    </div>
  </Layout>;
}
