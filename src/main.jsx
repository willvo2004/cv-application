import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FullEditor from './components/FullEditor.jsx'
import Master from './components/Master.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Master />
  </React.StrictMode>,
)
