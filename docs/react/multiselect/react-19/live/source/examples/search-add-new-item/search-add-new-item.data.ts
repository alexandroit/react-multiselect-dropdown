import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';
import { countryOptions } from '../../shared/country-data';

export const countries: DemoItem[] = countryOptions;

export const createdSelectedInitial: DemoItem[] = countryOptions.slice(0, 2);

export const createdSettings: DropdownSettings<DemoItem> = {
  singleSelection: false,
  text: "Add country",
  selectAllText: "Select all",
  unSelectAllText: "Clear all",
  enableCheckAll: true,
  enableSearchFilter: true,
  searchPlaceholderText: "Search",
  badgeShowLimit: 3,
  maxHeight: 220,
  showCheckbox: true,
  noDataLabel: "No data",
  clearAll: true,
  primaryKey: "id",
  labelKey: "itemName",
  skin: "classic",
  addNewItemOnFilter: true,
  addNewButtonText: "Add country"
};

export function createCountryFromQuery(query: string, currentLength: number): DemoItem {
  return {
    id: currentLength + 100,
    itemName: query,
    name: query.slice(0, 2).toUpperCase(),
    capital: query,
    region: 'Custom',
    category: 'Custom'
  };
}
