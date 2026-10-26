import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";
import { LockKeyhole, ArrowRight } from "lucide-react";
import { Layout, PageTitle } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { unlockReservedArea } from "@/lib/reserved.functions";

const title = "Área reservada — Dra. Tatiana Santiago";
const description = "Acesso reservado aos conteúdos de acompanhamento da Dra. Tatiana Santiago.";
export const Route = createFileRoute("/area-reservada")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }, { name: "robots", content: "noindex, nofollow" }] }),
  component: ReservedEntry,
});

function ReservedEntry() {
  const router = useRouter();
  const unlock = useServerFn(unlockReservedArea);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const code = new FormData(event.currentTarget).get("code");
    if (typeof code !== "string" || !code || code.length > 100) return;
    setBusy(true); setError("");
    try {
      const result = await unlock({ data: { code } });
      if (result.ok) await router.navigate({ to: "/area-reservada/conteudos" });
      else setError("Código de acesso incorreto.");
    } catch { setError("Não foi possível aceder. Tente novamente."); }
    finally { setBusy(false); }
  }
  return <Layout><PageTitle eyebrow="Acompanhamento" title="Área reservada" /><div className="mx-auto max-w-md px-6 pb-12"><LockKeyhole className="mx-auto text-olive mb-8" size={32} strokeWidth={1} /><form onSubmit={submit} className="space-y-5"><label htmlFor="access-code" className="block text-sm text-olive">Código de acesso</label><input id="access-code" name="code" type="text" autoComplete="off" autoCapitalize="characters" spellCheck={false} required maxLength={100} className="w-full rounded-md border bg-card px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring" aria-describedby={error ? "access-error" : undefined} aria-invalid={Boolean(error)} />{error && <p id="access-error" role="alert" className="text-sm text-destructive">{error}</p>}<Button type="submit" disabled={busy} className="w-full h-12">{busy ? "A verificar…" : "Entrar"}<ArrowRight size={16} /></Button></form></div></Layout>;
}