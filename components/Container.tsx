'use client';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'wide' | 'narrow' | 'full';
  as?: React.ElementType;
}

export default function Container({
  children,
  className = "",
  size = 'wide',
  as: Component = 'div'
}: ContainerProps) {
  const sizeClasses = {
    default: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    wide: "max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8",
    narrow: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
    full: "w-full px-4 sm:px-6 lg:px-8"
  };

  return (
    <Component className={`${sizeClasses[size]} ${className}`}>
      {children}
    </Component>
  );
}
