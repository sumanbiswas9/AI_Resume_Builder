import { ClerkProvider } from '@clerk/clerk-react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import SignInPage from './auth/sign-in/index.tsx';
import Chat from './chat/index.tsx';
import Home from './home/index.tsx';
import './index.css';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error("Clerk publishable key is not defined");
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    element: <App />,
    children: [
      {
        path: '/chat',
        element: <Chat />
      },
    ]
  },
  {
    path: '/auth/sign-in',
    element: <SignInPage />
  },
]);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found");
}
createRoot(rootElement).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>,
);