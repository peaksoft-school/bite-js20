import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import Themes from './components/Themes.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Themes>
    <App />
  </Themes>
)
