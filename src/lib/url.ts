import { SITE } from '../consts';

// Base path with trailing slash, e.g. "/" or "/cryptotradey/".
export const BASE_PATH: string = import.meta.env.BASE_URL;

/** Root-relative path → base-prefixed path (for <a href>). */
export function toBase(p: string): string {
  return `${BASE_PATH}${p.replace(/^\//, '')}`;
}

/** Root-relative path → absolute URL (for canonical / JSON-LD / OG). */
export function toAbs(p: string): string {
  return new URL(toBase(p), SITE.url).href;
}
