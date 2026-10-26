import { createServerFn } from "@tanstack/react-start";
import { useSession, setResponseHeader } from "@tanstack/react-start/server";
import { redirect } from "@tanstack/react-router";
import { z } from "zod";

export const unlockReservedArea = createServerFn({ method: "POST" })
  .inputValidator(z.object({ code: z.string().min(1).max(100) }))
  .handler(async ({ data }) => {
    setResponseHeader("Cache-Control", "no-store");
    const expected = process.env['SITE_PASSWORD'];
    const password = process.env['SESSION_SECRET'];
    if (!expected || !password) throw new Error("Reserved area is not configured");
    const { accessCodeMatches } = await import("./reserved-access.server");
    if (!accessCodeMatches(data.code, expected)) return { ok: false };
    const session = await useSession<{ unlocked?: boolean }>({ password, name: "reserved-area", maxAge: 60 * 60 * 8, cookie: { httpOnly: true, secure: true, sameSite: "none", partitioned: true, path: "/" } });
    await session.update({ unlocked: true });
    return { ok: true };
  });

export const lockReservedArea = createServerFn({ method: "POST" }).handler(async () => {
  setResponseHeader("Cache-Control", "no-store");
  const password = process.env['SESSION_SECRET'];
  if (!password) throw new Error("Reserved area is not configured");
  const session = await useSession({ password, name: "reserved-area", cookie: { httpOnly: true, secure: true, sameSite: "none", partitioned: true, path: "/" } });
  await session.clear();
  return { ok: true };
});

async function requireAccess() {
  setResponseHeader("Cache-Control", "no-store");
  const password = process.env['SESSION_SECRET'];
  if (!password) throw new Error("Reserved area is not configured");
  const session = await useSession<{ unlocked?: boolean }>({ password, name: "reserved-area", maxAge: 60 * 60 * 8, cookie: { httpOnly: true, secure: true, sameSite: "none", partitioned: true, path: "/" } });
  const { hasReservedAccess } = await import("./reserved-access.server");
  if (!hasReservedAccess(session.data)) throw redirect({ to: "/area-reservada" });
  return (await import("./reserved-content.server")).PROTOCOLS;
}

export const getReservedContent = createServerFn({ method: "GET" }).handler(async () => {
  const protocols = await requireAccess();
  return { protocols: protocols.map(p => ({ id: p.id, title: p.title, summary: p.sections[0]?.subtitle || p.sections[0]?.title || "", count: p.sections.length })) };
});

export const getReservedProtocol = createServerFn({ method: "GET" })
  .inputValidator(z.object({ id: z.string().min(1).max(60) }))
  .handler(async ({ data }) => {
    const protocols = await requireAccess();
    const protocol = protocols.find(p => p.id === data.id);
    if (!protocol) throw redirect({ to: "/area-reservada/conteudos" });
    return protocol;
  });
