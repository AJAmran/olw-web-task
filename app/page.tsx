import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import OurService from "@/components/OurService";
import Pricing from "@/components/Pricing";
import GettingStarted from "@/components/GettingStarted";
import WhyChooseUs from "@/components/WhyChooseUs";
import ClientReview from "@/components/ClientReview";
import OurTools from "@/components/OurTools";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";


export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
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
