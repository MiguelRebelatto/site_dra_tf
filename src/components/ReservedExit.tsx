import { useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { lockReservedArea } from "@/lib/reserved.functions";

export function ReservedExit() {
  const lock = useServerFn(lockReservedArea);
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function exit() {
    setBusy(true); setError("");
    try { await lock(); await router.navigate({ to: "/area-reservada", replace: true }); await router.invalidate(); }
    catch { setError("Não foi possível sair. Tente novamente."); setBusy(false); }
  }
  return <div className="flex items-center gap-3">{error && <p role="alert" className="text-sm text-destructive">{error}</p>}<Button variant="outline" disabled={busy} onClick={exit}><LogOut size={16} />Sair</Button></div>;
}
