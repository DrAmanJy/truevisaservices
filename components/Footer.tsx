import { MapPin, Phone, Mail, Facebook, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { CONTACT_INFO } from '@/lib/contact';

export default function Footer() {
  return (
    <footer className="bg-[#2A2522] text-[#E5E0DC] py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-8 group">
              <div className="relative w-[200px] h-[72px] bg-white rounded-2xl transition-all duration-300 group-hover:scale-105 shadow-xl shadow-black/20 border border-white/10">
                <Image
                  src="/logo.jpeg"
                  alt="True Visa Logo"
                  fill
                  className="object-contain p-2.5 rounded-2xl"
                />
              </div>
            </Link>
            <p className="mb-8 leading-relaxed text-[#BDB5AD]">
              Your trusted partner for global mobility. We provide transparent, expert guidance to help you navigate complex immigration processes with confidence.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Truevisaservices/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold transition-colors group"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5 text-gold group-hover:text-navy transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4 font-medium">
              <li><Link href="/" className="text-[#BDB5AD] hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-[#BDB5AD] hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-[#BDB5AD] hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="/destinations" className="text-[#BDB5AD] hover:text-gold transition-colors">Destinations</Link></li>
              <li><Link href="/blogs" className="text-[#BDB5AD] hover:text-gold transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="text-[#BDB5AD] hover:text-gold transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-[#BDB5AD] hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-wider text-sm">Visa Services</h4>
            <ul className="space-y-4 font-medium">
              <li><Link href="/services/study-visa" className="text-[#BDB5AD] hover:text-gold transition-colors">Study Visa</Link></li>

              <li><Link href="/services/permanent-residency" className="text-[#BDB5AD] hover:text-gold transition-colors">Permanent Residency</Link></li>
              <li><Link href="/services/business-visa" className="text-[#BDB5AD] hover:text-gold transition-colors">Business Visa</Link></li>
              <li><Link href="/services/tourist-visa" className="text-[#BDB5AD] hover:text-gold transition-colors">Tourist Visa</Link></li>
              <li><Link href="/services/family-visa" className="text-[#BDB5AD] hover:text-gold transition-colors">Family Visa</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                  <MapPin className="w-5 h-5 text-gold group-hover:text-navy transition-colors" />
                </div>
                <address className="not-italic text-[#BDB5AD] leading-relaxed mt-1">{CONTACT_INFO.address.street},<br/>{CONTACT_INFO.address.city}, {CONTACT_INFO.address.postalCode}</address>
              </li>
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                  <Phone className="w-5 h-5 text-gold group-hover:text-navy transition-colors" />
                </div>
                <div className="flex flex-col justify-center">
                  <a href={CONTACT_INFO.phone.link} className="text-[#BDB5AD] hover:text-white transition-colors">{CONTACT_INFO.phone.display}</a>
                </div>
              </li>
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                  <MessageCircle className="w-5 h-5 text-gold group-hover:text-navy transition-colors" />
                </div>
                <div className="flex flex-col justify-center">
                  <a href={CONTACT_INFO.whatsapp.link} target="_blank" rel="noopener noreferrer" className="text-[#BDB5AD] hover:text-white transition-colors">{CONTACT_INFO.whatsapp.display}</a>
                </div>
              </li>
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                  <Mail className="w-5 h-5 text-gold group-hover:text-navy transition-colors" />
                </div>
                <div className="flex flex-col justify-center">
                  <a href={CONTACT_INFO.email.link} className="text-[#BDB5AD] hover:text-white transition-colors">{CONTACT_INFO.email.display}</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#BDB5AD]">
          <p>© {new Date().getFullYear()} True Visa Immigration. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
