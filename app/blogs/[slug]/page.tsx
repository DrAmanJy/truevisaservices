import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, ChevronRight, Globe } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import { JsonLd, getArticleSchema, getBreadcrumbSchema } from '@/lib/schema';

export async function generateStaticParams() {
  const blogsDirectory = path.join(process.cwd(), 'content', 'blogs');
  
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(blogsDirectory);
  
  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content', 'blogs', `${slug}.md`);
  
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    
    const title = data.title || 'Blog Post';
    const description = data.excerpt || 'Read our latest immigration and visa blog post on True Visa.';

    return {
      title,
      description,
      alternates: {
        canonical: `https://truevisaservices.in/blogs/${slug}`,
      },
      openGraph: {
        title: `${title} | True Visa`,
        description,
        url: `https://truevisaservices.in/blogs/${slug}`,
        type: 'article',
        images: data.image ? [{ url: data.image, alt: title }] : undefined,
        ...(data.date && { publishedTime: data.date }),
        ...(data.author && { authors: [data.author] }),
      },
      twitter: {
        card: 'summary_large_image',
        title: `${title} | True Visa`,
        description,
        images: data.image ? [data.image] : undefined,
      },
    };
  } catch {
    return {
      title: 'Blog Not Found',
    };
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content', 'blogs', `${slug}.md`);
  
  let fileContent = '';
  try {
    fileContent = fs.readFileSync(filePath, 'utf8');
  } catch {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">Blog Post Not Found</h1>
          <Link href="/blogs" className="text-gold font-bold hover:underline">
            ← Back to all blogs
          </Link>
        </div>
      </div>
    );
  }

  const { data: frontmatter, content } = matter(fileContent);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blogs' },
    { name: frontmatter.title || slug, url: `/blogs/${slug}` },
  ];

  const articleSchema = getArticleSchema({
    title: frontmatter.title || slug,
    slug,
    excerpt: frontmatter.excerpt || '',
    author: frontmatter.author || 'True Visa Team',
    date: frontmatter.date || new Date().toISOString(),
    image: frontmatter.image,
    category: frontmatter.category,
  });

  return (
    <PageTransition>
      <main className="min-h-screen bg-gray-50 pb-20">
        <JsonLd data={articleSchema} />
        <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

        {/* Header section with image */}
        <section className="relative pt-32 pb-28 bg-navy overflow-hidden min-h-[60vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent z-10" />
          {frontmatter.image && (
            <div className="absolute inset-0 z-0">
              <Image
                src={frontmatter.image}
                alt={frontmatter.title || 'Blog post header image'}
                fill
                className="object-cover opacity-30"
                priority
              />
            </div>
          )}
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-12">
            <Link 
              href="/blogs" 
              className="inline-flex items-center gap-2 text-gold font-bold hover:text-white transition-colors mb-8 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 hover:bg-white/20"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Articles
            </Link>
            
            <div className="bg-gold text-navy text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider inline-block mb-6 shadow-lg shadow-gold/20">
              {frontmatter.category}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
              {frontmatter.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-8 text-sm text-gray-300 font-medium border-t border-white/10 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold backdrop-blur-md border border-white/10">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Written by</div>
                  <div className="text-white font-bold">{frontmatter.author}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold backdrop-blur-md border border-white/10">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Published on</div>
                  <div className="text-white font-bold">{frontmatter.date}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content & Sidebar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-30">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content Area */}
            <div className="lg:w-2/3">
              <article className="bg-white rounded-3xl shadow-2xl shadow-navy/5 p-8 md:p-12 lg:p-16 border border-gray-100">
                <div className="prose prose-lg md:prose-xl max-w-none prose-headings:font-black prose-headings:text-navy prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-a:text-gold prose-a:font-bold prose-a:no-underline hover:prose-a:text-navy prose-img:rounded-2xl prose-img:shadow-xl prose-li:marker:text-gold prose-blockquote:border-l-gold prose-blockquote:bg-gray-50 prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic prose-blockquote:text-gray-700">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {content}
                  </ReactMarkdown>
                </div>
              </article>
            </div>

            {/* Sidebar Area */}
            <div className="lg:w-1/3 space-y-8">
              
              {/* Popular Destinations Box */}
              <div className="bg-white rounded-3xl shadow-xl shadow-navy/5 p-8 border border-gray-100 sticky top-32">
                <div className="flex items-center gap-3 mb-6 text-navy font-black text-xl">
                  <Globe className="w-6 h-6 text-gold" /> Popular Destinations
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { name: 'Canada', slug: 'canada' },
                    { name: 'Australia', slug: 'australia' },
                    { name: 'United Kingdom', slug: 'united-kingdom' },
                    { name: 'United States', slug: 'united-states' },
                    { name: 'Germany', slug: 'germany' }
                  ].map((dest) => (
                    <Link 
                      key={dest.slug} 
                      href={`/destinations/${dest.slug}`} 
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-gold/10 transition-colors group"
                    >
                      <span className="font-bold text-gray-600 group-hover:text-navy transition-colors">{dest.name}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gold transition-colors" />
                    </Link>
                  ))}
                </div>
                
                <hr className="my-8 border-gray-100" />
                
                {/* CTA Box */}
                <div className="bg-navy rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold rounded-full opacity-10 -mr-16 -mt-16 blur-2xl" />
                  <h3 className="text-2xl font-black text-white mb-4 leading-tight">Need Expert Visa Advice?</h3>
                  <p className="text-gray-300 mb-8 text-sm leading-relaxed">
                    Our immigration experts are ready to assess your profile and guide you through the process.
                  </p>
                  <Link 
                    href="/contact" 
                    className="flex items-center justify-between w-full bg-gold text-navy font-bold px-6 py-4 rounded-xl hover:bg-white transition-colors group"
                  >
                    Get Free Assessment
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
