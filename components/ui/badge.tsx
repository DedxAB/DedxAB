import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export function Badge({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>): React.JSX.Element {
  return (
    <span
      className={cn(
        'surface-subtle inline-flex items-center rounded-full px-3 py-1 text-[0.68rem] tracking-[0.08em] text-muted-foreground',
        className
      )}
      {...props}
    />
  );
}
