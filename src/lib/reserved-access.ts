import { useEffect, useState } from "react";

export const RESERVED_ACCESS_CODE = "FERT_26";
const ACCESS_KEY = "reserved-area-unlocked";

export function hasReservedAccess() {
  return typeof window !== "undefined" && window.sessionStorage.getItem(ACCESS_KEY) === "true";
}

export function unlockReservedAccess() {
  window.sessionStorage.setItem(ACCESS_KEY, "true");
}

export function lockReservedAccess() {
  window.sessionStorage.removeItem(ACCESS_KEY);
}

export function useReservedAccess() {
  const [unlocked, setUnlocked] = useState<boolean>(() => hasReservedAccess());

  useEffect(() => {
    const syncAccess = () => setUnlocked(hasReservedAccess());
    syncAccess();

    const onStorage = (event: StorageEvent) => {
      if (event.key === ACCESS_KEY) syncAccess();
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return unlocked;
}
