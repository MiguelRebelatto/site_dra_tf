import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArticleCard } from "@/components/ArticleCard";
import { ARTICLES, COURSES, SITE, fmtDate } from "@/lib/site";

export const Route = createFileRoute("/artigos/$slug")({
  loader: ({ params }) => {
    const a = ARTICLES.find((x) => x.slug === params.slug);
    if (!a) throw notFound();
    return a;
  },
  head: ({ loaderData: a, params }) => a ? ({
    meta: [
      { title: `${a.title} — Dra. Tatiana Santiago` }, { name: "description", content: a.excerpt },
      { property: "og:title", content: a.title }, { property: "og:description", content: a.excerpt },
      { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `/artigos/${params.slug}` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@type": "Article", headline: a.title, datePublished: a.published, dateModified: a.reviewed,
      author: { "@type": "Physician", name: SITE.doctor, identifier: SITE.om },
    }) }],
  }) : ({ meta: [{ title: "Artigo indisponível" }, { name: "robots", content: "noindex" }] }),
  component: Artigo,
});

function Artigo() {
  const a = Route.useLoaderData();
  const course = COURSES[0]!;
  const related = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 3);
  return (
    <Layout>
      <article className="mx-auto max-w-3xl px-6 pt-16">
        <Link to="/artigos" className="text-sm text-olive">← Artigos</Link>
        <p className="mt-6 text-xs uppercase tracking-widest text-olive">{a.category}</p>
        <h1 className="mt-2 text-5xl">{a.title}</h1>
        <p className="mt-4 text-sm text-muted-foreground">Por {SITE.doctor} ({SITE.om}) · Publicado a {fmtDate(a.published)} · Revisto a {fmtDate(a.reviewed)}</p>
        <img src={a.cover} alt={a.title} width={1200} height={800} className="mt-8 frame-gold w-full" />
        <div className="mt-10 space-y-5 text-lg leading-relaxed">{a.body.map((p, i) => <p key={i}>{p}</p>)}</div>
        <div className="mt-10 frame-gold bg-card p-6">
          <p className="font-serif text-2xl text-primary">Quer aprofundar?</p>
          <a href={course.url} target="_blank" rel="noreferrer" className="text-primary underline">Conheça o curso {course.title}</a>
        </div>
        <h2 className="mt-12 text-2xl">Referências</h2>
        <ol className="mt-3 list-decimal pl-6 text-sm text-muted-foreground">{a.references.map((r) => <li key={r}>{r}</li>)}</ol>
      </article>
      <section className="mx-auto max-w-6xl px-6 mt-20">
        <h2 className="text-3xl text-center">Artigos relacionados</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">{related.map((r) => <ArticleCard key={r.slug} a={r} />)}</div>
      </section>
    </Layout>
  );
}
