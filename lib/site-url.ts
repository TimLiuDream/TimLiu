/** Canonical origin when NEXT_PUBLIC_SITE_URL is unset. */
export const DEFAULT_SITE_URL = 'https://www.timliu.xyz';

/**
 * Production hostnames that must not stay indexable.
 * Vercel preview and deployment URLs look like
 * tim-liu-git-<branch>-<scope>.vercel.app or tim-liu-<hash>-<scope>.vercel.app
 * and are intentionally absent, so those deployments keep serving themselves.
 */
export const LEGACY_PRODUCTION_HOSTS = ['tim-liu.vercel.app', 'timliu.xyz'] as const;

const legacyProductionHosts = new Set<string>(LEGACY_PRODUCTION_HOSTS);

function readConfiguredSiteUrl(value: string | null | undefined): string {
  if (value !== undefined) return value ?? '';
  // Direct member access so Next can inline this public env var in client bundles.
  return process.env.NEXT_PUBLIC_SITE_URL ?? '';
}

/** Absolute origin with no path, query, or trailing slash. */
export function resolveSiteUrl(value?: string | null): string {
  const raw = readConfiguredSiteUrl(value).trim();
  if (!raw) return DEFAULT_SITE_URL;

  let parsed: URL;
  try {
    parsed = new URL(raw);
  } catch {
    throw new Error(`NEXT_PUBLIC_SITE_URL is not a valid absolute URL: ${raw}`);
  }

  if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
    throw new Error(`NEXT_PUBLIC_SITE_URL must use http or https: ${raw}`);
  }
  if (parsed.username || parsed.password || parsed.search || parsed.hash) {
    throw new Error(`NEXT_PUBLIC_SITE_URL must be an origin without credentials or a query: ${raw}`);
  }
  if (parsed.pathname !== '/' && parsed.pathname !== '') {
    throw new Error(`NEXT_PUBLIC_SITE_URL must not include a path: ${raw}`);
  }

  return parsed.origin;
}

/** Hostname from a Host header. Ports are ignored; the header is lowercased. */
export function requestHostname(hostHeader: string | null, fallback = ''): string {
  const first = (hostHeader ?? '').split(',')[0]?.trim().toLowerCase() ?? '';
  const hostname = first.startsWith('[') ? first : (first.split(':')[0] ?? '');
  if (hostname) return hostname;
  const fallbackHost = fallback.trim().toLowerCase();
  return fallbackHost.startsWith('[') ? fallbackHost : (fallbackHost.split(':')[0] ?? '');
}

/**
 * Absolute URL to 308 to, or null when this host should be served.
 * Only the legacy production hosts redirect. The destination keeps the path and query.
 */
export function legacyHostRedirect(hostname: string, requestUrl: URL, siteUrl = resolveSiteUrl()): URL | null {
  const host = hostname.trim().toLowerCase();
  const canonical = new URL(siteUrl);
  if (host === canonical.hostname) return null;
  if (!legacyProductionHosts.has(host)) return null;

  const destination = new URL(requestUrl.href);
  destination.protocol = canonical.protocol;
  destination.hostname = canonical.hostname;
  destination.port = canonical.port;
  destination.username = '';
  destination.password = '';
  return destination;
}
