import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { CountryOption, PersonOption, SkillOption } from './demoData';
import { COUNTRIES, PEOPLE_SOURCE, SKILLS } from './demoData';

export type SkinName = 'classic' | 'material' | 'dark' | 'custom' | 'brand';
export type CodeSnippet = { label: 'JSX' | 'TS' | 'JSON'; code: string };

export type LiveExampleDefinition<T extends Record<string, any>> = {
  id: string;
  title: string;
  description: string;
  dataName: string;
  selectedName: string;
  settingsName: string;
  data: T[];
  initialSelected: T[];
  settings: DropdownSettings<T>;
  customRenderer?: 'country';
  addFromFilter?: boolean;
  lazy?: boolean;
  allowDisabledToggle?: boolean;
  showMethods?: boolean;
  overflowDemo?: boolean;
};

export const SKINS: SkinName[] = ['classic', 'material', 'dark', 'custom', 'brand'];

export const LIVE_EXAMPLES: Array<LiveExampleDefinition<any>> = [
  {
    id: 'basic-counter',
    title: '01. Basic multi select',
    description: 'Search, select all, clear all, and a real overflow counter with only three visible badges.',
    dataName: 'countries',
    selectedName: 'selectedCountries',
    settingsName: 'countrySettings',
    data: COUNTRIES,
    initialSelected: COUNTRIES.slice(0, 4),
    settings: {
      text: 'Select Countries',
      enableSearchFilter: true,
      primaryKey: 'id',
      labelKey: 'itemName',
      badgeShowLimit: 3,
      clearAll: true
    }
  },
  {
    id: 'all-visible-counter',
    title: '02. All selected badges visible',
    description: 'The counter disappears when every selected item is visible in the trigger.',
    dataName: 'countries',
    selectedName: 'visibleCountries',
    settingsName: 'visibleBadgeSettings',
    data: COUNTRIES.slice(0, 6),
    initialSelected: COUNTRIES.slice(0, 4),
    settings: {
      text: 'All Selected Visible',
      enableSearchFilter: true,
      primaryKey: 'id',
      labelKey: 'itemName',
      badgeShowLimit: 10,
      clearAll: true
    }
  },
  {
    id: 'single-selection',
    title: '03. Single selection',
    description: 'One selected value, searchable data, and close-on-selection behavior.',
    dataName: 'countries',
    selectedName: 'selectedCountry',
    settingsName: 'singleSettings',
    data: COUNTRIES,
    initialSelected: COUNTRIES.slice(0, 1),
    settings: {
      text: 'Select Country',
      singleSelection: true,
      enableSearchFilter: true,
      primaryKey: 'id',
      labelKey: 'itemName'
    }
  },
  {
    id: 'search-by',
    title: '04. Search by specific fields',
    description: 'Search only in the configured object keys and keep the display label stable.',
    dataName: 'countries',
    selectedName: 'searchCountries',
    settingsName: 'searchSettings',
    data: COUNTRIES,
    initialSelected: COUNTRIES.slice(2, 5),
    settings: {
      text: 'Search by Country or Capital',
      enableSearchFilter: true,
      searchBy: ['itemName', 'capital'],
      searchPlaceholderText: 'Search country or capital',
      primaryKey: 'id',
      labelKey: 'itemName',
      badgeShowLimit: 3
    }
  },
  {
    id: 'grouped',
    title: '05. Grouped options',
    description: 'Group rows by category and select or unselect a whole group.',
    dataName: 'countries',
    selectedName: 'groupedCountries',
    settingsName: 'groupSettings',
    data: COUNTRIES,
    initialSelected: [COUNTRIES[0], COUNTRIES[4]],
    settings: {
      text: 'Grouped Countries',
      enableSearchFilter: true,
      groupBy: 'category',
      selectGroup: true,
      primaryKey: 'id',
      labelKey: 'itemName',
      badgeShowLimit: 3
    }
  },
  {
    id: 'limit-selection',
    title: '06. Selection limit',
    description: 'Stop new selections after the configured limit while keeping removal available.',
    dataName: 'countries',
    selectedName: 'limitedCountries',
    settingsName: 'limitSettings',
    data: COUNTRIES,
    initialSelected: COUNTRIES.slice(0, 2),
    settings: {
      text: 'Pick Two Countries',
      enableSearchFilter: true,
      limitSelection: 2,
      primaryKey: 'id',
      labelKey: 'itemName',
      badgeShowLimit: 2
    }
  },
  {
    id: 'custom-rendering',
    title: '07. Custom item and badge rendering',
    description: 'Use React render functions for menu rows and selected chips.',
    dataName: 'countries',
    selectedName: 'templateCountries',
    settingsName: 'templateSettings',
    data: COUNTRIES,
    initialSelected: COUNTRIES.slice(0, 3),
    customRenderer: 'country',
    settings: {
      text: 'Countries With Templates',
      enableSearchFilter: true,
      groupBy: 'region',
      primaryKey: 'id',
      labelKey: 'itemName',
      badgeShowLimit: 3
    }
  },
  {
    id: 'add-filter-item',
    title: '08. Search and add item',
    description: 'Create a new option from the current filter text and select it immediately.',
    dataName: 'countries',
    selectedName: 'createdCountries',
    settingsName: 'addSettings',
    data: COUNTRIES.slice(0, 6),
    initialSelected: COUNTRIES.slice(0, 2),
    addFromFilter: true,
    settings: {
      text: 'Add Country',
      enableSearchFilter: true,
      addNewItemOnFilter: true,
      addNewButtonText: 'Add country',
      primaryKey: 'id',
      labelKey: 'itemName',
      badgeShowLimit: 3
    }
  },
  {
    id: 'disabled-toggle',
    title: '09. Disabled state',
    description: 'Toggle disabled mode without losing the controlled selection state.',
    dataName: 'countries',
    selectedName: 'disabledCountries',
    settingsName: 'disabledSettings',
    data: COUNTRIES.slice(0, 6),
    initialSelected: COUNTRIES.slice(0, 3),
    allowDisabledToggle: true,
    settings: {
      text: 'Toggle Disabled',
      enableSearchFilter: true,
      primaryKey: 'id',
      labelKey: 'itemName',
      badgeShowLimit: 3
    }
  },
  {
    id: 'form-validation',
    title: '10. Controlled form validation',
    description: 'Keep selected items in React form state and derive validation from the array.',
    dataName: 'skills',
    selectedName: 'selectedSkills',
    settingsName: 'skillSettings',
    data: SKILLS,
    initialSelected: SKILLS.slice(0, 1),
    settings: {
      text: 'Select Skills',
      enableSearchFilter: true,
      groupBy: 'category',
      primaryKey: 'id',
      labelKey: 'itemName',
      badgeShowLimit: 3
    }
  },
  {
    id: 'long-list',
    title: '11. Long list with keyboard scroll',
    description: 'A compact max height keeps the list scrollable with pointer and keyboard navigation.',
    dataName: 'people',
    selectedName: 'selectedPeople',
    settingsName: 'peopleSettings',
    data: PEOPLE_SOURCE.slice(0, 120),
    initialSelected: PEOPLE_SOURCE.slice(0, 3),
    settings: {
      text: 'Select People',
      enableSearchFilter: true,
      maxHeight: 140,
      primaryKey: 'id',
      labelKey: 'name',
      badgeShowLimit: 3
    }
  },
  {
    id: 'lazy-loading',
    title: '12. Local lazy loading',
    description: 'Append more rows when the scrollable menu reaches the end.',
    dataName: 'people',
    selectedName: 'lazyPeople',
    settingsName: 'lazySettings',
    data: PEOPLE_SOURCE.slice(0, 30),
    initialSelected: [],
    lazy: true,
    settings: {
      text: 'Lazy People',
      enableSearchFilter: true,
      lazyLoading: true,
      maxHeight: 140,
      primaryKey: 'id',
      labelKey: 'name',
      badgeShowLimit: 3
    }
  },
  {
    id: 'body-overlay',
    title: '13. Dialog and overflow container',
    description: 'Use appendToBody/tagToBody to escape clipping inside overflow, dialogs, drawers, and modal surfaces.',
    dataName: 'countries',
    selectedName: 'overlayCountries',
    settingsName: 'overlaySettings',
    data: COUNTRIES,
    initialSelected: COUNTRIES.slice(0, 3),
    overflowDemo: true,
    settings: {
      text: 'Dialog dropdown',
      enableSearchFilter: true,
      primaryKey: 'id',
      labelKey: 'itemName',
      badgeShowLimit: 2,
      maxHeight: 180,
      appendToBody: true,
      tagToBody: true,
      autoPosition: true,
      position: 'bottom'
    }
  },
  {
    id: 'body-overlay-top',
    title: '14. Body overlay auto direction',
    description: 'Prefer opening above the trigger, but let autoPosition choose below when the viewport has room.',
    dataName: 'countries',
    selectedName: 'overlayTopCountries',
    settingsName: 'overlayTopSettings',
    data: COUNTRIES,
    initialSelected: COUNTRIES.slice(2, 5),
    overflowDemo: true,
    settings: {
      text: 'Dialog dropdown top',
      enableSearchFilter: true,
      primaryKey: 'id',
      labelKey: 'itemName',
      badgeShowLimit: 2,
      maxHeight: 180,
      appendToBody: true,
      tagToBody: true,
      autoPosition: true,
      position: 'top'
    }
  },
  {
    id: 'methods',
    title: '15. Ref methods',
    description: 'Open, close, focus search, select all, and clear from external controls.',
    dataName: 'countries',
    selectedName: 'methodCountries',
    settingsName: 'methodSettings',
    data: COUNTRIES.slice(0, 8),
    initialSelected: COUNTRIES.slice(0, 2),
    showMethods: true,
    settings: {
      text: 'Ref Controlled',
      enableSearchFilter: true,
      primaryKey: 'id',
      labelKey: 'itemName',
      badgeShowLimit: 3
    }
  }
];

export function formatCode(value: unknown) {
  return JSON.stringify(value, null, 2);
}

export function getSkinSettings<T extends Record<string, any>>(
  settings: DropdownSettings<T>,
  skin: SkinName,
  disabled = false
) {
  return {
    ...settings,
    disabled: settings.disabled || disabled,
    skin
  };
}

export function createCountryItemFromQuery(query: string, currentLength: number): CountryOption {
  return {
    id: currentLength + 100,
    itemName: query,
    name: query.slice(0, 2).toUpperCase(),
    capital: query,
    category: 'Custom',
    region: 'Custom',
    flag: 'NA',
    caption: `${query} - Custom`
  };
}

export function createCodeSnippets<T extends Record<string, any>>(
  example: LiveExampleDefinition<T>,
  selectedItems: T[],
  settings: DropdownSettings<T>,
  data: T[]
): CodeSnippet[] {
  const renderProps = example.customRenderer
    ? [
        `  renderItem={(item) => <CountryRow item={item} />}`,
        `  renderBadge={(item) => <CountryBadge item={item} />}`
      ]
    : [];
  const addProps = example.addFromFilter ? [`  onAddFilterNewItem={handleCreateCountry}`] : [];
  const lazyProps = example.lazy ? [`  onScrollToEnd={appendNextChunk}`] : [];

  const jsx = [
    `<MultiSelectDropdown`,
    `  data={${example.dataName}}`,
    `  selectedItems={${example.selectedName}}`,
    `  onChange={set${example.selectedName[0].toUpperCase()}${example.selectedName.slice(1)}}`,
    `  settings={${example.settingsName}}`,
    ...renderProps,
    ...addProps,
    ...lazyProps,
    `/>`
  ].join('\n');

  const ts = [
    `const [${example.selectedName}, set${example.selectedName[0].toUpperCase()}${example.selectedName.slice(1)}] = useState(${formatCode(selectedItems)});`,
    ``,
    `const ${example.settingsName} = ${formatCode(settings)};`,
    ``,
    `const ${example.dataName} = ${example.dataName === 'people' ? 'peopleSource' : example.dataName};`,
    `// Current rendered option count: ${data.length}`
  ].join('\n');

  const json = formatCode({
    selectedItems,
    settings,
    renderedOptions: data.length
  });

  return [
    { label: 'JSX', code: jsx },
    { label: 'TS', code: ts },
    { label: 'JSON', code: json }
  ];
}

export type { CountryOption, PersonOption, SkillOption };
