import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'  
import store from './app/store.js'
import App from './App.jsx'
// import Timeline from './Components/Timeline.jsx'
import Login from './Components/Auth/Login.jsx'
import Register from './Components/Auth/Register.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            {/* <Route path="/home/search" element={<Search />} /> */}
            {/* <Route path="/" element={<Search />} /> */}
          </Route>
            {/* add post create and profile */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
