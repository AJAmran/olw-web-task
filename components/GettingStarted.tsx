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
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl text-center">
        <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] leading-tight font-bold text-black mb-4 sm:mb-6">
          Getting Started is <span className="text-[#ED3C6A]">Easy</span>
        </h2>
        <p className="text-[13px] sm:text-[14px] leading-relaxed text-black max-w-[600px] mx-auto mb-10 sm:mb-16 font-medium">
          Our streamlined onboarding process gets you up and running in no time. From signing up to meeting your dedicated STR Assistant, we make every step clear and simple.
        </p>

        <ol className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 lg:gap-8 max-w-6xl mx-auto list-none" role="list" aria-label="Getting started steps">
          {steps.map((step, i) => (
            <li key={i} className="flex flex-col items-center group">
              <div className="relative mb-10 w-full max-w-[260px] sm:max-w-[340px]">
                {/* Step Card */}
                <div className="w-full aspect-[1.3] flex items-center justify-center p-4">
                  <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={step.icon}
                      alt={`Step ${step.number}: ${step.title}`}
                      fill
                      sizes="(max-width: 640px) 260px, 340px"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Step Number Circle */}
                <div
                  className="absolute top-[-20px] left-[-10px] lg:top-[-30px] lg:left-[-20px] w-14 h-14 lg:w-20 lg:h-20 bg-white border-[3px] border-[#ED3C6A] rounded-full flex items-center justify-center text-[20px] lg:text-[28px] font-bold text-black z-20 shadow-[0_4px_10px_rgba(237,60,106,0.15)] group-hover:bg-[#ED3C6A] group-hover:text-white transition-all duration-300"
                  aria-hidden="true"
                >
                  {step.number}
                </div>
              </div>

              <h3 className="text-[17px] sm:text-[19px] lg:text-[22px] font-bold text-[#1E1E1E] max-w-[240px] leading-[1.3] transition-colors group-hover:text-[#ED3C6A] font-dm-sans">
                {step.title}
              </h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
