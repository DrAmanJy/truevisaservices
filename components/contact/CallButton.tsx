import React from 'react';
import { Phone } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact';

interface CallButtonProps {
  className?: string;
  showText?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

export default function CallButton({ 
  className = '', 
  showText = true,
  variant = 'primary'
}: CallButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 rounded-full";
  
  const variants = {
    primary: "bg-navy text-white hover:bg-gold hover:text-navy shadow-lg hover:shadow-xl hover:-translate-y-1 px-6 py-3",
    secondary: "bg-gold text-navy hover:bg-navy hover:text-white shadow-lg hover:shadow-xl hover:-translate-y-1 px-6 py-3",
    outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white px-6 py-3",
    ghost: "text-navy hover:text-gold p-2",
  };

  return (
    <a 
      href={CONTACT_INFO.phone.link} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      aria-label={`Call us at ${CONTACT_INFO.phone.display}`}
    >
      <Phone className={showText ? "w-5 h-5" : "w-6 h-6"} />
      {showText && <span>{CONTACT_INFO.phone.display}</span>}
    </a>
  );
}
