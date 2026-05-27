import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ForwardedRef,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type ReactElement
} from 'react';
import { createPortal } from 'react-dom';
import { ensureDropdownStyles } from './styles';
import type {
  DropdownItem,
  DropdownRenderContext,
  DropdownSettings,
  MultiSelectDropdownHandle,
  MultiSelectDropdownProps
} from './types';

const DEFAULT_SETTINGS: Required<DropdownSettings<any>> = {
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
  loadingText: 'Loading options'
};

type GroupedItems<T> = Array<{ name: string; items: T[] }>;
type PendingFocus = 'first' | 'last' | 'search' | null;
type IconName = 'remove' | 'clear' | 'search' | 'angle-down' | 'angle-up';
const useClientLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

function StacklineIcon({ name, className = 'rmsd-icon' }: { name: IconName; className?: string }) {
  if (name === 'remove') {
    return (
      <svg className={className} viewBox="0 0 47.971 47.971" focusable="false" aria-hidden="true">
        <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" />
      </svg>
    );
  }

  if (name === 'clear') {
    return (
      <svg className={className} viewBox="0 0 51.976 51.976" focusable="false" aria-hidden="true">
        <path d="M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z" />
      </svg>
    );
  }

  if (name === 'search') {
    return (
      <svg className={className} viewBox="0 0 615.52 615.52" focusable="false" aria-hidden="true">
        <path d="M602.531,549.736l-184.31-185.368c26.679-37.72,42.528-83.729,42.528-133.548C460.75,103.35,357.997,0,231.258,0C104.518,0,1.765,103.35,1.765,230.82c0,127.47,102.753,230.82,229.493,230.82c49.53,0,95.271-15.944,132.78-42.777l184.31,185.366c7.482,7.521,17.292,11.291,27.102,11.291c9.812,0,19.62-3.77,27.083-11.291C617.496,589.188,617.496,564.777,602.531,549.736z M355.9,319.763l-15.042,21.273L319.7,356.174c-26.083,18.658-56.667,28.526-88.442,28.526c-84.365,0-152.995-69.035-152.995-153.88c0-84.846,68.63-153.88,152.995-153.88s152.996,69.034,152.996,153.88C384.271,262.769,374.462,293.526,355.9,319.763z" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 612 612" focusable="false" aria-hidden="true">
      {name === 'angle-up' ? (
        <path d="M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27L7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832c9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z" />
      ) : (
        <path d="M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782c-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296c6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z" />
      )}
    </svg>
  );
}

function isPrimitiveItem(item: DropdownItem): item is string | number | boolean {
  return typeof item === 'string' || typeof item === 'number' || typeof item === 'boolean';
}

function getLabel<T extends DropdownItem>(item: T, settings: Required<DropdownSettings<T>>) {
  if (isPrimitiveItem(item)) {
    return String(item);
  }

  const keys = [settings.labelKey, 'itemName', 'name', 'label', 'title', 'value'].filter(Boolean);

  for (const key of keys) {
    if (key && item[key] != null) {
      return String(item[key]);
    }
  }

  return JSON.stringify(item);
}

function getPrimaryValue<T extends DropdownItem>(item: T, settings: Required<DropdownSettings<T>>) {
  if (isPrimitiveItem(item)) {
    return String(item);
  }

  const keys = [settings.primaryKey, 'id', 'value', 'key'].filter(Boolean);
  for (const key of keys) {
    if (key && item[key] != null) {
      return String(item[key]);
    }
  }

  return getLabel(item, settings);
}

function itemMatchesQuery<T extends DropdownItem>(
  item: T,
  query: string,
  settings: Required<DropdownSettings<T>>
) {
  if (!query.trim()) {
    return true;
  }

  const needle = query.trim().toLowerCase();
  const haystack = new Set<string>();

  haystack.add(getLabel(item, settings).toLowerCase());

  if (!isPrimitiveItem(item)) {
    const searchKeys = settings.searchBy.length ? settings.searchBy : [settings.labelKey];
    for (const key of searchKeys) {
      if (key && item[key] != null) {
        haystack.add(String(item[key]).toLowerCase());
      }
    }
  }

  for (const value of haystack) {
    if (value.includes(needle)) {
      return true;
    }
  }

  return false;
}

function getGroupName<T extends DropdownItem>(item: T, settings: Required<DropdownSettings<T>>) {
  if (!settings.groupBy) {
    return '';
  }

  if (typeof settings.groupBy === 'function') {
    return settings.groupBy(item);
  }

  if (!isPrimitiveItem(item)) {
    const groupKey = settings.groupBy as string;
    const objectItem = item as Record<string, any>;
    if (groupKey in objectItem) {
      return String(objectItem[groupKey] ?? '');
    }
  }

  return '';
}

function mergeUniqueItems<T extends DropdownItem>(
  base: T[],
  extra: T[],
  settings: Required<DropdownSettings<T>>
) {
  const bucket = new Map<string, T>();

  for (const item of [...base, ...extra]) {
    bucket.set(getPrimaryValue(item, settings), item);
  }

  return Array.from(bucket.values());
}

function createItemFromQuery<T extends DropdownItem>(
  query: string,
  settings: Required<DropdownSettings<T>>,
  sample: T | undefined
) {
  if (sample && !isPrimitiveItem(sample)) {
    return {
      [settings.primaryKey]: query.toLowerCase().replace(/\s+/g, '-'),
      [settings.labelKey]: query
    } as T;
  }

  return query as T;
}

function isDisabledItem<T extends DropdownItem>(item: T) {
  return !isPrimitiveItem(item) && Boolean(item.disabled);
}

function buildGroups<T extends DropdownItem>(items: T[], settings: Required<DropdownSettings<T>>) {
  if (!settings.groupBy) {
    return [] as GroupedItems<T>;
  }

  const map = new Map<string, T[]>();
  for (const item of items) {
    const groupName = getGroupName(item, settings) || 'Ungrouped';
    const current = map.get(groupName) || [];
    current.push(item);
    map.set(groupName, current);
  }

  return Array.from(map.entries()).map(([name, groupedItems]) => ({
    name,
    items: groupedItems
  }));
}

function useControllableSelection<T extends DropdownItem>(
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

function sanitizeId(value: string) {
  return value.replace(/[^a-zA-Z0-9_-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 56) || 'option';
}

function normalizeSkinName(value: string) {
  return sanitizeId(value.toLowerCase()) || 'classic';
}

function getVisibleBadgeLimit(selectedCount: number, rawLimit: number) {
  if (!Number.isFinite(rawLimit)) {
    return selectedCount;
  }

  const limit = Math.max(0, Math.floor(rawLimit));
  return Math.min(selectedCount, limit);
}

function InnerMultiSelectDropdown<T extends DropdownItem>(
  {
    data,
    settings: incomingSettings,
    loading,
    className,
    style,
    selectedItems: controlledSelectedItems,
    defaultSelectedItems,
    onChange,
    onSelect,
    onDeSelect,
    onSelectAll,
    onDeSelectAll,
    onOpen,
    onClose,
    onScrollToEnd,
    onFilterSelectAll,
    onFilterDeSelectAll,
    onAddFilterNewItem,
    onGroupSelect,
    onGroupDeSelect,
    renderItem,
    renderBadge,
    renderSearch,
    renderEmptyState
  }: MultiSelectDropdownProps<T>,
  ref: ForwardedRef<MultiSelectDropdownHandle<T>>
) {
  ensureDropdownStyles();

  const settings = { ...DEFAULT_SETTINGS, ...incomingSettings } as Required<DropdownSettings<T>>;
  const [selectedItems, setSelectedItems] = useControllableSelection(
    controlledSelectedItems,
    defaultSelectedItems,
    onChange
  );
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const [addedItems, setAddedItems] = useState<T[]>([]);
  const [activeDescendantId, setActiveDescendantId] = useState<string | null>(null);
  const [bodyMenuStyle, setBodyMenuStyle] = useState<CSSProperties | undefined>();
  const [bodyListMaxHeight, setBodyListMaxHeight] = useState<number | undefined>();
  const [effectivePosition, setEffectivePosition] = useState<'top' | 'bottom'>(
    settings.position === 'top' ? 'top' : 'bottom'
  );
  const rootRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const lastScrollHeightRef = useRef(0);
  const pendingFocusRef = useRef<PendingFocus>(null);
  const instanceIdRef = useRef(`rmsd-${Math.random().toString(36).slice(2)}`);

  const allItems = useMemo(
    () => mergeUniqueItems(data, addedItems, settings),
    [addedItems, data, settings]
  );
  const filteredItems = useMemo(
    () => allItems.filter((item) => itemMatchesQuery(item, filter, settings)),
    [allItems, filter, settings]
  );
  const groupedItems = useMemo(() => buildGroups(filteredItems, settings), [filteredItems, settings]);

  const listboxId = `${instanceIdRef.current}-listbox`;
  const getOptionId = (item: T, index: number, prefix: string) =>
    `${instanceIdRef.current}-${prefix}-${index}-${sanitizeId(getPrimaryValue(item, settings))}`;

  const isSelected = (item: T) =>
    selectedItems.some(
      (selectedItem) => getPrimaryValue(selectedItem, settings) === getPrimaryValue(item, settings)
    );

  const selectableItems = filteredItems.filter((item) => !isDisabledItem(item));
  const limitReached = Boolean(settings.limitSelection) && selectedItems.length >= settings.limitSelection;
  const shouldAppendToBody = Boolean(settings.appendToBody || settings.tagToBody);

  const getOptionElements = () =>
    Array.from(
      listRef.current?.querySelectorAll<HTMLElement>('[data-rmsd-option="true"]:not([aria-disabled="true"])') ??
        []
    );

  const focusOptionByIndex = (index: number) => {
    const options = getOptionElements();
    if (!options.length) {
      return;
    }

    const boundedIndex = Math.max(0, Math.min(index, options.length - 1));
    const option = options[boundedIndex];
    option.focus();
    setActiveDescendantId(option.id || null);
    option.scrollIntoView({ block: 'nearest' });
  };

  const focusFirstOption = () => focusOptionByIndex(0);
  const focusLastOption = () => focusOptionByIndex(getOptionElements().length - 1);

  const updateSelection = (nextItems: T[]) => {
    setSelectedItems(nextItems);
  };

  const openDropdown = (focusTarget: PendingFocus = 'search') => {
    if (settings.disabled) {
      return;
    }

    pendingFocusRef.current = focusTarget;
    setIsOpen((current) => {
      if (!current) {
        onOpen?.();
      }
      return true;
    });
  };

  const closeDropdown = (returnFocus = false) => {
    setIsOpen((current) => {
      if (current) {
        onClose?.();
      }
      return false;
    });
    setActiveDescendantId(null);
    setBodyMenuStyle(undefined);
    setBodyListMaxHeight(undefined);

    if (returnFocus) {
      window.setTimeout(() => triggerRef.current?.focus(), 0);
    }
  };

  const clearSelection = () => {
    const previousItems = selectedItems;
    updateSelection([]);
    onDeSelectAll?.(previousItems);
  };

  const toggleDropdown = () => {
    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown('search');
    }
  };

  const removeItem = (item: T) => {
    const nextItems = selectedItems.filter(
      (selectedItem) => getPrimaryValue(selectedItem, settings) !== getPrimaryValue(item, settings)
    );
    updateSelection(nextItems);
    onDeSelect?.(item);
  };

  const selectItem = (item: T) => {
    if (settings.disabled || isDisabledItem(item)) {
      return;
    }

    if (isSelected(item)) {
      removeItem(item);
      return;
    }

    if (settings.singleSelection) {
      updateSelection([item]);
      onSelect?.(item);
      closeDropdown(true);
      return;
    }

    if (settings.limitSelection && selectedItems.length >= settings.limitSelection) {
      return;
    }

    const nextItems = [...selectedItems, item];
    updateSelection(nextItems);
    onSelect?.(item);

    if (settings.closeDropDownOnSelection) {
      closeDropdown(true);
    }
  };

  const selectAllItems = (items: T[], filteredSelection = false) => {
    if (settings.singleSelection) {
      return;
    }

    const currentIds = new Set(selectedItems.map((item) => getPrimaryValue(item, settings)));
    const remainingCapacity = settings.limitSelection
      ? Math.max(settings.limitSelection - selectedItems.length, 0)
      : Number.MAX_SAFE_INTEGER;

    const nextItemsToAdd = items
      .filter((item) => !currentIds.has(getPrimaryValue(item, settings)))
      .filter((item) => !isDisabledItem(item))
      .slice(0, remainingCapacity);

    const nextItems = [...selectedItems, ...nextItemsToAdd];
    updateSelection(nextItems);

    if (filteredSelection) {
      onFilterSelectAll?.(nextItemsToAdd);
    } else {
      onSelectAll?.(nextItems);
    }
  };

  const deSelectAllItems = (items: T[], filteredSelection = false) => {
    const ids = new Set(items.map((item) => getPrimaryValue(item, settings)));
    const nextItems = selectedItems.filter((item) => !ids.has(getPrimaryValue(item, settings)));
    updateSelection(nextItems);

    if (filteredSelection) {
      onFilterDeSelectAll?.(items);
    } else {
      onDeSelectAll?.(items);
    }
  };

  const handleAddFilterNewItem = async () => {
    const query = filter.trim();
    if (!query) {
      return;
    }

    const result = await onAddFilterNewItem?.(query);
    const nextItem = result === undefined ? createItemFromQuery(query, settings, data[0]) : result;

    setAddedItems((currentItems) => mergeUniqueItems(currentItems, [nextItem], settings));

    if (settings.singleSelection) {
      updateSelection([nextItem]);
    } else {
      updateSelection(mergeUniqueItems(selectedItems, [nextItem], settings));
    }

    setFilter('');
  };

  const toggleGroup = (groupName: string, items: T[]) => {
    const groupItems = items.filter((item) => !isDisabledItem(item));
    const allSelected = groupItems.length > 0 && groupItems.every((item) => isSelected(item));

    if (allSelected) {
      deSelectAllItems(groupItems, false);
      onGroupDeSelect?.(groupName, groupItems);
      return;
    }

    selectAllItems(groupItems, false);
    onGroupSelect?.(groupName, groupItems);
  };

  const handleListScroll = () => {
    if (!listRef.current || !onScrollToEnd) {
      return;
    }

    const { scrollHeight, scrollTop, clientHeight } = listRef.current;

    if (scrollHeight === lastScrollHeightRef.current && scrollTop + clientHeight < scrollHeight - 12) {
      return;
    }

    if (scrollTop + clientHeight >= scrollHeight - 12) {
      lastScrollHeightRef.current = scrollHeight;
      onScrollToEnd({ scrollTop, scrollHeight, clientHeight });
    }
  };

  const resolveDropdownPosition = (triggerRect: DOMRect, menuHeight: number) => {
    const preferredPosition = settings.position === 'top' ? 'top' : 'bottom';

    if (!settings.autoPosition || typeof window === 'undefined' || typeof document === 'undefined') {
      return preferredPosition;
    }

    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const spaceOnTop = triggerRect.top;
    const spaceOnBottom = viewportHeight - triggerRect.bottom;
    const topHasMeaningfullyMoreRoom = spaceOnTop > spaceOnBottom + 48;

    if (spaceOnBottom < menuHeight && topHasMeaningfullyMoreRoom && menuHeight < spaceOnTop) {
      return 'top';
    }

    return 'bottom';
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (!rootRef.current?.contains(target) && !menuRef.current?.contains(target)) {
        closeDropdown();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && settings.escapeToClose) {
        closeDropdown(true);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, settings.escapeToClose]);

  const updateBodyMenuPosition = () => {
    if (!shouldAppendToBody || !triggerRef.current || typeof window === 'undefined') {
      return;
    }

    const gap = 8;
    const viewportPadding = 8;
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const menuHeight = menuRef.current?.offsetHeight ?? 0;
    const listHeight = listRef.current?.offsetHeight ?? Math.min(settings.maxHeight, menuHeight);
    const nonListHeight = Math.max(0, menuHeight - listHeight);
    const resolvedPosition = resolveDropdownPosition(triggerRect, menuHeight);
    const availableHeight =
      resolvedPosition === 'top'
        ? Math.max(0, triggerRect.top - gap - viewportPadding)
        : Math.max(0, window.innerHeight - triggerRect.bottom - gap - viewportPadding);
    const nextListMaxHeight =
      menuHeight > 0
        ? Math.max(0, Math.min(settings.maxHeight, availableHeight - nonListHeight))
        : settings.maxHeight;
    const positionedMenuHeight = nonListHeight + nextListMaxHeight;
    const preferredTop =
      resolvedPosition === 'top'
        ? triggerRect.top - positionedMenuHeight - gap
        : triggerRect.bottom + gap;

    const top = resolvedPosition === 'top' ? Math.max(viewportPadding, preferredTop) : preferredTop;

    setEffectivePosition((current) => (current === resolvedPosition ? current : resolvedPosition));
    setBodyListMaxHeight((current) => (current === nextListMaxHeight ? current : nextListMaxHeight));

    const maxWidth = Math.max(0, window.innerWidth - viewportPadding * 2);
    const width = Math.min(triggerRect.width, maxWidth);
    const left = Math.min(Math.max(viewportPadding, triggerRect.left), window.innerWidth - width - viewportPadding);

    setBodyMenuStyle({
      position: 'fixed',
      top,
      left,
      width,
      maxWidth,
      zIndex: 100000
    });
  };

  const updateLocalMenuPosition = () => {
    if (!triggerRef.current || !menuRef.current || shouldAppendToBody) {
      return;
    }

    setBodyListMaxHeight((current) => (current === undefined ? current : undefined));
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const menuHeight = menuRef.current.offsetHeight;
    const resolvedPosition = resolveDropdownPosition(triggerRect, menuHeight);
    setEffectivePosition((current) => (current === resolvedPosition ? current : resolvedPosition));
  };

  useClientLayoutEffect(() => {
    if (!isOpen) {
      return;
    }

    if (shouldAppendToBody) {
      updateBodyMenuPosition();
      return;
    }

    updateLocalMenuPosition();
  }, [
    isOpen,
    shouldAppendToBody,
    settings.position,
    settings.autoPosition,
    settings.maxHeight,
    filteredItems.length,
    selectedItems.length,
    filter
  ]);

  useEffect(() => {
    if (!isOpen || !shouldAppendToBody || typeof window === 'undefined') {
      return;
    }

    const update = () => updateBodyMenuPosition();
    const rafUpdate = () => window.requestAnimationFrame(update);
    window.addEventListener('resize', rafUpdate);
    window.addEventListener('scroll', rafUpdate, true);

    const observer =
      typeof ResizeObserver !== 'undefined' && menuRef.current
        ? new ResizeObserver(rafUpdate)
        : null;

    if (observer && menuRef.current) {
      observer.observe(menuRef.current);
    }

    return () => {
      window.removeEventListener('resize', rafUpdate);
      window.removeEventListener('scroll', rafUpdate, true);
      observer?.disconnect();
    };
  }, [
    isOpen,
    shouldAppendToBody,
    settings.position,
    settings.autoPosition,
    settings.maxHeight,
    filteredItems.length,
    selectedItems.length
  ]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const pendingFocus = pendingFocusRef.current;
    pendingFocusRef.current = null;

    window.setTimeout(() => {
      if (pendingFocus === 'first') {
        focusFirstOption();
        return;
      }

      if (pendingFocus === 'last') {
        focusLastOption();
        return;
      }

      if (settings.enableSearchFilter && settings.searchAutofocus) {
        searchRef.current?.focus();
      }
    }, 0);
  }, [isOpen, filteredItems.length, settings.enableSearchFilter, settings.searchAutofocus]);

  useEffect(() => {
    lastScrollHeightRef.current = 0;
  }, [filteredItems.length]);

  useImperativeHandle(
    ref,
    () => ({
      openDropdown: () => openDropdown('search'),
      closeDropdown: () => closeDropdown(),
      clearSelection,
      focusSearch: () => {
        openDropdown('search');
        window.setTimeout(() => searchRef.current?.focus(), 0);
      },
      selectAll: () => selectAllItems(selectableItems),
      deSelectAll: () => deSelectAllItems(selectedItems),
      getSelectedItems: () => selectedItems
    }),
    [selectableItems, selectedItems]
  );

  const selectedCount = selectedItems.length;
  const visibleBadgeLimit = getVisibleBadgeLimit(selectedCount, settings.badgeShowLimit);
  const visibleBadges = settings.singleSelection ? selectedItems : selectedItems.slice(0, visibleBadgeLimit);
  const hiddenBadgeCount = settings.singleSelection ? 0 : Math.max(selectedCount - visibleBadges.length, 0);
  const hasFilteredResults = filteredItems.length > 0;
  const allFilteredSelected = selectableItems.length > 0 && selectableItems.every((item) => isSelected(item));
  const hasBulkActions =
    (settings.enableCheckAll && !settings.singleSelection) || Boolean(settings.addNewItemOnFilter && filter.trim());
  const skinName = normalizeSkinName(String(settings.skin || settings.theme || 'classic'));
  const skinFallbackClass = ['classic', 'material', 'dark', 'custom'].includes(skinName) ? '' : 'theme-custom';

  const rootClassName = [
    'rmsd-root',
    `skin-${skinName}`,
    `theme-${skinName}`,
    skinFallbackClass,
    isOpen ? 'rmsd-open' : '',
    hiddenBadgeCount > 0 ? 'rmsd-has-overflow' : '',
    settings.clearAll && selectedItems.length > 0 && !settings.disabled ? 'rmsd-has-clear' : '',
    effectivePosition === 'top' ? 'rmsd-opens-up' : 'rmsd-opens-down',
    settings.classes,
    className
  ]
    .filter(Boolean)
    .join(' ');

  const getRemoveItemAriaLabel = (item: T) => {
    if (typeof settings.removeItemAriaLabel === 'function') {
      return settings.removeItemAriaLabel(item);
    }

    return `${settings.removeItemAriaLabel}: ${getLabel(item, settings)}`;
  };

  const getTriggerAriaLabel = () => {
    if (!selectedItems.length) {
      return settings.ariaLabel;
    }

    return `${settings.ariaLabel}: ${selectedItems.map((item) => getLabel(item, settings)).join(', ')}`;
  };

  const stopInlineKey = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.stopPropagation();
    }
  };

  const handleTriggerKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (settings.disabled) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleDropdown();
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!isOpen) {
        openDropdown('first');
      } else {
        focusFirstOption();
      }
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (!isOpen) {
        openDropdown('last');
      } else {
        focusLastOption();
      }
      return;
    }

    if (event.key === 'Escape' && isOpen) {
      event.preventDefault();
      closeDropdown(true);
    }
  };

  const handleArrowButtonKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      event.stopPropagation();
      toggleDropdown();
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      event.stopPropagation();
      openDropdown('first');
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      event.stopPropagation();
      openDropdown('last');
    }
  };

  const handleSearchKeyDown = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      focusFirstOption();
      return;
    }

    if (event.key === 'Escape' && settings.escapeToClose) {
      event.preventDefault();
      closeDropdown(true);
    }
  };

  const handleOptionKeyDown = (
    event: ReactKeyboardEvent<HTMLElement>,
    item: T,
    optionIndex: number
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      selectItem(item);
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const nextIndex = optionIndex + 1;
      const options = getOptionElements();
      if (nextIndex < options.length) {
        focusOptionByIndex(nextIndex);
      } else if (settings.lazyLoading) {
        handleListScroll();
      }
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (optionIndex > 0) {
        focusOptionByIndex(optionIndex - 1);
      } else if (settings.enableSearchFilter) {
        searchRef.current?.focus();
      } else {
        triggerRef.current?.focus();
      }
      return;
    }

    if (event.key === 'Home') {
      event.preventDefault();
      focusFirstOption();
      return;
    }

    if (event.key === 'End') {
      event.preventDefault();
      focusLastOption();
      return;
    }

    if (event.key === 'Escape' && settings.escapeToClose) {
      event.preventDefault();
      closeDropdown(true);
    }
  };

  const renderItemNode = (item: T) => {
    const context: DropdownRenderContext<T> = {
      item,
      label: getLabel(item, settings),
      selected: isSelected(item),
      disabled: settings.disabled || isDisabledItem(item) || (!isSelected(item) && limitReached),
      query: filter,
      toggle: () => selectItem(item),
      remove: () => removeItem(item)
    };

    return renderItem ? (
      renderItem(item, context)
    ) : (
      <div className="rmsd-option-body">
        <div className="rmsd-option-label">{context.label}</div>
        {!isPrimitiveItem(item) && item.caption ? (
          <span className="rmsd-option-hint">{String(item.caption)}</span>
        ) : null}
      </div>
    );
  };

  const renderBadgeNode = (item: T) => {
    const context: DropdownRenderContext<T> = {
      item,
      label: getLabel(item, settings),
      selected: true,
      disabled: settings.disabled || isDisabledItem(item),
      query: filter,
      toggle: () => selectItem(item),
      remove: () => removeItem(item)
    };

    return renderBadge ? renderBadge(item, context) : context.label;
  };

  let optionCursor = -1;

  const renderOption = (item: T, prefix: string, localIndex: number) => {
    const selected = isSelected(item);
    const disabled = settings.disabled || isDisabledItem(item) || (limitReached && !selected);
    optionCursor += 1;
    const optionIndex = optionCursor;
    const optionId = getOptionId(item, localIndex, prefix);

    return (
      <div
        key={`${prefix}-${getPrimaryValue(item, settings)}-${localIndex}`}
        id={optionId}
        className={`rmsd-option${selected ? ' rmsd-selected' : ''}${disabled ? ' rmsd-disabled' : ''}`}
        role="option"
        aria-selected={selected}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        data-rmsd-option="true"
        onFocus={() => setActiveDescendantId(optionId)}
        onClick={() => {
          if (!disabled) {
            selectItem(item);
          }
        }}
        onKeyDown={(event) => handleOptionKeyDown(event, item, optionIndex)}>
        {settings.showCheckbox ? (
          <span className="rmsd-checkbox" data-checked={selected} aria-hidden="true" />
        ) : null}
        {renderItemNode(item)}
      </div>
    );
  };

  const handleTriggerClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest('button')) {
      return;
    }
    toggleDropdown();
  };

  const menu = isOpen ? (
    <div
      ref={menuRef}
      className={`rmsd-menu rmsd-${effectivePosition} skin-${skinName} theme-${skinName}${skinFallbackClass ? ` ${skinFallbackClass}` : ''}${shouldAppendToBody ? ' rmsd-body-overlay' : ''}`}
      style={shouldAppendToBody ? bodyMenuStyle : undefined}
      onMouseDown={(event) => event.stopPropagation()}
      onTouchStart={(event) => event.stopPropagation()}>
      <div className="rmsd-toolbar">
        {hasBulkActions ? (
          <div className="rmsd-bulk-actions">
            {settings.enableCheckAll && !settings.singleSelection ? (
              <button
                type="button"
                className="rmsd-inline-button rmsd-select-all-button"
                onClick={() =>
                  allFilteredSelected
                    ? deSelectAllItems(selectableItems, Boolean(filter.trim()))
                    : selectAllItems(selectableItems, Boolean(filter.trim()))
                }
                disabled={settings.disabled || selectableItems.length === 0}>
                {settings.showCheckbox ? (
                  <span className="rmsd-checkbox" data-checked={allFilteredSelected} aria-hidden="true" />
                ) : null}
                <span>
                  {allFilteredSelected
                    ? filter.trim()
                      ? settings.filterUnSelectAllText
                      : settings.unSelectAllText
                    : filter.trim()
                      ? settings.filterSelectAllText
                      : settings.selectAllText}
                </span>
              </button>
            ) : null}

            {settings.addNewItemOnFilter && filter.trim() ? (
              <button type="button" className="rmsd-inline-button rmsd-add-button" onClick={handleAddFilterNewItem}>
                {settings.addNewButtonText} "{filter.trim()}"
              </button>
            ) : null}
          </div>
        ) : null}

        {settings.enableSearchFilter ? (
          renderSearch ? (
            renderSearch({ query: filter, setQuery: setFilter, closeDropdown: () => closeDropdown() })
          ) : (
            <div className="rmsd-search-shell">
              <StacklineIcon name="search" className="rmsd-search-icon" />
              <input
                ref={searchRef}
                className="rmsd-search-input"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
                onKeyDown={handleSearchKeyDown}
                placeholder={settings.searchPlaceholderText}
                aria-label={settings.searchAriaLabel}
              />
              {filter ? (
                <button
                  type="button"
                  className="rmsd-search-clear"
                  aria-label={settings.clearSearchAriaLabel}
                  onKeyDown={stopInlineKey}
                  onClick={() => setFilter('')}>
                  <StacklineIcon name="clear" />
                </button>
              ) : null}
            </div>
          )
        ) : null}
      </div>

      <div
        className="rmsd-list"
        ref={listRef}
        style={{ maxHeight: shouldAppendToBody ? bodyListMaxHeight ?? settings.maxHeight : settings.maxHeight }}
        onScroll={settings.lazyLoading ? handleListScroll : undefined}
        id={listboxId}
        role="listbox"
        aria-label={settings.listboxAriaLabel}
        aria-multiselectable={!settings.singleSelection}>
        {(loading ?? settings.loading) ? (
          <div className="rmsd-state" role="status">
            {settings.loadingText}
          </div>
        ) : groupedItems.length > 0 ? (
          groupedItems.map((group, groupIndex) => (
            <div className="rmsd-group" key={group.name} role="group" aria-label={group.name}>
              <div className="rmsd-group-header">
                <span>
                  {group.name} · {group.items.length}
                </span>
                {settings.selectGroup && !settings.singleSelection ? (
                  <button type="button" className="rmsd-group-action" onClick={() => toggleGroup(group.name, group.items)}>
                    {group.items.filter((item) => !isDisabledItem(item)).every((item) => isSelected(item))
                      ? 'Unselect'
                      : 'Select'}
                  </button>
                ) : null}
              </div>
              {group.items.map((item, index) => renderOption(item, `group-${groupIndex}`, index))}
            </div>
          ))
        ) : hasFilteredResults ? (
          filteredItems.map((item, index) => renderOption(item, 'item', index))
        ) : (
          <div className="rmsd-state">{renderEmptyState ? renderEmptyState(filter) : settings.noDataLabel}</div>
        )}
      </div>
    </div>
  ) : null;

  return (
    <div className={rootClassName} style={style} ref={rootRef} data-open={isOpen}>
      <div
        ref={triggerRef}
        className={`rmsd-trigger${settings.disabled ? ' rmsd-disabled' : ''}`}
        onClick={handleTriggerClick}
        onKeyDown={handleTriggerKeyDown}
        tabIndex={settings.disabled ? -1 : 0}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={listboxId}
        aria-disabled={settings.disabled}
        aria-activedescendant={activeDescendantId || undefined}
        aria-label={getTriggerAriaLabel()}>
        <div className="rmsd-value">
          {selectedItems.length === 0 ? (
            <span className="rmsd-placeholder">{settings.text}</span>
          ) : settings.singleSelection ? (
            <span className="rmsd-single-value">{getLabel(selectedItems[0], settings)}</span>
          ) : (
            <>
              <div className="rmsd-badge-list">
                {visibleBadges.map((item) => (
                  <span className="rmsd-badge" key={getPrimaryValue(item, settings)}>
                    <span className="rmsd-badge-label">{renderBadgeNode(item)}</span>
                    {!settings.disabled ? (
                      <button
                        type="button"
                        className="rmsd-badge-remove"
                        aria-label={getRemoveItemAriaLabel(item)}
                        onKeyDown={stopInlineKey}
                        onClick={(event) => {
                          event.stopPropagation();
                          removeItem(item);
                        }}>
                        <StacklineIcon name="remove" />
                      </button>
                    ) : null}
                  </span>
                ))}
              </div>
              {hiddenBadgeCount > 0 ? <span className="rmsd-overflow">+{hiddenBadgeCount}</span> : null}
            </>
          )}
        </div>

        <div className="rmsd-actions">
          {settings.clearAll && selectedItems.length > 0 && !settings.disabled ? (
            <button
              type="button"
              className="rmsd-clear"
              aria-label={settings.clearAllAriaLabel}
              onKeyDown={stopInlineKey}
              onClick={(event) => {
                event.stopPropagation();
                clearSelection();
              }}>
              <StacklineIcon name="remove" />
            </button>
          ) : null}
          <button
            type="button"
            className="rmsd-arrow-button"
            disabled={settings.disabled}
            aria-label={isOpen ? settings.closeDropdownAriaLabel : settings.openDropdownAriaLabel}
            aria-expanded={isOpen}
            aria-controls={listboxId}
            onKeyDown={handleArrowButtonKeyDown}
            onClick={(event) => {
              event.stopPropagation();
              toggleDropdown();
            }}>
            <span className="rmsd-arrow" aria-hidden="true">
              <StacklineIcon name={isOpen ? 'angle-up' : 'angle-down'} />
            </span>
          </button>
        </div>
      </div>

      {shouldAppendToBody && menu && typeof document !== 'undefined'
        ? createPortal(menu, document.body)
        : menu}
    </div>
  );
}

type MultiSelectComponent = <T extends DropdownItem = DropdownItem>(
  props: MultiSelectDropdownProps<T> & { ref?: ForwardedRef<MultiSelectDropdownHandle<T>> }
) => ReactElement | null;

export const ReactMultiSelectDropdown = forwardRef(InnerMultiSelectDropdown) as MultiSelectComponent;
export const MultiSelectDropdown = ReactMultiSelectDropdown;
