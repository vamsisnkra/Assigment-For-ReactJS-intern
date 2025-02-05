import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the createRoot from 'react-dom/client'
import './index.css';
import App from './App';

// Create a root using the createRoot method (React 18 and above)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app using the new root API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);