'use client';

import { useMemo } from 'react';
import {
  Github,
  Instagram,
  Linkedin,
  Moon,
  Sun,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { SiX } from 'react-icons/si';

import { portfolioConfig } from '@/config/portfolio';
import { useSound } from '@/components/providers/sound-provider';
import { useTheme } from '@/components/providers/theme-provider';
import { Switch } from '@/components/ui/switch';

const iconMap: Record<string, React.JSX.Element> = {
  GitHub: <Github className="h-4 w-4" />,
  LinkedIn: <Linkedin className="h-4 w-4" />,
  X: <SiX className="h-4 w-4" />,
  Instagram: <Instagram className="h-4 w-4" />,
};

export function TopNav(): React.JSX.Element {
  const { enabled, setEnabled, playClick } = useSound();
  const { theme, setTheme } = useTheme();

  const quickSocials = useMemo(
    () => portfolioConfig.socialLinks.slice(0, 4),
    []
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-lg">
      <div className="px-4 md:px-6">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between py-2.5 md:py-2">
          <a
            href="#home"
            className="font-pixel text-neonCyan"
            onClick={playClick}
          >
            {portfolioConfig.profile.name}
          </a>

          <nav aria-label="Main navigation" className="hidden gap-4 md:flex">
            {portfolioConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-pixel text-sm text-muted-foreground transition-colors hover:text-neonCyan"
                onClick={playClick}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 sm:flex">
              {quickSocials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground transition-colors hover:text-neonCyan"
                >
                  {iconMap[social.label] ?? social.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Toggle theme"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border bg-muted/20 transition-colors hover:border-neonCyan/50 hover:text-neonCyan"
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4 text-neonAmber" />
                ) : (
                  <Moon className="h-4 w-4 text-neonCyan" />
                )}
              </button>
            </div>
            <div className="flex items-center gap-2">
              {enabled ? (
                <Volume2 className="h-4 w-4 text-neonGreen" />
              ) : (
                <VolumeX className="h-4 w-4 text-muted-foreground" />
              )}
              <Switch
                checked={enabled}
                onCheckedChange={setEnabled}
                label="Sound and music"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
