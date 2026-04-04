"use client";

import Image from 'next/image';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  interface Dot {
    color: string;
    top: string;
    xOffset: string;
    size: string;
  }

  const dots: Dot[] = [
    { color: '#FF5A5F', top: '445px', xOffset: '-516px', size: '13px' }, // Ellipse 2
    { color: '#635BFF', top: '230px', xOffset: '-633px', size: '13px' }, // Ellipse 7
    { color: '#5AFAFF', top: '626px', xOffset: '5px', size: '13px' },    // Ellipse 5
    { color: '#0C3B7C', top: '564px', xOffset: '602px', size: '7px' },    // Ellipse 3
    { color: '#FFEC5A', top: '305px', xOffset: '517px', size: '13px' },   // Ellipse 6
    { color: '#34E0A1', top: '192px', xOffset: '-10px', size: '15px' },   // Ellipse 4
  ];

  const tiles = [
    {
      src: "/assets/hero-section-images/airbnb.png",
      alt: "Airbnb",
      top: '18%', left: '18.5%',
      rotate: '-15deg',
      bgColor: 'bg-[#FF5A5F]',
      shadowColor: 'hover:shadow-[0px_12px_36px_rgba(255,90,95,0.4)]'
    },
    {
      src: "/assets/hero-section-images/Bcom.png",
      alt: "Booking.com",
      top: '20%', right: '19%',
      rotate: '22deg',
      bgColor: 'bg-[#003580]',
      shadowColor: 'hover:shadow-[0px_12px_36px_rgba(0,53,128,0.4)]'
    },
    {
      src: "/assets/hero-section-images/Vrbo.png",
      alt: "Vrbo",
      bottom: '18%', left: '21.5%',
      rotate: '-23.23deg',
      bgColor: 'bg-[#1E1B4B]',
      shadowColor: 'hover:shadow-[0px_12px_36px_rgba(30,27,75,0.4)]'
    },
    {
      src: "/assets/hero-section-images/TripAdvisor.png",
      alt: "TripAdvisor",
      bottom: '21%', right: '24%',
      rotate: '22deg',
      bgColor: 'bg-[#00AF87]',
      shadowColor: 'hover:shadow-[0px_12px_36px_rgba(0,175,135,0.4)]'
    }
  ];

  return (
    <section className="relative w-full min-h-[700px] lg:h-[800px] bg-white overflow-hidden flex items-center">

      {/* Top Gradient Background */}
      <div className="absolute top-0 inset-x-0 h-[300px] bg-linear-to-b from-[#ED3C6A]/10 to-transparent z-0 pointer-events-none"></div>

      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.08]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      ></div>

      {/* Floating Elements (Desktop only) */}
      <div className="hidden lg:block absolute inset-0 container mx-auto px-6 max-w-7xl h-full pointer-events-none z-10">
        {/* Tiny Dots */}
        {dots.map((dot, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: dot.xOffset, scale: 0 }}
            animate={{ opacity: 1, x: dot.xOffset, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className="absolute rounded-full"
            style={{
              top: dot.top,
              left: '50%',
              width: dot.size,
              height: dot.size,
              backgroundColor: dot.color,
              boxShadow: 'inset 0px -2px 6.3px rgba(0, 0, 0, 0.25)'
            }}
          ></motion.div>
        ))}

        {/* Brand Tiles */}
        {tiles.map((tile, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: tile.rotate }}
            transition={{ duration: 0.8, delay: 0.5 + (index * 0.1) }}
            className={`absolute w-[100px] h-[100px] lg:w-[106px] lg:h-[106px] rounded-[24px] ${tile.bgColor} flex items-center justify-center shadow-[0px_10px_30px_rgba(0,0,0,0.1)] transition-all duration-500 hover:scale-110 pointer-events-auto cursor-pointer p-6 ${tile.shadowColor}`}
            style={{
              top: tile.top || 'auto',
              bottom: tile.bottom || 'auto',
              left: tile.left || 'auto',
              right: tile.right || 'auto',
            }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {tile.alt === "Booking.com" ? (
                <span className="text-white font-bold text-[40px] md:text-[44px] leading-none select-none tracking-tighter">B.</span>
              ) : (
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  width={60}
                  height={60}
                  className="object-contain"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative w-full z-30">
        {/* Desktop View (Pixel Perfect) */}
        <div className="hidden lg:block relative h-[800px] w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Airbnb Assistants For */}
            <h1
              className="absolute font-bold text-[48px] lg:text-[48px] leading-[62px] text-center text-black whitespace-nowrap"
              style={{
                left: '50%',
                transform: 'translateX(calc(-50% - 3px))',
                top: '253px'
              }}
            >
              Airbnb Assistants For
            </h1>

            {/* Property Management */}
            <h2
              className="absolute font-medium text-[38.1252px] leading-[50px] text-center text-black whitespace-nowrap"
              style={{
                left: '50%',
                transform: 'translateX(calc(-50% - 2.5px))',
                top: '315px'
              }}
            >
              Property Management
            </h2>

            {/* Description */}
            <p
              className="absolute font-medium text-[14px] leading-[18px] text-center text-black"
              style={{
                width: '665px',
                left: '50%',
                transform: 'translateX(calc(-50% + 0.5px))',
                top: '396px'
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* Eye-catching Button */}
            <button
              type="button"
              className="absolute bg-[#ED3C6A] rounded-[5px] flex flex-row justify-center items-center gap-[10px] text-white font-bold text-[14px] leading-none cursor-pointer hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-[#ED3C6A]/20 group whitespace-nowrap"
              style={{
                width: '201px',
                height: '50px',
                left: '50%',
                transform: 'translateX(calc(-50% + 0.5px))',
                top: '489px',
                padding: '18px 24px'
              }}
            >
              Schedule A Meeting
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                <path d="M11 1L15 5M15 5L11 9M15 5H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* See Pricing */}
            <NextLink
              href="#pricing"
              className="absolute flex items-center justify-center font-medium text-[14px] leading-[100%] text-center underline text-black hover:text-[#ED3C6A] transition-colors"
              style={{
                left: '50%',
                transform: 'translateX(calc(-50% + 0.5px))',
                top: '566px'
              }}
            >
              See Pricing
            </NextLink>
          </motion.div>
        </div>

        {/* Mobile/Tablet Content (Responsive fallback) */}
        <div className="lg:hidden container-wide py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-black font-bold leading-[1.2] mb-4 text-[36px] md:text-[48px]">
              Airbnb Assistants For
              <span className="block font-medium text-[28px] md:text-[38px] mt-2">
                Property Management
              </span>
            </h1>

            <p className="text-[14px] leading-normal text-black max-w-[600px] mb-10 mx-auto font-medium px-4">
              Maximize your rental income and minimize your stress. Our professional management tools and dedicated support team help you scale your Airbnb business effortlessly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                type="button"
                className="w-full sm:w-auto bg-[#ED3C6A] text-white px-8 py-4 rounded-[5px] font-bold text-sm flex items-center justify-center gap-[10px] group whitespace-nowrap"
              >
                Schedule A Meeting
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                  <path d="M11 1L15 5M15 5L11 9M15 5H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <NextLink
                href="#pricing"
                className="text-sm font-medium text-black underline underline-offset-4"
              >
                See Pricing
              </NextLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

