'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  highlightedTitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export default function SectionHeader({
  title,
  highlightedTitle,
  description,
  centered = true,
  className = "",
  light = false
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-4xl ${centered ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${light ? 'text-white' : 'text-secondary'}`}>
        {title} {highlightedTitle && <span className="text-primary">{highlightedTitle}</span>}
      </h2>
      {description && (
        <p className={`text-base md:text-lg max-w-3xl leading-relaxed font-medium mb-12 ${centered ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-muted'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
