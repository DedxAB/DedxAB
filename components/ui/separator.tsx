import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export function Separator({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): React.JSX.Element {
  return (
    <div
      className={cn('h-px w-full bg-border/80', className)}
      role="separator"
      {...props}
    />
  );
}
