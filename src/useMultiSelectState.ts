import { useMemo, useRef, useState } from 'react';
import {
  createItemFromQuery,
  getLabel,
  getPrimaryValue,
  getVisibleBadgeLimit,
  isDisabledItem,
  itemMatchesQuery,
  mergeUniqueItems
} from './itemUtils';
import { resolveDropdownSettings } from './settings';
import type {
  DropdownItem,
  UseMultiSelectStateProps,
  UseMultiSelectStateReturn
} from './types';
import { useControllableSelection } from './useControllableSelection';

export function useMultiSelectState<T extends DropdownItem = DropdownItem>({
  data,
  settings: incomingSettings,
  selectedItems: controlledSelectedItems,
  defaultSelectedItems,
  onChange,
  onSelect,
  onDeSelect,
  onSelectAll,
  onDeSelectAll,
  onFilterSelectAll,
  onFilterDeSelectAll,
  onAddFilterNewItem,
  onGroupSelect,
  onGroupDeSelect,
  onSelectionShouldClose
}: UseMultiSelectStateProps<T>): UseMultiSelectStateReturn<T> {
  const [filter, setFilter] = useState('');
  const [addedItems, setAddedItems] = useState<T[]>([]);
  const addRequestIdRef = useRef(0);
  const settings = useMemo(() => resolveDropdownSettings(incomingSettings), [incomingSettings]);
  const [selectedItems, setSelectedItems] = useControllableSelection(
    controlledSelectedItems,
    defaultSelectedItems,
    onChange
  );

  const allItems = useMemo(
    () => mergeUniqueItems(data, [...selectedItems, ...addedItems], settings),
    [addedItems, data, selectedItems, settings]
  );
  const filteredItems = useMemo(
    () => allItems.filter((item) => itemMatchesQuery(item, filter, settings)),
    [allItems, filter, settings]
  );

  const isSelected = (item: T) =>
    selectedItems.some(
      (selectedItem) => getPrimaryValue(selectedItem, settings) === getPrimaryValue(item, settings)
    );
  const isDisabled = (item: T) => settings.disabled || isDisabledItem(item);
  const selectableItems = filteredItems.filter((item) => !isDisabled(item));
  const allFilteredSelected =
    selectableItems.length > 0 && selectableItems.every((item) => isSelected(item));
  const visibleBadgeLimit = getVisibleBadgeLimit(selectedItems.length, settings.badgeShowLimit);
  const visibleBadges = settings.singleSelection
    ? selectedItems
    : selectedItems.slice(0, visibleBadgeLimit);
  const hiddenBadgeCount = settings.singleSelection
    ? 0
    : Math.max(selectedItems.length - visibleBadges.length, 0);

  const updateSelection = (nextItems: T[]) => {
    setSelectedItems(nextItems);
  };

  const removeItem = (item: T) => {
    if (settings.disabled) {
      return;
    }

    const nextItems = selectedItems.filter(
      (selectedItem) => getPrimaryValue(selectedItem, settings) !== getPrimaryValue(item, settings)
    );
    updateSelection(nextItems);
    onDeSelect?.(item);
  };

  const removeLastSelectedItem = () => {
    const lastItem = selectedItems[selectedItems.length - 1];
    if (!lastItem || settings.disabled) {
      return;
    }

    removeItem(lastItem);
  };

  const selectItem = (item: T) => {
    if (settings.disabled || isDisabledItem(item)) {
      return;
    }

    if (isSelected(item)) {
      if (settings.singleSelection) {
        onSelectionShouldClose?.();
        return;
      }

      removeItem(item);
      return;
    }

    if (settings.singleSelection) {
      updateSelection([item]);
      onSelect?.(item);
      onSelectionShouldClose?.();
      return;
    }

    if (settings.limitSelection && selectedItems.length >= settings.limitSelection) {
      return;
    }

    const nextItems = [...selectedItems, item];
    updateSelection(nextItems);
    onSelect?.(item);

    if (settings.closeDropDownOnSelection) {
      onSelectionShouldClose?.();
    }
  };

  const selectAll = (items = selectableItems, filteredSelection = false) => {
    if (settings.disabled || settings.singleSelection) {
      return;
    }

    const selectedIds = new Set(selectedItems.map((item) => getPrimaryValue(item, settings)));
    const remainingCapacity = settings.limitSelection
      ? Math.max(settings.limitSelection - selectedItems.length, 0)
      : Number.MAX_SAFE_INTEGER;
    const nextItemsToAdd = items
      .filter((item) => !selectedIds.has(getPrimaryValue(item, settings)))
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

  const deSelectAll = (items = selectedItems, filteredSelection = false) => {
    if (settings.disabled) {
      return;
    }

    const itemIds = new Set(items.map((item) => getPrimaryValue(item, settings)));
    const nextItems = selectedItems.filter((item) => !itemIds.has(getPrimaryValue(item, settings)));
    updateSelection(nextItems);

    if (filteredSelection) {
      onFilterDeSelectAll?.(items);
    } else {
      onDeSelectAll?.(items);
    }
  };

  const clearSelection = () => deSelectAll(selectedItems);

  const toggleGroup = (groupName: string, items: T[]) => {
    if (settings.disabled) {
      return;
    }

    const enabledItems = items.filter((item) => !isDisabledItem(item));
    const allSelected = enabledItems.length > 0 && enabledItems.every((item) => isSelected(item));

    if (allSelected) {
      deSelectAll(enabledItems);
      onGroupDeSelect?.(groupName, enabledItems);
      return;
    }

    selectAll(enabledItems);
    onGroupSelect?.(groupName, enabledItems);
  };

  const addFilterNewItem = async () => {
    if (settings.disabled) {
      return;
    }

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
  };

  return {
    settings,
    filter,
    setFilter,
    selectedItems,
    allItems,
    filteredItems,
    selectableItems,
    visibleBadges,
    hiddenBadgeCount,
    allFilteredSelected,
    isSelected,
    isDisabled,
    getItemLabel: (item) => getLabel(item, settings),
    getItemKey: (item) => getPrimaryValue(item, settings),
    selectItem,
    removeItem,
    removeLastSelectedItem,
    selectAll,
    deSelectAll,
    clearSelection,
    toggleGroup,
    addFilterNewItem
  };
}
