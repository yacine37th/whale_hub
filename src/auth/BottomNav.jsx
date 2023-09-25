import React from "react";
import logo from "./img/logo.png";
import facebook from "./img/facebook.png";
import telegram from "./img/telegram.png";
import { Link } from "react-router-dom";
function BottomNav() {
  return (
    <div
      className="background    h-80 px-44 flex justify-between items-start 
    max-[600px]:p-5 max-[600px]:h-auto
mt-16 w-full left-0 
    max-[600px]:flex-col      max-[600px]:items-center 
  max-[600px]:mt-32 absolute
    "
    >
      <div className=" mt-14  max-[600px]:flex      max-[600px]:flex-col    max-[600px]:items-center 
        max-[600px]:justify-center
      ">
        <Link to={"/"} className="">
          <img
            src={logo}
            width={80}
            className=" max-w-full cursor-pointer"
            // height={250}
            alt=""
          />
        </Link>
        <div className="text-left  text-white pt-5 w-36 max-[600px]:text-center">
          <p>The brightest star in the background of the rising sun!</p>
        </div>
        <div className="text-left  text-white pt-5 w-36 font-bold max-[600px]:text-center">
          <p>TELL ABOUT US</p>
        </div>
      </div>

      <div className="flex flex-col mt-14  text-left w-56     max-[600px]:items-center ">
        <p className="font-bold text-white mb-4">SITE NAVIGATION</p>
        <Link
        to={"/aboutus"}
          className=" text-white uppercase duration-300
            max-[600px]:p-1 
            border-transparent border
             hover:border-white  hover:text-white
            p-2
            "
        >
          About US
        </Link>
        <Link
          to={"/plans"}
          className="  text-white uppercase duration-300
            max-[600px]:p-1 
            border-transparent border
             hover:border-white  hover:text-white
            p-2"
        >
          INVESTMENT PLANS
        </Link>

        <Link
          className="  text-white uppercase duration-300
            max-[600px]:p-1 
            border-transparent border
             hover:border-white  hover:text-white
            p-2"
        >
          rate US
        </Link>
        <Link
        to={"/support"}
          className="  text-white uppercase duration-300
            max-[600px]:p-1 
            border-transparent border
             hover:border-white  hover:text-white
            p-2"
        >
          support
        </Link>
        <Link
        to={"/faq"}
          className="  text-white uppercase duration-300
            max-[600px]:p-1 
            border-transparent border
             hover:border-white  hover:text-white
            p-2"
        >
          faq
        </Link>
      </div>

      <div className="flex flex-col text-left w-56 mt-14     max-[600px]:items-center ">
        <p className="font-bold text-white mb-4">LATEST NEWS</p>
      </div>
    </div>
  );
}

export default BottomNav;
