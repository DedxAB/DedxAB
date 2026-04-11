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
        'header-frost sticky top-0 z-50 will-change-transform transition-transform transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
        scrolled && 'header-frost-scrolled',
        className
      )}
      {...props}
    />
  );
}
