'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from './Button';
import Container from './Container';

export default function CTASection() {
  return (
    <section className="section-padding bg-white">
      <Container size="wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#F9FAFB] rounded-[32px] p-12 md:p-20 text-center flex flex-col items-center gap-8 border border-gray-50"
        >
          {/* Avatar Group */}
          <div className="flex -space-x-4" aria-label="Our team members">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white bg-[#ABB677] overflow-hidden shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alec" alt="Alec, team member" width={64} height={64} />
            </div>
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border-4 border-white bg-[#C7B9DA] overflow-hidden z-10 -mt-1 shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia" alt="Olivia, team member" width={80} height={80} />
            </div>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white bg-[#D9B9BB] overflow-hidden shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lori" alt="Lori, team member" width={64} height={64} />
            </div>
          </div>

          <div className="space-y-4 max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary">Still have questions?</h3>
            <p className="text-base md:text-lg text-muted font-medium">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
          </div>

          <Button
            variant="primary"
            size="lg"
            icon={ArrowRight}
            className="rounded-xl px-10 shadow-lg shadow-primary/20 hover:scale-105 active:scale-95"
          >
            Get in touch
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
