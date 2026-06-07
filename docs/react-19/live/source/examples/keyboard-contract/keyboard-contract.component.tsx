import { useMemo, useState } from 'react';
import { MultiSelectDropdown, type DropdownSpaceOptionAction } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import type { DemoItem } from '../../shared/types';
import {
  keyboardCountries,
  keyboardFeatureLabels,
  keyboardSelectedInitial,
  makeKeyboardSettings,
  spaceOptionActions,
  type KeyboardFeature
} from './keyboard-contract.data';
import './keyboard-contract.component.css';

const enabledKeyboard: Record<KeyboardFeature, boolean> = {
  space: true,
  tab: true,
  arrows: true,
  escape: true,
  backspaceRemovesLastWhenSearchEmpty: false,
  deleteRemovesFocusedBadge: true
};

export default function KeyboardContractExample() {
  const [selectedItems, setSelectedItems] = useState<DemoItem[]>(() => [...keyboardSelectedInitial]);
  const [keyboard, setKeyboard] = useState(enabledKeyboard);
  const [spaceOptionAction, setSpaceOptionAction] = useState<DropdownSpaceOptionAction>('toggle');
  const { events, record } = useExampleEvents('keyboard ready');

  const settings = useMemo(
    () => makeKeyboardSettings(keyboard, spaceOptionAction),
    [keyboard, spaceOptionAction]
  );

  function toggleFeature(feature: KeyboardFeature) {
    setKeyboard((current) => ({ ...current, [feature]: !current[feature] }));
  }

  return (
    <ExampleLayout
      slug="keyboard-contract"
      eyebrow="Keyboard contract"
      title="Keyboard feature switches"
      description="Turn individual keyboard behaviors on or off and compare how Space behaves on focused options."
      events={events}>
      <div className="keyboard-demo">
        <div className="keyboard-switches" aria-label="Keyboard feature toggles">
          {keyboardFeatureLabels.map((feature) => (
            <button
              key={feature.key}
              type="button"
              className={keyboard[feature.key] ? 'active' : ''}
              onClick={() => toggleFeature(feature.key)}>
              {feature.label}
            </button>
          ))}
        </div>

        <div className="space-mode-switches" aria-label="Space option action">
          {spaceOptionActions.map((action) => (
            <button
              key={action.key}
              type="button"
              className={spaceOptionAction === action.key ? 'active' : ''}
              onClick={() => setSpaceOptionAction(action.key)}>
              {action.label}
            </button>
          ))}
        </div>

        <MultiSelectDropdown
          data={keyboardCountries}
          selectedItems={selectedItems}
          onChange={(items) => {
            setSelectedItems(items);
            record('change', items);
          }}
          settings={settings}
          onSelect={(item) => record('select', item)}
          onDeSelect={(item) => record('deselect', item)}
        />

        <pre className="keyboard-json">
          {JSON.stringify({ keyboard: settings.keyboard }, null, 2)}
        </pre>
      </div>
    </ExampleLayout>
  );
}
