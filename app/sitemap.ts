import type { MetadataRoute } from 'next';
import { servicesData, destinationsData } from '@/lib/data';
import fs from 'fs';
import path from 'path';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://truevisaservices.vercel.app';

interface BlogInfo {
  slug: string;
  lastModified: Date;
}

function getBlogInfo(): BlogInfo[] {
  const blogsDirectory = path.join(process.cwd(), 'content', 'blogs');
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }
  return fs.readdirSync(blogsDirectory)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const filePath = path.join(blogsDirectory, f);
      const stat = fs.statSync(filePath);
      return {
        slug: f.replace(/\.md$/, ''),
        lastModified: stat.mtime,
      };
    });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/destinations`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Destination pages
  const destinationPages: MetadataRoute.Sitemap = destinationsData.map((dest) => ({
    url: `${BASE_URL}/destinations/${dest.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Blog pages — use actual file modification dates for accurate lastmod
  const blogInfos = getBlogInfo();
  const blogPages: MetadataRoute.Sitemap = blogInfos.map((blog) => ({
    url: `${BASE_URL}/blogs/${blog.slug}`,
    lastModified: blog.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...destinationPages, ...blogPages];
}
