import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';
import { countryOptions } from '../../shared/country-data';

export const initialPeople: DemoItem[] = Array.from({ length: 30 }, (_, index) => ({ id: index + 1, itemName: 'Person ' + (index + 1), region: ['Brazilian', 'Canadian', 'Mexican', 'Colombian'][index % 4] }));

export const allPeople: DemoItem[] = Array.from({ length: 140 }, (_, index) => ({ id: index + 1, itemName: 'Person ' + (index + 1), region: ['Brazilian', 'Canadian', 'Mexican', 'Colombian'][index % 4] }));

export const lazySelectedInitial: DemoItem[] = [];

export const lazySettings: DropdownSettings<DemoItem> = {
  singleSelection: false,
  text: 'Lazy people',
  selectAllText: 'Select all',
  unSelectAllText: 'Clear all',
  enableCheckAll: true,
  enableSearchFilter: true,
  searchPlaceholderText: 'Search',
  showCheckbox: true,
  noDataLabel: 'No data',
  clearAll: true,
  primaryKey: 'id',
  labelKey: 'itemName',
  skin: 'classic',
  lazyLoading: true,
  maxHeight: 140,
  badgeShowLimit: 3
};
