export const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easing, delay },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.97, y: 10 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, ease: easing, delay },
  }),
};
