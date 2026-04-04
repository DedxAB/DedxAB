import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export function Badge({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>): React.JSX.Element {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded border border-neonAmber/40 bg-neonAmber/10 px-2 py-1 font-pixel text-xs text-neonAmber',
        className
      )}
      {...props}
    />
  );
}
