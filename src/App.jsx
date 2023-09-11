import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './home/Home'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Login from './auth/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
       
      </Routes>
    </>
  )
}

export default App
