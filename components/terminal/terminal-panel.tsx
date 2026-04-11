'use client';

import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { portfolioConfig } from '@/config/portfolio';
import { Card } from '@/components/ui/card';
import { renderTerminalTokens } from '@/components/terminal/terminal-highlight';

type Line = {
  id: string;
  text: string;
  type: 'input' | 'output' | 'error';
};

type ObservationQuestion = {
  prompt: string;
  options: string[];
  correctIndex: number;
  hint: string;
};

type ObservationGameState = {
  active: boolean;
  currentIndex: number;
  score: number;
  answered: number;
  bestScore: number | null;
};

export function TerminalPanel(): React.JSX.Element {
  const [value, setValue] = useState('');
  const outputRef = useRef<HTMLDivElement | null>(null);
  const [observationGame, setObservationGame] = useState<ObservationGameState>({
    active: false,
    currentIndex: 0,
    score: 0,
    answered: 0,
    bestScore: null,
  });

  const welcomeLines = useMemo<Line[]>(
    () =>
      portfolioConfig.terminal.welcome.map((text, index) => ({
        id: `welcome-${index}`,
        text,
        type: 'output',
      })),
    []
  );
  const [lines, setLines] = useState<Line[]>(welcomeLines);

  const commands = portfolioConfig.terminal.commands;
  const observationQuestions = useMemo<ObservationQuestion[]>(
    () => [
      {
        prompt: 'Where is Arnab currently based?',
        options: [
          'Bengaluru, Karnataka, India',
          'Arambagh, West Bengal, India',
          'Pune, Maharashtra, India',
          'Remote',
        ],
        correctIndex: 1,
        hint: "Check the profile location in the portfolio data.",
      },
      {
        prompt: "Which company is marked as Arnab's present R&D role?",
        options: [
          'YuviPep CRM',
          'Telaverge Communications',
          'Zebra Technologies',
          'themonkeys.life',
        ],
        correctIndex: 1,
        hint: "Look at the role labeled 'Software Engineer - R&D'.",
      },
      {
        prompt: 'What CGPA is mentioned in achievements?',
        options: ['8.95', '9.45', '9.05', '8.75'],
        correctIndex: 1,
        hint: 'It is above 9 and includes two decimals.',
      },
      {
        prompt: 'Which tech pair appears in the hero rotating lines?',
        options: [
          'Angular + Firebase',
          'React + Next.js',
          'Vue + Nuxt',
          'Svelte + Supabase',
        ],
        correctIndex: 1,
        hint: 'Both are core frontend tools in this portfolio.',
      },
      {
        prompt: 'How many years of experience are highlighted?',
        options: ['1+', '2+', '3+', '5+'],
        correctIndex: 1,
        hint: 'The number appears in hero and bio messaging.',
      },
    ],
    []
  );

  const toOutputLines = (texts: string[], type: Line['type'] = 'output'): Line[] =>
    texts.map((text) => ({
      id: crypto.randomUUID(),
      text,
      type,
    }));

  const formatQuestionLines = (
    question: ObservationQuestion,
    index: number
  ): string[] => [
    `Q${index + 1}/${observationQuestions.length}: ${question.prompt}`,
    ...question.options.map((option, optionIndex) => `${optionIndex + 1}) ${option}`),
    "Use 'answer <1-4>' | 'hint' | 'score' | 'exit'.",
  ];

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const rawInput = value.trim();
    const command = rawInput.toLowerCase();
    if (!rawInput) return;
    const [baseCommand, ...args] = command.split(/\s+/);

    const nextLines: Line[] = [
      { id: crypto.randomUUID(), text: `$ ${rawInput}`, type: 'input' },
    ];

    if (baseCommand === 'clear') {
      setLines([]);
      setValue('');
      return;
    }

    if (baseCommand === 'game') {
      const firstQuestion = observationQuestions[0];
      setObservationGame((prev) => ({
        ...prev,
        active: true,
        currentIndex: 0,
        score: 0,
        answered: 0,
      }));
      nextLines.push(
        ...toOutputLines([
          'Observation mode started: prove you actually read the portfolio.',
          'Answer each question correctly to build your score.',
          ...formatQuestionLines(firstQuestion, 0),
        ])
      );
    } else if (baseCommand === 'answer') {
      const selected = Number(args[0]);
      if (!observationGame.active) {
        nextLines.push(
          ...toOutputLines(["Start a game first with 'game'."], 'error')
        );
      } else if (!Number.isInteger(selected) || selected < 1 || selected > 4) {
        nextLines.push(
          ...toOutputLines(["Invalid answer. Use a number from 1 to 4."], 'error')
        );
      } else {
        const currentQuestion = observationQuestions[observationGame.currentIndex];
        const isCorrect = selected - 1 === currentQuestion.correctIndex;
        const nextScore = observationGame.score + (isCorrect ? 1 : 0);
        const nextAnswered = observationGame.answered + 1;
        const isComplete = nextAnswered >= observationQuestions.length;

        if (isCorrect) {
          nextLines.push(...toOutputLines(['Correct. Nice observation.']));
        } else {
          nextLines.push(
            ...toOutputLines([
              `Not quite. Correct answer: ${
                currentQuestion.options[currentQuestion.correctIndex]
              }`,
            ])
          );
        }

        if (isComplete) {
          setObservationGame((prev) => ({
            ...prev,
            active: false,
            currentIndex: 0,
            score: 0,
            answered: 0,
            bestScore:
              prev.bestScore === null ? nextScore : Math.max(prev.bestScore, nextScore),
          }));
          const level =
            nextScore >= 5
              ? 'Portfolio Legend'
              : nextScore >= 4
              ? 'Portfolio Hawk'
              : nextScore >= 3
              ? 'Sharp Reader'
              : 'Skimmer Mode';
          nextLines.push(
            ...toOutputLines([
              `Quiz complete. Score: ${nextScore}/${observationQuestions.length}.`,
              `Rank unlocked: ${level}.`,
              "Run 'game' to play again.",
            ])
          );
        } else {
          const nextIndex = observationGame.currentIndex + 1;
          setObservationGame((prev) => ({
            ...prev,
            currentIndex: nextIndex,
            score: nextScore,
            answered: nextAnswered,
          }));
          nextLines.push(
            ...toOutputLines(formatQuestionLines(observationQuestions[nextIndex], nextIndex))
          );
        }
      }
    } else if (baseCommand === 'hint') {
      if (!observationGame.active) {
        nextLines.push(...toOutputLines(["No active game. Use 'game'."], 'error'));
      } else {
        const hint = observationQuestions[observationGame.currentIndex].hint;
        nextLines.push(...toOutputLines([`Hint: ${hint}`]));
      }
    } else if (baseCommand === 'score') {
      nextLines.push(
        ...toOutputLines([
          observationGame.active
            ? `Current score: ${observationGame.score}/${observationQuestions.length} (answered ${observationGame.answered}/${observationQuestions.length})`
            : observationGame.bestScore === null
            ? 'No score yet. Finish a game to set your best score.'
            : `Best score: ${observationGame.bestScore}/${observationQuestions.length}.`,
        ])
      );
    } else if (baseCommand === 'exit') {
      if (!observationGame.active) {
        nextLines.push(...toOutputLines(['No active game to exit.']));
      } else {
        setObservationGame((prev) => ({
          ...prev,
          active: false,
          currentIndex: 0,
          score: 0,
          answered: 0,
        }));
        nextLines.push(...toOutputLines(['Observation mode exited.']));
      }
    } else {
      const match = commands[baseCommand];
      if (!match) {
        nextLines.push(
          ...toOutputLines(["Unknown command. Try 'help'."], 'error')
        );
      } else {
        nextLines.push(...toOutputLines(match.output));
      }
    }

    setLines((prev) => [...prev, ...nextLines]);
    setValue('');
  };

  useEffect(() => {
    if (!outputRef.current) return;
    outputRef.current.scrollTo({
      top: outputRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [lines]);

  return (
    <Card className="terminal-shell overflow-hidden rounded-2xl p-0">
      <div className="terminal-chrome relative flex h-11 items-center px-4">
        <div className="flex items-center gap-2">
          <span className="terminal-dot h-3 w-3 rounded-full" />
          <span className="terminal-dot h-3 w-3 rounded-full opacity-80" />
          <span className="terminal-dot h-3 w-3 rounded-full opacity-60" />
        </div>
        <p className="terminal-text-muted pointer-events-none absolute left-1/2 -translate-x-1/2 text-xs font-medium tracking-wide">
          zsh - {portfolioConfig.profile.name.toLowerCase()}@macbook-pro - ~
        </p>
      </div>

      <motion.div
        ref={outputRef}
        className="terminal-screen terminal-scrollbar h-64 overflow-y-auto px-4 py-3 font-mono text-sm leading-6"
      >
        {lines.map((line) => (
          <p
            key={line.id}
            className={
              line.type === 'input'
                ? 'terminal-text-accent'
                : line.type === 'error'
                ? 'terminal-text-muted'
                : 'terminal-text'
            }
          >
            {line.type === 'input'
              ? renderTerminalTokens(line.text, line.id)
              : line.text}
          </p>
        ))}
      </motion.div>

      <form onSubmit={onSubmit}>
        <div className="terminal-footer relative border-t border-white/10 px-4 py-3">
          <span className="terminal-text-accent pointer-events-none absolute left-7 top-1/2 -translate-y-1/2 font-mono">
            $
          </span>
          <input
            id="terminal-input"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            className="terminal-input terminal-text-strong w-full rounded-md py-2 pl-8 pr-3 font-mono focus:border-white/20 focus:outline-none"
            autoComplete="off"
            spellCheck={false}
            aria-label="Terminal command input"
          />
        </div>
        <p className="terminal-footer terminal-text-muted px-4 pb-3 text-[11px]">
          commands: {Object.keys(commands).join(' / ')}
        </p>
      </form>
    </Card>
  );
}
