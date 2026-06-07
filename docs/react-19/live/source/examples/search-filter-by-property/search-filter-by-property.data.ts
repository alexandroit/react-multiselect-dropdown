import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';
import { countryOptions } from '../../shared/country-data';

export const countries: DemoItem[] = countryOptions;

export const propertySelectedInitial: DemoItem[] = [countryOptions[2], countryOptions[4]];

export const propertySettings: DropdownSettings<DemoItem> = {
  singleSelection: false,
  text: 'Search country or capital',
  selectAllText: 'Select all',
  unSelectAllText: 'Clear all',
  enableCheckAll: true,
  enableSearchFilter: true,
  badgeShowLimit: 3,
  maxHeight: 220,
  showCheckbox: true,
  noDataLabel: 'No data',
  clearAll: true,
  primaryKey: 'id',
  labelKey: 'itemName',
  skin: 'classic',
  searchBy: ['itemName', 'capital', 'region'],
  searchPlaceholderText: 'Search by name, capital, or region'
};
