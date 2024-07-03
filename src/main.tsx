import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Routes from './router/Routes.tsx'
import { SearchProvider } from './view/provider/searchContext.tsx';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SearchProvider>
      <Routes />
    </SearchProvider>
  </React.StrictMode>
);
