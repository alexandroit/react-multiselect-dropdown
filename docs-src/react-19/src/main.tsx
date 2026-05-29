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
        reactFamily: '19.x',
        reactRuntime: '19.2.4',
        packageVersion: '19.0.2',
        packageRange: '19.0.2',
        docsPath: 'react-19',
        stackBlitzBaseUrl: 'https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19'
      }}
    />
  </React.StrictMode>
);
