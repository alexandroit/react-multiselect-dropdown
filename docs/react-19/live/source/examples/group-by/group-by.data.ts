import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';
import { countryOptions } from '../../shared/country-data';

export const countries: DemoItem[] = countryOptions;

export const groupSelectedInitial: DemoItem[] = [countryOptions[0], countryOptions[3]];

export const groupSettings: DropdownSettings<DemoItem> = {
  singleSelection: false,
  text: "Grouped countries",
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
  groupBy: "region",
  selectGroup: true
};
