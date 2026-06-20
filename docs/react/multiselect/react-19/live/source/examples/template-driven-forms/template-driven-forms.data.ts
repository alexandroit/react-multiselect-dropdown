import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';

export const skills: DemoItem[] = [
  { id: 1, itemName: 'Node.js', category: 'Backend' },
  { id: 2, itemName: 'React', category: 'Framework' },
  { id: 3, itemName: 'TypeScript', category: 'Language' },
  { id: 4, itemName: 'CSS', category: 'Web' }
];

export const formSelectedInitial: DemoItem[] = [skills[1]];

export const formSettings: DropdownSettings<DemoItem> = {
  singleSelection: false,
  text: 'Select skills',
  selectAllText: 'Select all',
  unSelectAllText: 'Clear all',
  enableCheckAll: true,
  enableSearchFilter: true,
  searchPlaceholderText: 'Search',
  badgeShowLimit: 3,
  maxHeight: 220,
  showCheckbox: true,
  noDataLabel: 'No data',
  clearAll: true,
  primaryKey: 'id',
  labelKey: 'itemName',
  skin: 'classic',
  groupBy: 'category'
};
