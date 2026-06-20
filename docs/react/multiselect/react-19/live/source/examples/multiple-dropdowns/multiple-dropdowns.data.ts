import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';
import { countryOptions } from '../../shared/country-data';

export const countries: DemoItem[] = countryOptions;
export const skills: DemoItem[] = [{ id: 101, itemName: 'React' }, { id: 102, itemName: 'TypeScript' }, { id: 103, itemName: 'Testing' }];

export const countrySelectedInitial: DemoItem[] = countryOptions.slice(0, 1);
export const skillSelectedInitial: DemoItem[] = [skills[0]];

export const countrySettings: DropdownSettings<DemoItem> = {
  singleSelection: false,
  text: 'Countries',
  selectAllText: 'Select all',
  unSelectAllText: 'Clear all',
  enableCheckAll: true,
  searchPlaceholderText: 'Search',
  badgeShowLimit: 3,
  maxHeight: 220,
  showCheckbox: true,
  noDataLabel: 'No data',
  clearAll: true,
  primaryKey: 'id',
  labelKey: 'itemName',
  skin: 'classic',
  enableSearchFilter: false
};

export const skillSettings: DropdownSettings<DemoItem> = {
  singleSelection: false,
  text: 'Skills',
  selectAllText: 'Select all',
  unSelectAllText: 'Clear all',
  enableCheckAll: true,
  searchPlaceholderText: 'Search',
  badgeShowLimit: 3,
  maxHeight: 220,
  showCheckbox: true,
  noDataLabel: 'No data',
  clearAll: true,
  primaryKey: 'id',
  labelKey: 'itemName',
  skin: 'classic',
  enableSearchFilter: false
};
