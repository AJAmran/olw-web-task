'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#F9FAFB] rounded-[32px] p-12 md:p-20 text-center flex flex-col items-center gap-8 border border-gray-50"
        >
          {/* Avatar Group */}
          <div className="flex -space-x-4">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white bg-[#ABB677] overflow-hidden shadow-sm">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alec" alt="Team Member" />
            </div>
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border-4 border-white bg-[#C7B9DA] overflow-hidden z-10 -mt-1 shadow-md">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia" alt="Team Member" />
            </div>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white bg-[#D9B9BB] overflow-hidden shadow-sm">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lori" alt="Team Member" />
            </div>
          </div>

          <div className="space-y-4 max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary">Still have questions?</h3>
            <p className="text-base md:text-lg text-muted font-medium">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 bg-primary hover:bg-opacity-90 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95 cursor-pointer group"
          >
            Get in touch
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

