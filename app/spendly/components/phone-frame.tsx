'use client';

import { motion } from 'framer-motion';
import { easing } from '@/components/common/motion';

type PhoneFrameProps = {
  src: string;
  alt: string;
  index: number;
};

export function PhoneFrame({ src, alt, index }: PhoneFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-48px' }}
      transition={{ duration: 0.6, ease: easing, delay: index * 0.08 }}
      className="group relative w-56 shrink-0"
    >
      <div className="relative mx-auto h-120 w-56 overflow-hidden rounded-[2.25rem] border-[3px] border-neutral-800 bg-neutral-900 shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
        <div className="absolute left-1/2 top-0 z-10 h-5 w-32 -translate-x-1/2 rounded-b-xl bg-neutral-800" />
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}
