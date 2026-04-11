'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CursorGlow(): React.JSX.Element | null {
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  const smoothX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.35 });
  const smoothY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.35 });

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');
    const update = (): void => setEnabled(media.matches);
    update();

    const onMove = (event: MouseEvent): void => {
      x.set(event.clientX - 140);
      y.set(event.clientY - 140);
    };

    window.addEventListener('mousemove', onMove);
    media.addEventListener('change', update);

    return () => {
      window.removeEventListener('mousemove', onMove);
      media.removeEventListener('change', update);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="cursor-glow pointer-events-none fixed left-0 top-0 z-[1] h-72 w-72 rounded-full blur-3xl"
      style={{ x: smoothX, y: smoothY }}
    />
  );
}
