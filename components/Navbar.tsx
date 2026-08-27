'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Plane, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import CallButton from './contact/CallButton';
import WhatsAppButton from './contact/WhatsAppButton';
import ContactLink from './contact/ContactLink';

const servicesLinks = [
  { name: 'Study Visa', href: '/services/study-visa' },
  { name: 'Work Visa', href: '/services/work-visa' },
  { name: 'Tourist Visa', href: '/services/tourist-visa' },
  { name: 'Permanent Residency', href: '/services/permanent-residency' },
  { name: 'Business Visa', href: '/services/business-visa' },
  { name: 'Family Visa', href: '/services/family-visa' },
];

const destinationLinks = [
  { name: 'Canada', href: '/destinations/canada' },
  { name: 'Australia', href: '/destinations/australia' },
  { name: 'United Kingdom', href: '/destinations/united-kingdom' },
  { name: 'United States', href: '/destinations/united-states' },
  { name: 'Germany', href: '/destinations/germany' },
  { name: 'New Zealand', href: '/destinations/new-zealand' },
  { name: 'UAE', href: '/destinations/uae' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkHero = pathname !== '/';

  const navTextColorClass = scrolled ? 'text-[#2A2522]' : (isDarkHero ? 'text-gray-200' : 'text-[#2A2522]');
  const menuIconClass = scrolled ? 'text-[#2A2522]' : (isDarkHero ? 'text-white' : 'text-[#2A2522]');

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm h-20' : 'bg-transparent h-28'
      } px-4 md:px-12 flex items-center justify-between border-b ${scrolled ? 'border-gray-200/50' : 'border-transparent'}`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className={`relative w-[180px] h-[65px] transition-all duration-300 group-hover:scale-105 ${
            (!scrolled && isDarkHero) ? 'bg-white rounded-2xl shadow-lg px-2' : ''
          }`}>
            <Image
              src="/logo.jpeg"
              alt="True Visa Logo"
              fill
              className={`object-contain ${(!scrolled && isDarkHero) ? 'p-2 rounded-2xl' : 'mix-blend-multiply'}`}
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
          <Link href="/" className={`${pathname === '/' ? 'text-gold' : navTextColorClass} hover:text-gold transition-colors relative`}>
            Home
            {pathname === '/' && <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-gold rounded-full" />}
          </Link>
          <Link href="/about" className={`${pathname === '/about' ? 'text-gold' : navTextColorClass} hover:text-gold transition-colors relative`}>
            About Us
            {pathname === '/about' && <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-gold rounded-full" />}
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative group py-6">
            <Link href="/services" className={`flex items-center gap-1 ${pathname.includes('/services') ? 'text-gold' : navTextColorClass} hover:text-gold transition-colors relative`}>
              Services <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              {pathname.includes('/services') && <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-gold rounded-full" />}
            </Link>
            <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden border border-gray-100 transform translate-y-2 group-hover:translate-y-0">
              {servicesLinks.map((link) => (
                <Link key={link.name} href={link.href} className="px-5 py-3 hover:bg-orange-50 hover:text-gold transition-colors text-navy-light font-medium">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Destinations Dropdown */}
          <div className="relative group py-6">
            <Link href="/destinations" className={`flex items-center gap-1 ${pathname.includes('/destinations') ? 'text-gold' : navTextColorClass} hover:text-gold transition-colors relative`}>
              Destinations <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              {pathname.includes('/destinations') && <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-gold rounded-full" />}
            </Link>
            <div className="absolute top-full left-0 w-56 bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden border border-gray-100 transform translate-y-2 group-hover:translate-y-0">
              {destinationLinks.map((link) => (
                <Link key={link.name} href={link.href} className="px-5 py-3 hover:bg-orange-50 hover:text-gold transition-colors text-navy-light font-medium">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/blogs" className={`${pathname === '/blogs' ? 'text-gold' : navTextColorClass} hover:text-gold transition-colors relative`}>
            Blogs
            {pathname === '/blogs' && <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-gold rounded-full" />}
          </Link>
          
          <Link href="/faq" className={`${pathname === '/faq' ? 'text-gold' : navTextColorClass} hover:text-gold transition-colors relative mr-2`}>
            FAQ
            {pathname === '/faq' && <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-gold rounded-full" />}
          </Link>

          {/* Quick Contact Icons */}
          <div className="flex items-center gap-2 border-l border-gray-300/30 pl-6 ml-2">
            <CallButton showText={false} variant="ghost" className={navTextColorClass} />
            <WhatsAppButton showText={false} variant="ghost" className={navTextColorClass} />
          </div>

          <ContactLink className="ml-2" />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={`${menuIconClass} w-6 h-6 transition-colors`} />
          ) : (
            <Menu className={`${menuIconClass} w-6 h-6 transition-colors`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t lg:hidden overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6 max-h-[80vh] overflow-y-auto">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-navy font-bold text-lg hover:text-gold">Home</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-navy font-bold text-lg hover:text-gold">About Us</Link>
              
              <div className="flex flex-col gap-3 border-l-2 border-gray-100 pl-4 ml-2">
                <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-navy font-bold text-lg hover:text-gold">Services Overview</Link>
                {servicesLinks.map(link => (
                  <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-gray-600 hover:text-gold">{link.name}</Link>
                ))}
              </div>

              <div className="flex flex-col gap-3 border-l-2 border-gray-100 pl-4 ml-2">
                <Link href="/destinations" onClick={() => setMobileMenuOpen(false)} className="text-navy font-bold text-lg hover:text-gold">Destinations Overview</Link>
                {destinationLinks.map(link => (
                  <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-gray-600 hover:text-gold">{link.name}</Link>
                ))}
              </div>

              <Link href="/blogs" onClick={() => setMobileMenuOpen(false)} className="text-navy font-bold text-lg hover:text-gold">Blogs</Link>
              <Link href="/faq" onClick={() => setMobileMenuOpen(false)} className="text-navy font-bold text-lg hover:text-gold">FAQ</Link>

              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
                <CallButton className="w-full" />
                <WhatsAppButton className="w-full" />
                <ContactLink text="Book Free Consultation" variant="secondary" className="w-full mt-2" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
