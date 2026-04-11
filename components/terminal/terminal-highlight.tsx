import type { JSX } from 'react';

export type TerminalTokenKind =
  | 'prompt'
  | 'command'
  | 'flag'
  | 'path'
  | 'string'
  | 'url'
  | 'number'
  | 'plain';

export type TerminalToken = {
  text: string;
  kind: TerminalTokenKind;
};

const promptRegex = /^([^$#>%]*[$#>%])\s?(.*)$/;
const stringRegex = /^["'`].*["'`]?$/;

function classifyWord(word: string, index: number): TerminalTokenKind {
  if (!word) return 'plain';
  if (index === 0) return 'command';
  if (word.startsWith('-')) return 'flag';
  if (/^https?:\/\//i.test(word)) return 'url';
  if (stringRegex.test(word)) return 'string';
  if (/[\\/]/.test(word)) return 'path';
  if (/^[0-9]+([.:][0-9]+)*%?$/.test(word)) return 'number';
  return 'plain';
}

function splitWords(input: string): string[] {
  return input.split(/(\s+)/).filter((token) => token.length > 0);
}

function tokenizeCommand(input: string): TerminalToken[] {
  const parts = splitWords(input);
  let wordIndex = 0;

  return parts.map((part) => {
    if (/^\s+$/.test(part)) {
      return { text: part, kind: 'plain' as const };
    }
    const kind = classifyWord(part, wordIndex);
    wordIndex += 1;
    return { text: part, kind };
  });
}

export function tokenizeTerminalLine(input: string): TerminalToken[] {
  const match = input.match(promptRegex);

  if (!match) {
    return tokenizeCommand(input);
  }

  const [, prompt, rest] = match;
  const tokens: TerminalToken[] = [{ text: `${prompt} `, kind: 'prompt' }];
  return tokens.concat(tokenizeCommand(rest));
}

export function tokenClassName(kind: TerminalTokenKind): string {
  if (kind === 'prompt') return 'terminal-token-prompt';
  if (kind === 'command') return 'terminal-token-command';
  if (kind === 'flag') return 'terminal-token-flag';
  if (kind === 'path') return 'terminal-token-path';
  if (kind === 'string') return 'terminal-token-string';
  if (kind === 'url') return 'terminal-token-url';
  if (kind === 'number') return 'terminal-token-number';
  return '';
}

export function renderTerminalTokens(
  text: string,
  keyPrefix: string
): JSX.Element[] {
  return tokenizeTerminalLine(text).map((token, index) => (
    <span key={`${keyPrefix}-${index}`} className={tokenClassName(token.kind)}>
      {token.text}
    </span>
  ));
}
