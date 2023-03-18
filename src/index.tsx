import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import { CookiesProvider } from 'react-cookie';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <CookiesProvider>
    <App />
    </CookiesProvider>
);
