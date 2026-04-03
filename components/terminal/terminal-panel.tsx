"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

import { portfolioConfig } from "@/config/portfolio";
import { Card } from "@/components/ui/card";
import { useSound } from "@/components/providers/sound-provider";

type Line = {
  id: string;
  text: string;
  type: "input" | "output" | "error";
};

export function TerminalPanel(): React.JSX.Element {
  const { playClick } = useSound();
  const [value, setValue] = useState("");
  const outputRef = useRef<HTMLDivElement | null>(null);

  const welcomeLines = useMemo<Line[]>(
    () => portfolioConfig.terminal.welcome.map((text, index) => ({ id: `welcome-${index}`, text, type: "output" })),
    []
  );
  const [lines, setLines] = useState<Line[]>(welcomeLines);

  const commands = portfolioConfig.terminal.commands;

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const command = value.trim().toLowerCase();
    if (!command) return;
    playClick();

    const nextLines: Line[] = [{ id: crypto.randomUUID(), text: `$ ${command}`, type: "input" }];

    if (command === "clear") {
      setLines([]);
      setValue("");
      return;
    }

    const match = commands[command];
    if (!match) {
      nextLines.push({ id: crypto.randomUUID(), text: "Unknown command. Try 'help'.", type: "error" });
    } else {
      nextLines.push(...match.output.map((text) => ({ id: crypto.randomUUID(), text, type: "output" as const })));
    }

    setLines((prev) => [...prev, ...nextLines]);
    setValue("");
  };

  useEffect(() => {
    if (!outputRef.current) return;
    outputRef.current.scrollTo({
      top: outputRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [lines]);

  return (
    <Card className="border-border/80 bg-card/95 dark:border-neonGreen/35 dark:bg-[#0c1018]/85">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-pixel text-neonCyan">TERMINAL MODE</p>
        <p className="font-pixel text-xs text-muted-foreground dark:text-neonGreen/80">commands: {Object.keys(commands).join(" / ")}</p>
      </div>

      <motion.div
        ref={outputRef}
        className="terminal-scrollbar h-64 overflow-y-auto rounded border border-border bg-muted/40 p-3 font-pixel text-sm dark:border-neonGreen/25 dark:bg-[#090d14]"
      >
        {lines.map((line) => (
          <p
            key={line.id}
            className={
              line.type === "input"
                ? "text-neonCyan"
                : line.type === "error"
                  ? "text-red-400"
                  : "text-neonGreen"
            }
          >
            {line.text}
          </p>
        ))}
      </motion.div>

      <form onSubmit={onSubmit} className="mt-3">
        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 font-pixel text-neonCyan">
            $
          </span>
          <input
            id="terminal-input"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            className="w-full rounded border border-border bg-background/70 py-2 pl-8 pr-3 font-pixel text-foreground focus:border-neonCyan focus:outline-none dark:border-neonGreen/30 dark:bg-[#090d14] dark:text-neonGreen"
            autoComplete="off"
            spellCheck={false}
            aria-label="Terminal command input"
          />
        </div>
      </form>
    </Card>
  );
}
