import type { Ref } from 'react';

export function assignRef<T>(ref: Ref<T> | undefined, value: T | null) {
  if (typeof ref === 'function') {
    ref(value);
    return;
  }

  if (ref && 'current' in ref) {
    (ref as { current: T | null }).current = value;
  }
}

export function eventWasPrevented(event: { defaultPrevented?: boolean }) {
  return Boolean(event.defaultPrevented);
}

export function callAll<Event extends { defaultPrevented?: boolean }>(
  ownHandler: ((event: Event) => void) | undefined,
  userHandler: ((event: Event) => void) | undefined
) {
  return (event: Event) => {
    userHandler?.(event);

    if (!eventWasPrevented(event)) {
      ownHandler?.(event);
    }
  };
}
