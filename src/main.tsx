import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { applyTheme, getCurrentTheme } from './core/theme';
import './locations/auto-register';

applyTheme(getCurrentTheme());

function mount() {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

if (document.getElementById('root')) {
  mount();
} else {
  document.addEventListener('DOMContentLoaded', mount);
}
