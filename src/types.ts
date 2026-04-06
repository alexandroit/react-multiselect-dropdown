import type { CSSProperties, ReactNode } from 'react';

export type PrimitiveItem = string | number | boolean;
export type DropdownItem = PrimitiveItem | Record<string, any>;

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
  searchBy?: string[];
  maxHeight?: number;
  badgeShowLimit?: number;
  classes?: string;
  limitSelection?: number;
  disabled?: boolean;
  searchPlaceholderText?: string;
  groupBy?: string | ((item: T) => string);
  showCheckbox?: boolean;
  noDataLabel?: string;
  searchAutofocus?: boolean;
  lazyLoading?: boolean;
  labelKey?: string;
  primaryKey?: string;
  position?: 'top' | 'bottom';
  loading?: boolean;
  selectGroup?: boolean;
  addNewItemOnFilter?: boolean;
  addNewButtonText?: string;
  escapeToClose?: boolean;
  clearAll?: boolean;
  closeDropDownOnSelection?: boolean;
  tagToBody?: boolean;
}

export interface DropdownRenderContext<T = DropdownItem> {
  item: T;
  label: string;
  selected: boolean;
  disabled: boolean;
  query: string;
  toggle: () => void;
  remove: () => void;
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
}
