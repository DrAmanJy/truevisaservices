'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: 'New Immigration Policies for Canada in 2026',
    excerpt: 'Discover the latest updates and changes in Canadian immigration policies that could affect your PR application.',
    category: 'Immigration News',
    author: 'Aarav',
    date: 'August 15, 2026',
    image: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=2000&auto=format&fit=crop',
    slug: 'new-immigration-policies-canada-2026',
  },
  {
    id: 2,
    title: 'Top 5 Universities in Australia for International Students',
    excerpt: 'Planning to study in Australia? Here are the top-ranked universities that offer the best opportunities for international students.',
    category: 'Study Abroad',
    author: 'Rahul Verma',
    date: 'August 10, 2026',
    image: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&w=2000&auto=format&fit=crop',
    slug: 'top-universities-australia-international-students',
  },
  {
    id: 3,
    title: 'How to Prepare for Your UK Visa Interview',
    excerpt: 'Ace your UK visa interview with our comprehensive guide covering common questions, tips, and required documents.',
    category: 'Visa Tips',
    author: 'Priya Sharma',
    date: 'August 5, 2026',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2000&auto=format&fit=crop',
    slug: 'prepare-uk-visa-interview',
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="py-24 bg-white text-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold tracking-wider uppercase mb-2"
          >
            Insights & Updates
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Latest Blogs
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.article 
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow group flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                />
                <div className="absolute top-4 left-4 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                  {blog.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {blog.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {blog.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors line-clamp-2">
                  <Link href={`/blogs/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3 flex-1">
                  {blog.excerpt}
                </p>
                
                <Link 
                  href={`/blogs/${blog.slug}`} 
                  className="inline-flex items-center gap-2 text-navy font-bold hover:text-gold transition-colors mt-auto"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href="/blogs" 
            className="inline-flex items-center justify-center gap-2 bg-navy text-white px-8 py-4 rounded-full font-bold hover:bg-gold hover:text-navy transition-all hover:scale-105"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
