import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import Themes from './components/Themes.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <Themes>
    <App />
    <ToastContainer/>
  </Themes>
)