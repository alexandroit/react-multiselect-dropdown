import type { DropdownItem, ResolvedDropdownSettings } from './types';

export type GroupedItems<T> = Array<{ name: string; items: T[] }>;

export function isPrimitiveItem(item: DropdownItem): item is string | number | boolean {
  return typeof item === 'string' || typeof item === 'number' || typeof item === 'boolean';
}

export function getLabel<T extends DropdownItem>(item: T, settings: ResolvedDropdownSettings<T>) {
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

export function getPrimaryValue<T extends DropdownItem>(item: T, settings: ResolvedDropdownSettings<T>) {
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

export function sanitizeId(value: string) {
  return value.replace(/[^a-zA-Z0-9_-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 56) || 'option';
}

export function normalizeSkinName(value: string) {
  return sanitizeId(value.toLowerCase()) || 'classic';
}

export function itemMatchesQuery<T extends DropdownItem>(
  item: T,
  query: string,
  settings: ResolvedDropdownSettings<T>
) {
  if (!query.trim()) {
    return true;
  }

  const needle = query.trim().toLowerCase();
  const haystack = new Set<string>([getLabel(item, settings).toLowerCase()]);

  if (!isPrimitiveItem(item)) {
    const objectItem = item as Record<string, any>;
    const searchKeys = settings.searchBy.length ? settings.searchBy : [settings.labelKey];
    for (const key of searchKeys) {
      if (key && objectItem[key] != null) {
        haystack.add(String(objectItem[key]).toLowerCase());
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

export function isDisabledItem<T extends DropdownItem>(item: T) {
  return !isPrimitiveItem(item) && Boolean(item.disabled);
}

export function getGroupName<T extends DropdownItem>(
  item: T,
  settings: ResolvedDropdownSettings<T>
) {
  if (!settings.groupBy) {
    return '';
  }

  if (typeof settings.groupBy === 'function') {
    return settings.groupBy(item);
  }

  if (!isPrimitiveItem(item)) {
    const objectItem = item as Record<string, any>;
    if (settings.groupBy in objectItem) {
      return String(objectItem[settings.groupBy] ?? '');
    }
  }

  return '';
}

export function mergeUniqueItems<T extends DropdownItem>(
  base: T[],
  extra: T[],
  settings: ResolvedDropdownSettings<T>
) {
  const itemsById = new Map<string, T>();

  for (const item of [...base, ...extra]) {
    itemsById.set(getPrimaryValue(item, settings), item);
  }

  return Array.from(itemsById.values());
}

export function createItemFromQuery<T extends DropdownItem>(
  query: string,
  settings: ResolvedDropdownSettings<T>,
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

export function buildGroups<T extends DropdownItem>(
  items: T[],
  settings: ResolvedDropdownSettings<T>
) {
  if (!settings.groupBy) {
    return [] as GroupedItems<T>;
  }

  const itemsByGroup = new Map<string, T[]>();
  for (const item of items) {
    const groupName = getGroupName(item, settings) || 'Ungrouped';
    const currentItems = itemsByGroup.get(groupName) || [];
    currentItems.push(item);
    itemsByGroup.set(groupName, currentItems);
  }

  return Array.from(itemsByGroup.entries()).map(([name, groupedItems]) => ({
    name,
    items: groupedItems
  }));
}

export function getVisibleBadgeLimit(selectedCount: number, rawLimit: number) {
  if (!Number.isFinite(rawLimit)) {
    return selectedCount;
  }

  return Math.min(selectedCount, Math.max(0, Math.floor(rawLimit)));
}
