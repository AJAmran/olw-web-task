import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";

// Code-split below-fold components — each is loaded as a separate JS chunk,
// reducing the initial bundle size that must be parsed before interactivity.
const OurService     = dynamic(() => import("@/components/OurService"));
const Pricing        = dynamic(() => import("@/components/Pricing"));
const OurTools       = dynamic(() => import("@/components/OurTools"));
const GettingStarted = dynamic(() => import("@/components/GettingStarted"));
const WhyChooseUs    = dynamic(() => import("@/components/WhyChooseUs"));
const ClientReview   = dynamic(() => import("@/components/ClientReview"));
const FAQ            = dynamic(() => import("@/components/FAQ"));
const CTASection     = dynamic(() => import("@/components/CTASection"));

export default function Home() {
  return (
    <>
      {/* Above-fold: rendered immediately */}
      <Hero />
      <TrustedBy />

      {/* Below-fold: code-split into separate chunks, no Suspense wrapper
          (avoids CLS from placeholder → actual content size mismatch) */}
      <OurService />
      <Pricing />
      <OurTools />
      <GettingStarted />
      <WhyChooseUs />
      <ClientReview />
      <FAQ />
      <CTASection />
    </>
  );
}
