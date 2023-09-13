import React from "react";
import { Link } from "react-router-dom";
import facebook from "./img/facebook.png";
import telegram from "./img/telegram.png";
import "./index.css"

function HomeNavBar() {
  return (
    <div className=" top-0 left-0  px-44 flex justify-between items-center w-full">
      <div className="flex">
        <button
          className="flex items-center background justify-between p-3 bg-transparent outline-none
   focus:outline-none border-none header-button rounded-none
   "
        >
          <img src={telegram} className="mr-2" width={20} alt="" />{" "}
          <span className="text-white">Telegram</span>
        </button>
        <button
          className="flex items-center background justify-between p-3 bg-transparent outline-none
   focus:outline-none border-none header-button rounded-none
   "
        >
          <img src={facebook} className="mr-2" width={20} alt="" />{" "}
          <span className="text-white">Facebook</span>
        </button>
      </div>
      <div className=" flex ">
        <Link to={"/register"} className="text-white hover:text-white ">
          <button
            className="flex items-center background justify-between p-3 bg-transparent outline-none
   focus:outline-none border-none header-button rounded-none 
   "
          >
            CREATE ACCOUNT
          </button>
        </Link>{" "}
        <Link to={"/login"} className="text-white hover:text-white ">
          <button
            className="flex items-center background justify-between p-3 bg-transparent outline-none
   focus:outline-none border-none header-button rounded-none button
   "
          >
            LOGIN
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeNavBar;
