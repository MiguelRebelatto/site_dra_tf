import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
const nav = [{ to: "/sobre", label: "Sobre" }, { to: "/cursos", label: "Cursos" }, { to: "/artigos", label: "Artigos" }, { to: "/contacto", label: "Contacto" }, { to: "/area-reservada", label: "Área reservada" }] as const;
export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="min-h-screen flex flex-col">
    <header className="site-header border-b border-gold/40">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3" aria-label="Dra. Tatiana Santiago — Início"><span className="brand-mark" aria-hidden="true">ts</span><span><span className="block font-serif text-2xl text-primary leading-tight">Dra. Tatiana Santiago</span><span className="block text-[9px] uppercase tracking-widest text-olive">Fertilidade restaurativa do casal</span></span></Link>
        <nav aria-label="Navegação principal" className="site-nav hidden lg:flex items-center gap-5 text-sm">{nav.map(n => <Link key={n.to} to={n.to} activeProps={{ className: "text-primary" }} className="hover:text-primary">{n.label}</Link>)}<Button asChild variant="outline" className="rounded-full border-primary text-primary px-5"><Link to="/contacto">Marcar consulta <ArrowUpRight /></Link></Button></nav>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav id="mobile-nav" aria-label="Navegação móvel" className="lg:hidden border-t px-6 py-4 flex flex-col gap-3">{nav.map(n => <Link key={n.to} to={n.to} className="py-2 text-primary">{n.label}</Link>)}</nav>}
    </header>
    <main className="flex-1">{children}</main>
    <footer className="bg-secondary/40 mt-20 border-t border-gold/40">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-8 md:grid-cols-3 text-sm">
        <div><p className="font-serif text-2xl text-primary">{SITE.doctor}</p><p className="text-muted-foreground mt-2">{SITE.specialty}</p><p className="mt-3 text-xs">Ordem dos Médicos · {SITE.om.replace("OM ", "")}</p></div>
        <div className="space-y-2"><p className="eyebrow mb-4">Contacto</p><p>{SITE.city}, Portugal</p><a className="block hover:text-primary" href={`mailto:${SITE.email}`}>{SITE.email}</a><a className="inline-flex gap-2 items-center text-primary" href={SITE.instagram} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} /></a></div>
        <div className="space-y-2"><p className="eyebrow mb-4">Informação</p><Link to="/privacidade" className="block hover:text-primary">Política de privacidade</Link><Link to="/termos" className="block hover:text-primary">Termos de utilização</Link><p className="text-xs text-muted-foreground pt-3">A informação deste site não substitui a consulta médica.</p></div>
      </div>
    </footer>
  </div>;
}
export function PageTitle({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return <section className="mx-auto max-w-3xl px-6 pt-16 md:pt-20 pb-12 text-center fade-in">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h1 className="mt-4 text-4xl md:text-6xl">{title}</h1>{intro && <p className="mt-5 text-lg text-muted-foreground">{intro}</p>}<div className="divider-leaf mx-auto max-w-40 mt-8" /></section>;
}