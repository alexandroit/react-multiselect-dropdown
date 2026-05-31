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
    description: 'Search, select all, clear all, and selected chips in a controlled React component.',
    dataName: 'countries',
    selectedName: 'selectedCountries',
    settingsName: 'countrySettings',
    data: COUNTRIES,
    initialSelected: COUNTRIES.slice(0, 2),
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
    data: COUNTRIES,
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
    title: '02. Single selection',
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
    title: '05. Search by specific fields',
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
    title: '07. Grouped options',
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
    title: '21. Selection limit',
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
    title: '08. Custom item and badge rendering',
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
    title: '06. Search and add item',
    description: 'Create a new option from the current filter text and select it immediately.',
    dataName: 'countries',
    selectedName: 'createdCountries',
    settingsName: 'addSettings',
    data: COUNTRIES,
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
    title: '20. Disabled state',
    description: 'Toggle disabled mode without losing the controlled selection state.',
    dataName: 'countries',
    selectedName: 'disabledCountries',
    settingsName: 'disabledSettings',
    data: COUNTRIES,
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
    title: '15. Dialog and overflow container',
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
    title: '25. Body overlay auto direction',
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
    title: '18. Ref methods',
    description: 'Open, close, focus search, select all, and clear from external controls.',
    dataName: 'countries',
    selectedName: 'methodCountries',
    settingsName: 'methodSettings',
    data: COUNTRIES,
    initialSelected: COUNTRIES.slice(0, 2),
    showMethods: true,
    settings: {
      text: 'Ref Controlled',
      enableSearchFilter: true,
      primaryKey: 'id',
      labelKey: 'itemName',
      badgeShowLimit: 3
    }
  },
  {
    id: 'search-filter',
    title: '03. Search filter',
    description: 'Filter visible options with the built-in search input.',
    dataName: 'countries',
    selectedName: 'searchSelectedCountries',
    settingsName: 'searchFilterSettings',
    data: COUNTRIES,
    initialSelected: COUNTRIES.slice(1, 3),
    settings: {
      text: 'Search countries',
      enableSearchFilter: true,
      searchPlaceholderText: 'Search',
      primaryKey: 'id',
      labelKey: 'itemName',
      badgeShowLimit: 3,
      clearAll: true
    }
  },
  {
    id: 'custom-search-api',
    title: '04. Custom Search from API',
    description: 'Use React state to replace the option data with API-filtered results.',
    dataName: 'remoteCountries',
    selectedName: 'apiCountries',
    settingsName: 'apiSearchSettings',
    data: COUNTRIES,
    initialSelected: COUNTRIES.slice(1, 2),
    settings: {
      text: 'Remote countries',
      enableSearchFilter: true,
      searchPlaceholderText: 'Type to query API',
      primaryKey: 'id',
      labelKey: 'itemName',
      badgeShowLimit: 3,
      clearAll: true
    }
  },
  {
    id: 'template-driven-forms',
    title: '09. Template-style forms',
    description: 'Keep form-like state close to the dropdown and validate selected values.',
    dataName: 'skills',
    selectedName: 'templateFormSkills',
    settingsName: 'templateFormSettings',
    data: SKILLS,
    initialSelected: SKILLS.slice(0, 1),
    settings: {
      text: 'Template form skills',
      enableSearchFilter: true,
      groupBy: 'category',
      primaryKey: 'id',
      labelKey: 'itemName',
      badgeShowLimit: 3,
      clearAll: true
    }
  },
  {
    id: 'remote-data',
    title: '13. Data from remote API',
    description: 'Render options from remote data while preserving the same controlled API.',
    dataName: 'remoteCountries',
    selectedName: 'remoteSelectedCountries',
    settingsName: 'remoteDataSettings',
    data: COUNTRIES,
    initialSelected: COUNTRIES.slice(2, 4),
    settings: {
      text: 'Remote API countries',
      enableSearchFilter: true,
      primaryKey: 'id',
      labelKey: 'itemName',
      badgeShowLimit: 3,
      clearAll: true
    }
  },
  {
    id: 'list-loop',
    title: '14. Using in List for loop',
    description: 'Render the same dropdown configuration in repeated React rows.',
    dataName: 'countries',
    selectedName: 'loopSelectedCountries',
    settingsName: 'loopSettings',
    data: COUNTRIES,
    initialSelected: COUNTRIES.slice(0, 1),
    settings: {
      text: 'Loop row dropdown',
      enableSearchFilter: true,
      primaryKey: 'id',
      labelKey: 'itemName',
      badgeShowLimit: 2,
      clearAll: true
    }
  },
  {
    id: 'multiple-dropdowns',
    title: '16. Multiple dropdowns',
    description: 'Keep independent selected arrays and settings for multiple dropdown instances.',
    dataName: 'countries',
    selectedName: 'multiSelectedCountries',
    settingsName: 'multiDropdownSettings',
    data: COUNTRIES,
    initialSelected: COUNTRIES.slice(0, 2),
    settings: {
      text: 'Primary dropdown',
      enableSearchFilter: true,
      primaryKey: 'id',
      labelKey: 'itemName',
      badgeShowLimit: 2,
      clearAll: true
    }
  },
  {
    id: 'dynamic-data',
    title: '17. Load dynamic data',
    description: 'Swap the option array at runtime without changing the selected-item contract.',
    dataName: 'dynamicCountries',
    selectedName: 'dynamicSelectedCountries',
    settingsName: 'dynamicSettings',
    data: COUNTRIES,
    initialSelected: COUNTRIES.slice(0, 1),
    settings: {
      text: 'Dynamic data',
      enableSearchFilter: true,
      primaryKey: 'id',
      labelKey: 'itemName',
      badgeShowLimit: 3,
      clearAll: true
    }
  },
  {
    id: 'events',
    title: '19. Events',
    description: 'Subscribe to open, close, select, deselect, and controlled change callbacks.',
    dataName: 'countries',
    selectedName: 'eventSelectedCountries',
    settingsName: 'eventSettings',
    data: COUNTRIES,
    initialSelected: COUNTRIES.slice(1, 3),
    settings: {
      text: 'Event callbacks',
      enableSearchFilter: true,
      primaryKey: 'id',
      labelKey: 'itemName',
      badgeShowLimit: 3,
      clearAll: true
    }
  },
  {
    id: 'limit-badges',
    title: '22. Limit badges',
    description: 'Show a real +N badge only when selected items overflow the visible chip limit.',
    dataName: 'countries',
    selectedName: 'badgeLimitedCountries',
    settingsName: 'badgeLimitSettings',
    data: COUNTRIES,
    initialSelected: COUNTRIES.slice(0, 5),
    settings: {
      text: 'Badge limit',
      enableSearchFilter: true,
      primaryKey: 'id',
      labelKey: 'itemName',
      badgeShowLimit: 2,
      clearAll: true
    }
  },
  {
    id: 'custom-placeholder',
    title: '23. Custom placeholder',
    description: 'Set the empty-state label and search placeholder from settings.',
    dataName: 'countries',
    selectedName: 'placeholderCountries',
    settingsName: 'placeholderSettings',
    data: COUNTRIES,
    initialSelected: [],
    settings: {
      text: 'Choose countries',
      enableSearchFilter: true,
      searchPlaceholderText: 'Search by name',
      primaryKey: 'id',
      labelKey: 'itemName',
      badgeShowLimit: 3,
      clearAll: true
    }
  },
  {
    id: 'styling',
    title: '24. Styling',
    description: 'Use the skin system and CSS variables to align the dropdown with product UI.',
    dataName: 'countries',
    selectedName: 'styledCountries',
    settingsName: 'styledSettings',
    data: COUNTRIES,
    initialSelected: COUNTRIES.slice(3, 5),
    settings: {
      text: 'Styled dropdown',
      enableSearchFilter: true,
      primaryKey: 'id',
      labelKey: 'itemName',
      badgeShowLimit: 3,
      clearAll: true,
      skin: 'brand'
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
