import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')).render( // Use createRoot instead of ReactDOM.render
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
