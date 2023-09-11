import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import "./App.css";
import Home from "./home/Home";
import Login from "./auth/Login";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
