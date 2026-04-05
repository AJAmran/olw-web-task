import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";

// Lazy load below-the-fold components
const OurService = dynamic(() => import("@/components/OurService"), { ssr: true });
const Pricing = dynamic(() => import("@/components/Pricing"), { ssr: true });
const OurTools = dynamic(() => import("@/components/OurTools"), { ssr: true });
const GettingStarted = dynamic(() => import("@/components/GettingStarted"), { ssr: true });
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), { ssr: true });
const ClientReview = dynamic(() => import("@/components/ClientReview"), { ssr: true });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: true });
const CTASection = dynamic(() => import("@/components/CTASection"), { ssr: true });

// Loading fallback for sections
const SectionLoader = () => (
  <div className="w-full h-48 flex items-center justify-center bg-gray-50/50 animate-pulse">
    <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
  </div>
);

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Suspense fallback={<SectionLoader />}><OurService /></Suspense>
      <Suspense fallback={<SectionLoader />}><Pricing /></Suspense>
      <Suspense fallback={<SectionLoader />}><OurTools /></Suspense>
      <Suspense fallback={<SectionLoader />}><GettingStarted /></Suspense>
      <Suspense fallback={<SectionLoader />}><WhyChooseUs /></Suspense>
      <Suspense fallback={<SectionLoader />}><ClientReview /></Suspense>
      <Suspense fallback={<SectionLoader />}><FAQ /></Suspense>
      <Suspense fallback={<SectionLoader />}><CTASection /></Suspense>
    </>
  );
}
