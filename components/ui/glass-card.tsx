import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export function GlassCard({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): React.JSX.Element {
  return (
    <div
      className={cn(
        'surface-panel rounded-[1.5rem] p-6',
        className
      )}
      {...props}
    />
  );
}
