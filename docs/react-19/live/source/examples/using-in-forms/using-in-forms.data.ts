import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';

export const skills: DemoItem[] = [
  {
    id: 1,
    itemName: "Node.js",
    category: "Backend"
  },
  {
    id: 2,
    itemName: "React",
    category: "Framework"
  },
  {
    id: 3,
    itemName: "JavaScript",
    category: "Language"
  },
  {
    id: 4,
    itemName: "TypeScript",
    category: "Language"
  },
  {
    id: 5,
    itemName: "HTML",
    category: "Web"
  },
  {
    id: 6,
    itemName: "CSS",
    category: "Web"
  }
];

export const skillSelectedInitial: DemoItem[] = [];

export const skillSettings: DropdownSettings<DemoItem> = {
  singleSelection: false,
  text: "Select skills",
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
  groupBy: "category"
};
