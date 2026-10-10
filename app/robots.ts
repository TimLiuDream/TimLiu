import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';

export default function robots(): MetadataRoute.Robots {
  return {
    // The wildcard also allows future AI agents; no vendor allowlist is needed.
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: siteConfig.url + '/sitemap.xml',
  };
}