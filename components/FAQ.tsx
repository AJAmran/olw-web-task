'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { FAQ_DATA } from '@/lib/constants';
import SectionHeader from './SectionHeader';
import Container from './Container';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full bg-white py-24">
      <Container size="wide" className="min-h-[836px] bg-[#F9FAFB] rounded-[16px] flex flex-col items-center py-20 px-6">
        <SectionHeader 
          title="Frequently asked" 
          highlightedTitle="questions" 
          description="Everything you need to know about the product and billing."
          className="mb-[64px]"
        />

        <div className="w-full max-w-[768px] flex flex-col">
          {FAQ_DATA.map((faq, i) => (
            <div
              key={i}
              className="w-full border-b border-[#FDEBF0]"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-[32px] flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-[18px] font-bold text-black group-hover:text-[#ED3C6A] transition-colors">
                  {faq.question}
                </span>

                <div className={`shrink-0 w-[24px] h-[24px] rounded-full border-2 border-[#ED3C6A] flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-[#ED3C6A] text-white' : 'bg-transparent text-[#ED3C6A]'}`}>
                  {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-[32px] text-[15px] text-black/70 leading-[22px] font-medium">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
