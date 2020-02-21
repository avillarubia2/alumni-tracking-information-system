import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import App from './App'
import './assets/css/vstyle.css'
import './index.css'
import rootReducers from './redux/reducers/'
import * as serviceWorker from './serviceWorker'

const store = createStore(rootReducers)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
serviceWorker.unregister()
