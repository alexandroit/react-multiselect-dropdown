import type { DropdownKeyboardSettings, DropdownSettings, ResolvedDropdownSettings } from './types';

export const DEFAULT_KEYBOARD_SETTINGS: Required<DropdownKeyboardSettings> = {
  space: true,
  spaceOptionAction: 'toggle',
  tab: true,
  arrows: true,
  escape: true,
  backspaceRemovesLastWhenSearchEmpty: false,
  deleteRemovesFocusedBadge: true,
  backspace: false
};

export const DEFAULT_SETTINGS: ResolvedDropdownSettings<any> = {
  singleSelection: false,
  text: 'Select',
  enableCheckAll: true,
  selectAllText: 'Select All',
  unSelectAllText: 'Unselect All',
  filterSelectAllText: 'Select filtered',
  filterUnSelectAllText: 'Unselect filtered',
  enableFilterSelectAll: true,
  enableSearchFilter: false,
  searchBy: [],
  maxHeight: 300,
  badgeShowLimit: Number.MAX_SAFE_INTEGER,
  classes: '',
  limitSelection: 0,
  disabled: false,
  searchPlaceholderText: 'Search',
  groupBy: '',
  showCheckbox: true,
  noDataLabel: 'No Data Available',
  searchAutofocus: true,
  lazyLoading: false,
  labelKey: 'itemName',
  primaryKey: 'id',
  position: 'bottom',
  autoPosition: true,
  loading: false,
  selectGroup: false,
  addNewItemOnFilter: false,
  addNewButtonText: 'Add',
  escapeToClose: true,
  clearAll: true,
  closeDropDownOnSelection: false,
  tagToBody: false,
  appendToBody: false,
  theme: '',
  skin: 'classic',
  ariaLabel: 'Multiselect dropdown',
  listboxAriaLabel: 'Dropdown options',
  searchAriaLabel: 'Search options',
  clearSearchAriaLabel: 'Clear search',
  clearAllAriaLabel: 'Clear selected options',
  removeItemAriaLabel: 'Remove selected option',
  openDropdownAriaLabel: 'Open dropdown',
  closeDropdownAriaLabel: 'Close dropdown',
  loadingText: 'Loading options',
  keyboard: DEFAULT_KEYBOARD_SETTINGS
};

export function resolveDropdownSettings<T>(
  incomingSettings?: DropdownSettings<T>
): ResolvedDropdownSettings<T> {
  const escapeToClose = incomingSettings?.escapeToClose ?? DEFAULT_SETTINGS.escapeToClose;
  const incomingKeyboard = incomingSettings?.keyboard;
  const keyboard = {
    ...DEFAULT_KEYBOARD_SETTINGS,
    ...incomingKeyboard,
    backspaceRemovesLastWhenSearchEmpty:
      incomingKeyboard?.backspaceRemovesLastWhenSearchEmpty ??
      incomingKeyboard?.backspace ??
      DEFAULT_KEYBOARD_SETTINGS.backspaceRemovesLastWhenSearchEmpty,
    deleteRemovesFocusedBadge:
      incomingKeyboard?.deleteRemovesFocusedBadge ?? DEFAULT_KEYBOARD_SETTINGS.deleteRemovesFocusedBadge,
    escape: escapeToClose && (incomingKeyboard?.escape ?? DEFAULT_KEYBOARD_SETTINGS.escape)
  };

  return {
    ...DEFAULT_SETTINGS,
    ...incomingSettings,
    escapeToClose,
    keyboard
  } as ResolvedDropdownSettings<T>;
}
