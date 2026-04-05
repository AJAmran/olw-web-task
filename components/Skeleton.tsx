import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gray-200/60",
        className
      )}
      {...props}
    />
  );
}

export function SectionSkeleton() {
  return (
    <div className="w-full py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 w-full">
          <Skeleton className="h-10 w-48 sm:w-64" />
          <Skeleton className="h-4 w-full max-w-xl" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <Skeleton className="h-[300px] w-full rounded-3xl" />
          <Skeleton className="h-[300px] w-full rounded-3xl" />
          <Skeleton className="h-[300px] w-full rounded-3xl" />
        </div>
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="w-full h-[700px] lg:h-[800px] flex items-center justify-center bg-white px-6">
      <div className="flex flex-col items-center gap-8 w-full max-w-4xl pt-20 lg:pt-0">
        <div className="space-y-4 flex flex-col items-center w-full">
          <Skeleton className="h-14 w-3/4 sm:w-[480px]" />
          <Skeleton className="h-12 w-2/3 sm:w-[380px]" />
        </div>
        <Skeleton className="h-6 w-full max-w-2xl" />
        <div className="flex gap-4 mt-4 w-full justify-center">
            <Skeleton className="h-[50px] w-[200px] rounded-full" />
            <Skeleton className="h-[50px] w-[140px] rounded-full hidden sm:block" />
        </div>
      </div>
    </div>
  );
}
