import { lazy } from 'react';

export const exampleRoutes = [
  { slug: 'basic', title: 'Basic usage', component: lazy(() => import('../examples/basic/basic.component')) },
  { slug: 'keyboard-contract', title: 'Keyboard contract', component: lazy(() => import('../examples/keyboard-contract/keyboard-contract.component')) },
  { slug: 'aria-state', title: 'ARIA state audit', component: lazy(() => import('../examples/aria-state/aria-state.component')) },
  { slug: 'headless-aria', title: 'Headless + ARIA', component: lazy(() => import('../examples/headless-aria/headless-aria.component')) },
  { slug: 'state-hook', title: 'State hook', component: lazy(() => import('../examples/state-hook/state-hook.component')) },
  { slug: 'slots-api', title: 'Slots API', component: lazy(() => import('../examples/slots-api/slots-api.component')) },
  { slug: 'type-safe-factory', title: 'Type-safe factory', component: lazy(() => import('../examples/type-safe-factory/type-safe-factory.component')) },
  { slug: 'async-object-preservation', title: 'Async object preservation', component: lazy(() => import('../examples/async-object-preservation/async-object-preservation.component')) },
  { slug: 'single-selection', title: 'Single selection', component: lazy(() => import('../examples/single-selection/single-selection.component')) },
  { slug: 'search-filter', title: 'Search filter', component: lazy(() => import('../examples/search-filter/search-filter.component')) },
  { slug: 'custom-search-api', title: 'Custom search from API', component: lazy(() => import('../examples/custom-search-api/custom-search-api.component')) },
  { slug: 'search-filter-by-property', title: 'Search filter by property', component: lazy(() => import('../examples/search-filter-by-property/search-filter-by-property.component')) },
  { slug: 'search-add-new-item', title: 'Search and Add New Item', component: lazy(() => import('../examples/search-add-new-item/search-add-new-item.component')) },
  { slug: 'group-by', title: 'Group By', component: lazy(() => import('../examples/group-by/group-by.component')) },
  { slug: 'templating', title: 'Templating', component: lazy(() => import('../examples/templating/templating.component')) },
  { slug: 'template-driven-forms', title: 'Template-style forms', component: lazy(() => import('../examples/template-driven-forms/template-driven-forms.component')) },
  { slug: 'reactive-forms', title: 'Reactive forms', component: lazy(() => import('../examples/reactive-forms/reactive-forms.component')) },
  { slug: 'virtual-scrolling', title: 'Virtual Scrolling', component: lazy(() => import('../examples/virtual-scrolling/virtual-scrolling.component')) },
  { slug: 'lazy-loading-api', title: 'Lazy Loading from API', component: lazy(() => import('../examples/lazy-loading-api/lazy-loading-api.component')) },
  { slug: 'remote-data', title: 'Data from remote API', component: lazy(() => import('../examples/remote-data/remote-data.component')) },
  { slug: 'list-loop', title: 'Using in list for loop', component: lazy(() => import('../examples/list-loop/list-loop.component')) },
  { slug: 'dialog', title: 'Using inside dialog', component: lazy(() => import('../examples/dialog/dialog.component')) },
  { slug: 'multiple-dropdowns', title: 'Multiple dropdowns', component: lazy(() => import('../examples/multiple-dropdowns/multiple-dropdowns.component')) },
  { slug: 'dynamic-data', title: 'Load dynamic data', component: lazy(() => import('../examples/dynamic-data/dynamic-data.component')) },
  { slug: 'methods', title: 'Methods', component: lazy(() => import('../examples/methods/methods.component')) },
  { slug: 'events', title: 'Events', component: lazy(() => import('../examples/events/events.component')) },
  { slug: 'disabled', title: 'Disabled state', component: lazy(() => import('../examples/disabled/disabled.component')) },
  { slug: 'limit-selection', title: 'Limit selection', component: lazy(() => import('../examples/limit-selection/limit-selection.component')) },
  { slug: 'limit-badges', title: 'Limit badges', component: lazy(() => import('../examples/limit-badges/limit-badges.component')) },
  { slug: 'custom-placeholder', title: 'Custom placeholder', component: lazy(() => import('../examples/custom-placeholder/custom-placeholder.component')) },
  { slug: 'styling', title: 'Styling', component: lazy(() => import('../examples/styling/styling.component')) },
  { slug: 'body-overlay-auto', title: 'Body Overlay Auto', component: lazy(() => import('../examples/body-overlay-auto/body-overlay-auto.component')) }
];

export const legacyRoutes = [
  { slug: 'all-visible-counter', title: 'All visible counter', component: lazy(() => import('../examples/all-visible-counter/all-visible-counter.component')) },
  { slug: 'selection-limit', title: 'Selection limit', component: lazy(() => import('../examples/selection-limit/selection-limit.component')) },
  { slug: 'disabled-state', title: 'Disabled state', component: lazy(() => import('../examples/disabled-state/disabled-state.component')) },
  { slug: 'using-in-forms', title: 'Using in Forms', component: lazy(() => import('../examples/using-in-forms/using-in-forms.component')) },
  { slug: 'lazy-loading', title: 'Lazy Loading', component: lazy(() => import('../examples/lazy-loading/lazy-loading.component')) },
  { slug: 'using-inside-dialog', title: 'Using Inside Dialog', component: lazy(() => import('../examples/using-inside-dialog/using-inside-dialog.component')) }
];

export const allRoutes = [...exampleRoutes, ...legacyRoutes];

export type ExampleRoute = (typeof exampleRoutes)[number];
