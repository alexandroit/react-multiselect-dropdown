import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '../../shared/App';
import '../../shared/app.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found.');
}

ReactDOM.render(
  <React.StrictMode>
    <App
      docsMeta={{
        badge: 'React 17 · Multiselect dropdown',
        reactLine: '17.0.2',
        packageVersion: '17.0.0',
        packageRange: '^17.0.0',
        docsPath: 'react-17'
      }}
    />
  </React.StrictMode>,
  rootElement
);
