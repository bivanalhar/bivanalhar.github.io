import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './contexts/ThemeContext.tsx'

// Component to handle redirect from 404.html
export function RedirectHandler() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath && redirectPath !== '/') {
      sessionStorage.removeItem('redirectPath');
      const currentPath = window.location.pathname + window.location.search + window.location.hash;
      // Only navigate if we're not already on that path
      if (currentPath !== redirectPath) {
        // Use a small delay to ensure the router is ready
        setTimeout(() => {
          navigate(redirectPath, { replace: true });
        }, 0);
      }
    }
  }, [navigate]);
  
  return null;
}

export function AppWithRedirect() {
  return (
    <>
      <RedirectHandler />
      <App />
    </>
  );
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AppWithRedirect />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
