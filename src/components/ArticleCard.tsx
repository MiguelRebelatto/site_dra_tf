import { Link } from "@tanstack/react-router";
import { fmtDate, type Article } from "@/lib/site";

export function ArticleCard({ a }: { a: Article }) {
  return (
    <Link to="/artigos/$slug" params={{ slug: a.slug }} className="group block">
      <div className="overflow-hidden"><img src={a.cover} alt={a.title} loading="lazy" width={1200} height={800} className="article-image aspect-[3/2] w-full object-cover" /></div>
      <div className="pt-5 border-t border-gold/40 mt-4">
        <p className="text-xs uppercase tracking-widest text-olive">{a.category} · {fmtDate(a.published)}</p>
        <h3 className="mt-2 text-2xl group-hover:underline">{a.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{a.excerpt}</p>
      </div>
    </Link>
  );
}
