import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';
import { countryOptions } from '../../shared/country-data';

export const countries: DemoItem[] = countryOptions;

export const counterSelectedInitial: DemoItem[] = countryOptions.slice(0, 4);

export const counterSettings: DropdownSettings<DemoItem> = {
  singleSelection: false,
  text: "All selected visible",
  selectAllText: "Select all",
  unSelectAllText: "Clear all",
  enableCheckAll: true,
  enableSearchFilter: false,
  searchPlaceholderText: "Search",
  badgeShowLimit: 10,
  maxHeight: 220,
  showCheckbox: true,
  noDataLabel: "No data",
  clearAll: true,
  primaryKey: "id",
  labelKey: "itemName",
  skin: "classic"
};
