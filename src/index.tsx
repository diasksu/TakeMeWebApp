import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { TelegramWebApp } from '@kloktunov/react-telegram-webapp';

const root = ReactDOM.createRoot(
  document.getElementById('app') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TelegramWebApp>
        <App />
      </TelegramWebApp>
    </BrowserRouter>
  </React.StrictMode>
);
