import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import configureStore from 'store/configureStore'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './index.css'

const store = configureStore()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
