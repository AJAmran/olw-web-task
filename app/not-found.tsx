import Link from 'next/link';
import Image from 'next/image';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden px-6 pt-20">
      
      {/* Background Decorator */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="text-[120px] font-bold text-black drop-shadow-xl leading-none">404</h1>
        <div className="bg-primary/10 px-6 py-2 rounded-full inline-block mb-8 border border-primary/20">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Page Not Found</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Whoops! You're off the map.</h2>
        <p className="text-lg text-muted mb-12 font-medium">
          We can't seem to find the page you're looking for. But don't worry, even the best hosts get lost sometimes. Let's get you back home!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="/"
            className="flex items-center gap-3 bg-primary text-white px-10 py-4 rounded-full font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 transform-gpu"
          >
            <Home size={20} />
            Back to Dashboard
          </Link>
          
          <Link 
            href="/#faq"
            className="flex items-center gap-3 text-black font-bold px-10 py-4 rounded-full border-2 border-gray-100 hover:border-black transition-all duration-300"
          >
            <ArrowLeft size={20} />
            View FAQ
          </Link>
        </div>
      </div>

      {/* Decorative Brand Icons - purely decorative, empty alt */}
      <div className="mt-20 flex gap-12 opacity-20 grayscale" aria-hidden="true">
         <Image src="/assets/hero-section-images/airbnb.png" alt="" width={40} height={40} />
         <Image src="/assets/hero-section-images/Vrbo.png" alt="" width={40} height={40} />
         <Image src="/assets/hero-section-images/TripAdvisor.png" alt="" width={40} height={40} />
      </div>
    </main>
  );
}
