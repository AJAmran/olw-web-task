"use client";

import { useState, useEffect } from "react";
import Image from 'next/image';
import NextLink from 'next/link';
import { Menu, X, ChevronRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import ScheduleMeetingBtn from "./ScheduleMeetingBtn";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full flex justify-center transition-all duration-300 ${scrolled ? 'glass-nav py-2' : 'bg-white border-b border-gray-100 py-4'}`}>
      <nav className="w-full max-w-7xl flex items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <NextLink href="/" className="flex items-center">
          <Image
            src="/assets/googlelogo.png"
            alt="Airbnb Assistants Logo"
            width={120}
            height={40}
            className="object-contain w-auto h-auto"
            priority
            loading="eager"
          />
        </NextLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-[15.5px] font-medium">
          {NAV_LINKS.map((link) => (
            <NextLink
              key={link.label}
              href={link.href}
              className={`text-[#515151] hover:text-[#F34170] transition-colors relative group py-1`}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#F34170] transition-all duration-300 group-hover:w-full" />
            </NextLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <ScheduleMeetingBtn variant="navbar" />
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-[#F34170] transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile menu overlay */}
        {isOpen && (
          <div 
            id="mobile-menu"
            className="absolute top-full left-0 w-full bg-white border-b border-gray-100 md:hidden z-50 animate-in fade-in slide-in-from-top-4 duration-300"
          >
            <div className="flex flex-col p-6 gap-6">
              {NAV_LINKS.map((link) => (
                <NextLink
                  key={link.label}
                  href={link.href}
                  className="text-lg font-medium text-gray-800 hover:text-[#F34170] transition-colors flex items-center justify-between"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                  <ChevronRight size={18} className="text-gray-400" />
                </NextLink>
              ))}
              <hr className="border-gray-100" />
              <ScheduleMeetingBtn variant="mobile" />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

