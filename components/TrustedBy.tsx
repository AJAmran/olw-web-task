import Image from 'next/image';
import Container from './Container';

const logoItems = [
  { src: '/assets/trusted-section-images/Airbnb-full-icon.png',      alt: 'Airbnb',       width: 110, height: 34 },
  { src: '/assets/trusted-section-images/bookingcom-full-logo.png',   alt: 'Booking.com',  width: 150, height: 32 },
  { src: '/assets/trusted-section-images/Vrbo-full-logo.png',         alt: 'Vrbo',         width: 100, height: 36 },
  { src: '/assets/trusted-section-images/tripadvisor-full-logo.png',  alt: 'Tripadvisor',  width: 140, height: 34 },
  { src: '/assets/trusted-section-images/Agoda-full-logo.png',        alt: 'Agoda',        width: 110, height: 30 },
  { src: '/assets/trusted-section-images/expedia-full-logo.png',      alt: 'Expedia',      width: 120, height: 34 },
  { src: '/assets/trusted-section-images/home-to-go-logo-full.png',   alt: 'HomeToGo',     width: 120, height: 34 },
];

export default function TrustedBy() {
  return (
    <section className="w-full bg-white pt-[56px] sm:pt-[80px] lg:pt-[115px] pb-[72px] sm:pb-[100px] lg:pb-[140px]">
      <Container size="full" className="mb-[36px]">
        <h2 className="text-center font-semibold text-[20px] leading-[26px] text-black">
          Trusted by leaders in 50+ industries
        </h2>
      </Container>

      <div
        className="bg-[#F6F6F6] w-full h-[100px] flex items-center overflow-hidden"
        role="region"
        aria-label="Trusted platform partners"
      >
        {/* CSS marquee — defined in globals.css, runs on GPU compositor thread */}
        <div className="marquee-track px-4">
          {/* Duplicate items for seamless infinite loop */}
          {[...logoItems, ...logoItems].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center transition-transform hover:scale-110 shrink-0"
            >
              {/* Explicit width/height avoids the "missing width/height" audit warning.
                  object-contain prevents stretching. */}
              <Image
                src={logo.src}
                alt={`${logo.alt} logo`}
                width={logo.width}
                height={logo.height}
                className="object-contain"
                style={{ width: `${logo.width}px`, height: `${logo.height}px` }}
                priority={index < 7}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
