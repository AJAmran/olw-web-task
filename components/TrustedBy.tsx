'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

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

  const duplicatedLogos = [...logoItems, ...logoItems, ...logoItems];

  return (
    <section className="w-full bg-white pt-[115px] pb-[140px]">
      <div className="container-wide mb-[36px]">
        <h3 className="text-center font-semibold text-[20px] leading-[26px] text-black">
          Trusted by leaders in 50+ industries
        </h3>
      </div>

      <div className="bg-[#F6F6F6] w-full h-[77px] flex items-center overflow-hidden">
        <div className="container mx-auto px-10 flex items-center justify-between gap-4">
          {logoItems.map((logo, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center transition-transform hover:scale-110"
              style={{ width: `${logo.width}px`, height: `${logo.height}px` }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                priority={index < 7}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

