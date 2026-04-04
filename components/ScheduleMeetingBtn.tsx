'use client';

import { ArrowRight } from 'lucide-react';
import Button from './Button';

interface ScheduleMeetingBtnProps {
  className?: string;
  variant?: 'primary' | 'navbar' | 'mobile';
  fullWidth?: boolean;
}

export default function ScheduleMeetingBtn({
  className = "",
  variant = 'primary',
  fullWidth = false
}: ScheduleMeetingBtnProps) {
  
  const variantsMap = {
    primary: "primary",
    navbar: "primary", // Uses primary base but we'll override classes
    mobile: "primary"
  } as const;

  const sizeMap = {
    primary: "lg",
    navbar: "md",
    mobile: "lg"
  } as const;

  const overrides = {
    primary: "",
    navbar: "bg-linear-to-r from-[#F04279] to-[#E82B61] hover:from-[#E82B61] hover:to-[#D41C50] px-5 py-[10px] text-[15px] tracking-wide",
    mobile: "w-full py-4 rounded-xl text-[16px]"
  };

  return (
    <Button
      variant={variantsMap[variant]}
      size={sizeMap[variant]}
      fullWidth={fullWidth}
      icon={ArrowRight}
      className={`${overrides[variant]} ${className}`}
    >
      Schedule A Meeting
    </Button>
  );
}
