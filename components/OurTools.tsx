'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function OurTools() {
  const tools = [
    { name: "PriceLabs", logo: "/assets/toolsimage/pricelabs.png" },
    { name: "Wheelhouse", logo: "/assets/toolsimage/wheelhouse.png" },
    { name: "Beyond Pricing", logo: "/assets/toolsimage/beyond pricing.png" },
    { name: "Hostfully", logo: "/assets/toolsimage/hostfully.png" },
    { name: "Guesty", logo: "/assets/toolsimage/guesty.png" },
    { name: "Lodgify", logo: "/assets/toolsimage/lodgify.png" },
    { name: "Hostfully", logo: "/assets/toolsimage/hostfully.png" },
    { name: "Guesty", logo: "/assets/toolsimage/guesty.png" },
    { name: "Lodgify", logo: "/assets/toolsimage/lodgify.png" },
  ];

  return (
    <section id="tools" className="section-padding bg-[#FAFAFA]">
      <div className="container-wide text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h2 className="text-[32px] leading-[42px] font-bold text-black mb-[24px]">
            Our <span className="text-[#ED3C6A]">Tools</span>
          </h2>
          <p className="text-[14px] leading-[18px] text-black max-w-[738px] mx-auto mb-[64px] font-medium text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[34px] gap-y-[40px] justify-items-center">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className={`bg-white group relative w-[290px] h-[139px] rounded-[11px] flex items-center justify-center p-8 transition-all duration-300 hover:scale-105 ${i === 0 ? 'shadow-[0px_4px_30.3px_rgba(255,138,168,0.28)]' : 'shadow-sm'
                }`}
            >
              <div className="relative w-full h-full transition-all duration-300">
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  fill
                  className="object-contain"
                  sizes="290px"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

