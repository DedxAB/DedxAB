import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): React.JSX.Element {
  return (
    <div
      className={cn(
        'rounded-xl border border-border/70 bg-card/80 p-5 backdrop-blur-md shadow-panel',
        className
      )}
      {...props}
    />
  );
}
