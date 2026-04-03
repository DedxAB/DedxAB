"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";

type SoundContextValue = {
  enabled: boolean;
  setEnabled: (value: boolean) => void;
  playClick: () => void;
};

const SoundContext = createContext<SoundContextValue | null>(null);

function beep(ctx: AudioContext, freq: number, duration: number): void {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "square";
  osc.frequency.value = freq;
  gain.gain.value = 0.03;
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  window.setTimeout(() => {
    osc.stop();
    osc.disconnect();
    gain.disconnect();
  }, duration);
}

export function SoundProvider({ children }: { children: ReactNode }): React.JSX.Element {
  const [enabled, setEnabled] = useState(false);
  const contextRef = useRef<AudioContext | null>(null);
  const ambientRef = useRef<{ oscillators: OscillatorNode[]; gain: GainNode } | null>(null);

  const getContext = useCallback((): AudioContext | null => {
    if (typeof window === "undefined") return null;
    if (contextRef.current) return contextRef.current;

    const AudioCtx =
      window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return null;

    contextRef.current = new AudioCtx();
    return contextRef.current;
  }, []);

  const stopAmbient = useCallback((): void => {
    if (!ambientRef.current) return;
    ambientRef.current.oscillators.forEach((osc) => {
      try {
        osc.stop();
      } catch {
        // Ignore invalid stop calls during rapid toggle.
      }
      osc.disconnect();
    });
    ambientRef.current.gain.disconnect();
    ambientRef.current = null;
  }, []);

  const startAmbient = useCallback(async (): Promise<void> => {
    const ctx = getContext();
    if (!ctx) return;

    if (ctx.state === "suspended") {
      try {
        await ctx.resume();
      } catch {
        return;
      }
    }

    if (ambientRef.current) return;

    const gain = ctx.createGain();
    gain.gain.value = 0.012;
    gain.connect(ctx.destination);

    const oscA = ctx.createOscillator();
    const oscB = ctx.createOscillator();
    oscA.type = "triangle";
    oscB.type = "sine";
    oscA.frequency.value = 110;
    oscB.frequency.value = 164.81;
    oscA.connect(gain);
    oscB.connect(gain);
    oscA.start();
    oscB.start();

    ambientRef.current = {
      oscillators: [oscA, oscB],
      gain
    };
  }, [getContext]);

  const playClick = useCallback(() => {
    if (!enabled || typeof window === "undefined") return;
    const ctx = getContext();
    if (!ctx) return;
    if (ctx.state === "suspended") {
      void ctx.resume();
    }
    void startAmbient();
    beep(ctx, 740, 35);
  }, [enabled, getContext, startAmbient]);

  useEffect(() => {
    if (enabled) {
      void startAmbient();
      return;
    }
    stopAmbient();
  }, [enabled, startAmbient, stopAmbient]);

  useEffect(() => {
    return () => {
      stopAmbient();
      if (contextRef.current) {
        void contextRef.current.close();
        contextRef.current = null;
      }
    };
  }, [stopAmbient]);

  const value = useMemo(
    () => ({
      enabled,
      setEnabled,
      playClick
    }),
    [enabled, playClick]
  );

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}

export function useSound(): SoundContextValue {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSound must be used within SoundProvider");
  }
  return context;
}
