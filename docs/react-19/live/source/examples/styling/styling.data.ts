import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';
import { countryOptions } from '../../shared/country-data';

export const countries: DemoItem[] = countryOptions;

export const stylingSelectedInitial: DemoItem[] = [countryOptions[0], countryOptions[4]];

export const stylingSettings: DropdownSettings<DemoItem> = {
  singleSelection: false,
  text: 'Styled dropdown',
  selectAllText: 'Select all',
  unSelectAllText: 'Clear all',
  enableCheckAll: true,
  enableSearchFilter: true,
  searchPlaceholderText: 'Search',
  maxHeight: 220,
  showCheckbox: true,
  noDataLabel: 'No data',
  clearAll: true,
  primaryKey: 'id',
  labelKey: 'itemName',
  skin: 'classic',
  classes: 'example-themed-dropdown',
  badgeShowLimit: 3
};
