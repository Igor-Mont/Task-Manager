import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { ModalContextProvider } from './contexts/ModalProvider'

ReactDOM.render(
  <React.StrictMode>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
