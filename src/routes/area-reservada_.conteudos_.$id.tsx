import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Sprout } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ReservedExit } from "@/components/ReservedExit";
import { getReservedProtocol } from "@/lib/reserved.functions";

const description = "Protocolo de acompanhamento disponível mediante código de acesso.";
export const Route = createFileRoute("/area-reservada_/conteudos_/$id")({
  loader: ({ params }) => getReservedProtocol({ data: { id: params.id } }),
  staleTime: 0,
  gcTime: 0,
  preload: false,
  head: ({ loaderData }) => {
    const title = `${loaderData?.title ?? "Protocolo"} — Área reservada`;
    return { meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary" }, { name: "robots", content: "noindex, nofollow" }] };
  },
  component: ReservedProtocol,
});

function ReservedProtocol() {
  const protocol = Route.useLoaderData();
  return <Layout><div className="mx-auto max-w-4xl px-6 pt-10 pb-16">
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gold/40 pb-6"><Link to="/area-reservada/conteudos" className="editorial-link"><ArrowLeft size={14} />Todos os conteúdos</Link><ReservedExit /></div>
    <article className="mt-12"><header className="flex items-start justify-between gap-6 pb-10"><div><p className="eyebrow section-label">Protocolo</p><h1 className="mt-5 text-5xl md:text-6xl">{protocol.title}</h1><p className="mt-5 text-sm text-muted-foreground">Dra. Tatiana Fonseca Santiago · OM 56762</p></div><Sprout className="text-olive shrink-0 mt-5" size={56} strokeWidth={1} /></header>
      {protocol.sections.map((section, index) => <section key={section.title} className="border-t border-gold/40 py-8"><div className="flex gap-4 items-start"><span className="eyebrow pt-2">0{index + 1}</span><h2 className="text-3xl text-olive">{section.title}</h2></div><div className="mt-5 md:pl-9">{section.subtitle && <p className="italic text-muted-foreground mb-3">{section.subtitle}</p>}<ul className="list-disc pl-5 space-y-3 marker:text-olive">{section.items.map(item => <li key={item}>{item}</li>)}</ul>{section.paragraphs.map(paragraph => <p key={paragraph} className="mt-5">{paragraph}</p>)}</div></section>)}
    </article>
  </div></Layout>;
}
