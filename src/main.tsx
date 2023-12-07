import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'theme/main.scss';
import App from './App.tsx';
import DynamicThemeProvider from './theme/DynamicThemeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DynamicThemeProvider>
      <QueryClientProvider client={new QueryClient()}>
        <App />
      </QueryClientProvider>
    </DynamicThemeProvider>
  </React.StrictMode>
);
