import { useState } from 'react';
import type { DropdownItem } from './types';

export function useControllableSelection<T extends DropdownItem>(
  controlledValue: T[] | undefined,
  defaultValue: T[] | undefined,
  onChange: ((items: T[]) => void) | undefined
) {
  const [internalValue, setInternalValue] = useState<T[]>(defaultValue ?? []);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const setValue = (nextValue: T[]) => {
    if (!isControlled) {
      setInternalValue(nextValue);
    }

    onChange?.(nextValue);
  };

  return [value, setValue] as const;
}
