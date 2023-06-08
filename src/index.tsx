import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ThemeProvider } from './helpers/ThemeContext';
import App from './App';
import { store } from './store';
import reportWebVitals from './reportWebVitals';

import './style/reset.scss';
import './style/common.scss';
import './index.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
);

reportWebVitals();
