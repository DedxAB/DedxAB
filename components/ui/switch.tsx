'use client';

import { cn } from '@/lib/utils';

type SwitchProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label: string;
};

export function Switch({
  checked,
  onCheckedChange,
  label,
}: SwitchProps): React.JSX.Element {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onCheckedChange(!checked)}
      className={cn(
        'inline-flex h-6 w-11 items-center rounded-full border transition-all duration-300',
        checked ? 'border-neonCyan bg-neonCyan/20' : 'border-border bg-muted'
      )}
    >
      <span
        className={cn(
          'h-4 w-4 rounded-full bg-foreground transition-transform',
          checked ? 'translate-x-6' : 'translate-x-1'
        )}
      />
    </button>
  );
}
