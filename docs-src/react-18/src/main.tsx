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
        badge: 'React 18 family · Multiselect dropdown',
        reactLine: '18.0.2 package · React runtime 18.3.1',
        reactFamily: '18.x',
        reactRuntime: '18.3.1',
        packageVersion: '18.0.2',
        packageRange: '18.0.2',
        docsPath: 'react-18'
      }}
    />
  </React.StrictMode>
);
