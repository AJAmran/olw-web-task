// Server Component - no interactivity needed
import { Check } from 'lucide-react';

interface FeatureListProps {
  items: string[];
  className?: string;
  itemClassName?: string;
  iconClassName?: string;
}

export default function FeatureList({
  items,
  className = "",
  itemClassName = "",
  iconClassName = ""
}: FeatureListProps) {
  return (
    <ul className={`flex flex-col gap-[14px] ${className}`} role="list">
      {items.map((text, i) => (
        <li key={i} className={`flex items-center gap-[12px] ${itemClassName}`}>
          <div
            className={`shrink-0 w-[32px] h-[32px] rounded-full bg-[#ED3C6A]/10 flex items-center justify-center ${iconClassName}`}
            aria-hidden="true"
          >
            <Check size={18} className="text-[#ED3C6A]" />
          </div>
          <span className="text-[16px] md:text-[18px] font-bold text-black">{text}</span>
        </li>
      ))}
    </ul>
  );
}
