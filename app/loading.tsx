import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8] z-[100] fixed inset-0">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-12 h-12 text-gold animate-spin" />
        <p className="text-navy font-semibold uppercase tracking-wider text-sm">Loading True Visa...</p>
      </div>
    </div>
  );
}
