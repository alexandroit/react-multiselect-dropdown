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

export const COUNTRIES: CountryOption[] = [
  {
    id: 1,
    itemName: 'India',
    name: 'IN',
    capital: 'Delhi',
    category: 'Asia',
    region: 'Asia',
    flag: '🇮🇳',
    caption: 'Delhi · Asia'
  },
  {
    id: 2,
    itemName: 'Singapore',
    name: 'SG',
    capital: 'Singapore',
    category: 'Asia Pacific',
    region: 'Asia',
    flag: '🇸🇬',
    caption: 'Singapore · Asia Pacific'
  },
  {
    id: 3,
    itemName: 'Australia',
    name: 'AU',
    capital: 'Canberra',
    category: 'Oceania',
    region: 'Oceania',
    flag: '🇦🇺',
    caption: 'Canberra · Oceania'
  },
  {
    id: 4,
    itemName: 'Canada',
    name: 'CA',
    capital: 'Ottawa',
    category: 'North America',
    region: 'Americas',
    flag: '🇨🇦',
    caption: 'Ottawa · Americas'
  },
  {
    id: 5,
    itemName: 'South Korea',
    name: 'KR',
    capital: 'Seoul',
    category: 'Asia',
    region: 'Asia',
    flag: '🇰🇷',
    caption: 'Seoul · Asia'
  },
  {
    id: 6,
    itemName: 'Brazil',
    name: 'BR',
    capital: 'Brasilia',
    category: 'Latin America',
    region: 'Americas',
    flag: '🇧🇷',
    caption: 'Brasilia · Americas'
  },
  {
    id: 7,
    itemName: 'France',
    name: 'FR',
    capital: 'Paris',
    category: 'Europe',
    region: 'Europe',
    flag: '🇫🇷',
    caption: 'Paris · Europe'
  },
  {
    id: 8,
    itemName: 'Germany',
    name: 'DE',
    capital: 'Berlin',
    category: 'Europe',
    region: 'Europe',
    flag: '🇩🇪',
    caption: 'Berlin · Europe'
  },
  {
    id: 9,
    itemName: 'Japan',
    name: 'JP',
    capital: 'Tokyo',
    category: 'Asia',
    region: 'Asia',
    flag: '🇯🇵',
    caption: 'Tokyo · Asia'
  },
  {
    id: 10,
    itemName: 'New Zealand',
    name: 'NZ',
    capital: 'Wellington',
    category: 'Oceania',
    region: 'Oceania',
    flag: '🇳🇿',
    caption: 'Wellington · Oceania',
    disabled: true
  }
];

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

export const USE_CASES = COUNTRIES.slice(0, 6).map((country) => ({
  id: country.id,
  itemName: country.itemName,
  name: country.name
}));

export const CUSTOMERS = [
  { id: 1, name: 'Toshiba', countries: COUNTRIES.slice(0, 2) },
  { id: 2, name: 'Apple', countries: [] as CountryOption[] },
  { id: 3, name: 'Samsung', countries: [] as CountryOption[] },
  { id: 4, name: 'Google', countries: COUNTRIES.slice(4, 6) }
];

const PERSON_CATEGORIES = ['American', 'Canadian', 'Chinese', 'Indian'];
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
    return COUNTRIES.slice(0, 6);
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
