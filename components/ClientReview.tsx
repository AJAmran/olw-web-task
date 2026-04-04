'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Jenny Wilson",
    text: "Airbnb Assistants transformed my hosting experience. Their tools are intuitive and the support is unmatched. I've increased my revenue by 30% in just two months.",
    image: "/assets/Why%20you%20Choose%20us/room-image.png",
    stars: 5
  },
  {
    id: 2,
    name: "Esther Howard",
    text: "The automated cleaning schedule is a lifesaver. I no longer have to worry about turnover timing. The platform handles everything seamlessly.",
    image: "/assets/Why%20you%20Choose%20us/room-image.png",
    isCenter: true,
    stars: 5
  },
  {
    id: 3,
    name: "Robert Fox",
    text: "Managing professional properties across different cities used to be a nightmare. Now I can track everything from a single dashboard. Highly recommended!",
    image: "/assets/Why%20you%20Choose%20us/room-image.png",
    stars: 5
  }
];

export default function ClientReview() {
  return (
    <section id="reviews" className="section-padding bg-white overflow-hidden">
      <div className="container-wide">
        
        {/* Title Section */}
        <div className="text-center mb-[64px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] leading-[42px] font-bold text-black mb-[24px]">
              Check Our Clients <span className="text-[#ED3C6A]">Review</span>
            </h2>
            <p className="text-[14px] leading-[18px] text-black max-w-[713px] mx-auto font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </motion.div>
        </div>

        {/* Review Grid - Horizontal Scroll/List style */}
        <div className="flex justify-center items-center gap-[24px] overflow-visible pb-[60px]">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`w-[530px] h-[200px] rounded-[11px] flex items-center p-[24px] gap-[24px] shrink-0
                ${review.isCenter 
                  ? 'bg-white shadow-[0px_4px_77.4px_rgba(136,136,136,0.41)] z-20' 
                  : 'bg-[#F6F6F6] border border-[#F6F6F6] z-10'
                }
              `}
            >
              {/* Avatar */}
              <div className="relative w-[112px] h-[112px] rounded-full overflow-hidden shrink-0">
                 <Image src={review.image} alt={review.name} fill className="object-cover" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-[8px] text-left">
                <h3 className="text-[20px] font-bold text-black">{review.name}</h3>
                <p className="text-[12px] leading-[16px] text-black font-medium line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex gap-[4px] mt-[4px]">
                  {[...Array(review.stars)].map((_, s) => (
                    <Star key={s} size={14} fill="#FF9D00" color="#FF9D00" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-12">
           <div className="w-8 h-2 rounded-full bg-primary"></div>
           <div className="w-2 h-2 rounded-full bg-gray-200"></div>
           <div className="w-2 h-2 rounded-full bg-gray-200"></div>
        </div>

      </div>
    </section>
  );
}

