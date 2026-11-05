import { useEffect, useState } from "react";

export const RESERVED_ACCESS_CODE = "FERT_26";
const ACCESS_KEY = "reserved-area-unlocked";

export function hasReservedAccess() {
  if (typeof window === "undefined") return false;
  return window.sessionStorage.getItem(ACCESS_KEY) === "true";
}

export function unlockReservedAccess() {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(ACCESS_KEY, "true");
}

export function lockReservedAccess() {
  if (typeof window === "undefined") return;
  window.sessionStorage.removeItem(ACCESS_KEY);
}

export function useReservedAccess() {
  const [unlocked, setUnlocked] = useState<boolean>(() => hasReservedAccess());

  useEffect(() => {
    const sync = () => setUnlocked(hasReservedAccess());
    sync();

    const onStorage = (event: StorageEvent) => {
      if (event.key === ACCESS_KEY) sync();
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return unlocked;
}
