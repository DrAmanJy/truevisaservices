'use client';

import { useState } from 'react';
import PageTransition from '@/components/PageTransition';
import { motion, AnimatePresence } from 'motion/react';
import ConsultationForm from '@/components/ConsultationForm';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, User, Search, Filter } from 'lucide-react';

const categories = ['All', 'Study Visa', 'Work Visa', 'Permanent Residency', 'Visa Tips', 'Immigration News'];

const allBlogs = [
  {
    id: 1,
    title: 'Canada PR Points Calculator 2026: What Score Do You Need?',
    excerpt: 'Use our Canada PR points calculator 2026 guide to find out how many CRS points you need for Express Entry. Check eligibility and raise your score.',
    category: 'Permanent Residency',
    author: 'Sarah Johnson',
    date: 'August 24, 2026',
    image: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=2000&auto=format&fit=crop',
    slug: 'canada-pr-points-calculator-2026',
    featured: true,
  },
  {
    id: 2,
    title: 'Canada Express Entry vs PNP: Which Pathway is Best?',
    excerpt: 'Deciding between Canada Express Entry vs PNP? Compare processing times, costs, and requirements to choose the best Canada PR pathway for your profile.',
    category: 'Permanent Residency',
    author: 'David Chen',
    date: 'August 20, 2026',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop',
    slug: 'canada-express-entry-vs-pnp',
    featured: false,
  },
  {
    id: 3,
    title: 'Australia PR Pathways 2026: 189 vs 190 vs 491 Visa Compared',
    excerpt: 'Compare the top Australia PR pathways 189 190 491 for 2026. Understand the differences, requirements, and which skilled visa is best for your profile.',
    category: 'Permanent Residency',
    author: 'Emily White',
    date: 'August 15, 2026',
    image: 'https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?q=80&w=2000&auto=format&fit=crop',
    slug: 'australia-pr-pathways-189-190-491',
    featured: false,
  },
  {
    id: 4,
    title: 'UK Student Visa to Work Visa Transition: Complete Guide',
    excerpt: 'Learn how to navigate the UK student visa to work visa transition. We explain the Graduate Route, Skilled Worker visa, and how to find sponsorship easily.',
    category: 'Study Visa',
    author: 'Michael Brown',
    date: 'August 10, 2026',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2000&auto=format&fit=crop',
    slug: 'uk-student-visa-to-work-visa-transition',
    featured: false,
  },
  {
    id: 5,
    title: 'NZ Accredited Employer Work Visa Requirements Explained',
    excerpt: 'Learn everything about the NZ accredited employer work visa. Discover the AEWV application process, salary rules, and how to find an accredited employer NZ.',
    category: 'Work Visa',
    author: 'Sarah Johnson',
    date: 'August 5, 2026',
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=2000&auto=format&fit=crop',
    slug: 'nz-accredited-employer-work-visa',
    featured: false,
  },
  {
    id: 6,
    title: 'UK Skilled Worker Visa Sponsorship Requirements Explained',
    excerpt: 'Learn the exact UK skilled worker visa sponsorship requirements. A guide for employers on sponsor licences, Certificate of Sponsorship (CoS), and costs.',
    category: 'Work Visa',
    author: 'David Chen',
    date: 'August 1, 2026',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop',
    slug: 'uk-skilled-worker-visa-sponsorship-requirements',
    featured: false,
  }
];

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredBlog = allBlogs.find(b => b.featured);
  
  const filteredBlogs = allBlogs.filter(blog => {
    const matchesCategory = activeCategory === 'All' || blog.category === activeCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch && (!blog.featured || searchQuery !== '' || activeCategory !== 'All'); // Hide featured from grid if no filters active
  });

  return (
    <PageTransition>
      <main className="min-h-screen bg-gray-50 pb-20">
        
        {/* Page Header */}
        <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Immigration <span className="text-gold">Insights</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Expert advice, policy updates, and comprehensive guides for your global journey.
            </motion.p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          
          {/* Search & Filter Bar */}
          <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
              />
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
              <Filter className="text-gray-400 w-5 h-5 mr-2 shrink-0 hidden md:block" />
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-bold transition-all shrink-0 ${
                    activeCategory === category 
                      ? 'bg-navy text-white shadow-md' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post (Only show if no search/filter is active) */}
          {activeCategory === 'All' && searchQuery === '' && featuredBlog && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row group border border-gray-100">
                <div className="relative w-full lg:w-1/2 h-72 lg:h-auto overflow-hidden">
                  <Image 
                    src={featuredBlog.image} 
                    alt={featuredBlog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute top-6 left-6 bg-gold text-navy text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    Featured • {featuredBlog.category}
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6 font-medium">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-gold"><User className="w-4 h-4" /></div>
                      {featuredBlog.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-gold"><Calendar className="w-4 h-4" /></div>
                      {featuredBlog.date}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-black text-navy mb-6 group-hover:text-gold transition-colors leading-tight">
                    <Link href={`/blogs/${featuredBlog.slug}`}>
                      {featuredBlog.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {featuredBlog.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blogs/${featuredBlog.slug}`} 
                    className="inline-flex items-center gap-2 text-white bg-navy hover:bg-gold hover:text-navy px-8 py-4 rounded-full font-bold transition-all w-fit group/btn"
                  >
                    Read Full Article <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* Grid Layout */}
          <div className="mb-8">
            <h3 className="text-2xl font-black text-navy mb-8">
              {searchQuery !== '' ? `Search Results for "${searchQuery}"` : activeCategory !== 'All' ? `${activeCategory} Articles` : 'Latest Articles'}
            </h3>
            
            {filteredBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredBlogs.map((blog, idx) => (
                    <motion.article 
                      key={blog.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group flex flex-col"
                    >
                      <div className="relative h-60 overflow-hidden">
                        <Image 
                          src={blog.image} 
                          alt={blog.title} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-500" 
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                        />
                        <div className="absolute top-4 left-4 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full shadow-md">
                          {blog.category}
                        </div>
                      </div>
                      
                      <div className="p-8 flex flex-col flex-1">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 font-medium">
                          <div className="flex items-center gap-1.5">
                            <User className="w-4 h-4 text-gold" />
                            {blog.author}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 text-gold" />
                            {blog.date}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 text-navy group-hover:text-gold transition-colors line-clamp-2 leading-snug">
                          <Link href={`/blogs/${blog.slug}`}>
                            {blog.title}
                          </Link>
                        </h3>
                        
                        <p className="text-gray-600 mb-6 line-clamp-3 flex-1 text-sm leading-relaxed">
                          {blog.excerpt}
                        </p>
                        
                        <Link 
                          href={`/blogs/${blog.slug}`} 
                          className="inline-flex items-center gap-2 text-navy font-bold hover:text-gold transition-colors mt-auto group/link"
                        >
                          Read More <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="text-center py-24 bg-white rounded-3xl border border-gray-100">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-navy mb-2">No articles found</h3>
                <p className="text-gray-500">We couldn&apos;t find any articles matching your search criteria.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                  className="mt-6 text-gold font-bold hover:text-navy transition-colors underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
          
          {/* Mid-Page CTA Banner */}
          <div className="mt-20 mb-20">
            <div className="bg-navy rounded-3xl overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
              <div className="relative p-10 md:p-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="max-w-2xl">
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                    Not sure which visa is right for you?
                  </h3>
                  <p className="text-lg text-gray-300">
                    Navigating visa requirements can be confusing. Let our experts review your profile and help you find the best path forward.
                  </p>
                </div>
                <div className="shrink-0">
                  <Link 
                    href="/contact" 
                    className="inline-flex bg-gold text-navy px-8 py-4 rounded-full font-black text-lg hover:bg-white transition-colors shadow-lg hover:scale-105"
                  >
                    Get a Free Evaluation
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <ConsultationForm />
      </main>
    </PageTransition>
  );
}
