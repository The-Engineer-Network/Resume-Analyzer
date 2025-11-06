import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './components/routes/AppRoutes.tsx';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={AppRoutes()} />
  </StrictMode>,
)
