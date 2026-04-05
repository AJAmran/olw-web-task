'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function OurService() {
  const services = [
    {
      title: "Manage Property Listings",
      description: "Optimize your property visibility across multiple platforms including Airbnb, Booking.com, and Vrbo with our smart listing tools.",
      icon: "/assets/services-icons/manager-property.png",
      bgColor: "bg-[#FFF8E7]" // Light yellow
    },
    {
      title: "Manage Customer Bookings",
      description: "Automate booking confirmations, payment tracking, and guest communications to save hours of manual administrative work.",
      icon: "/assets/services-icons/Manage-customer.png",
      bgColor: "bg-[#E7F3FF]" // Light blue
    },
    {
      title: "Schedule House Cleaning",
      description: "Never miss a turnover. Automatically schedule and coordinate cleaning services based on arrival and departure times.",
      icon: "/assets/services-icons/Schedule-house.png",
      bgColor: "bg-[#E7FFFA]" // Light green/teal
    },
    {
      title: "Monitor Guest Reviews",
      description: "Track sentiment and respond quickly to feedback. Our analytics help you maintain a 5-star rating across all platforms.",
      icon: "/assets/services-icons/Monitor-guest .png",
      bgColor: "bg-[#FFF0E7]" // Light orange
    },
    {
      title: "Track & Report Expenses",
      description: "Keep your finances in check with automated expense tracking and monthly revenue reports for your investment properties.",
      icon: "/assets/services-icons/Track-report.png",
      bgColor: "bg-[#F3E7FF]" // Light purple
    },
    {
      title: "Guest Inquiry & Support",
      description: "Provide 24/7 support to your guests with automated inquiry handling and rapid response tools for any situation.",
      icon: "/assets/services-icons/Guest-inquiry.png",
      bgColor: "bg-[#FFE7F0]" // Light pink
    }
  ];

  return (
    <section id="services" className="section-padding bg-[#FAFAFA]">
      <div className="container-wide">
        <SectionHeader 
          title="Our" 
          highlightedTitle="Services" 
          description="We provide a comprehensive suite of tools designed to help property managers and hosts maximize their efficiency and revenue while providing world-class guest experiences."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left border border-gray-50 hover:border-primary/10 group h-full"
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="relative w-8 h-8 md:w-10 md:h-10">
                  <Image
                    src={service.icon}
                    alt={`${service.title} icon`}
                    fill
                    sizes="(max-width: 768px) 32px, 40px"
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-sm md:text-base text-muted leading-relaxed mb-8 grow font-medium">
                {service.description}
              </p>

              <button
                type="button"
                aria-label={`Read more about ${service.title}`}
                className="flex items-center gap-2 text-primary border-2 border-primary/20 px-6 py-2 rounded-full font-bold text-sm lg:text-base hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group/btn"
              >
                Read More
                <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
