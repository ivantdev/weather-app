import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { ApiContextProvider } from './context/ApiContext';

const rootElement = document.getElementById('app')
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ApiContextProvider>
      <App />
    </ApiContextProvider>
  </React.StrictMode>
);
