import Image from 'next/image';
import Link from 'next/link';

// Custom Brand Icons (since Lucide v1.x removed brand logos)
const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-[60px] sm:pt-[80px] lg:pt-[100px] border-t border-[#D6D6D6]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-[60px] sm:pb-[80px] lg:pb-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-[64px]">

          {/* Brand & Description */}
          <div className="flex flex-col items-start">
            <Link href="/" className="mb-8" aria-label="Go to home page">
              <Image
                src="/assets/googlelogo.png"
                alt="Airbnb Assistants Brand Logo"
                width={120}
                height={40}
                className="w-auto h-auto"
              />
            </Link>
            <p className="text-[14px] leading-[22px] text-[#666666] font-medium max-w-[320px] mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.
            </p>

            {/* Social Icons - Plain Black consistent with design */}
            <div className="flex gap-[24px]">
              {[
                { icon: XIcon, href: "#", label: "Twitter" },
                { icon: FacebookIcon, href: "#", label: "Facebook" },
                { icon: InstagramIcon, href: "#", label: "Instagram" },
                { icon: GithubIcon, href: "#", label: "Github" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-black hover:text-[#ED3C6A] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Sections - Exactly matching design columns */}
          <div className="flex flex-col">
            <h4 className="text-[16px] font-bold text-black mb-8 uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-5">
              {['About', 'Features', 'Works', 'Career'].map(item => (
                <li key={item}>
                  <Link href="#" className="text-[15px] font-medium text-black hover:text-[#ED3C6A] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[16px] font-bold text-black mb-8 uppercase tracking-wider">Help</h4>
            <ul className="flex flex-col gap-5">
              {['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'].map(item => (
                <li key={item}>
                  <Link href="#" className="text-[15px] font-medium text-black hover:text-[#ED3C6A] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[16px] font-bold text-black mb-8 uppercase tracking-wider">Resources</h4>
            <ul className="flex flex-col gap-5">
              {['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'].map(item => (
                <li key={item}>
                  <Link href="#" className="text-[15px] font-medium text-black hover:text-[#ED3C6A] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full h-[67px] bg-[#230B41] flex items-center justify-center">
        <p className="text-white text-[14px] font-medium">
          © Copyright 2024, All Rights Reserved by XYZ
        </p>
      </div>
    </footer>
  );
}
