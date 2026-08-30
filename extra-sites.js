// Add official-company/design-system sources that are not in the base list yet.
sites.push(
  {
    name: 'SF Symbols',
    url: 'https://developer.apple.com/sf-symbols/',
    description: 'Apple公式。Appleプラットフォーム向けの大規模シンボルライブラリ。',
    categories: ['UI', 'Apple', '公式']
  },
  {
    name: 'Apple Design Resources',
    url: 'https://developer.apple.com/design/resources/',
    description: 'Apple公式のUI Kit、App Iconテンプレート、デザイン素材集。',
    categories: ['UI', 'Apple', '公式']
  },
  {
    name: 'Adobe Spectrum Icons',
    url: 'https://spectrum.adobe.com/page/icons/',
    description: 'Adobe Spectrum Design System公式のUIアイコン。',
    categories: ['UI', 'Adobe', '公式']
  },
  {
    name: 'Salesforce Lightning Icons',
    url: 'https://www.lightningdesignsystem.com/icons/',
    description: 'Salesforce Lightning Design System公式。業務系アイコンが豊富。',
    categories: ['UI', 'Salesforce', '公式']
  },
  {
    name: 'Atlassian Design System Icons',
    url: 'https://atlassian.design/components/icon/',
    description: 'Atlassian公式。JiraやConfluence系UIで使われるアイコン。',
    categories: ['UI', 'Atlassian', '公式']
  }
);

// Existing entries that are maintained/published by the product or design-system owner.
const officialSiteNames = new Set([
  'Material Symbols',
  'Google Fonts Icons',
  'Bootstrap Icons',
  'Heroicons',
  'Ionicons',
  'Octicons',
  'Radix Icons',
  'Ant Design Icons',
  'Carbon Icons',
  'Fluent UI Icons',
  'IconPark',
  'CoreUI Icons'
]);

for (const site of sites) {
  const isOfficial = officialSiteNames.has(site.name) || site.description.includes('公式');
  if (isOfficial && !site.categories.includes('公式')) {
    site.categories.push('公式');
  }
}

// Put the official filter near the front of the common filters.
if (!preferredCategories.includes('公式')) {
  preferredCategories.splice(1, 0, '公式');
}

renderFilters();
renderSites();
