import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={Routes}>
    <App />
  </RouterProvider>,
)
