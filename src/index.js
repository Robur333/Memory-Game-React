import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Cards } from './components/Cards';
import './index.css';

// ========================================

function MemoryGame() {
  return (
    <div>
      <Cards></Cards>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(MemoryGame());

reportWebVitals();
