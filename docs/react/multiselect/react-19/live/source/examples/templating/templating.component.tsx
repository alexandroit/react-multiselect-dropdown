import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import type { DemoItem } from '../../shared/types';
import { metrics, templateSelectedInitial, templateSettings } from './templating.data';
import './templating.component.css';

function OptionRow({ item }: { item: DemoItem }) {
  return (
    <span className="option-row">
      <span className="swatch" style={{ backgroundColor: item.color || '#2563eb' }} />
      <span>
        <strong>{item.itemName}</strong>
        <small>{item.detail}</small>
      </span>
    </span>
  );
}

function SwatchBadge({ item }: { item: DemoItem }) {
  return (
    <span className="swatch-badge">
      <span className="swatch" style={{ backgroundColor: item.color || '#2563eb' }} />
      {item.itemName}
    </span>
  );
}

export default function TemplatingExample() {
  const [templateSelected, setTemplateSelected] = useState(() => [...templateSelectedInitial]);
  const { events, record } = useExampleEvents();

  return (
    <ExampleLayout slug="templating" eyebrow="Render functions" title="Templating" description="Use React render functions for option rows and selected badges." events={events}>
      <div className="dropdown-stack template-route">
        <MultiSelectDropdown
          data={metrics}
          selectedItems={templateSelected}
          onChange={(items) => {
            setTemplateSelected(items);
            record('change', items);
          }}
          settings={templateSettings}
          renderItem={(item) => <OptionRow item={item} />}
          renderBadge={(item) => <SwatchBadge item={item} />}
          onSelect={(item) => record('select', item)}
          onDeSelect={(item) => record('deselect', item)}
          onSelectAll={(items) => record('selectAll', items)}
          onDeSelectAll={(items) => record('deselectAll', items)}
        />
      </div>
    </ExampleLayout>
  );
}
