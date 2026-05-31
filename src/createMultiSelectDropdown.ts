import type { ForwardedRef, ReactElement } from 'react';
import { MultiSelectDropdown } from './MultiSelectDropdown';
import { useMultiSelectDropdown } from './useMultiSelectDropdown';
import { useMultiSelectState } from './useMultiSelectState';
import type {
  DropdownItem,
  DropdownSettings,
  MultiSelectDropdownHandle,
  MultiSelectDropdownProps,
  MultiSelectDropdownSlots,
  UseMultiSelectDropdownProps,
  UseMultiSelectDropdownReturn,
  UseMultiSelectStateProps,
  UseMultiSelectStateReturn
} from './types';

export type TypedMultiSelectDropdownComponent<T extends DropdownItem> = (
  props: MultiSelectDropdownProps<T> & { ref?: ForwardedRef<MultiSelectDropdownHandle<T>> }
) => ReactElement | null;

export interface TypedMultiSelectDropdownFamily<T extends DropdownItem> {
  Dropdown: TypedMultiSelectDropdownComponent<T>;
  MultiSelectDropdown: TypedMultiSelectDropdownComponent<T>;
  useDropdown: (props: UseMultiSelectDropdownProps<T>) => UseMultiSelectDropdownReturn<T>;
  useSelectionState: (props: UseMultiSelectStateProps<T>) => UseMultiSelectStateReturn<T>;
  defineSettings: (settings: DropdownSettings<T>) => DropdownSettings<T>;
  defineSlots: (slots: MultiSelectDropdownSlots<T>) => MultiSelectDropdownSlots<T>;
}

export function createMultiSelectDropdown<T extends DropdownItem = never>(): TypedMultiSelectDropdownFamily<T> {
  const TypedDropdown = MultiSelectDropdown as TypedMultiSelectDropdownComponent<T>;

  function useDropdown(props: UseMultiSelectDropdownProps<T>) {
    return useMultiSelectDropdown<T>(props);
  }

  function useSelectionState(props: UseMultiSelectStateProps<T>) {
    return useMultiSelectState<T>(props);
  }

  function defineSettings(settings: DropdownSettings<T>) {
    return settings;
  }

  function defineSlots(slots: MultiSelectDropdownSlots<T>) {
    return slots;
  }

  return {
    Dropdown: TypedDropdown,
    MultiSelectDropdown: TypedDropdown,
    useDropdown,
    useSelectionState,
    defineSettings,
    defineSlots
  };
}
