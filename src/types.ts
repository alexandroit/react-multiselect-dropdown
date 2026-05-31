import type {
  AriaAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  Ref
} from 'react';

export type PrimitiveItem = string | number | boolean;
export type DropdownItem = PrimitiveItem | Record<string, any>;
export type DropdownItemKey<T = DropdownItem> = T extends PrimitiveItem ? string : Extract<keyof T, string>;
export type DropdownSpaceOptionAction = 'toggle' | 'toggle-and-next';

export interface DropdownKeyboardSettings {
  space?: boolean;
  spaceOptionAction?: DropdownSpaceOptionAction;
  tab?: boolean;
  arrows?: boolean;
  escape?: boolean;
  backspaceRemovesLastWhenSearchEmpty?: boolean;
  deleteRemovesFocusedBadge?: boolean;
  /** @deprecated Use `backspaceRemovesLastWhenSearchEmpty` instead. */
  backspace?: boolean;
}

export interface DropdownSettings<T = DropdownItem> {
  singleSelection?: boolean;
  text?: string;
  enableCheckAll?: boolean;
  selectAllText?: string;
  unSelectAllText?: string;
  filterSelectAllText?: string;
  filterUnSelectAllText?: string;
  enableFilterSelectAll?: boolean;
  enableSearchFilter?: boolean;
  searchBy?: DropdownItemKey<T>[];
  maxHeight?: number;
  badgeShowLimit?: number;
  classes?: string;
  limitSelection?: number;
  disabled?: boolean;
  searchPlaceholderText?: string;
  groupBy?: DropdownItemKey<T> | ((item: T) => string);
  showCheckbox?: boolean;
  noDataLabel?: string;
  searchAutofocus?: boolean;
  lazyLoading?: boolean;
  labelKey?: DropdownItemKey<T>;
  primaryKey?: DropdownItemKey<T>;
  position?: 'top' | 'bottom';
  autoPosition?: boolean;
  loading?: boolean;
  selectGroup?: boolean;
  addNewItemOnFilter?: boolean;
  addNewButtonText?: string;
  escapeToClose?: boolean;
  clearAll?: boolean;
  closeDropDownOnSelection?: boolean;
  tagToBody?: boolean;
  appendToBody?: boolean;
  /** @deprecated Use `skin` instead. Kept as a compatibility alias. */
  theme?: 'classic' | 'material' | 'dark' | 'custom' | 'brand' | string;
  skin?: 'classic' | 'material' | 'dark' | 'custom' | 'brand' | string;
  ariaLabel?: string;
  listboxAriaLabel?: string;
  searchAriaLabel?: string;
  clearSearchAriaLabel?: string;
  clearAllAriaLabel?: string;
  removeItemAriaLabel?: string | ((item: T) => string);
  openDropdownAriaLabel?: string;
  closeDropdownAriaLabel?: string;
  loadingText?: string;
  keyboard?: DropdownKeyboardSettings;
}

export type ResolvedDropdownSettings<T = DropdownItem> = Required<
  Omit<DropdownSettings<T>, 'keyboard'>
> & {
  keyboard: Required<DropdownKeyboardSettings>;
};

export interface DropdownRenderContext<T = DropdownItem> {
  item: T;
  label: string;
  selected: boolean;
  disabled: boolean;
  query: string;
  toggle: () => void;
  remove: () => void;
}

export interface MultiSelectDropdownSlotActions<T = DropdownItem> {
  openDropdown: () => void;
  closeDropdown: () => void;
  toggleDropdown: () => void;
  clearSelection: () => void;
  selectItem: (item: T) => void;
  removeItem: (item: T) => void;
  selectAll: (items?: T[]) => void;
  deSelectAll: (items?: T[]) => void;
  toggleGroup: (groupName: string, items: T[]) => void;
  addFilterNewItem: () => Promise<void>;
  setFilter: (value: string) => void;
}

export interface MultiSelectDropdownSlotState<T = DropdownItem> {
  settings: ResolvedDropdownSettings<T>;
  isOpen: boolean;
  filter: string;
  selectedItems: T[];
  visibleBadges: T[];
  hiddenBadgeCount: number;
  filteredItems: T[];
  selectableItems: T[];
  allFilteredSelected: boolean;
  hasFilteredResults: boolean;
  loading: boolean;
  listboxId: string;
  activeDescendantId?: string;
  label: string;
}

export interface MultiSelectDropdownSlotBase<T = DropdownItem> {
  state: MultiSelectDropdownSlotState<T>;
  actions: MultiSelectDropdownSlotActions<T>;
}

export interface MultiSelectDropdownOptionSlot<T = DropdownItem> {
  item: T;
  id: string;
  key: string;
  label: string;
  selected: boolean;
  disabled: boolean;
  index: number;
  groupName?: string;
}

export interface MultiSelectDropdownGroupSlot<T = DropdownItem> {
  name: string;
  items: T[];
  enabledItems: T[];
  selected: boolean;
  disabled: boolean;
  index: number;
}

export type MultiSelectDropdownSlotComponent<P> = (props: P) => ReactNode;

export interface MultiSelectDropdownSlots<T = DropdownItem> {
  Root?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: HTMLAttributes<HTMLDivElement> & { ref: Ref<HTMLDivElement> };
      children: ReactNode;
    }
  >;
  Trigger?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: HTMLAttributes<HTMLDivElement> & AriaAttributes & { ref: Ref<HTMLDivElement> };
      children: ReactNode;
    }
  >;
  Value?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: HTMLAttributes<HTMLDivElement>;
      children: ReactNode;
    }
  >;
  Placeholder?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: HTMLAttributes<HTMLSpanElement>;
      text: string;
    }
  >;
  SingleValue?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: HTMLAttributes<HTMLSpanElement>;
      item: T;
      label: string;
    }
  >;
  BadgeList?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: HTMLAttributes<HTMLDivElement>;
      items: T[];
      children: ReactNode;
    }
  >;
  Badge?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: HTMLAttributes<HTMLSpanElement>;
      item: T;
      label: string;
      children: ReactNode;
      removeButton: ReactNode;
    }
  >;
  BadgeLabel?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: HTMLAttributes<HTMLSpanElement>;
      item: T;
      label: string;
      children: ReactNode;
    }
  >;
  BadgeRemove?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: ButtonHTMLAttributes<HTMLButtonElement>;
      item: T;
      label: string;
      icon: ReactNode;
    }
  >;
  Actions?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: HTMLAttributes<HTMLDivElement>;
      children: ReactNode;
    }
  >;
  OverflowCounter?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: HTMLAttributes<HTMLSpanElement>;
      count: number;
    }
  >;
  ClearAll?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: ButtonHTMLAttributes<HTMLButtonElement>;
      icon: ReactNode;
    }
  >;
  Arrow?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: ButtonHTMLAttributes<HTMLButtonElement> & AriaAttributes;
      icon: ReactNode;
      direction: 'up' | 'down';
    }
  >;
  Menu?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: HTMLAttributes<HTMLDivElement> & { ref: Ref<HTMLDivElement> };
      children: ReactNode;
      position: 'top' | 'bottom';
      appendToBody: boolean;
    }
  >;
  Toolbar?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: HTMLAttributes<HTMLDivElement>;
      children: ReactNode;
    }
  >;
  BulkActions?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: HTMLAttributes<HTMLDivElement>;
      children: ReactNode;
    }
  >;
  SelectAll?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: ButtonHTMLAttributes<HTMLButtonElement>;
      checked: boolean;
      label: string;
      checkbox: ReactNode;
    }
  >;
  AddNewItem?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: ButtonHTMLAttributes<HTMLButtonElement>;
      query: string;
      label: string;
    }
  >;
  Search?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: HTMLAttributes<HTMLDivElement>;
      inputProps: InputHTMLAttributes<HTMLInputElement> & { ref: Ref<HTMLInputElement> };
      clearButtonProps: ButtonHTMLAttributes<HTMLButtonElement>;
      query: string;
      icon: ReactNode;
      clearIcon: ReactNode;
    }
  >;
  OptionList?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: HTMLAttributes<HTMLDivElement> & AriaAttributes & { ref: Ref<HTMLDivElement> };
      children: ReactNode;
    }
  >;
  Group?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: HTMLAttributes<HTMLDivElement> & AriaAttributes;
      group: MultiSelectDropdownGroupSlot<T>;
      header: ReactNode;
      children: ReactNode;
    }
  >;
  GroupHeader?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: HTMLAttributes<HTMLDivElement>;
      group: MultiSelectDropdownGroupSlot<T>;
      action: ReactNode;
    }
  >;
  GroupAction?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: ButtonHTMLAttributes<HTMLButtonElement>;
      group: MultiSelectDropdownGroupSlot<T>;
      label: string;
    }
  >;
  Option?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: HTMLAttributes<HTMLDivElement> & AriaAttributes;
      option: MultiSelectDropdownOptionSlot<T>;
      checkbox: ReactNode;
      children: ReactNode;
    }
  >;
  Checkbox?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: HTMLAttributes<HTMLSpanElement>;
      checked: boolean;
      context: 'option' | 'selectAll';
    }
  >;
  LoadingState?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: HTMLAttributes<HTMLDivElement>;
      text: string;
    }
  >;
  EmptyState?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: HTMLAttributes<HTMLDivElement>;
      query: string;
      text: string;
    }
  >;
  MenuFooter?: MultiSelectDropdownSlotComponent<
    MultiSelectDropdownSlotBase<T> & {
      props: HTMLAttributes<HTMLDivElement>;
    }
  >;
}

export interface MultiSelectDropdownHandle<T = DropdownItem> {
  openDropdown: () => void;
  closeDropdown: () => void;
  clearSelection: () => void;
  focusSearch: () => void;
  selectAll: () => void;
  deSelectAll: () => void;
  getSelectedItems: () => T[];
}

export interface MultiSelectDropdownProps<T = DropdownItem> {
  data: T[];
  settings?: DropdownSettings<T>;
  loading?: boolean;
  name?: string;
  className?: string;
  style?: CSSProperties;
  selectedItems?: T[];
  defaultSelectedItems?: T[];
  onChange?: (items: T[]) => void;
  onSelect?: (item: T) => void;
  onDeSelect?: (item: T) => void;
  onSelectAll?: (items: T[]) => void;
  onDeSelectAll?: (items: T[]) => void;
  onOpen?: () => void;
  onClose?: () => void;
  onScrollToEnd?: (event: { scrollTop: number; scrollHeight: number; clientHeight: number }) => void;
  onFilterSelectAll?: (items: T[]) => void;
  onFilterDeSelectAll?: (items: T[]) => void;
  onAddFilterNewItem?: (query: string) => void | T | Promise<void | T>;
  onGroupSelect?: (groupName: string, items: T[]) => void;
  onGroupDeSelect?: (groupName: string, items: T[]) => void;
  renderItem?: (item: T, context: DropdownRenderContext<T>) => ReactNode;
  renderBadge?: (item: T, context: DropdownRenderContext<T>) => ReactNode;
  renderSearch?: (context: {
    query: string;
    setQuery: (value: string) => void;
    closeDropdown: () => void;
  }) => ReactNode;
  renderEmptyState?: (query: string) => ReactNode;
  slots?: MultiSelectDropdownSlots<T>;
}

export interface HeadlessDropdownOption<T = DropdownItem> {
  item: T;
  key: string;
  id: string;
  label: string;
  selected: boolean;
  disabled: boolean;
  index: number;
  groupName?: string;
}

export interface HeadlessDropdownGroup<T = DropdownItem> {
  name: string;
  items: HeadlessDropdownOption<T>[];
  selected: boolean;
  disabled: boolean;
}

export interface UseMultiSelectDropdownProps<T = DropdownItem>
  extends Omit<
    MultiSelectDropdownProps<T>,
    'className' | 'style' | 'renderItem' | 'renderBadge' | 'renderSearch' | 'renderEmptyState'
  > {
  id?: string;
}

export interface UseMultiSelectStateProps<T = DropdownItem>
  extends Omit<
    MultiSelectDropdownProps<T>,
    'className' | 'style' | 'loading' | 'renderItem' | 'renderBadge' | 'renderSearch' | 'renderEmptyState'
  > {
  onSelectionShouldClose?: () => void;
}

export interface UseMultiSelectStateReturn<T = DropdownItem> {
  settings: ResolvedDropdownSettings<T>;
  filter: string;
  setFilter: (value: string) => void;
  selectedItems: T[];
  allItems: T[];
  filteredItems: T[];
  selectableItems: T[];
  visibleBadges: T[];
  hiddenBadgeCount: number;
  allFilteredSelected: boolean;
  isSelected: (item: T) => boolean;
  isDisabled: (item: T) => boolean;
  getItemLabel: (item: T) => string;
  getItemKey: (item: T) => string;
  selectItem: (item: T) => void;
  removeItem: (item: T) => void;
  removeLastSelectedItem: () => void;
  selectAll: (items?: T[], filteredSelection?: boolean) => void;
  deSelectAll: (items?: T[], filteredSelection?: boolean) => void;
  clearSelection: () => void;
  toggleGroup: (groupName: string, items: T[]) => void;
  addFilterNewItem: () => Promise<void>;
}

export interface UseMultiSelectDropdownReturn<T = DropdownItem> {
  settings: ResolvedDropdownSettings<T>;
  isOpen: boolean;
  filter: string;
  setFilter: (value: string) => void;
  selectedItems: T[];
  selectedOptions: HeadlessDropdownOption<T>[];
  options: HeadlessDropdownOption<T>[];
  groups: HeadlessDropdownGroup<T>[];
  visibleOptions: HeadlessDropdownOption<T>[];
  visibleBadges: T[];
  hiddenBadgeCount: number;
  allFilteredSelected: boolean;
  hasFilteredResults: boolean;
  activeDescendantId?: string;
  listboxId: string;
  label: string;
  openDropdown: () => void;
  closeDropdown: () => void;
  toggleDropdown: () => void;
  clearSelection: () => void;
  selectItem: (item: T) => void;
  removeItem: (item: T) => void;
  selectAll: (items?: T[]) => void;
  deSelectAll: (items?: T[]) => void;
  toggleGroup: (groupName: string, items: T[]) => void;
  addFilterNewItem: () => Promise<void>;
  isSelected: (item: T) => boolean;
  isDisabled: (item: T) => boolean;
  getItemLabel: (item: T) => string;
  getItemKey: (item: T) => string;
  getRootProps: <E extends HTMLElement = HTMLDivElement>(
    props?: HTMLAttributes<E> & { ref?: Ref<E> }
  ) => HTMLAttributes<E> & { ref: (node: E | null) => void };
  getTriggerProps: <E extends HTMLElement = HTMLButtonElement>(
    props?: ButtonHTMLAttributes<E> & { ref?: Ref<E> }
  ) => ButtonHTMLAttributes<E> & AriaAttributes & { ref: (node: E | null) => void };
  getListboxProps: <E extends HTMLElement = HTMLDivElement>(
    props?: HTMLAttributes<E> & { ref?: Ref<E> }
  ) => HTMLAttributes<E> & AriaAttributes & { ref: (node: E | null) => void };
  getOptionProps: <E extends HTMLElement = HTMLDivElement>(
    optionOrItem: HeadlessDropdownOption<T> | T,
    props?: HTMLAttributes<E> & { ref?: Ref<E> }
  ) => HTMLAttributes<E> & AriaAttributes & { ref: (node: E | null) => void };
  getSearchInputProps: <E extends HTMLInputElement = HTMLInputElement>(
    props?: InputHTMLAttributes<E> & { ref?: Ref<E> }
  ) => InputHTMLAttributes<E> & AriaAttributes & { ref: (node: E | null) => void };
  getClearAllButtonProps: <E extends HTMLElement = HTMLButtonElement>(
    props?: ButtonHTMLAttributes<E>
  ) => ButtonHTMLAttributes<E> & AriaAttributes;
  getRemoveButtonProps: <E extends HTMLElement = HTMLButtonElement>(
    item: T,
    props?: ButtonHTMLAttributes<E>
  ) => ButtonHTMLAttributes<E> & AriaAttributes;
}
