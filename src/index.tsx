import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';
import { CookiesProvider } from 'react-cookie';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <CookiesProvider>
            <App />
        </CookiesProvider>
    </Provider>
);
