import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Prefixa caminhos absolutos com `import.meta.env.BASE_URL` (ex.: GitHub Pages em `/site_dra_tf/`). */
export function withBasePath(path: string): string {
  const base = import.meta.env.BASE_URL;
  if (!path.startsWith("/")) return `${base}${path}`;
  if (path === "/") return base;
  return `${base.replace(/\/$/, "")}${path}`;
}
