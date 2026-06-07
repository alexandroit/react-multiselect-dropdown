import type { DropdownSettings, DropdownSpaceOptionAction } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';
import { countryOptions } from '../../shared/country-data';

export type KeyboardFeature =
  | 'space'
  | 'tab'
  | 'arrows'
  | 'escape'
  | 'backspaceRemovesLastWhenSearchEmpty'
  | 'deleteRemovesFocusedBadge';

export const keyboardCountries: DemoItem[] = countryOptions;
export const keyboardSelectedInitial: DemoItem[] = countryOptions.slice(0, 2);

export const keyboardFeatureLabels: Array<{ key: KeyboardFeature; label: string }> = [
  { key: 'space', label: 'Space' },
  { key: 'tab', label: 'Tab' },
  { key: 'arrows', label: 'Arrows' },
  { key: 'escape', label: 'Escape' },
  { key: 'backspaceRemovesLastWhenSearchEmpty', label: 'Empty search Backspace' },
  { key: 'deleteRemovesFocusedBadge', label: 'Focused badge Delete' }
];

export const spaceOptionActions: Array<{ key: DropdownSpaceOptionAction; label: string }> = [
  { key: 'toggle', label: 'Toggle current' },
  { key: 'toggle-and-next', label: 'Toggle + next' }
];

export function makeKeyboardSettings(
  keyboard: Record<KeyboardFeature, boolean>,
  spaceOptionAction: DropdownSpaceOptionAction
): DropdownSettings<DemoItem> {
  return {
    text: 'Keyboard countries',
    enableSearchFilter: true,
    searchPlaceholderText: 'Search and test keys',
    primaryKey: 'id',
    labelKey: 'itemName',
    searchBy: ['itemName', 'capital', 'region'],
    badgeShowLimit: 3,
    maxHeight: 220,
    showCheckbox: true,
    clearAll: true,
    skin: 'classic',
    keyboard: {
      ...keyboard,
      spaceOptionAction
    }
  };
}
