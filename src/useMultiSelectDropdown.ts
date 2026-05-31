import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type Ref
} from 'react';
import {
  getGroupName,
  getLabel,
  getPrimaryValue,
  isDisabledItem,
  sanitizeId
} from './itemUtils';
import { assignRef, callAll } from './reactUtils';
import type {
  DropdownItem,
  HeadlessDropdownOption,
  UseMultiSelectDropdownProps,
  UseMultiSelectDropdownReturn
} from './types';
import { useMultiSelectState } from './useMultiSelectState';

type PendingFocus = 'search' | 'first' | 'last';
type SelectionFocusTarget = 'search' | 'trigger' | 'none';

function isSpaceKey(key: string) {
  return key === ' ' || key === 'Spacebar';
}

export function useMultiSelectDropdown<T extends DropdownItem = DropdownItem>({
  id,
  data,
  settings: incomingSettings,
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
  onGroupDeSelect
}: UseMultiSelectDropdownProps<T>): UseMultiSelectDropdownReturn<T> {
  // DOM references stay inside the hook so custom UIs can just spread prop getters.
  const reactId = useId();
  const instanceId = sanitizeId(id || `stackline-multiselect-${reactId}`);
  const rootRef = useRef<HTMLElement | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const listboxRef = useRef<HTMLElement | null>(null);
  const optionRefs = useRef(new Map<string, HTMLElement>());
  const lastScrollHeightRef = useRef(0);
  const closeDropdownRef = useRef<() => void>(() => undefined);
  const pendingFocusRef = useRef<PendingFocus>('search');
  const [isOpen, setIsOpen] = useState(false);
  const [activeOptionIndex, setActiveOptionIndex] = useState(-1);

  const listboxId = `${instanceId}-listbox`;

  const state = useMultiSelectState<T>({
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
    onSelectionShouldClose: () => closeDropdownRef.current()
  });
  const {
    settings,
    filter,
    setFilter,
    selectedItems,
    filteredItems,
    selectableItems,
    visibleBadges,
    hiddenBadgeCount,
    allFilteredSelected,
    isSelected,
    isDisabled
  } = state;
  const limitReached = Boolean(settings.limitSelection) && selectedItems.length >= settings.limitSelection;

  const options = useMemo(() => {
    let optionIndex = -1;
    return filteredItems.map((item) => {
      optionIndex += 1;
      const groupName = getGroupName(item, settings) || undefined;
      const selected = selectedItems.some(
        (selectedItem) => getPrimaryValue(selectedItem, settings) === getPrimaryValue(item, settings)
      );
      const disabled = settings.disabled || isDisabledItem(item) || (limitReached && !selected);
      const key = getPrimaryValue(item, settings);
      return {
        item,
        key,
        id: `${instanceId}-option-${optionIndex}-${sanitizeId(key)}`,
        label: getLabel(item, settings),
        selected,
        disabled,
        index: optionIndex,
        groupName
      };
    });
  }, [filteredItems, instanceId, limitReached, selectedItems, settings]);

  const selectableOptions = options.filter((option) => !option.disabled);
  const selectedOptions = options.filter((option) => option.selected);

  const groups = useMemo(() => {
    if (!settings.groupBy) {
      return [];
    }

    const bucket = new Map<string, HeadlessDropdownOption<T>[]>();
    for (const option of options) {
      const groupName = option.groupName || 'Ungrouped';
      const current = bucket.get(groupName) || [];
      current.push(option);
      bucket.set(groupName, current);
    }

    return Array.from(bucket.entries()).map(([name, groupOptions]) => {
      const enabledOptions = groupOptions.filter((option) => !option.disabled);
      return {
        name,
        items: groupOptions,
        selected: enabledOptions.length > 0 && enabledOptions.every((option) => option.selected),
        disabled: enabledOptions.length === 0
      };
    });
  }, [options, settings.groupBy]);

  const activeOption = options.find((option) => option.index === activeOptionIndex && !option.disabled);
  const activeDescendantId = activeOption?.id;
  const hasFilteredResults = options.length > 0;
  const label = selectedItems.length
    ? selectedItems.map((item) => getLabel(item, settings)).join(', ')
    : settings.text;

  // Focus is index-based so consumers can fully own the DOM without losing keyboard flow.
  const focusOption = (index: number) => {
    if (!options.length) {
      setActiveOptionIndex(-1);
      return;
    }

    const enabledOptions = options.filter((option) => !option.disabled);
    if (!enabledOptions.length) {
      setActiveOptionIndex(-1);
      return;
    }

    const boundedIndex = Math.max(0, Math.min(index, enabledOptions.length - 1));
    const option = enabledOptions[boundedIndex];
    setActiveOptionIndex(option.index);
    window.setTimeout(() => {
      optionRefs.current.get(option.id)?.focus();
      optionRefs.current.get(option.id)?.scrollIntoView({ block: 'nearest' });
    }, 0);
  };

  const focusOptionById = (optionId: string, fallbackIndex: number, moveToNextOption = false) => {
    setActiveOptionIndex(fallbackIndex);

    window.setTimeout(() => {
      const focusAfterRender = () => {
        if (moveToNextOption) {
          const optionNodes = Array.from(
            listboxRef.current?.querySelectorAll<HTMLElement>(
              '[data-headless-option="true"]:not([aria-disabled="true"])'
            ) ?? []
          );
          const currentIndex = optionNodes.findIndex((optionNode) => optionNode.id === optionId);
          const nextOptionNode = currentIndex >= 0 ? optionNodes[currentIndex + 1] : undefined;

          if (nextOptionNode) {
            const nextOption = options.find((option) => option.id === nextOptionNode.id);
            nextOptionNode.focus();
            nextOptionNode.scrollIntoView({ block: 'nearest' });
            setActiveOptionIndex(nextOption?.index ?? fallbackIndex + 1);
            return;
          }
        }

        const optionNode = optionRefs.current.get(optionId);
        if (optionNode) {
          optionNode.focus();
          optionNode.scrollIntoView({ block: 'nearest' });
          return;
        }

        focusOption(fallbackIndex);
      };

      if (typeof window.requestAnimationFrame === 'function') {
        window.requestAnimationFrame(focusAfterRender);
        return;
      }

      focusAfterRender();
    }, 0);
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

  const closeDropdown = () => {
    setIsOpen((current) => {
      if (current) {
        onClose?.();
      }
      return false;
    });
    setActiveOptionIndex(-1);
  };
  closeDropdownRef.current = closeDropdown;

  const toggleDropdown = () => {
    if (isOpen) {
      closeDropdown();
      return;
    }

    openDropdown();
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

  // Selection wrappers add focus guarantees around the pure state actions.
  const selectItem = (item: T, focusTarget: SelectionFocusTarget = 'search') => {
    const wasSelected = state.isSelected(item);
    const willClose = !wasSelected && (settings.singleSelection || settings.closeDropDownOnSelection);
    state.selectItem(item);
    focusAfterSelectionChange(willClose ? 'trigger' : focusTarget);
  };

  const removeItem = (item: T, focusTarget: SelectionFocusTarget = 'search') => {
    state.removeItem(item);
    focusAfterSelectionChange(focusTarget);
  };

  const removeLastSelectedItem = () => {
    state.removeLastSelectedItem();
    focusAfterSelectionChange();
  };

  const selectAll = (items = selectableItems, filteredSelection = false) => {
    state.selectAll(items, filteredSelection);
    focusAfterSelectionChange();
  };

  const deSelectAll = (items = selectedItems, filteredSelection = false) => {
    state.deSelectAll(items, filteredSelection);
    focusAfterSelectionChange();
  };

  const clearSelection = () => {
    state.clearSelection();
    focusAfterSelectionChange();
  };

  const toggleGroup = (groupName: string, items: T[]) => {
    state.toggleGroup(groupName, items);
    focusAfterSelectionChange();
  };

  const addFilterNewItem = async () => {
    await state.addFilterNewItem();
    focusAfterSelectionChange();
  };

  // Keyboard handlers are attached through the prop getters below.
  const handleListScroll = () => {
    if (!listboxRef.current || !onScrollToEnd) {
      return;
    }

    const { scrollHeight, scrollTop, clientHeight } = listboxRef.current;
    if (scrollHeight === lastScrollHeightRef.current && scrollTop + clientHeight < scrollHeight - 12) {
      return;
    }

    if (scrollTop + clientHeight >= scrollHeight - 12) {
      lastScrollHeightRef.current = scrollHeight;
      onScrollToEnd({ scrollTop, scrollHeight, clientHeight });
    }
  };

  const handleTriggerKeyDown = (event: ReactKeyboardEvent<HTMLElement>) => {
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
      if (isOpen) {
        focusOption(0);
      } else {
        openDropdown('first');
      }
      return;
    }

    if (settings.keyboard.arrows && event.key === 'ArrowUp') {
      event.preventDefault();
      if (isOpen) {
        focusOption(selectableOptions.length - 1);
      } else {
        openDropdown('last');
      }
      return;
    }

    if (settings.keyboard.escape && event.key === 'Escape' && isOpen) {
      event.preventDefault();
      closeDropdown();
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
      focusOption(0);
      return;
    }

    if (settings.keyboard.escape && event.key === 'Escape') {
      event.preventDefault();
      closeDropdown();
      triggerRef.current?.focus();
    }
  };

  const handleOptionKeyDown = (
    event: ReactKeyboardEvent<HTMLElement>,
    option: HeadlessDropdownOption<T>
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
      const enabledOptions = options.filter((currentOption) => !currentOption.disabled);
      const currentEnabledIndex = enabledOptions.findIndex((currentOption) => currentOption.id === option.id);
      const willClose =
        !state.isSelected(option.item) && (settings.singleSelection || settings.closeDropDownOnSelection);
      const moveToNextOption =
        isSpaceKey(event.key) && settings.keyboard.spaceOptionAction === 'toggle-and-next';
      selectItem(option.item, willClose ? 'trigger' : 'none');

      if (!willClose) {
        focusOptionById(option.id, Math.max(0, currentEnabledIndex), moveToNextOption);
      }
      return;
    }

    const enabledOptions = options.filter((currentOption) => !currentOption.disabled);
    const currentEnabledIndex = enabledOptions.findIndex((currentOption) => currentOption.id === option.id);

    if (settings.keyboard.arrows && event.key === 'ArrowDown') {
      event.preventDefault();
      if (currentEnabledIndex < enabledOptions.length - 1) {
        focusOption(currentEnabledIndex + 1);
      } else if (settings.lazyLoading) {
        handleListScroll();
      }
      return;
    }

    if (settings.keyboard.arrows && event.key === 'ArrowUp') {
      event.preventDefault();
      if (currentEnabledIndex > 0) {
        focusOption(currentEnabledIndex - 1);
      } else if (settings.enableSearchFilter) {
        searchRef.current?.focus();
      } else {
        triggerRef.current?.focus();
      }
      return;
    }

    if (settings.keyboard.arrows && event.key === 'Home') {
      event.preventDefault();
      focusOption(0);
      return;
    }

    if (settings.keyboard.arrows && event.key === 'End') {
      event.preventDefault();
      focusOption(enabledOptions.length - 1);
      return;
    }

    if (settings.keyboard.escape && event.key === 'Escape') {
      event.preventDefault();
      closeDropdown();
      triggerRef.current?.focus();
    }
  };

  const handleInlineButtonKeyDown = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (isSpaceKey(event.key) && !settings.keyboard.space) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (event.key === 'Enter' || isSpaceKey(event.key)) {
      event.stopPropagation();
    }
  };

  const handleRemoveButtonKeyDown = (event: ReactKeyboardEvent<HTMLElement>, item: T) => {
    if (
      settings.keyboard.deleteRemovesFocusedBadge &&
      (event.key === 'Backspace' || event.key === 'Delete')
    ) {
      event.preventDefault();
      event.stopPropagation();
      removeItem(item);
      return;
    }

    handleInlineButtonKeyDown(event);
  };

  // Consumers may pass either a normalized option object or the raw item.
  const getOptionFromItem = (optionOrItem: HeadlessDropdownOption<T> | T) => {
    if (
      optionOrItem &&
      typeof optionOrItem === 'object' &&
      'item' in optionOrItem &&
      'id' in optionOrItem &&
      'index' in optionOrItem
    ) {
      return optionOrItem as HeadlessDropdownOption<T>;
    }

    const item = optionOrItem as T;
    const key = getPrimaryValue(item, settings);
    const existingOption = options.find((option) => option.key === key);
    if (existingOption) {
      return existingOption;
    }

    const selected = isSelected(item);
    return {
      item,
      key,
      id: `${instanceId}-option-manual-${sanitizeId(key)}`,
      label: getLabel(item, settings),
      selected,
      disabled: settings.disabled || isDisabledItem(item) || (limitReached && !selected),
      index: -1,
      groupName: getGroupName(item, settings) || undefined
    };
  };

  // Close when the pointer leaves the composed headless surface.
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (!rootRef.current?.contains(target) && !listboxRef.current?.contains(target)) {
        closeDropdown();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && settings.keyboard.escape) {
        closeDropdown();
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

  useEffect(() => {
    lastScrollHeightRef.current = 0;
  }, [options.length]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const pendingFocus = pendingFocusRef.current;
    pendingFocusRef.current = 'search';

    window.setTimeout(() => {
      if (pendingFocus === 'first') {
        focusOption(0);
        return;
      }

      if (pendingFocus === 'last') {
        focusOption(selectableOptions.length - 1);
        return;
      }

      if (settings.enableSearchFilter && settings.searchAutofocus) {
        searchRef.current?.focus();
      }
    }, 0);
  }, [
    isOpen,
    options.length,
    selectableOptions.length,
    settings.enableSearchFilter,
    settings.searchAutofocus
  ]);

  // Prop getters keep DOM and CSS ownership with the application.
  return {
    settings,
    isOpen,
    filter,
    setFilter,
    selectedItems,
    selectedOptions,
    options,
    groups,
    visibleOptions: options,
    visibleBadges,
    hiddenBadgeCount,
    allFilteredSelected,
    hasFilteredResults,
    activeDescendantId,
    listboxId,
    label,
    openDropdown,
    closeDropdown,
    toggleDropdown,
    clearSelection,
    selectItem,
    removeItem,
    selectAll,
    deSelectAll,
    toggleGroup,
    addFilterNewItem,
    isSelected,
    isDisabled,
    getItemLabel: (item) => getLabel(item, settings),
    getItemKey: (item) => getPrimaryValue(item, settings),
    getRootProps: (props = {}) => ({
      ...props,
      ref: (node: HTMLElement | null) => {
        rootRef.current = node;
        assignRef((props as { ref?: Ref<HTMLElement> }).ref, node);
      }
    }),
    getTriggerProps: (props = {}) => ({
      type: 'button',
      ...props,
      ref: (node: HTMLElement | null) => {
        triggerRef.current = node;
        assignRef((props as { ref?: Ref<HTMLElement> }).ref, node);
      },
      disabled: settings.disabled || props.disabled,
      role: 'combobox',
      'aria-expanded': isOpen,
      'aria-haspopup': 'listbox',
      'aria-controls': listboxId,
      'aria-disabled': settings.disabled || undefined,
      'aria-activedescendant': activeDescendantId,
      'aria-label': selectedItems.length
        ? `${settings.ariaLabel}: ${selectedItems.map((item) => getLabel(item, settings)).join(', ')}`
        : settings.ariaLabel,
      onClick: callAll(() => toggleDropdown(), props.onClick),
      onKeyDown: callAll((event: ReactKeyboardEvent<HTMLElement>) => {
        handleTriggerKeyDown(event);
      }, props.onKeyDown as ((event: ReactKeyboardEvent<HTMLElement>) => void) | undefined)
    }),
    getListboxProps: (props = {}) => ({
      ...props,
      ref: (node: HTMLElement | null) => {
        listboxRef.current = node;
        assignRef((props as { ref?: Ref<HTMLElement> }).ref, node);
      },
      id: props.id || listboxId,
      role: 'listbox',
      'aria-label': props['aria-label'] || settings.listboxAriaLabel,
      'aria-multiselectable': !settings.singleSelection,
      onScroll: callAll(() => {
        if (settings.lazyLoading) {
          handleListScroll();
        }
      }, props.onScroll)
    }),
    getOptionProps: (optionOrItem, props = {}) => {
      const option = getOptionFromItem(optionOrItem);
      return {
        ...props,
        ref: (node: HTMLElement | null) => {
          if (node) {
            optionRefs.current.set(option.id, node);
          } else {
            optionRefs.current.delete(option.id);
          }
          assignRef((props as { ref?: Ref<HTMLElement> }).ref, node);
        },
        id: props.id || option.id,
        role: 'option',
        tabIndex: option.disabled || !settings.keyboard.tab ? -1 : props.tabIndex ?? 0,
        'aria-selected': option.selected,
        'aria-checked': option.selected,
        'aria-disabled': option.disabled || undefined,
        'data-headless-option': 'true',
        onClick: callAll((event: ReactMouseEvent<HTMLElement>) => {
          if (option.disabled) {
            return;
          }
          const willClose =
            !state.isSelected(option.item) && (settings.singleSelection || settings.closeDropDownOnSelection);
          selectItem(option.item, willClose ? 'trigger' : 'none');

          if (!willClose) {
            setActiveOptionIndex(option.index);
            focusOptionById(option.id, option.index);
          }
        }, props.onClick as ((event: ReactMouseEvent<HTMLElement>) => void) | undefined),
        onFocus: callAll(() => setActiveOptionIndex(option.index), props.onFocus),
        onKeyDown: callAll((event: ReactKeyboardEvent<HTMLElement>) => {
          handleOptionKeyDown(event, option);
        }, props.onKeyDown as ((event: ReactKeyboardEvent<HTMLElement>) => void) | undefined)
      };
    },
    getSearchInputProps: (props = {}) => ({
      type: 'search',
      ...props,
      ref: (node: HTMLInputElement | null) => {
        searchRef.current = node;
        assignRef((props as { ref?: Ref<HTMLInputElement> }).ref, node);
      },
      value: props.value ?? filter,
      placeholder: props.placeholder ?? settings.searchPlaceholderText,
      'aria-label': props['aria-label'] ?? settings.searchAriaLabel,
      onChange: callAll((event: ChangeEvent<HTMLInputElement>) => {
        setFilter(event.currentTarget.value);
      }, props.onChange),
      onKeyDown: callAll((event: ReactKeyboardEvent<HTMLInputElement>) => {
        handleSearchKeyDown(event);
      }, props.onKeyDown)
    }),
    getClearAllButtonProps: (props = {}) => ({
      type: 'button',
      ...props,
      disabled: settings.disabled || selectedItems.length === 0 || props.disabled,
      'aria-label': props['aria-label'] ?? settings.clearAllAriaLabel,
      onKeyDown: callAll((event: ReactKeyboardEvent<HTMLElement>) => {
        handleInlineButtonKeyDown(event);
      }, props.onKeyDown as ((event: ReactKeyboardEvent<HTMLElement>) => void) | undefined),
      onClick: callAll(() => clearSelection(), props.onClick)
    }),
    getRemoveButtonProps: (item, props = {}) => ({
      type: 'button',
      ...props,
      disabled: settings.disabled || props.disabled,
      'aria-label':
        props['aria-label'] ??
        (typeof settings.removeItemAriaLabel === 'function'
          ? settings.removeItemAriaLabel(item)
          : `${settings.removeItemAriaLabel}: ${getLabel(item, settings)}`),
      onKeyDown: callAll((event: ReactKeyboardEvent<HTMLElement>) => {
        handleRemoveButtonKeyDown(event, item);
      }, props.onKeyDown as ((event: ReactKeyboardEvent<HTMLElement>) => void) | undefined),
      onClick: callAll(() => removeItem(item), props.onClick)
    })
  };
}
