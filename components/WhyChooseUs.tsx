'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  addDays,
  isWithinInterval
} from 'date-fns';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 3, 4));

  const rangeStart = addDays(startOfMonth(currentDate), 7);
  const rangeEnd = addDays(startOfMonth(currentDate), 10);

  const days = useMemo(() => {
    const start = startOfWeek(startOfMonth(currentDate), { weekStartsOn: 1 });
    const end = endOfWeek(endOfMonth(currentDate), { weekStartsOn: 1 });
    return eachDayOfInterval({ start, end });
  }, [currentDate]);

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 w-full max-w-[240px] border border-gray-50 flex flex-col items-center">
      <div className="w-full flex items-center justify-between mb-4">
        <div className="w-16 h-2 bg-primary/10 rounded-full"></div>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => setCurrentDate(subMonths(currentDate, 1))}
            className="w-6 h-6 bg-secondary rounded flex items-center justify-center hover:bg-black transition-colors"
          >
            <ChevronLeft size={14} className="text-white" />
          </button>
          <button
            type="button"
            onClick={() => setCurrentDate(addMonths(currentDate, 1))}
            className="w-6 h-6 bg-secondary rounded flex items-center justify-center hover:bg-black transition-colors"
          >
            <ChevronRight size={14} className="text-white" />
          </button>
        </div>
      </div>

      <div className="w-full grid grid-cols-7 gap-y-1 text-center font-dm-sans">
        {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(d => (
          <div key={d} className="text-[10px] font-bold text-secondary mb-1">{d}</div>
        ))}

        {days.map((day, i) => {
          const isSelected = isWithinInterval(day, { start: rangeStart, end: rangeEnd }) && isSameMonth(day, currentDate);
          const isStart = isSameDay(day, rangeStart) && isSameMonth(day, currentDate);
          const isEnd = isSameDay(day, rangeEnd) && isSameMonth(day, currentDate);
          const currentMonth = isSameMonth(day, currentDate);

          return (
            <div key={i} className="relative flex items-center justify-center h-6">
              {isSelected && (
                <div className={`absolute inset-0 bg-primary ${isStart ? 'rounded-l-sm' : ''
                  } ${isEnd ? 'rounded-r-sm' : ''
                  } ${!isStart && !isEnd ? 'opacity-20' : ''} scale-y-[1.1]`}></div>
              )}
              <span className={`text-[9px] font-bold relative z-10 ${isSelected && (isStart || isEnd) ? 'text-white' : currentMonth ? 'text-secondary' : 'text-gray-300'
                }`}>{format(day, 'd')}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function WhyChooseUs() {
  const features = [
    { title: "Brilliant Client Service" },
    { title: "Flexibility & Adaptability" },
    { title: "We make it Personal" },
    { title: "Expert team members" }
  ];

  return (
    <section id="why-us" className="section-padding bg-white overflow-hidden">
      <div className="container-wide">
        <div className="bg-[#FDEBF0] border border-[#F8BECD] rounded-[48px] p-8 md:p-16 lg:p-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content Area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="z-10 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <h2 className="text-[36px] leading-[47px] font-bold text-black mb-[24px] max-w-[416px]">
              Few Reasons Why you Choose us?
            </h2>

            <p className="text-[14px] leading-[18px] text-black mb-[32px] max-w-[457px] font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </p>

            <div className="flex flex-col gap-[14px] mb-[44px]">
              {[
                "Brilliant Client Service",
                "Flexibility & Adaptability",
                "We make it Personal",
                "We have experts in our team"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-[8px]">
                  <div className="w-[32px] h-[32px] rounded-full bg-[#ED3C6A]/10 flex items-center justify-center">
                    <Check size={18} className="text-[#ED3C6A]" />
                  </div>
                  <span className="text-[18px] font-bold text-black">{text}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="w-[201px] h-[50px] bg-[#ED3C6A] text-white flex items-center justify-center gap-2 rounded-[5px] font-bold text-[15px] hover:bg-opacity-90 transition-all cursor-pointer whitespace-nowrap"
            >
              Schedule A Meeting
              <ChevronRight size={16} />
            </button>
          </motion.div>

          {/* Right Visual Visual Composition area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block relative h-[500px] w-full"
          >
          {/* Right Visual Visual Composition area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block relative h-[500px] w-full"
          >
            {/* Background pill blob - Shifted slightly left to avoid right edge clipping */}
            <div
              className="absolute left-[-20px] top-[100px] w-[570px] h-[337px] bg-[#FAC4D2] shadow-[inset_3px_-5px_4px_rgba(0,0,0,0.07)]"
              style={{ borderRadius: '168.5px' }}
            ></div>

            {/* Worker image - Shifted left to follow the blob */}
            <div className="absolute left-[83px] top-[0px] w-[327px] h-[437px] z-20 pointer-events-none">
              <Image
                src="/assets/Why%20you%20Choose%20us/smilling-male-office-worker.png"
                alt=""
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Floating cards */}
            {/* Listing Card (Group 39886) */}
            <div className="absolute left-[-70px] top-[34px] w-[254px] h-[105px] z-30 bg-white rounded-[15px] shadow-xl p-3 flex gap-3 border border-white/50 backdrop-blur-sm">
              <div className="relative w-[100px] h-full rounded-[8px] overflow-hidden shrink-0">
                <Image src="/assets/Why%20you%20Choose%20us/room-image.png" alt="" fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-center gap-1.5 overflow-hidden">
                <div className="w-[80px] h-[6px] bg-gray-100 rounded-full"></div>
                <div className="w-[50px] h-[6px] bg-gray-100 rounded-full"></div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={8} fill="#FF9D00" color="#FF9D00" />)}
                </div>
                <div className="text-[16px] font-bold text-[#ED3C6A]">$75<span className="text-gray-400 text-[10px] font-normal ml-1">/night</span></div>
              </div>
            </div>

            {/* Brands Card (Group 39885) - Shifted inward from right edge */}
            <div className="absolute left-[350px] top-[18px] w-[159px] h-[164px] z-40 bg-white rounded-[15px] shadow-xl p-4 grid grid-cols-2 gap-3 border border-gray-50 flex items-center justify-center">
              <div className="relative aspect-square bg-[#FF5A5F] rounded-lg flex items-center justify-center p-2">
                <Image src="/assets/Why%20you%20Choose%20us/airbnb.png" alt="Airbnb" width={22} height={22} className="brightness-0 invert" />
              </div>
              <div className="relative aspect-square bg-[#0E214B] rounded-lg flex items-center justify-center p-2">
                <Image src="/assets/Why%20you%20Choose%20us/Vrbo.png" alt="Vrbo" width={22} height={22} />
              </div>
              <div className="relative aspect-square bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">B.</div>
              <div className="relative aspect-square bg-[#34E0A1] rounded-lg flex items-center justify-center p-2">
                <Image src="/assets/Why%20you%20Choose%20us/Tripadvisor.png" alt="Tripadvisor" width={22} height={22} className="brightness-0" />
              </div>
            </div>

            {/* Calendar Card (Group 39889) */}
            <div className="absolute top-[295px] left-[-80px] z-40 scale-[0.85] origin-top-left">
              <div className="bg-white rounded-[15px] shadow-2xl p-2">
                <Calendar />
              </div>
            </div>
          </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

