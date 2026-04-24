'use client';

import { CalendarClock, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { SiX } from 'react-icons/si';

import { fadeUp, staggerContainer } from '@/components/common/motion';
import { SectionShell } from '@/components/common/section-shell';
import { TerminalPanel } from '@/components/terminal/terminal-panel';
import { Card } from '@/components/ui/card';
import { portfolioConfig } from '@/config/portfolio';

export function ContactSection(): React.JSX.Element {
  const socialIconMap: Record<string, React.JSX.Element> = {
    GitHub: <Github className="h-4 w-4" />,
    LinkedIn: <Linkedin className="h-4 w-4" />,
    X: <SiX className="h-4 w-4" />,
  };

  return (
    <SectionShell
      id="contact"
      title="Contact"
      subtitle={portfolioConfig.contact.headline}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="grid gap-6 lg:grid-cols-[.95fr_1.05fr]"
      >
        <motion.div variants={fadeUp}>
          <Card>
            <p className="text-sm text-muted-foreground">
              {portfolioConfig.contact.description}
            </p>

            <div className="surface-subtle mt-4 rounded-lg p-3">
              <p className="flex items-center gap-2 text-sm text-foreground">
                <CalendarClock className="h-4 w-4" />
                {portfolioConfig.contact.availability}
              </p>
            </div>

          <div className="mt-6 space-y-3">
            {portfolioConfig.contact.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="surface-subtle group flex items-center justify-between rounded-lg px-3 py-2 text-foreground transition-all duration-300 hover:brightness-[1.03]"
              >
                <span className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {link.label}
                </span>
                <span className="text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                  open
                </span>
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
                className="surface-subtle inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-all duration-300 hover:text-foreground"
              >
                {socialIconMap[social.label] ?? <Mail className="h-4 w-4" />}
                {social.label}
              </a>
            ))}
          </div>
          </Card>
        </motion.div>

        <motion.div variants={fadeUp} custom={0.08}>
          <TerminalPanel />
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}
