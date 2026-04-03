import { CalendarClock, Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

import { SectionShell } from "@/components/common/section-shell";
import { TerminalPanel } from "@/components/terminal/terminal-panel";
import { Card } from "@/components/ui/card";
import { portfolioConfig } from "@/config/portfolio";
import { cn } from "@/lib/utils";

export function ContactSection(): React.JSX.Element {
  const socialIconMap: Record<string, React.JSX.Element> = {
    GitHub: <Github className="h-4 w-4" />,
    LinkedIn: <Linkedin className="h-4 w-4" />,
    Twitter: <Twitter className="h-4 w-4" />,
    Instagram: <Instagram className="h-4 w-4" />
  };
  const socialStyleMap: Record<string, string> = {
    GitHub: "border-slate-500/45 bg-slate-500/10 text-slate-700 dark:text-slate-300 hover:border-slate-400/70",
    LinkedIn: "border-blue-500/45 bg-blue-500/10 text-blue-700 dark:text-blue-300 hover:border-blue-400/70",
    Twitter: "border-cyan-500/45 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 hover:border-cyan-400/70",
    Instagram: "border-pink-500/45 bg-pink-500/10 text-pink-700 dark:text-pink-300 hover:border-pink-400/70"
  };

  return (
    <SectionShell id="contact" title="Contact" subtitle={portfolioConfig.contact.headline}>
      <div className="grid gap-6 lg:grid-cols-[.95fr_1.05fr]">
        <Card className="border-neonAmber/30 bg-card/90">
          <p className="text-sm text-muted-foreground">{portfolioConfig.contact.description}</p>

          <div className="mt-4 rounded-lg border border-neonAmber/30 bg-neonAmber/10 p-3">
            <p className="flex items-center gap-2 font-pixel text-sm text-neonAmber">
              <CalendarClock className="h-4 w-4" />
              {portfolioConfig.contact.availability}
            </p>
          </div>

          <div className="mt-6 space-y-3">
            {portfolioConfig.contact.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center justify-between rounded-lg border border-border bg-muted/20 px-3 py-2 text-neonCyan transition-all duration-300 hover:border-neonCyan/50 hover:bg-neonCyan/5"
              >
                <span className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {link.label}
                </span>
                <span className="text-xs text-muted-foreground transition-colors group-hover:text-neonCyan">open</span>
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {portfolioConfig.socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg border border-border bg-muted/20 px-3 py-2 text-sm text-muted-foreground transition-all duration-300 hover:text-neonCyan",
                  socialStyleMap[social.label]
                )}
              >
                {socialIconMap[social.label] ?? <Mail className="h-4 w-4" />}
                {social.label}
              </a>
            ))}
          </div>
        </Card>

        <TerminalPanel />
      </div>
    </SectionShell>
  );
}
