'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        {/* Animated Brand Logo Element */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            borderRadius: ["20%", "50%", "20%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
          className="w-16 h-16 bg-linear-to-tr from-[#ED3C6A] to-[#F34170] shadow-lg shadow-primary/20"
        />
        
        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-col items-center gap-2"
        >
          <span className="text-xl font-bold text-black tracking-tight">Airbnb Assistants</span>
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                className="w-2 h-2 rounded-full bg-primary"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
