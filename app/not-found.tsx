import Link from 'next/link';
import { Home, Search, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <Search className="w-10 h-10 text-gold" />
        </div>
        <h1 className="text-6xl font-black text-navy mb-4">404</h1>
        <h2 className="text-2xl font-bold text-navy mb-4">Page Not Found</h2>
        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let us help you find what you need.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-gold hover:text-navy transition-all"
          >
            <Home className="w-5 h-5" />
            Go to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-navy text-navy px-8 py-4 rounded-xl font-bold hover:bg-navy hover:text-white transition-all"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="border-t border-gray-200 pt-10">
          <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-6">Popular Pages</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/services" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-navy font-medium hover:border-gold hover:text-gold transition-colors">Services</Link>
            <Link href="/destinations" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-navy font-medium hover:border-gold hover:text-gold transition-colors">Destinations</Link>
            <Link href="/blogs" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-navy font-medium hover:border-gold hover:text-gold transition-colors">Blog</Link>
            <Link href="/faq" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-navy font-medium hover:border-gold hover:text-gold transition-colors">FAQ</Link>
            <Link href="/about" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-navy font-medium hover:border-gold hover:text-gold transition-colors">About Us</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
