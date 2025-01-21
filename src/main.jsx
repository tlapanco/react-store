import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FiltersProvider } from './context/filters.jsx'


createRoot(document.getElementById('root')).render(
  
  <BrowserRouter basename='m-store'>
  <FiltersProvider>
    <App />
  </FiltersProvider>
  </BrowserRouter >
  
)
