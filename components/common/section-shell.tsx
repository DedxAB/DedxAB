import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({ id, title, subtitle, children, className }: SectionShellProps): React.JSX.Element {
  return (
    <section id={id} className={cn("scroll-mt-20 px-4 py-14 md:px-6 md:py-16", className)}>
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-6">
          <h2 className="font-pixel text-2xl text-neonCyan md:text-3xl">{title}</h2>
          {subtitle ? <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
