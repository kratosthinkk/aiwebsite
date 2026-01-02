import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Si tu utilises Tailwind

const root = createRoot(document.getElementById('root'));
root.render(<App />);
