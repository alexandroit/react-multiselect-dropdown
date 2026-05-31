export type CountryOption = {
  id: number;
  itemName: string;
  name: string;
  capital: string;
  category: string;
  region: string;
  flag: string;
  disabled?: boolean;
  caption?: string;
};

export function countryFlagClass(countryCode: string) {
  const code = countryCode.trim().toLowerCase();
  if (!/^[a-z]{2}$/.test(code)) {
    return '';
  }

  return `fi fi-${code}`;
}

export type SkillOption = {
  id: number;
  itemName: string;
  category: string;
};

export type SpecialtyOption = {
  id: string;
  name: string;
};

export type PersonOption = {
  id: number;
  name: string;
  category: string;
};

const COUNTRY_SEEDS = [
  ['Brazil', 'BR', 'Brasilia', 'South America', 'Americas'],
  ['Canada', 'CA', 'Ottawa', 'North America', 'Americas'],
  ['Portugal', 'PT', 'Lisbon', 'Southern Europe', 'Europe'],
  ['Argentina', 'AR', 'Buenos Aires', 'South America', 'Americas'],
  ['Germany', 'DE', 'Berlin', 'Western Europe', 'Europe'],
  ['Mexico', 'MX', 'Mexico City', 'North America', 'Americas'],
  ['Colombia', 'CO', 'Bogota', 'South America', 'Americas'],
  ['Uruguay', 'UY', 'Montevideo', 'South America', 'Americas'],
  ['Costa Rica', 'CR', 'San Jose', 'Central America', 'Americas'],
  ['Chile', 'CL', 'Santiago', 'South America', 'Americas'],
  ['Peru', 'PE', 'Lima', 'South America', 'Americas'],
  ['Ecuador', 'EC', 'Quito', 'South America', 'Americas'],
  ['Panama', 'PA', 'Panama City', 'Central America', 'Americas'],
  ['Dominican Republic', 'DO', 'Santo Domingo', 'Caribbean', 'Americas'],
  ['Jamaica', 'JM', 'Kingston', 'Caribbean', 'Americas'],
  ['Bahamas', 'BS', 'Nassau', 'Caribbean', 'Americas'],
  ['Barbados', 'BB', 'Bridgetown', 'Caribbean', 'Americas'],
  ['Belize', 'BZ', 'Belmopan', 'Central America', 'Americas'],
  ['Paraguay', 'PY', 'Asuncion', 'South America', 'Americas'],
  ['Ireland', 'IE', 'Dublin', 'Northern Europe', 'Europe'],
  ['Spain', 'ES', 'Madrid', 'Southern Europe', 'Europe'],
  ['France', 'FR', 'Paris', 'Western Europe', 'Europe'],
  ['Italy', 'IT', 'Rome', 'Southern Europe', 'Europe'],
  ['Netherlands', 'NL', 'Amsterdam', 'Western Europe', 'Europe'],
  ['Belgium', 'BE', 'Brussels', 'Western Europe', 'Europe'],
  ['Switzerland', 'CH', 'Bern', 'Western Europe', 'Europe'],
  ['Austria', 'AT', 'Vienna', 'Western Europe', 'Europe'],
  ['Sweden', 'SE', 'Stockholm', 'Northern Europe', 'Europe'],
  ['Norway', 'NO', 'Oslo', 'Northern Europe', 'Europe'],
  ['Denmark', 'DK', 'Copenhagen', 'Northern Europe', 'Europe'],
  ['Finland', 'FI', 'Helsinki', 'Northern Europe', 'Europe'],
  ['Iceland', 'IS', 'Reykjavik', 'Northern Europe', 'Europe'],
  ['Czech Republic', 'CZ', 'Prague', 'Central Europe', 'Europe'],
  ['Slovakia', 'SK', 'Bratislava', 'Central Europe', 'Europe'],
  ['Slovenia', 'SI', 'Ljubljana', 'Southern Europe', 'Europe'],
  ['Croatia', 'HR', 'Zagreb', 'Southern Europe', 'Europe'],
  ['Greece', 'GR', 'Athens', 'Southern Europe', 'Europe'],
  ['Malta', 'MT', 'Valletta', 'Southern Europe', 'Europe'],
  ['Luxembourg', 'LU', 'Luxembourg', 'Western Europe', 'Europe'],
  ['Estonia', 'EE', 'Tallinn', 'Northern Europe', 'Europe'],
  ['South Africa', 'ZA', 'Pretoria', 'Southern Africa', 'Africa'],
  ['Kenya', 'KE', 'Nairobi', 'East Africa', 'Africa'],
  ['Ghana', 'GH', 'Accra', 'West Africa', 'Africa'],
  ['Botswana', 'BW', 'Gaborone', 'Southern Africa', 'Africa'],
  ['Namibia', 'NA', 'Windhoek', 'Southern Africa', 'Africa'],
  ['Rwanda', 'RW', 'Kigali', 'East Africa', 'Africa'],
  ['Tanzania', 'TZ', 'Dodoma', 'East Africa', 'Africa'],
  ['Senegal', 'SN', 'Dakar', 'West Africa', 'Africa'],
  ['Mauritius', 'MU', 'Port Louis', 'East Africa', 'Africa'],
  ['Seychelles', 'SC', 'Victoria', 'East Africa', 'Africa'],
  ['Cabo Verde', 'CV', 'Praia', 'West Africa', 'Africa'],
  ['Japan', 'JP', 'Tokyo', 'East Asia', 'Asia'],
  ['Singapore', 'SG', 'Singapore', 'Southeast Asia', 'Asia'],
  ['Malaysia', 'MY', 'Kuala Lumpur', 'Southeast Asia', 'Asia'],
  ['Thailand', 'TH', 'Bangkok', 'Southeast Asia', 'Asia'],
  ['Indonesia', 'ID', 'Jakarta', 'Southeast Asia', 'Asia'],
  ['Philippines', 'PH', 'Manila', 'Southeast Asia', 'Asia'],
  ['Nepal', 'NP', 'Kathmandu', 'South Asia', 'Asia'],
  ['Bhutan', 'BT', 'Thimphu', 'South Asia', 'Asia'],
  ['Sri Lanka', 'LK', 'Sri Jayawardenepura Kotte', 'South Asia', 'Asia'],
  ['Australia', 'AU', 'Canberra', 'Oceania', 'Oceania'],
  ['New Zealand', 'NZ', 'Wellington', 'Oceania', 'Oceania'],
  ['Fiji', 'FJ', 'Suva', 'Oceania', 'Oceania'],
  ['Samoa', 'WS', 'Apia', 'Oceania', 'Oceania']
] as const;

export const COUNTRIES: CountryOption[] = COUNTRY_SEEDS.map(
  ([itemName, name, capital, category, region], index) => ({
    id: index + 1,
    itemName,
    name,
    capital,
    category,
    region,
    flag: name,
    caption: `${capital} - ${region}`,
    disabled: itemName === 'Costa Rica'
  })
);

export const FRUITS = [
  { id: 101, itemName: 'Apple', category: 'Fruits' },
  { id: 102, itemName: 'Banana', category: 'Fruits' },
  { id: 103, itemName: 'Orange', category: 'Fruits' },
  { id: 104, itemName: 'Tomato', category: 'Vegetables' },
  { id: 105, itemName: 'Potato', category: 'Vegetables' },
  { id: 106, itemName: 'Cucumber', category: 'Vegetables' }
];

export const SKILLS: SkillOption[] = [
  { id: 1, itemName: 'React', category: 'Frontend' },
  { id: 2, itemName: 'TypeScript', category: 'Frontend' },
  { id: 3, itemName: 'Node.js', category: 'Backend' },
  { id: 4, itemName: 'GraphQL', category: 'Backend' },
  { id: 5, itemName: 'Docker', category: 'DevOps' },
  { id: 6, itemName: 'Kubernetes', category: 'DevOps' },
  { id: 7, itemName: 'Jest', category: 'Testing' },
  { id: 8, itemName: 'Playwright', category: 'Testing' }
];

export const DIRECTORY_SPECIALTIES: SpecialtyOption[] = [
  { id: 'PBMMedAdhr', name: 'PBM Medication Adherence' },
  { id: 'GapsInCare', name: 'Gaps In Care' },
  { id: 'BASICSAVE', name: 'Generic alternative opportunity' },
  { id: 'ADVSAVE', name: 'Advanced dispense opportunity' },
  { id: 'PatSave', name: 'Patient savings' },
  { id: 'TrustBrkr', name: 'Identity services' },
  { id: 'RTBC', name: 'Real-time benefit check' }
];

export const USE_CASES = COUNTRIES.map((country) => ({
  id: country.id,
  itemName: country.itemName,
  name: country.name
}));

export const CUSTOMERS = [
  { id: 1, name: 'Regional demo group', countries: COUNTRIES },
  { id: 2, name: 'Operations demo group', countries: [...COUNTRIES].reverse() },
  { id: 3, name: 'Analytics demo group', countries: COUNTRIES.filter((_, index) => index % 2 === 0) },
  { id: 4, name: 'Support demo group', countries: COUNTRIES.filter((_, index) => index % 2 === 1) }
];

const PERSON_CATEGORIES = ['Americas', 'Europe', 'Africa', 'Asia', 'Oceania'];
const PERSON_LAST_NAMES = [
  'Smith',
  'Johnson',
  'Williams',
  'Brown',
  'Jones',
  'Miller',
  'Davis',
  'Garcia',
  'Wilson',
  'Taylor',
  'Thomas',
  'Moore',
  'Martin',
  'Jackson',
  'Thompson',
  'White',
  'Lopez',
  'Lee',
  'Harris',
  'Clark'
];

export const PEOPLE_SOURCE: PersonOption[] = Array.from({ length: 180 }, (_, index) => ({
  id: index + 1,
  name: `${PERSON_LAST_NAMES[index % PERSON_LAST_NAMES.length]} ${index + 1}`,
  category: PERSON_CATEGORIES[index % PERSON_CATEGORIES.length]
}));

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchCountries() {
  await delay(600);
  return COUNTRIES;
}

export async function searchCountries(query: string) {
  await delay(400);
  const needle = query.trim().toLowerCase();
  if (!needle) {
    return COUNTRIES;
  }

  return COUNTRIES.filter((country) => {
    return (
      country.itemName.toLowerCase().includes(needle) ||
      country.capital.toLowerCase().includes(needle) ||
      country.region.toLowerCase().includes(needle)
    );
  });
}

export async function fetchPeopleChunk(offset: number, size: number) {
  await delay(450);
  return PEOPLE_SOURCE.slice(offset, offset + size);
}
