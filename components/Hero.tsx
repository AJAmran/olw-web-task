"use client";

import Image from 'next/image';
import NextLink from 'next/link';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import ScheduleMeetingBtn from './ScheduleMeetingBtn';

interface Dot {
  color: string;
  top: string;
  xOffset: string;
  size: string;
}

export default function Hero() {

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

      {/* Floating Elements (Desktop only) - deferred with LazyMotion */}
      <LazyMotion features={domAnimation} strict>
        <div className="hidden lg:block absolute inset-0 container mx-auto px-6 max-w-7xl h-full pointer-events-none z-10">
          {/* Tiny Dots */}
          {dots.map((dot, index) => (
            <m.div
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
            ></m.div>
          ))}

          {/* Brand Tiles */}
          {tiles.map((tile, index) => (
            <m.div
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
                    priority
                  />
                )}
              </div>
            </m.div>
          ))}
        </div>
      </LazyMotion>

      {/* Main Content — plain HTML, no motion wrapper around LCP text */}
      <div className="relative w-full z-30">
        {/* Desktop View (Pixel Perfect) */}
        <div className="hidden lg:block relative h-[800px] w-full">
          {/* LCP: H1 rendered with no JS dependency for fastest paint */}
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

          <ScheduleMeetingBtn 
            variant="primary" 
            className="absolute left-1/2 -translate-x-[calc(50%-0.5px)] top-[489px] min-w-[201px] h-[50px] px-4"
          />

          <NextLink
            href="#pricing"
            aria-label="View pricing plans"
            className="absolute flex items-center justify-center font-medium text-[14px] leading-[100%] text-center underline text-black hover:text-[#ED3C6A] transition-colors"
            style={{
              left: '50%',
              transform: 'translateX(calc(-50% + 0.5px))',
              top: '566px'
            }}
          >
            See Pricing
          </NextLink>
        </div>

        {/* Mobile/Tablet Content — plain HTML for fast LCP */}
        <div className="lg:hidden w-full px-4 sm:px-6 py-14 text-center">
          <h1 className="text-black font-bold leading-[1.2] mb-3 text-[28px] sm:text-[36px] md:text-[44px]">
            Airbnb Assistants For
          </h1>
          <h2 className="block font-medium text-[20px] sm:text-[26px] md:text-[34px] mt-1 mb-5 text-black leading-[1.3]">
            Property Management
          </h2>

          <p className="text-[13px] sm:text-[14px] leading-relaxed text-black max-w-[520px] mb-8 mx-auto font-medium">
            Maximize your rental income and minimize your stress. Our professional management tools and dedicated support team help you scale your Airbnb business effortlessly.
          </p>

          <div className="flex flex-col items-center gap-4">
            <ScheduleMeetingBtn variant="primary" className="w-full max-w-[280px]" />
            <NextLink
              href="#pricing"
              className="text-sm font-medium text-black underline underline-offset-4"
            >
              See Pricing
            </NextLink>
          </div>
        </div>
      </div>
    </section>
  );
}

