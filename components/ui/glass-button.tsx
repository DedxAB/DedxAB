'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const glassButtonVariants = cva(
  'control-button inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full border text-sm tracking-[0.08em] transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'text-foreground',
        secondary: 'control-button-secondary text-foreground',
        ghost:
          'surface-subtle text-foreground hover:brightness-[1.03]',
      },
      size: {
        default: 'h-11 px-5 py-2',
        sm: 'h-9 px-4 text-[0.7rem]',
        lg: 'h-12 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {}

export const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(glassButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
GlassButton.displayName = 'GlassButton';
