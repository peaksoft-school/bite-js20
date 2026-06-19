import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { App } from './App.jsx'
import Themes from './components/Themes.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="212866824382-v98iof4a1p1argfi99v2rbq4o30cs7gg.apps.googleusercontent.com">
    <Provider store={store}>
      <Themes>
        <App />
      </Themes>
    </Provider>
  </GoogleOAuthProvider>
)
