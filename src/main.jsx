import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='backdrop-blur bg-gradient-to-r from-black from-7.5%  via-red-950 via-55% to-red-800 text-gray-200 antialiased vsc-initialized'>
        <App />
    </div>
  </React.StrictMode>,
)
