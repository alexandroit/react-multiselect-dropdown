import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '../../shared/App';
import '../../shared/app.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found.');
}

createRoot(rootElement).render(
  <React.StrictMode>
    <App
      docsMeta={{
        badge: 'React 19 family · Multiselect dropdown',
        reactLine: '19.0.0 -> 19.2.5',
        packageVersion: '19.0.0',
        packageRange: '19',
        docsPath: 'react-19'
      }}
    />
  </React.StrictMode>
);
