// Server Component - purely static content, no client interactivity
import Image from 'next/image';

const steps = [
  {
    number: "01",
    title: "Add requirements & sign up today",
    icon: "/assets/getting-started-icons/Add-Requirements-Icon.svg"
  },
  {
    number: "02",
    title: "Connect with your CSM & onboarding team",
    icon: "/assets/getting-started-icons/Connect-with-CSM-Icon.svg"
  },
  {
    number: "03",
    title: "Meet your STR Assistant next week",
    icon: "/assets/getting-started-icons/Meet-STR-Icon.svg"
  }
];

export default function GettingStarted() {
  return (
    <section className="w-full bg-white py-24">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <h2 className="text-[32px] leading-[42px] font-bold text-black mb-[24px]">
          Getting Started is <span className="text-[#ED3C6A]">Easy</span>
        </h2>
        <p className="text-[14px] leading-[18px] text-black max-w-[738px] mx-auto mb-[64px] font-medium text-center">
          Our streamlined onboarding process gets you up and running in no time. From signing up to meeting your dedicated STR Assistant, we make every step clear and simple.
        </p>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-8 max-w-6xl mx-auto list-none" aria-label="Getting started steps">
          {steps.map((step, i) => (
            <li key={i} className="flex flex-col items-center group">
              <div className="relative mb-12 w-full max-w-[340px]">
                {/* Step Card */}
                <div className="w-full aspect-[1.3] flex items-center justify-center p-4">
                  <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={step.icon}
                      alt={`Step ${step.number}: ${step.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 340px"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Step Number Circle */}
                <div
                  className="absolute top-[-25px] left-[-15px] lg:top-[-30px] lg:left-[-20px] w-16 h-16 lg:w-20 lg:h-20 bg-white border-[3px] border-[#ED3C6A] rounded-full flex items-center justify-center text-[24px] lg:text-[28px] font-bold text-black z-20 shadow-[0_4px_10px_rgba(237,60,106,0.15)] group-hover:bg-[#ED3C6A] group-hover:text-white transition-all duration-300"
                  aria-hidden="true"
                >
                  {step.number}
                </div>
              </div>

              <h3 className="text-[20px] lg:text-[22px] font-bold text-[#1E1E1E] max-w-[280px] leading-[1.3] transition-colors group-hover:text-[#ED3C6A] font-dm-sans">
                {step.title}
              </h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
