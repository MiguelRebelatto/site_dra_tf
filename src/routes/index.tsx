import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArticleCard } from "@/components/ArticleCard";
import { InstagramFeed } from "@/components/InstagramFeed";
import { COURSES, SITE, sortedArticles } from "@/lib/site";
import { withBasePath } from "@/lib/utils";
import hero from "@/assets/tatiana-consulta-clean.jpg";
import portrait from "@/assets/tatiana-retrato.jpg.asset.json";
import { ArrowRight, ArrowUpRight, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";

const title = "Dra. Tatiana Fonseca Santiago — Fertilidade Restaurativa em Lisboa";
const desc = "Médica em Lisboa dedicada à fertilidade restaurativa do casal. Consultas, cursos e artigos sobre fertilidade.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: desc },
      { property: "og:title", content: title }, { property: "og:description", content: desc },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@type": "Physician", name: SITE.doctor,
      medicalSpecialty: SITE.specialty, address: { "@type": "PostalAddress", addressLocality: "Lisboa", addressCountry: "PT" },
      identifier: SITE.om,
    }) }],
  }),
  component: Home,
});

export const btn = "inline-flex items-center rounded-full bg-primary px-7 py-3 text-sm text-primary-foreground hover:opacity-90 transition";
export const btnGhost = "inline-flex items-center rounded-full border border-primary px-7 py-3 text-sm text-primary hover:bg-primary hover:text-primary-foreground transition";

function Home() {
  const latest = sortedArticles().slice(0, 3);
  return <Layout>
    <section className="home-cover">
      <img src={hero} alt="Dra. Tatiana Santiago em consulta" width={768} height={768} className="home-cover-photo" fetchPriority="high" />
      <div className="cover-content mx-auto max-w-6xl px-6 fade-in">
        <p className="eyebrow section-label">Fertilidade restaurativa · Lisboa</p>
        <h1 className="cover-title mt-6">Dra. Tatiana<br />Fonseca Santiago</h1>
        <p className="font-serif text-3xl text-olive mt-5 italic">Cuidar da fertilidade, a dois.</p>
        <p className="mt-5 text-muted-foreground max-w-sm">Uma abordagem atenta e baseada em evidência para compreender e cuidar da saúde reprodutiva do casal.</p>
        <div className="mt-8 flex flex-wrap items-center gap-6"><Button asChild className="rounded-full h-12 px-6"><Link to="/contacto">Marcar consulta <ArrowUpRight /></Link></Button><Link to="/sobre" className="editorial-link">Conhecer a médica <ArrowRight size={16} /></Link></div>
        <p className="mt-8 text-[10px] uppercase tracking-widest text-muted-foreground">Ordem dos Médicos · {SITE.om.replace("OM ", "")}</p>
      </div>
    </section>
    <section className="border-y border-gold/40 bg-secondary/30"><div className="mx-auto max-w-6xl px-6 py-6 grid gap-4 md:grid-cols-3 text-sm text-olive">{["Um olhar sobre o casal", "Cuidado individualizado", "Medicina baseada em evidência"].map(t => <p key={t} className="flex items-center justify-center gap-3"><Sprout size={17} strokeWidth={1} />{t}</p>)}</div></section>
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24 grid gap-12 md:grid-cols-[.85fr_1fr] items-center">
      <div className="relative md:pr-10"><img src={withBasePath(portrait.url)} alt="Dra. Tatiana Santiago" width={640} height={696} loading="lazy" className="portrait-photo" /><p className="mt-4 text-xs text-olive">Dra. Tatiana Fonseca Santiago · {SITE.om}</p></div>
      <div><p className="eyebrow section-label">Sobre a médica</p><h2 className="editorial-heading mt-5">Escutar. Compreender.<br /><em className="text-olive">Cuidar.</em></h2><p className="mt-6 text-muted-foreground">Médica dedicada à fertilidade restaurativa, acompanha casais que procuram compreender as causas das suas dificuldades em engravidar.</p><p className="mt-4 text-muted-foreground">A saúde reprodutiva merece um olhar atento sobre ambos os parceiros, o ciclo menstrual e a saúde hormonal.</p><Link to="/sobre" className="editorial-link mt-6">Conhecer a Dra. Tatiana <ArrowRight size={16} /></Link></div>
    </section>
    <section className="bg-secondary/30 py-20"><div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow section-label">Aprender e compreender</p><h2 className="editorial-heading mt-5">Conhecimento<br />para o casal.</h2><p className="mt-5 max-w-xs text-muted-foreground">Conteúdos para compreender melhor a fertilidade e preparar a gravidez.</p></div><div>{COURSES.map((c,i) => <article key={c.slug} className="course-item"><p className="eyebrow">0{i+1} · Curso online</p><h3 className="text-3xl mt-3">{c.title}</h3><p className="mt-3 text-muted-foreground max-w-lg">{c.desc}</p><a href={c.url} target="_blank" rel="noreferrer" className="editorial-link mt-3">Ver na Hotmart <ArrowUpRight size={16} /></a></article>)}</div></div></section>
    <section className="mx-auto max-w-6xl px-6 py-20"><div className="flex flex-wrap gap-5 items-end justify-between"><div><p className="eyebrow section-label">Leituras</p><h2 className="editorial-heading mt-4">Informação para cuidar.</h2></div><Link to="/artigos" className="editorial-link">Todos os artigos <ArrowRight size={16} /></Link></div><div className="mt-10 grid gap-8 md:grid-cols-3">{latest.map(a => <ArticleCard key={a.slug} a={a} />)}</div></section>
    <section className="mx-auto max-w-6xl px-6 pb-20"><div className="mb-8 flex flex-wrap gap-4 items-end justify-between"><div><p className="eyebrow section-label">Mais perto de si</p><h2 className="editorial-heading mt-4">Conversas sobre saúde.</h2></div><a href={SITE.instagram} target="_blank" rel="noreferrer" className="editorial-link">No Instagram <ArrowUpRight size={16} /></a></div><InstagramFeed /></section>
    <section className="bg-olive py-16 text-primary-foreground"><div className="mx-auto max-w-6xl px-6 flex flex-wrap gap-8 items-center justify-between"><div><p className="text-xs uppercase tracking-widest opacity-80">Consultas em Lisboa</p><h2 className="text-primary-foreground text-4xl md:text-5xl mt-4">O primeiro passo é conversar.</h2></div><Button asChild variant="outline" className="rounded-full bg-transparent border-primary-foreground text-primary-foreground h-12 px-7 hover:bg-primary-foreground hover:text-olive"><Link to="/contacto">Fale comigo <ArrowUpRight /></Link></Button></div></section>
  </Layout>;
}
