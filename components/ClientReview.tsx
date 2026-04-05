'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Container from './Container';

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
    stars: 5
  },
  {
    id: 3,
    name: "Robert Fox",
    text: "Managing professional properties across different cities used to be a nightmare. Now I can track everything from a single dashboard. Highly recommended!",
    image: "/assets/Why%20you%20Choose%20us/room-image.png",
    stars: 5
  },
  {
    id: 4,
    name: "Guy Hawkins",
    text: "The dynamic pricing tool has been a game-changer for my conversion rates. I'm filling gaps that were previously vacant. Excellent implementation.",
    image: "/assets/Why%20you%20Choose%20us/room-image.png",
    stars: 5
  },
  {
    id: 5,
    name: "Albert Flores",
    text: "I was skeptical about AI in hospitality, but Airbnb Assistants proved me wrong. It feels deeply personalized while providing expert-level efficiency.",
    image: "/assets/Why%20you%20Choose%20us/room-image.png",
    stars: 5
  }
];

export default function ClientReview() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with second item centered if possible

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="section-padding bg-white overflow-hidden w-full">
      <div className="w-full">
        
        {/* Title Section */}
        <div className="max-w-7xl mx-auto px-6 mb-[64px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] leading-[42px] font-bold text-black mb-[24px]">
              Check Our Clients <span className="text-[#ED3C6A]">Review</span>
            </h2>
            <p className="text-[14px] leading-[18px] text-black max-w-[713px] mx-auto font-medium">
              Join thousands of satisfied property managers and hosts who have scaled their business with Airbnb Assistants. See how we help our clients succeed.
            </p>
          </motion.div>
        </div>

        {/* Review Slider */}
        <div className="relative w-full overflow-hidden" role="region" aria-label="Customer reviews carousel">
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 left-4 lg:left-12 -translate-y-1/2 z-30">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-primary border border-gray-100 hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Previous review"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 right-4 lg:right-12 -translate-y-1/2 z-30">
            <button 
              onClick={nextSlide}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-primary border border-gray-100 hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Next review"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <motion.div 
            className="flex gap-6 lg:gap-8 px-6 pb-[40px]"
            animate={{ x: `calc(50% - ${(currentIndex * 530) + (currentIndex * 32) + 265}px)` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {reviews.map((review, i) => {
              const isActive = i === currentIndex;
              return (
                <motion.div
                  key={review.id}
                  className={`w-[530px] h-[200px] rounded-[11px] flex items-center p-[24px] gap-[24px] shrink-0 transition-all duration-500
                    ${isActive 
                      ? 'bg-white shadow-[0px_4px_77.4px_rgba(136,136,136,0.41)] scale-105 z-20' 
                      : 'bg-[#F6F6F6] border border-[#F6F6F6] opacity-40 scale-95 z-10'
                    }
                  `}
                >
                  {/* Avatar */}
                  <div className="relative w-[112px] h-[112px] rounded-full overflow-hidden shrink-0 bg-gray-100">
                     <Image 
                        src={review.image} 
                        alt={`Photo of ${review.name}`} 
                        fill 
                        sizes="112px"
                        className="object-cover" 
                     />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-[8px] text-left">
                    <h3 className="text-[20px] font-bold text-black">{review.name}</h3>
                    <p className="text-[12px] leading-[16px] text-black font-medium line-clamp-3">
                      {review.text}
                    </p>
                    <div className="flex gap-[4px] mt-[4px]">
                      {[...Array(review.stars)].map((_, s) => (
                        <Star key={s} size={14} fill="#FF9D00" color="#FF9D00" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`transition-all duration-300 rounded-full h-2
                ${i === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-200 hover:bg-gray-300'}
              `}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

