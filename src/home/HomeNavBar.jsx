import React from "react";
import { Link } from "react-router-dom";
import facebook from "./img/facebook.png";
import telegram from "./img/telegram.png";
import "./index.css";

function HomeNavBar() {
  return (
    <div className=" top-0 left-0  px-44 flex justify-between items-center w-full max-[600px]:px-8 ">
      <div className="flex">
        <Link>
          <button
            className="flex items-center background justify-between p-3 bg-transparent outline-none
   focus:outline-none border-none header-button rounded-none 
   "
          >
            <img src={telegram} className="mr-2" width={15} alt="" />{" "}
            <span className="text-white max-[600px]:text-xs ">Telegram</span>
          </button>
        </Link>
        <Link>
          <button
            className="flex items-center background justify-between p-3 bg-transparent outline-none
   focus:outline-none border-none header-button rounded-none 
   "
          >
            <img src={facebook} className="mr-2" width={15} alt="" />{" "}
            <span className="text-white max-[600px]:text-xs">Facebook</span>
          </button>
        </Link>
      </div>
      <div className=" flex justify-center items-center">
        <Link to={"/register"} className="text-white hover:text-white ">
          <button
            className="flex items-center background justify-between p-3 bg-transparent outline-none
   focus:outline-none border-none header-button rounded-none 
   "
          >
            <span className=" max-[600px]:text-xs">CREATE ACCOUNT</span>
          </button>
        </Link>{" "}
        <Link to={"/login"} className="text-white hover:text-white ">
          <button
            className="flex items-center background justify-between p-3 bg-transparent outline-none
   focus:outline-none border-none header-button rounded-none 
   "
          >
            <span className=" max-[600px]:text-xs">LOGIN</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeNavBar;
