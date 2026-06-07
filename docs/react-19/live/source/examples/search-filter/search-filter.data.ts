import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';
import { countryOptions } from '../../shared/country-data';

export const countries: DemoItem[] = countryOptions;

export const searchSelectedInitial: DemoItem[] = countryOptions.slice(1, 3);

export const searchSettings: DropdownSettings<DemoItem> = {
  singleSelection: false,
  text: "Search country or capital",
  selectAllText: "Select all",
  unSelectAllText: "Clear all",
  enableCheckAll: true,
  enableSearchFilter: true,
  searchPlaceholderText: "Search country or capital",
  badgeShowLimit: 3,
  maxHeight: 220,
  showCheckbox: true,
  noDataLabel: "No data",
  clearAll: true,
  primaryKey: "id",
  labelKey: "itemName",
  skin: "classic",
  searchBy: [
    "itemName",
    "capital"
  ]
};
