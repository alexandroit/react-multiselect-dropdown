import {
  Fragment,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ChangeEvent,
  type ForwardedRef,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type ReactElement,
  type ReactNode,
  type TouchEvent as ReactTouchEvent
} from 'react';
import { createPortal } from 'react-dom';
import {
  buildGroups,
  createItemFromQuery,
  getLabel,
  getPrimaryValue,
  getVisibleBadgeLimit,
  isDisabledItem,
  isPrimitiveItem,
  itemMatchesQuery,
  mergeUniqueItems,
  normalizeSkinName,
  sanitizeId
} from './itemUtils';
import { resolveDropdownSettings } from './settings';
import { ensureDropdownStyles } from './styles';
import type {
  DropdownItem,
  DropdownRenderContext,
  MultiSelectDropdownGroupSlot,
  MultiSelectDropdownHandle,
  MultiSelectDropdownOptionSlot,
  MultiSelectDropdownProps
} from './types';
import { useControllableSelection } from './useControllableSelection';

type PendingFocus = 'first' | 'last' | 'search' | null;
type SelectionFocusTarget = 'search' | 'trigger' | 'none';
type IconName = 'remove' | 'clear' | 'search' | 'angle-down' | 'angle-up';
const useClientLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

function isSpaceKey(key: string) {
  return key === ' ' || key === 'Spacebar';
}

function renderSlot<P>(
  Slot: ((props: P) => ReactNode) | undefined,
  props: P,
  fallback: ReactNode
) {
  return Slot ? <>{Slot(props)}</> : <>{fallback}</>;
}

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
    renderEmptyState,
    slots
  }: MultiSelectDropdownProps<T>,
  ref: ForwardedRef<MultiSelectDropdownHandle<T>>
) {
  ensureDropdownStyles();

  const settings = useMemo(() => resolveDropdownSettings(incomingSettings), [incomingSettings]);
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
  const addRequestIdRef = useRef(0);
  const instanceIdRef = useRef(`rmsd-${Math.random().toString(36).slice(2)}`);

  const allItems = useMemo(
    () => mergeUniqueItems(data, [...selectedItems, ...addedItems], settings),
    [addedItems, data, selectedItems, settings]
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
  const focusOptionById = (optionId: string) => {
    const option = document.getElementById(optionId) as HTMLElement | null;
    if (!option || !listRef.current?.contains(option) || option.getAttribute('aria-disabled') === 'true') {
      return false;
    }

    option.focus();
    setActiveDescendantId(option.id || null);
    option.scrollIntoView({ block: 'nearest' });
    return true;
  };

  const focusOptionAfterPointerSelection = (optionId: string, fallbackIndex: number) => {
    window.setTimeout(() => {
      const focusAfterRender = () => {
        if (focusOptionById(optionId)) {
          return;
        }

        focusOptionByIndex(fallbackIndex);
      };

      if (typeof window.requestAnimationFrame === 'function') {
        window.requestAnimationFrame(focusAfterRender);
        return;
      }

      focusAfterRender();
    }, 0);
  };

  const focusOptionAfterKeyboardSelection = (
    optionId: string,
    fallbackIndex: number,
    moveToNextOption: boolean
  ) => {
    window.setTimeout(() => {
      const focusAfterRender = () => {
        if (moveToNextOption) {
          const options = getOptionElements();
          const currentIndex = options.findIndex((option) => option.id === optionId);
          const nextOption = currentIndex >= 0 ? options[currentIndex + 1] : undefined;

          if (nextOption) {
            nextOption.focus();
            setActiveDescendantId(nextOption.id || null);
            nextOption.scrollIntoView({ block: 'nearest' });
            return;
          }
        }

        if (!focusOptionById(optionId)) {
          focusOptionByIndex(fallbackIndex);
        }
      };

      if (typeof window.requestAnimationFrame === 'function') {
        window.requestAnimationFrame(focusAfterRender);
        return;
      }

      focusAfterRender();
    }, 0);
  };

  const focusAfterSelectionChange = (target: SelectionFocusTarget = 'search') => {
    if (target === 'none') {
      return;
    }

    window.setTimeout(() => {
      if (target === 'search' && isOpen && settings.enableSearchFilter) {
        searchRef.current?.focus();
        return;
      }

      triggerRef.current?.focus();
    }, 0);
  };

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
    focusAfterSelectionChange();
  };

  const toggleDropdown = () => {
    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown('search');
    }
  };

  const removeItem = (item: T, focusTarget: SelectionFocusTarget = 'search') => {
    const nextItems = selectedItems.filter(
      (selectedItem) => getPrimaryValue(selectedItem, settings) !== getPrimaryValue(item, settings)
    );
    updateSelection(nextItems);
    onDeSelect?.(item);
    focusAfterSelectionChange(focusTarget);
  };

  const removeLastSelectedItem = () => {
    const lastItem = selectedItems[selectedItems.length - 1];
    if (!lastItem) {
      return;
    }

    removeItem(lastItem);
  };

  const selectItem = (item: T, focusTarget: SelectionFocusTarget = 'search') => {
    if (settings.disabled || isDisabledItem(item)) {
      return;
    }

    if (isSelected(item)) {
      if (settings.singleSelection) {
        closeDropdown(true);
        focusAfterSelectionChange('trigger');
        return;
      }

      removeItem(item, focusTarget);
      return;
    }

    if (settings.singleSelection) {
      updateSelection([item]);
      onSelect?.(item);
      closeDropdown(true);
      focusAfterSelectionChange('trigger');
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
      focusAfterSelectionChange('trigger');
      return;
    }

    focusAfterSelectionChange(focusTarget);
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

    focusAfterSelectionChange();
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

    focusAfterSelectionChange();
  };

  const handleAddFilterNewItem = async () => {
    const query = filter.trim();
    if (!query) {
      return;
    }

    const requestId = addRequestIdRef.current + 1;
    addRequestIdRef.current = requestId;

    const result = await onAddFilterNewItem?.(query);
    if (requestId !== addRequestIdRef.current) {
      return;
    }

    const nextItem = result === undefined ? createItemFromQuery(query, settings, data[0]) : result;

    setAddedItems((currentItems) => mergeUniqueItems(currentItems, [nextItem], settings));

    if (settings.singleSelection) {
      updateSelection([nextItem]);
    } else {
      updateSelection(mergeUniqueItems(selectedItems, [nextItem], settings));
    }

    setFilter('');
    focusAfterSelectionChange();
  };

  const toggleGroup = (groupName: string, items: T[]) => {
    const groupItems = items.filter((item) => !isDisabledItem(item));
    const allSelected = groupItems.length > 0 && groupItems.every((item) => isSelected(item));

    if (allSelected) {
      deSelectAllItems(groupItems, false);
      onGroupDeSelect?.(groupName, groupItems);
      focusAfterSelectionChange();
      return;
    }

    selectAllItems(groupItems, false);
    onGroupSelect?.(groupName, groupItems);
    focusAfterSelectionChange();
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
      if (event.key === 'Escape' && settings.keyboard.escape) {
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
  }, [isOpen, settings.keyboard.escape]);

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
    if (isSpaceKey(event.key) && !settings.keyboard.space) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (event.key === 'Enter' || isSpaceKey(event.key)) {
      event.stopPropagation();
    }
  };

  const handleBadgeRemoveKeyDown = (event: ReactKeyboardEvent<HTMLElement>, item: T) => {
    if (
      settings.keyboard.deleteRemovesFocusedBadge &&
      (event.key === 'Backspace' || event.key === 'Delete')
    ) {
      event.preventDefault();
      event.stopPropagation();
      removeItem(item);
      return;
    }

    stopInlineKey(event);
  };

  const handleTriggerKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (settings.disabled) {
      return;
    }

    if (isSpaceKey(event.key) && !settings.keyboard.space) {
      event.preventDefault();
      return;
    }

    if (event.key === 'Enter' || isSpaceKey(event.key)) {
      event.preventDefault();
      toggleDropdown();
      return;
    }

    if (settings.keyboard.arrows && event.key === 'ArrowDown') {
      event.preventDefault();
      if (!isOpen) {
        openDropdown('first');
      } else {
        focusFirstOption();
      }
      return;
    }

    if (settings.keyboard.arrows && event.key === 'ArrowUp') {
      event.preventDefault();
      if (!isOpen) {
        openDropdown('last');
      } else {
        focusLastOption();
      }
      return;
    }

    if (settings.keyboard.escape && event.key === 'Escape' && isOpen) {
      event.preventDefault();
      closeDropdown(true);
    }
  };

  const handleArrowButtonKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (isSpaceKey(event.key) && !settings.keyboard.space) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (event.key === 'Enter' || isSpaceKey(event.key)) {
      event.preventDefault();
      event.stopPropagation();
      toggleDropdown();
      return;
    }

    if (settings.keyboard.arrows && event.key === 'ArrowDown') {
      event.preventDefault();
      event.stopPropagation();
      if (isOpen) {
        focusFirstOption();
      } else {
        openDropdown('first');
      }
      return;
    }

    if (settings.keyboard.arrows && event.key === 'ArrowUp') {
      event.preventDefault();
      event.stopPropagation();
      if (isOpen) {
        focusLastOption();
      } else {
        openDropdown('last');
      }
    }
  };

  const handleSearchKeyDown = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    if (isSpaceKey(event.key) && !settings.keyboard.space) {
      event.preventDefault();
      return;
    }

    if (
      settings.keyboard.backspaceRemovesLastWhenSearchEmpty &&
      event.key === 'Backspace' &&
      !filter &&
      selectedItems.length > 0 &&
      !settings.singleSelection
    ) {
      event.preventDefault();
      removeLastSelectedItem();
      return;
    }

    if (settings.keyboard.arrows && event.key === 'ArrowDown') {
      event.preventDefault();
      focusFirstOption();
      return;
    }

    if (settings.keyboard.escape && event.key === 'Escape') {
      event.preventDefault();
      closeDropdown(true);
    }
  };

  const handleOptionKeyDown = (
    event: ReactKeyboardEvent<HTMLElement>,
    item: T,
    optionIndex: number
  ) => {
    if (isSpaceKey(event.key) && !settings.keyboard.space) {
      event.preventDefault();
      return;
    }

    if ((event.key === 'Enter' || isSpaceKey(event.key)) && event.repeat) {
      event.preventDefault();
      return;
    }

    if (event.key === 'Enter' || isSpaceKey(event.key)) {
      event.preventDefault();
      const willClose = settings.singleSelection || (!isSelected(item) && settings.closeDropDownOnSelection);
      const currentOptionId = event.currentTarget.id;
      const moveToNextOption =
        isSpaceKey(event.key) && settings.keyboard.spaceOptionAction === 'toggle-and-next';
      selectItem(item, willClose ? 'trigger' : 'none');

      if (!willClose) {
        focusOptionAfterKeyboardSelection(currentOptionId, optionIndex, moveToNextOption);
      }
      return;
    }

    if (settings.keyboard.arrows && event.key === 'ArrowDown') {
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

    if (settings.keyboard.arrows && event.key === 'ArrowUp') {
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

    if (settings.keyboard.arrows && event.key === 'Home') {
      event.preventDefault();
      focusFirstOption();
      return;
    }

    if (settings.keyboard.arrows && event.key === 'End') {
      event.preventDefault();
      focusLastOption();
      return;
    }

    if (settings.keyboard.escape && event.key === 'Escape') {
      event.preventDefault();
      closeDropdown(true);
    }
  };

  const slotState = {
    settings,
    isOpen,
    filter,
    selectedItems,
    visibleBadges,
    hiddenBadgeCount,
    filteredItems,
    selectableItems,
    allFilteredSelected,
    hasFilteredResults,
    loading: Boolean(loading ?? settings.loading),
    listboxId,
    activeDescendantId: activeDescendantId || undefined,
    label: selectedItems.length
      ? selectedItems.map((item) => getLabel(item, settings)).join(', ')
      : settings.text
  };

  const slotActions = {
    openDropdown: () => openDropdown('search'),
    closeDropdown: () => closeDropdown(),
    toggleDropdown,
    clearSelection,
    selectItem: (item: T) => selectItem(item),
    removeItem: (item: T) => removeItem(item),
    selectAll: (items = selectableItems) => selectAllItems(items),
    deSelectAll: (items = selectedItems) => deSelectAllItems(items),
    toggleGroup,
    addFilterNewItem: handleAddFilterNewItem,
    setFilter
  };

  const slotBase = {
    state: slotState,
    actions: slotActions
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

  const renderBadgeLabel = (item: T) => {
    const label = getLabel(item, settings);
    const context: DropdownRenderContext<T> = {
      item,
      label,
      selected: true,
      disabled: settings.disabled || isDisabledItem(item),
      query: filter,
      toggle: () => selectItem(item),
      remove: () => removeItem(item)
    };
    const badgeContent = renderBadge ? renderBadge(item, context) : context.label;
    const badgeLabelProps = { className: 'rmsd-badge-label' };

    return renderSlot(
      slots?.BadgeLabel,
      { ...slotBase, props: badgeLabelProps, item, label, children: badgeContent },
      <span {...badgeLabelProps}>{badgeContent}</span>
    );
  };

  const renderCheckbox = (checked: boolean, context: 'option' | 'selectAll') => {
    if (!settings.showCheckbox) {
      return null;
    }

    const checkboxProps = {
      className: 'rmsd-checkbox',
      'data-checked': checked,
      'aria-hidden': true
    };

    return renderSlot(
      slots?.Checkbox,
      { ...slotBase, props: checkboxProps, checked, context },
      <span {...checkboxProps} />
    );
  };

  const renderBadgeRemoveButton = (item: T) => {
    const label = getLabel(item, settings);
    const removeProps = {
      type: 'button' as const,
      className: 'rmsd-badge-remove',
      'aria-label': getRemoveItemAriaLabel(item),
      onKeyDown: (event: ReactKeyboardEvent<HTMLButtonElement>) => handleBadgeRemoveKeyDown(event, item),
      onClick: (event: ReactMouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        removeItem(item);
      }
    };
    const icon = <StacklineIcon name="remove" />;

    return renderSlot(
      slots?.BadgeRemove,
      { ...slotBase, props: removeProps, item, label, icon },
      <button {...removeProps}>{icon}</button>
    );
  };

  const renderBadgeNode = (item: T) => {
    const label = getLabel(item, settings);
    const badgeProps = { className: 'rmsd-badge' };
    const removeButton = !settings.disabled ? renderBadgeRemoveButton(item) : null;
    const children = (
      <>
        {renderBadgeLabel(item)}
        {removeButton}
      </>
    );

    return renderSlot(
      slots?.Badge,
      { ...slotBase, props: badgeProps, item, label, children, removeButton },
      <span {...badgeProps}>{children}</span>
    );
  };

  let enabledOptionCursor = -1;

  const renderOption = (item: T, prefix: string, localIndex: number) => {
    const selected = isSelected(item);
    const disabled = settings.disabled || isDisabledItem(item) || (limitReached && !selected);
    const optionIndex = disabled ? -1 : (enabledOptionCursor += 1);
    const optionId = getOptionId(item, localIndex, prefix);
    const optionKey = `${prefix}-${getPrimaryValue(item, settings)}-${localIndex}`;
    const optionSlot: MultiSelectDropdownOptionSlot<T> = {
      item,
      id: optionId,
      key: optionKey,
      label: getLabel(item, settings),
      selected,
      disabled,
      index: optionIndex,
      groupName: prefix.startsWith('group-') ? prefix : undefined
    };
    const optionProps = {
      id: optionId,
      className: `rmsd-option${selected ? ' rmsd-selected' : ''}${disabled ? ' rmsd-disabled' : ''}`,
      role: 'option' as const,
      'aria-selected': selected,
      'aria-checked': selected,
      'aria-disabled': disabled,
      tabIndex: disabled || !settings.keyboard.tab ? -1 : 0,
      'data-rmsd-option': 'true',
      onFocus: () => setActiveDescendantId(optionId),
      onClick: () => {
        if (disabled) {
          return;
        }

        const willClose = settings.singleSelection || (!isSelected(item) && settings.closeDropDownOnSelection);
        selectItem(item, willClose ? 'trigger' : 'none');

        if (!willClose) {
          focusOptionAfterPointerSelection(optionId, optionIndex);
        }
      },
      onKeyDown: (event: ReactKeyboardEvent<HTMLElement>) => handleOptionKeyDown(event, item, optionIndex)
    };
    const checkbox = renderCheckbox(selected, 'option');
    const children = (
      <>
        {checkbox}
        {renderItemNode(item)}
      </>
    );

    return (
      <Fragment key={optionKey}>
        {renderSlot(
          slots?.Option,
          { ...slotBase, props: optionProps, option: optionSlot, checkbox, children },
          <div {...optionProps}>{children}</div>
        )}
      </Fragment>
    );
  };

  const handleTriggerClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest('button')) {
      return;
    }
    toggleDropdown();
  };

  const renderSelectAllButton = () => {
    const label = allFilteredSelected
      ? filter.trim()
        ? settings.filterUnSelectAllText
        : settings.unSelectAllText
      : filter.trim()
        ? settings.filterSelectAllText
        : settings.selectAllText;
    const selectAllProps = {
      type: 'button' as const,
      className: 'rmsd-inline-button rmsd-select-all-button',
      onClick: () =>
        allFilteredSelected
          ? deSelectAllItems(selectableItems, Boolean(filter.trim()))
          : selectAllItems(selectableItems, Boolean(filter.trim())),
      onKeyDown: stopInlineKey,
      disabled: settings.disabled || selectableItems.length === 0
    };
    const checkbox = renderCheckbox(allFilteredSelected, 'selectAll');

    return renderSlot(
      slots?.SelectAll,
      { ...slotBase, props: selectAllProps, checked: allFilteredSelected, label, checkbox },
      <button {...selectAllProps}>
        {checkbox}
        <span>{label}</span>
      </button>
    );
  };

  const renderAddNewItemButton = () => {
    const query = filter.trim();
    if (!query) {
      return null;
    }

    const label = `${settings.addNewButtonText} "${query}"`;
    const addItemProps = {
      type: 'button' as const,
      className: 'rmsd-inline-button rmsd-add-button',
      onKeyDown: stopInlineKey,
      onClick: handleAddFilterNewItem
    };

    return renderSlot(
      slots?.AddNewItem,
      { ...slotBase, props: addItemProps, query, label },
      <button {...addItemProps}>{label}</button>
    );
  };

  const renderSearchNode = () => {
    if (!settings.enableSearchFilter) {
      return null;
    }

    const searchShellProps = { className: 'rmsd-search-shell' };
    const searchInputProps = {
      ref: searchRef,
      className: 'rmsd-search-input',
      value: filter,
      onChange: (event: ChangeEvent<HTMLInputElement>) => setFilter(event.target.value),
      onKeyDown: handleSearchKeyDown,
      placeholder: settings.searchPlaceholderText,
      'aria-label': settings.searchAriaLabel
    };
    const searchClearProps = {
      type: 'button' as const,
      className: 'rmsd-search-clear',
      'aria-label': settings.clearSearchAriaLabel,
      onKeyDown: stopInlineKey,
      onClick: () => setFilter('')
    };
    const icon = <StacklineIcon name="search" className="rmsd-search-icon" />;
    const clearIcon = <StacklineIcon name="clear" />;
    const fallback = renderSearch ? (
      renderSearch({ query: filter, setQuery: setFilter, closeDropdown: () => closeDropdown() })
    ) : (
      <div {...searchShellProps}>
        {icon}
        <input {...searchInputProps} />
        {filter ? <button {...searchClearProps}>{clearIcon}</button> : null}
      </div>
    );

    return renderSlot(
      slots?.Search,
      {
        ...slotBase,
        props: searchShellProps,
        inputProps: searchInputProps,
        clearButtonProps: searchClearProps,
        query: filter,
        icon,
        clearIcon
      },
      fallback
    );
  };

  const renderGroupAction = (group: MultiSelectDropdownGroupSlot<T>) => {
    if (!settings.selectGroup || settings.singleSelection) {
      return null;
    }

    const label = group.selected ? 'Unselect' : 'Select';
    const groupActionProps = {
      type: 'button' as const,
      className: 'rmsd-group-action',
      onKeyDown: stopInlineKey,
      onClick: () => toggleGroup(group.name, group.items)
    };

    return renderSlot(
      slots?.GroupAction,
      { ...slotBase, props: groupActionProps, group, label },
      <button {...groupActionProps}>{label}</button>
    );
  };

  const renderGroupNode = (group: { name: string; items: T[] }, groupIndex: number) => {
    const enabledItems = group.items.filter((item) => !isDisabledItem(item));
    const groupSlot: MultiSelectDropdownGroupSlot<T> = {
      name: group.name,
      items: group.items,
      enabledItems,
      selected: enabledItems.length > 0 && enabledItems.every((item) => isSelected(item)),
      disabled: enabledItems.length === 0,
      index: groupIndex
    };
    const action = renderGroupAction(groupSlot);
    const groupHeaderProps = { className: 'rmsd-group-header' };
    const header = renderSlot(
      slots?.GroupHeader,
      { ...slotBase, props: groupHeaderProps, group: groupSlot, action },
      <div {...groupHeaderProps}>
        <span>
          {group.name} · {group.items.length}
        </span>
        {action}
      </div>
    );
    const groupProps = {
      className: 'rmsd-group',
      role: 'group' as const,
      'aria-label': group.name
    };
    const children = group.items.map((item, index) => renderOption(item, `group-${groupIndex}`, index));

    return (
      <Fragment key={group.name}>
        {renderSlot(
          slots?.Group,
          { ...slotBase, props: groupProps, group: groupSlot, header, children },
          <div {...groupProps}>
            {header}
            {children}
          </div>
        )}
      </Fragment>
    );
  };

  const renderOptionListChildren = () => {
    if (loading ?? settings.loading) {
      const loadingProps = { className: 'rmsd-state', role: 'status' as const };

      return renderSlot(
        slots?.LoadingState,
        { ...slotBase, props: loadingProps, text: settings.loadingText },
        <div {...loadingProps}>{settings.loadingText}</div>
      );
    }

    if (groupedItems.length > 0) {
      return groupedItems.map((group, groupIndex) => renderGroupNode(group, groupIndex));
    }

    if (hasFilteredResults) {
      return filteredItems.map((item, index) => renderOption(item, 'item', index));
    }

    const emptyProps = { className: 'rmsd-state' };

    return renderSlot(
      slots?.EmptyState,
      { ...slotBase, props: emptyProps, query: filter, text: settings.noDataLabel },
      <div {...emptyProps}>{renderEmptyState ? renderEmptyState(filter) : settings.noDataLabel}</div>
    );
  };

  const renderOptionList = () => {
    const listProps = {
      className: 'rmsd-list',
      ref: listRef,
      style: {
        maxHeight: shouldAppendToBody ? bodyListMaxHeight ?? settings.maxHeight : settings.maxHeight
      },
      onScroll: settings.lazyLoading ? handleListScroll : undefined,
      id: listboxId,
      role: 'listbox' as const,
      'aria-label': settings.listboxAriaLabel,
      'aria-multiselectable': !settings.singleSelection
    };
    const children = renderOptionListChildren();

    return renderSlot(
      slots?.OptionList,
      { ...slotBase, props: listProps, children },
      <div {...listProps}>{children}</div>
    );
  };

  const renderBulkActions = () => {
    if (!hasBulkActions) {
      return null;
    }

    const bulkActionsProps = { className: 'rmsd-bulk-actions' };
    const children = (
      <>
        {settings.enableCheckAll && !settings.singleSelection ? renderSelectAllButton() : null}
        {settings.addNewItemOnFilter && filter.trim() ? renderAddNewItemButton() : null}
      </>
    );

    return renderSlot(
      slots?.BulkActions,
      { ...slotBase, props: bulkActionsProps, children },
      <div {...bulkActionsProps}>{children}</div>
    );
  };

  const renderToolbar = () => {
    const toolbarProps = { className: 'rmsd-toolbar' };
    const children = (
      <>
        {renderBulkActions()}
        {renderSearchNode()}
      </>
    );

    return renderSlot(
      slots?.Toolbar,
      { ...slotBase, props: toolbarProps, children },
      <div {...toolbarProps}>{children}</div>
    );
  };

  const renderMenuFooter = () => {
    if (!slots?.MenuFooter) {
      return null;
    }

    return renderSlot(slots.MenuFooter, { ...slotBase, props: { className: 'rmsd-menu-footer' } }, null);
  };

  const renderMenu = () => {
    if (!isOpen) {
      return null;
    }

    const menuProps = {
      ref: menuRef,
      className: `rmsd-menu rmsd-${effectivePosition} skin-${skinName} theme-${skinName}${skinFallbackClass ? ` ${skinFallbackClass}` : ''}${shouldAppendToBody ? ' rmsd-body-overlay' : ''}`,
      style: shouldAppendToBody ? bodyMenuStyle : undefined,
      onMouseDown: (event: ReactMouseEvent<HTMLDivElement>) => event.stopPropagation(),
      onTouchStart: (event: ReactTouchEvent<HTMLDivElement>) => event.stopPropagation()
    };
    const children = (
      <>
        {renderToolbar()}
        {renderOptionList()}
        {renderMenuFooter()}
      </>
    );

    return renderSlot(
      slots?.Menu,
      {
        ...slotBase,
        props: menuProps,
        children,
        position: effectivePosition,
        appendToBody: shouldAppendToBody
      },
      <div {...menuProps}>{children}</div>
    );
  };

  const renderValue = () => {
    const valueProps = { className: 'rmsd-value' };
    let children: ReactNode;

    if (selectedItems.length === 0) {
      const placeholderProps = { className: 'rmsd-placeholder' };
      children = renderSlot(
        slots?.Placeholder,
        { ...slotBase, props: placeholderProps, text: settings.text },
        <span {...placeholderProps}>{settings.text}</span>
      );
    } else if (settings.singleSelection) {
      const item = selectedItems[0];
      const singleValueProps = { className: 'rmsd-single-value' };
      children = renderSlot(
        slots?.SingleValue,
        { ...slotBase, props: singleValueProps, item, label: getLabel(item, settings) },
        <span {...singleValueProps}>{getLabel(item, settings)}</span>
      );
    } else {
      const badgeListProps = { className: 'rmsd-badge-list' };
      const badgeListChildren = visibleBadges.map((item) => (
        <Fragment key={getPrimaryValue(item, settings)}>{renderBadgeNode(item)}</Fragment>
      ));
      children = renderSlot(
        slots?.BadgeList,
        { ...slotBase, props: badgeListProps, items: visibleBadges, children: badgeListChildren },
        <div {...badgeListProps}>{badgeListChildren}</div>
      );
    }

    return renderSlot(
      slots?.Value,
      { ...slotBase, props: valueProps, children },
      <div {...valueProps}>{children}</div>
    );
  };

  const renderActions = () => {
    const actionsProps = { className: 'rmsd-actions' };
    const overflowProps = { className: 'rmsd-overflow' };
    const clearAllProps = {
      type: 'button' as const,
      className: 'rmsd-clear',
      'aria-label': settings.clearAllAriaLabel,
      onKeyDown: stopInlineKey,
      onClick: (event: ReactMouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        clearSelection();
      }
    };
    const arrowProps = {
      type: 'button' as const,
      className: 'rmsd-arrow-button',
      disabled: settings.disabled,
      'aria-label': isOpen ? settings.closeDropdownAriaLabel : settings.openDropdownAriaLabel,
      'aria-expanded': isOpen,
      'aria-controls': listboxId,
      onKeyDown: handleArrowButtonKeyDown,
      onClick: (event: ReactMouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        toggleDropdown();
      }
    };
    const clearIcon = <StacklineIcon name="remove" />;
    const arrowIcon = (
      <span className="rmsd-arrow" aria-hidden="true">
        <StacklineIcon name={isOpen ? 'angle-up' : 'angle-down'} />
      </span>
    );
    const children = (
      <>
        {hiddenBadgeCount > 0
          ? renderSlot(
              slots?.OverflowCounter,
              { ...slotBase, props: overflowProps, count: hiddenBadgeCount },
              <span {...overflowProps}>+{hiddenBadgeCount}</span>
            )
          : null}
        {settings.clearAll && selectedItems.length > 0 && !settings.disabled
          ? renderSlot(
              slots?.ClearAll,
              { ...slotBase, props: clearAllProps, icon: clearIcon },
              <button {...clearAllProps}>{clearIcon}</button>
            )
          : null}
        {renderSlot(
          slots?.Arrow,
          { ...slotBase, props: arrowProps, icon: arrowIcon, direction: isOpen ? 'up' : 'down' },
          <button {...arrowProps}>{arrowIcon}</button>
        )}
      </>
    );

    return renderSlot(
      slots?.Actions,
      { ...slotBase, props: actionsProps, children },
      <div {...actionsProps}>{children}</div>
    );
  };

  const renderTrigger = () => {
    const triggerProps = {
      ref: triggerRef,
      className: `rmsd-trigger${settings.disabled ? ' rmsd-disabled' : ''}`,
      onClick: handleTriggerClick,
      onKeyDown: handleTriggerKeyDown,
      tabIndex: settings.disabled ? -1 : 0,
      role: 'combobox' as const,
      'aria-expanded': isOpen,
      'aria-haspopup': 'listbox' as const,
      'aria-controls': listboxId,
      'aria-disabled': settings.disabled,
      'aria-activedescendant': activeDescendantId || undefined,
      'aria-label': getTriggerAriaLabel()
    };
    const children = (
      <>
        {renderValue()}
        {renderActions()}
      </>
    );

    return renderSlot(
      slots?.Trigger,
      { ...slotBase, props: triggerProps, children },
      <div {...triggerProps}>{children}</div>
    );
  };

  const menu = renderMenu();
  const rootChildren = (
    <>
      {renderTrigger()}
      {shouldAppendToBody && menu && typeof document !== 'undefined'
        ? createPortal(menu, document.body)
        : menu}
    </>
  );
  const rootProps = {
    className: rootClassName,
    style,
    ref: rootRef,
    'data-open': isOpen
  };

  return renderSlot(
    slots?.Root,
    { ...slotBase, props: rootProps, children: rootChildren },
    <div {...rootProps}>{rootChildren}</div>
  ) as ReactElement;
}

type MultiSelectComponent = <T extends DropdownItem = DropdownItem>(
  props: MultiSelectDropdownProps<T> & { ref?: ForwardedRef<MultiSelectDropdownHandle<T>> }
) => ReactElement | null;

export const ReactMultiSelectDropdown = forwardRef(InnerMultiSelectDropdown) as MultiSelectComponent;
export const MultiSelectDropdown = ReactMultiSelectDropdown;
