import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './home/Home'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Login from './auth/Login'
import Register from './auth/Register'
import ForgotPassword from './auth/ForgotPassword'
import UserAccount from './userAccount/UserAccount'
import Investment from './home/Investment'
import Support from './home/Support'
import AboutUS from './home/AboutUS'
import FAQ from './home/FAQ'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetPassword" element={<ForgotPassword />} />
        <Route path="/profil" element={<UserAccount />} />
        
        <Route path="/plans" element={<Investment />} />
        <Route path="/support" element={<Support />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/faq" element={<FAQ />} />


      </Routes>
    </>
  )
}

export default App
