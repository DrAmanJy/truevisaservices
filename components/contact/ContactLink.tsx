import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ContactLinkProps {
  className?: string;
  text?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export default function ContactLink({ 
  className = '', 
  text = 'Book Consultation',
  variant = 'primary'
}: ContactLinkProps) {
  
  const baseStyles = "inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 rounded-full group";
  
  const variants = {
    primary: "bg-navy text-white hover:bg-gold hover:text-navy shadow-lg hover:shadow-xl hover:-translate-y-1 px-7 py-3",
    secondary: "bg-gold text-navy hover:bg-navy hover:text-white shadow-lg hover:shadow-xl hover:-translate-y-1 px-7 py-3",
    outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white px-7 py-3",
  };

  return (
    <Link 
      href="/contact" 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {text}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}
