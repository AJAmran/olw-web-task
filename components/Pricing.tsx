'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Freebie",
      description: "Ideal for individuals who need quick access to basic features.",
      price: "0",
      cta: "Get Started",
      isPopular: false,
      features: [
        "20,000+ of PNG & SVG graphics",
        "Access to 100 million stock images",
        "Upload custom icons and fonts",
        "Unlimited Sharing",
        "Upload graphics & video in up to 4k",
        "Unlimited Projects",
        "Instant Access to our design system",
        "Create teams to collaborate on designs",
      ],
      activeFeatures: 2
    },
    {
      name: "Professional",
      description: "Ideal for individuals who who need advanced features and tools for client work.",
      price: isYearly ? "19" : "25",
      cta: "Get Started",
      isPopular: true,
      features: [
        "20,000+ of PNG & SVG graphics",
        "Access to 100 million stock images",
        "Upload custom icons and fonts",
        "Unlimited Sharing",
        "Upload graphics & video in up to 4k",
        "Unlimited Projects",
        "Instant Access to our design system",
        "Create teams to collaborate on designs",
      ],
      activeFeatures: 8
    },
    {
      name: "Enterprise",
      description: "Ideal for businesses who need personalized services and security for large teams.",
      price: isYearly ? "75" : "100",
      cta: "Get Started",
      isPopular: false,
      features: [
        "20,000+ of PNG & SVG graphics",
        "Access to 100 million stock images",
        "Upload custom icons and fonts",
        "Unlimited Sharing",
        "Upload graphics & video in up to 4k",
        "Unlimited Projects",
        "Instant Access to our design system",
        "Create teams to collaborate on designs",
      ],
      activeFeatures: 8
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-[48px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[40px] leading-[52px] font-bold text-[#191D23] mb-[12px]">
              Airbnb Assistant <span className="text-primary lowercase">pricing</span>
            </h2>
            <p className="text-[20px] leading-[26px] font-normal text-[#191D23] mb-[36px] max-w-2xl mx-auto">
              Choose a plan that’s right for you
            </p>
          </motion.div>

          <div className="flex items-center justify-center relative max-w-3xl mx-auto">
            <div className="flex items-center gap-[24px]">
              <span className={`text-[16px] transition-colors ${!isYearly ? 'text-[#191D23] font-medium' : 'text-gray-400 font-medium'}`}>
                Pay Monthly
              </span>
              
              <button
                type="button"
                onClick={() => setIsYearly(!isYearly)}
                className="w-[64px] h-[32px] bg-[#D0D5DD]/40 rounded-full p-1 transition-colors relative flex items-center cursor-pointer"
                aria-label="Toggle billing cycle"
              >
                <motion.div
                  animate={{ x: isYearly ? 32 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="w-[24px] h-[24px] bg-white rounded-full shadow-sm"
                />
              </button>
              
              <span className={`text-[16px] transition-colors ${isYearly ? 'text-[#191D23] font-medium' : 'text-gray-400 font-medium'}`}>
                Pay Yearly
              </span>

              {/* Save 25% Callout */}
              <div className="absolute left-[calc(50%+100px)] top-[-10px] pointer-events-none group">
                <div className="relative w-[185px] h-[87px]">
                  <div className="absolute left-0 top-0 w-full h-full">
                    <Image
                      src="/price-saving-arrow.png"
                      alt=""
                      width={120}
                      height={60}
                      className="object-contain transform rotate-12"
                    />
                  </div>
                  <span className="absolute left-[70px] top-[45px] text-primary font-medium text-[18px] leading-tight flex flex-col items-start">
                    Save 25%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col p-[40px_24px] gap-[40px] h-full transition-all duration-300 hover:shadow-xl ${plan.isPopular
                  ? 'bg-[#ED3C6A] text-white rounded-[12px]'
                  : 'bg-white border border-[#FAC5D2] text-[#191D23] rounded-[10px]'
                }`}
            >
              <div>
                <h3 className="text-[28px] font-bold mb-[12px]">{plan.name}</h3>
                <p className={`text-[16px] leading-[24px] font-normal ${plan.isPopular ? 'text-white/80' : 'text-[#667085]'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-[56px] font-bold tracking-tight">${plan.price}</span>
                <span className={`text-[18px] font-normal ${plan.isPopular ? 'text-white/70' : 'text-[#667085]'}`}>/ Month</span>
              </div>

              <button
                type="button"
                className={`w-full py-[14px] rounded-[5px] font-bold text-[18px] transition-all duration-300 cursor-pointer ${plan.isPopular
                    ? 'bg-white text-[#ED3C6A] hover:bg-gray-50'
                    : 'bg-white border border-[#ED3C6A] text-[#ED3C6A] hover:bg-gray-50'
                  }`}>
                Get Started Now
              </button>

              <div className="flex flex-col gap-[16px] flex-grow">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-[12px]">
                    <div className={`shrink-0 w-[24px] h-[24px] rounded-full flex items-center justify-center ${j < plan.activeFeatures
                        ? (plan.isPopular ? 'bg-white/20' : 'bg-[#ED3C6A]/10')
                        : (plan.isPopular ? 'bg-white/10' : 'bg-gray-100/50')
                      }`}>
                      {j < plan.activeFeatures ? (
                        <Check size={14} className={plan.isPopular ? "text-white" : "text-[#ED3C6A]"} />
                      ) : (
                        <span className="text-gray-300 text-[10px]">✕</span>
                      )}
                    </div>
                    <span className={`text-[16px] font-normal ${j < plan.activeFeatures
                        ? (plan.isPopular ? 'text-white' : 'text-[#191D23]')
                        : (plan.isPopular ? 'text-white/40' : 'text-[#D0D5DD]')
                      }`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

