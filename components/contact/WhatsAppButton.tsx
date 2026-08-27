import React from 'react';
import { CONTACT_INFO } from '@/lib/contact';

interface WhatsAppButtonProps {
  className?: string;
  showText?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'brand';
  text?: string;
}

export default function WhatsAppButton({ 
  className = '', 
  showText = true,
  variant = 'brand',
  text = 'WhatsApp Us'
}: WhatsAppButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 rounded-full";
  
  const variants = {
    primary: "bg-navy text-white hover:bg-gold hover:text-navy shadow-lg hover:shadow-xl hover:-translate-y-1 px-6 py-3",
    secondary: "bg-gold text-navy hover:bg-navy hover:text-white shadow-lg hover:shadow-xl hover:-translate-y-1 px-6 py-3",
    outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white px-6 py-3",
    ghost: "text-navy hover:text-gold p-2",
    brand: "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg hover:shadow-xl hover:-translate-y-1 px-6 py-3",
  };

  return (
    <a 
      href={CONTACT_INFO.whatsapp.link} 
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
      aria-label="Chat with us on WhatsApp"
    >
      {/* Custom WhatsApp Icon using SVG to avoid extra dependencies if standard lucide doesn't have it natively or if we want the brand look */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={showText ? "20" : "24"} 
        height={showText ? "20" : "24"} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
      </svg>
      {showText && <span>{text}</span>}
    </a>
  );
}
