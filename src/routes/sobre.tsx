import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageTitle } from "@/components/Layout";
import { SITE } from "@/lib/site";
import { withBasePath } from "@/lib/utils";
import portrait from "@/assets/tatiana-retrato.jpg.asset.json";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const t = "Sobre a Dra. Tatiana Fonseca Santiago";
const d = "Formação, percurso e áreas de atuação da Dra. Tatiana Fonseca Santiago, médica em Lisboa.";
export const Route = createFileRoute("/sobre")({
  head: () => ({ meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }, { property: "og:type", content: "profile" }, { name: "twitter:card", content: "summary" }], links: [{ rel: "canonical", href: "/sobre" }] }),
  component: () => (
    <Layout>
      <PageTitle eyebrow="Sobre" title={SITE.doctor} intro={SITE.specialty} />
      <section className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-[.85fr_1fr] items-center pb-12">
        <img src={withBasePath(portrait.url)} alt="Dra. Tatiana Fonseca Santiago" width={640} height={696} className="portrait-photo fade-in" />
        <div className="space-y-6"><p className="eyebrow section-label">Um cuidado atento</p><h2 className="editorial-heading">A fertilidade merece<br /><em className="text-olive">um olhar a dois.</em></h2><p className="text-lg text-muted-foreground">Médica dedicada à fertilidade restaurativa, acompanha casais que procuram compreender as causas das suas dificuldades em engravidar.</p><div className="border-y border-gold/50 py-6"><h3 className="text-2xl mb-4">Áreas de atuação</h3><ul className="space-y-3 text-muted-foreground"><li>Avaliação da fertilidade do casal</li><li>Saúde hormonal e ciclo menstrual</li><li>Preparação para a gravidez</li></ul></div><p className="text-xs text-olive">Inscrita na Ordem dos Médicos com a cédula profissional n.º {SITE.om.replace("OM ", "")}.</p><Button asChild className="rounded-full h-12 px-6"><Link to="/contacto">Marcar consulta <ArrowUpRight /></Link></Button></div>
      </section>
    </Layout>
  ),
});
