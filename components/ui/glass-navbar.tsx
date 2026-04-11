import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type GlassNavbarProps = HTMLAttributes<HTMLElement> & {
  scrolled?: boolean;
};

export function GlassNavbar({
  className,
  scrolled = false,
  ...props
}: GlassNavbarProps): React.JSX.Element {
  return (
    <header
      className={cn(
        'header-frost sticky top-0 z-50',
        scrolled && 'header-frost-scrolled',
        className
      )}
      {...props}
    />
  );
}
