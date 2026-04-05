'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from './Container';

export default function TrustedBy() {
  const logoItems = [
    { src: '/assets/trusted-section-images/Airbnb-full-icon.png', alt: 'Airbnb', width: 110, height: 34 },
    { src: '/assets/trusted-section-images/bookingcom-full-logo.png', alt: 'Booking.com', width: 150, height: 32 },
    { src: '/assets/trusted-section-images/Vrbo-full-logo.png', alt: 'Vrbo', width: 100, height: 36 },
    { src: '/assets/trusted-section-images/tripadvisor-full-logo.png', alt: 'Tripadvisor', width: 140, height: 34 },
    { src: '/assets/trusted-section-images/Agoda-full-logo.png', alt: 'Agoda', width: 110, height: 30 },
    { src: '/assets/trusted-section-images/expedia-full-logo.png', alt: 'Expedia', width: 120, height: 34 },
    { src: '/assets/trusted-section-images/home-to-go-logo-full.png', alt: 'HomeToGo', width: 120, height: 34 },
  ];

  return (
    <section className="w-full bg-white pt-[115px] pb-[140px]">
      <Container size="full" className="mb-[36px]">
        <h2 className="text-center font-semibold text-[20px] leading-[26px] text-black">
          Trusted by leaders in 50+ industries
        </h2>
      </Container>

      <div 
        className="bg-[#F6F6F6] w-full h-[100px] flex items-center overflow-hidden"
        role="region" 
        aria-label="Trusted platform partners"
      >
        <motion.div 
          className="flex gap-12 lg:gap-16 items-center px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 20, 
            ease: "linear", 
            repeat: Infinity 
          }}
          style={{ width: 'max-content' }}
        >
          {/* Duplicate the items for seamless loop */}
          {[...logoItems, ...logoItems].map((logo, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center transition-transform hover:scale-110 shrink-0"
              style={{ width: `${logo.width}px`, height: `${logo.height}px` }}
            >
              <Image
                src={logo.src}
                alt={`${logo.alt} logo`}
                fill
                sizes={`${logo.width}px`}
                className="object-contain"
                priority={index < 7}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
