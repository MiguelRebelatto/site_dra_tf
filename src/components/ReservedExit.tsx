import { useRouter } from "@tanstack/react-router";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { lockReservedAccess } from "@/lib/reserved-access";

export function ReservedExit() {
  const router = useRouter();

  function exit() {
    lockReservedAccess();
    void router.navigate({ to: "/area-reservada", replace: true });
  }

  return <Button variant="outline" onClick={exit}><LogOut size={16} />Sair</Button>;
}
