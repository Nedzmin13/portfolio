// src/main.jsx
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <<<=== IMPORTA
import App from './App.jsx';
import './index.css';
import './utils/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* ---> AVVOLGI CON BrowserRouter <--- */}
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <App />
            </Suspense>
        </BrowserRouter>
    </React.StrictMode>,
);