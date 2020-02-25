import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './assets/css/vstyle.css'
import './index.css'
import { ContextProvider } from './redux/store'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>,
  document.getElementById("root")
)
serviceWorker.unregister()
