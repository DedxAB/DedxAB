import { Reveal } from '@/components/common/reveal';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type SectionShellProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  title,
  subtitle,
  children,
  className,
}: SectionShellProps): React.JSX.Element {
  return (
    <section
      id={id}
      className={cn('scroll-mt-24 px-4 py-20 md:px-6 md:py-24', className)}
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal className="mb-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
            {id}
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">{title}</h2>
          {subtitle ? (
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
