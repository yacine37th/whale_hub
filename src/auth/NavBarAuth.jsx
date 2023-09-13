import React from "react";
import logo from "./img/0_1_1694457176539.png";
import facebook from "./img/facebook.png";
import telegram from "./img/telegram.png";
import { Link } from "react-router-dom";

export default function NavBarAuth() {
  return (
    <div className="background  absolute top-0 left-0  px-44 flex justify-between items-center w-full">
      <div className="">
        <Link to={"/login"}>
          <img
            src={logo}
            width={50}
            className=" max-w-full cursor-pointer"
            // height={250}
            alt=""
          />
        </Link>
      </div>
      <div className=" flex ">
        <button
          className="flex items-center background justify-between p-4 bg-transparent outline-none
     focus:outline-none border-none header-button rounded-none
     "
        >
          <img src={telegram} className="mr-2" width={20} alt="" />{" "}
          <span className="text-white">Telegram</span>
        </button>
        <button
          className="flex items-center background justify-between p-4 bg-transparent outline-none
     focus:outline-none border-none header-button rounded-none
     "
        >
          <img src={facebook} className="mr-2" width={20} alt="" />{" "}
          <span className="text-white">Facebook</span>
        </button>
        <Link to={"/register"} className="text-white hover:text-white ">
          <button
            className="flex items-center background justify-between p-4 bg-transparent outline-none
     focus:outline-none border-none header-button rounded-none
     "
          >
            Create Account
          </button>
        </Link>{" "}
        <Link to={"/login"} className="text-white hover:text-white ">
          <button
            className="flex items-center background justify-between p-4 bg-transparent outline-none
     focus:outline-none border-none header-button rounded-none
     "
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
