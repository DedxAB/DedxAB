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
      className="pointer-events-none fixed left-0 top-0 z-1 h-70 w-70 rounded-full bg-[radial-gradient(circle,rgba(110,160,255,.26)_0%,rgba(110,160,255,.13)_32%,rgba(110,160,255,0)_72%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(120,190,255,.20)_0%,rgba(120,190,255,.10)_35%,rgba(120,190,255,0)_72%)]"
      style={{ x: smoothX, y: smoothY }}
    />
  );
}
