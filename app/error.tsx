'use client';

import { useEffect } from 'react';
import { RefreshCcw, AlertTriangle, Home } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex items-center justify-center p-6 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl bg-white p-12 rounded-[40px] shadow-[0px_4px_70px_rgba(0,0,0,0.08)] border border-gray-50 flex flex-col items-center"
      >
        <div className="bg-primary/10 p-6 rounded-full mb-8">
           <AlertTriangle size={48} className="text-primary" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Something went wrong!</h2>
        <p className="text-muted text-lg mb-10 font-medium">
          Our assistants encountered an unexpected error while processing your request. Don't worry, your data is safe.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
          <button
            onClick={() => reset()}
            className="flex-1 flex items-center justify-center gap-3 bg-primary text-white w-full px-10 py-5 rounded-2xl font-bold hover:brightness-110 active:scale-95 transition-all duration-300 shadow-xl shadow-primary/20"
          >
            <RefreshCcw size={20} />
            Try Again
          </button>
          
          <Link
            href="/"
            className="flex-1 flex items-center justify-center gap-3 bg-black text-white w-full px-10 py-5 rounded-2xl font-bold hover:bg-gray-800 transition-all duration-300"
          >
            <Home size={20} />
            Go to Home
          </Link>
        </div>
        
        <div className="mt-8 text-xs text-muted/60 font-mono italic">
           Error Digest: {error.digest || "No digest available"}
        </div>
      </motion.div>
    </div>
  );
}
