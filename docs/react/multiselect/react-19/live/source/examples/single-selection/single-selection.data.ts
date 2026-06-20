import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';
import { countryOptions } from '../../shared/country-data';

export const countries: DemoItem[] = countryOptions;

export const singleSelectedInitial: DemoItem[] = countryOptions.slice(0, 1);

export const singleSettings: DropdownSettings<DemoItem> = {
  singleSelection: true,
  text: "Single country",
  selectAllText: "Select all",
  unSelectAllText: "Clear all",
  enableCheckAll: false,
  enableSearchFilter: true,
  searchPlaceholderText: "Search",
  badgeShowLimit: 3,
  maxHeight: 220,
  showCheckbox: false,
  noDataLabel: "No data",
  clearAll: true,
  primaryKey: "id",
  labelKey: "itemName",
  skin: "classic",
  closeDropDownOnSelection: true
};
