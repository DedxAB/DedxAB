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
        'toggle-switch inline-flex h-6 w-11 items-center rounded-full transition-all duration-300',
        checked ? 'is-active' : ''
      )}
    >
      <span
        className={cn(
          'toggle-switch-thumb h-4 w-4 rounded-full transition-transform',
          checked ? 'translate-x-6' : 'translate-x-1'
        )}
      />
    </button>
  );
}
