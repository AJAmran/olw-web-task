'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { FAQ_DATA } from '@/lib/constants';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full bg-white flex justify-center py-24">
      <div className="w-[1240px] min-h-[836px] bg-[#F9FAFB] rounded-[16px] flex flex-col items-center py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-[64px]"
        >
          <h2 className="text-[36px] leading-[47px] font-bold text-black mb-[24px]">
            Frequently asked <span className="text-[#ED3C6A]">questions</span>
          </h2>
          <p className="text-[18px] text-black font-medium opacity-80">
            Everything you need to know about the product and billing.
          </p>
        </motion.div>

        <div className="w-[768px] flex flex-col">
          {FAQ_DATA.map((faq, i) => (
            <div
              key={i}
              className="w-full border-b border-[#FDEBF0]"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-[32px] flex items-center justify-between text-left group cursor-pointer focus:outline-none"
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
      </div>
    </section>
  );
}
