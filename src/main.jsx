import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './router/router.jsx';
import AuthProvider from './components/Context/AuthProvider.jsx';
import TheamProvider from './router/TheamProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <TheamProvider>
        <RouterProvider router={router} />
      </TheamProvider>
    </AuthProvider>

  </StrictMode>,
)
