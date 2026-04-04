"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { BootSequence } from "@/components/effects/boot-sequence";
import { CrtOverlay } from "@/components/effects/crt-overlay";
import { CursorGlow } from "@/components/effects/cursor-glow";
import { EasterEgg } from "@/components/effects/easter-egg";
import { TopNav } from "@/components/layout/top-nav";
import { SoundProvider } from "@/components/providers/sound-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps): React.JSX.Element {
  const [ready, setReady] = useState(false);

  return (
    <ThemeProvider>
      <SoundProvider>
        <AnimatePresence>{!ready ? <BootSequence onDone={() => setReady(true)} /> : null}</AnimatePresence>
        <CursorGlow />
        <CrtOverlay />
        <EasterEgg />
        <TopNav />
        <motion.main
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 12 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-10"
        >
          {children}
        </motion.main>
      </SoundProvider>
    </ThemeProvider>
  );
}
