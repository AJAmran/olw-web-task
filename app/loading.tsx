'use client';

import { HeroSkeleton } from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-100 bg-white flex flex-col">
        {/* Minimal loading indicator at top */}
        <div className="h-1 bg-primary animate-progress origin-left w-full z-101"></div>
        
        {/* Main page skeleton */}
        <div className="w-full grow">
            <HeroSkeleton />
        </div>
    </div>
  );
}
