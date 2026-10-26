import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Layout, PageTitle } from "@/components/Layout";
import { SITE } from "@/lib/site";
import { btn, btnGhost } from "./index";

const t = "Contacto e consultas em Lisboa — Dra. Tatiana Santiago";
const d = "Marque a sua consulta de fertilidade em Lisboa com a Dra. Tatiana Fonseca Santiago.";
export const Route = createFileRoute("/contacto")({
  head: () => ({ meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }], links: [{ rel: "canonical", href: "/contacto" }] }),
  component: Contacto,
});

const field = "w-full rounded-md border bg-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring";

function Contacto() {
  const [ok, setOk] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Nome: ${f.get("nome")}\nEmail: ${f.get("email")}\n\n${f.get("msg")}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Pedido de contacto")}&body=${encodeURIComponent(body)}`;
    setOk(true);
  };
  return (
    <Layout>
      <PageTitle eyebrow="Contacto" title="Fale comigo" intro={`Consultas em ${SITE.city}.`} />
      <div className="mx-auto max-w-5xl px-6 grid gap-10 md:grid-cols-2">
        <form onSubmit={submit} className="space-y-4">
          <input name="nome" required placeholder="Nome" className={field} maxLength={100} />
          <input name="email" type="email" required placeholder="Email" className={field} maxLength={200} />
          <textarea name="msg" required rows={5} placeholder="Mensagem" className={field} maxLength={2000} />
          <label className="flex gap-3 text-sm text-muted-foreground">
            <input type="checkbox" required className="mt-1" />
            <span>Aceito que os meus dados sejam usados para responder a este pedido, conforme a política de privacidade (RGPD).</span>
          </label>
          <button className={btn}>Enviar</button>
          {ok && <p className="text-sm text-olive">Obrigada! O seu programa de email foi aberto para enviar a mensagem.</p>}
        </form>
        <div className="space-y-4">
          <a className={btn} href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>{" "}
          <a className={btnGhost} href={SITE.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <iframe title="Mapa Lisboa" className="w-full h-72 frame-gold mt-4" loading="lazy" src="https://www.google.com/maps?q=Lisboa&output=embed" />
        </div>
      </div>
    </Layout>
  );
}
