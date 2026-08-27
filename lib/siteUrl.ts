/**
 * Single source of truth for the site URL.
 * All canonical tags, OG URLs, sitemap, schema, and robots.txt read from here.
 * To switch domains: update NEXT_PUBLIC_SITE_URL in .env — no code changes needed.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://truevisaservices.vercel.app';
