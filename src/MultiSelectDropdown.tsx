import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  type ForwardedRef,
  type ReactElement
} from 'react';
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
  unSelectAllText: 'UnSelect All',
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
  loading: false,
  selectGroup: false,
  addNewItemOnFilter: false,
  addNewButtonText: 'Add',
  escapeToClose: true,
  clearAll: true,
  closeDropDownOnSelection: false,
  tagToBody: false
};

type GroupedItems<T> = Array<{ name: string; items: T[] }>;

function isPrimitiveItem(item: DropdownItem): item is string | number | boolean {
  return typeof item === 'string' || typeof item === 'number' || typeof item === 'boolean';
}

function getLabel<T extends DropdownItem>(item: T, settings: Required<DropdownSettings<T>>) {
  if (isPrimitiveItem(item)) {
    return String(item);
  }

  const keys = [
    settings.labelKey,
    'itemName',
    'name',
    'label',
    'title',
    'value'
  ].filter(Boolean);

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

function getGroupName<T extends DropdownItem>(
  item: T,
  settings: Required<DropdownSettings<T>>
) {
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
  const rootRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const lastScrollHeightRef = useRef(0);

  const allItems = useMemo(
    () => mergeUniqueItems(data, addedItems, settings),
    [addedItems, data, settings]
  );
  const filteredItems = useMemo(
    () => allItems.filter((item) => itemMatchesQuery(item, filter, settings)),
    [allItems, filter, settings]
  );
  const groupedItems = useMemo(
    () => buildGroups(filteredItems, settings),
    [filteredItems, settings]
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
        onClose?.();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && settings.escapeToClose) {
        setIsOpen(false);
        onClose?.();
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
  }, [isOpen, onClose, settings.escapeToClose]);

  useEffect(() => {
    if (isOpen && settings.enableSearchFilter && settings.searchAutofocus) {
      searchRef.current?.focus();
    }
  }, [isOpen, settings.enableSearchFilter, settings.searchAutofocus]);

  useEffect(() => {
    lastScrollHeightRef.current = 0;
  }, [filteredItems.length]);

  const isSelected = (item: T) =>
    selectedItems.some(
      (selectedItem) => getPrimaryValue(selectedItem, settings) === getPrimaryValue(item, settings)
    );

  const selectableItems = filteredItems.filter((item) => !isDisabledItem(item));
  const limitReached =
    Boolean(settings.limitSelection) && selectedItems.length >= settings.limitSelection;

  const updateSelection = (nextItems: T[]) => {
    setSelectedItems(nextItems);
  };

  const openDropdown = () => {
    if (settings.disabled) {
      return;
    }

    setIsOpen(true);
    onOpen?.();
  };

  const closeDropdown = () => {
    setIsOpen(false);
    onClose?.();
  };

  const clearSelection = () => {
    updateSelection([]);
    onDeSelectAll?.([]);
  };

  const toggleDropdown = () => {
    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
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
      if (settings.closeDropDownOnSelection || settings.singleSelection) {
        closeDropdown();
      }
      return;
    }

    if (settings.limitSelection && selectedItems.length >= settings.limitSelection) {
      return;
    }

    const nextItems = [...selectedItems, item];
    updateSelection(nextItems);
    onSelect?.(item);
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
    const nextItems = selectedItems.filter(
      (item) => !ids.has(getPrimaryValue(item, settings))
    );
    updateSelection(nextItems);

    if (filteredSelection) {
      onFilterDeSelectAll?.(items);
    } else {
      onDeSelectAll?.(nextItems);
    }
  };

  const handleAddFilterNewItem = async () => {
    const query = filter.trim();
    if (!query) {
      return;
    }

    const result = await onAddFilterNewItem?.(query);
    const nextItem =
      result === undefined ? createItemFromQuery(query, settings, data[0]) : result;

    setAddedItems((currentItems) => mergeUniqueItems(currentItems, [nextItem], settings));

    if (settings.singleSelection) {
      updateSelection([nextItem]);
    } else {
      updateSelection(mergeUniqueItems(selectedItems, [nextItem], settings));
    }

    setFilter('');
  };

  const toggleGroup = (groupName: string, items: T[]) => {
    const allSelected = items.every((item) => isSelected(item));
    if (allSelected) {
      deSelectAllItems(items, false);
      onGroupDeSelect?.(groupName, items);
      return;
    }

    selectAllItems(items, false);
    onGroupSelect?.(groupName, items);
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

  useImperativeHandle(
    ref,
    () => ({
      openDropdown,
      closeDropdown,
      clearSelection,
      focusSearch: () => searchRef.current?.focus(),
      selectAll: () => selectAllItems(selectableItems),
      deSelectAll: () => deSelectAllItems(selectedItems),
      getSelectedItems: () => selectedItems
    }),
    [selectableItems, selectedItems]
  );

  const rootClassName = [
    'rmsd-root',
    settings.classes,
    className
  ]
    .filter(Boolean)
    .join(' ');

  const hasFilteredResults = filteredItems.length > 0;
  const visibleBadges = settings.singleSelection
    ? selectedItems
    : selectedItems.slice(0, settings.badgeShowLimit);
  const hiddenBadgeCount = settings.singleSelection
    ? 0
    : Math.max(selectedItems.length - visibleBadges.length, 0);

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

  const allFilteredSelected =
    selectableItems.length > 0 && selectableItems.every((item) => isSelected(item));

  return (
    <div className={rootClassName} style={style} ref={rootRef} data-open={isOpen}>
      <button
        type="button"
        className={`rmsd-trigger${settings.disabled ? ' rmsd-disabled' : ''}`}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="listbox">
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
                    <span>{renderBadgeNode(item)}</span>
                    {!settings.disabled ? (
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          removeItem(item);
                        }}>
                        ×
                      </button>
                    ) : null}
                  </span>
                ))}
              </div>
              {hiddenBadgeCount > 0 ? (
                <span className="rmsd-overflow">+{hiddenBadgeCount}</span>
              ) : null}
            </>
          )}
        </div>

        <div className="rmsd-actions">
          {settings.clearAll && selectedItems.length > 0 && !settings.disabled ? (
            <button
              type="button"
              className="rmsd-clear"
              onClick={(event) => {
                event.stopPropagation();
                clearSelection();
              }}>
              Clear
            </button>
          ) : null}
          <span className="rmsd-arrow">{isOpen ? '▲' : '▼'}</span>
        </div>
      </button>

      {isOpen ? (
        <div className={`rmsd-menu rmsd-${settings.position}`}>
          <div className="rmsd-toolbar">
            {settings.enableSearchFilter ? (
              renderSearch ? (
                renderSearch({ query: filter, setQuery: setFilter, closeDropdown })
              ) : (
                <div className="rmsd-search-shell">
                  <input
                    ref={searchRef}
                    className="rmsd-search-input"
                    value={filter}
                    onChange={(event) => setFilter(event.target.value)}
                    placeholder={settings.searchPlaceholderText}
                  />
                  {filter ? (
                    <button
                      type="button"
                      className="rmsd-search-clear"
                      onClick={() => setFilter('')}>
                      ×
                    </button>
                  ) : null}
                </div>
              )
            ) : null}

            <div className="rmsd-bulk-actions">
              {settings.enableCheckAll && !settings.singleSelection ? (
                <button
                  type="button"
                  className="rmsd-inline-button"
                  onClick={() =>
                    allFilteredSelected
                      ? deSelectAllItems(selectableItems, Boolean(filter.trim()))
                      : selectAllItems(selectableItems, Boolean(filter.trim()))
                  }
                  disabled={settings.disabled || selectableItems.length === 0}>
                  {allFilteredSelected
                    ? filter.trim()
                      ? settings.filterUnSelectAllText
                      : settings.unSelectAllText
                    : filter.trim()
                      ? settings.filterSelectAllText
                      : settings.selectAllText}
                </button>
              ) : (
                <span />
              )}

              {settings.addNewItemOnFilter && filter.trim() ? (
                <button
                  type="button"
                  className="rmsd-inline-button"
                  onClick={handleAddFilterNewItem}>
                  {settings.addNewButtonText} “{filter.trim()}”
                </button>
              ) : null}
            </div>
          </div>

          <div
            className="rmsd-list"
            ref={listRef}
            style={{ maxHeight: settings.maxHeight }}
            onScroll={settings.lazyLoading ? handleListScroll : undefined}
            role="listbox">
            {(loading ?? settings.loading) ? (
              <div className="rmsd-state">Loading…</div>
            ) : groupedItems.length > 0 ? (
              groupedItems.map((group) => (
                <div className="rmsd-group" key={group.name}>
                  <div className="rmsd-group-header">
                    <span>
                      {group.name} · {group.items.length}
                    </span>
                    {settings.selectGroup && !settings.singleSelection ? (
                      <button
                        type="button"
                        className="rmsd-group-action"
                        onClick={() => toggleGroup(group.name, group.items)}>
                        {group.items.every((item) => isSelected(item)) ? 'Unselect' : 'Select'}
                      </button>
                    ) : null}
                  </div>
                  {group.items.map((item) => {
                    const selected = isSelected(item);
                    const disabled =
                      settings.disabled ||
                      isDisabledItem(item) ||
                      (limitReached && !selected);

                    return (
                      <button
                        type="button"
                        key={getPrimaryValue(item, settings)}
                        className={`rmsd-group-item${selected ? ' rmsd-selected' : ''}${
                          disabled ? ' rmsd-disabled' : ''
                        }`}
                        onClick={() => selectItem(item)}
                        disabled={disabled}>
                        {settings.showCheckbox ? (
                          <input
                            className="rmsd-checkbox"
                            type="checkbox"
                            checked={selected}
                            readOnly
                          />
                        ) : null}
                        {renderItemNode(item)}
                      </button>
                    );
                  })}
                </div>
              ))
            ) : hasFilteredResults ? (
              filteredItems.map((item) => {
                const selected = isSelected(item);
                const disabled =
                  settings.disabled || isDisabledItem(item) || (limitReached && !selected);

                return (
                  <button
                    type="button"
                    key={getPrimaryValue(item, settings)}
                    className={`rmsd-option${selected ? ' rmsd-selected' : ''}${
                      disabled ? ' rmsd-disabled' : ''
                    }`}
                    onClick={() => selectItem(item)}
                    disabled={disabled}>
                    {settings.showCheckbox ? (
                      <input
                        className="rmsd-checkbox"
                        type="checkbox"
                        checked={selected}
                        readOnly
                      />
                    ) : null}
                    {renderItemNode(item)}
                  </button>
                );
              })
            ) : (
              <div className="rmsd-state">
                {renderEmptyState ? renderEmptyState(filter) : settings.noDataLabel}
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

type MultiSelectComponent = <T extends DropdownItem = DropdownItem>(
  props: MultiSelectDropdownProps<T> & { ref?: ForwardedRef<MultiSelectDropdownHandle<T>> }
) => ReactElement | null;

export const ReactMultiSelectDropdown = forwardRef(InnerMultiSelectDropdown) as MultiSelectComponent;
export const MultiSelectDropdown = ReactMultiSelectDropdown;
