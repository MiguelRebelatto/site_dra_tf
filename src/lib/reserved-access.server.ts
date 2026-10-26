import { createHash, timingSafeEqual } from "node:crypto";

export function accessCodeMatches(input: string, expected: string) {
  return timingSafeEqual(createHash("sha256").update(input).digest(), createHash("sha256").update(expected).digest());
}

export function hasReservedAccess(data: { unlocked?: boolean }) {
  return data.unlocked === true;
}