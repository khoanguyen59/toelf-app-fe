import React, { Suspense } from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme as MolunderTheme } from './themes/MolunderTheme';

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={MolunderTheme}>
      <Suspense fallback={<div>Loading... </div>}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);
