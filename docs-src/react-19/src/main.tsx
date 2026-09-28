import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '../../shared/App';
import 'flag-icons/css/flag-icons.min.css';
import '../../shared/app.css';
import './docs-layout.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found.');
}

createRoot(rootElement).render(
  <React.StrictMode>
    <App
      docsMeta={{
        badge: 'React 19 family · Multiselect dropdown',
        reactLine: '19.0.0 -> 19.2.8',
        reactFamily: '19.x',
        reactRuntime: '19.2.8',
        packageVersion: '19.1.6',
        packageRange: '19.1.6',
        docsPath: 'react-19',
        stackBlitzBaseUrl: 'https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19'
      }}
    />
  </React.StrictMode>
);
