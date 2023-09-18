import React, { useEffect } from "react";
import BottomNav from "../auth/BottomNav";
import NavBarAuth from "../auth/NavBarAuth";
import { Link } from "react-router-dom";
import logo from "./img/0_1_1694457176539.png";

function Support() {
  var width = false;

  useEffect(() => {
    if (window.screen.width <= "600") {
      width = true;
    }
  }, []);
  return (
    <div className="bg-gray-100 flex-1 rounded-2xl">
      <NavBarAuth />

      <div
        className="absolute top-24 left-32 
      max-[600px]:left-0 
      max-[600px]:hidden
      "
      >
        <Link
          className="p-10 text-black uppercase duration-300
          max-[600px]:p-1 
          "
        >
          About US
        </Link>
        <Link
          to={"/plans"}
          className="p-10 text-black uppercase duration-300   max-[600px]:p-1"
        >
          INVESTMENT PLANS
        </Link>

        <Link className="p-10 text-black uppercase duration-300   max-[600px]:p-1">
          rate US
        </Link>
        <Link
          to={"/support"}
          className="p-10 text-black uppercase duration-300   max-[600px]:p-1"
        >
          support
        </Link>
        <Link className="p-10 text-black uppercase duration-300   max-[600px]:p-1">
          faq
        </Link>
      </div>

      {/* ///////////// */}
      <div
        className=" flex-1 flex  mt-36  px-20

    max-[600px]:px-0
    "
      >
        <div className="p-8 ">
          <div className="border-b border-white p-5">
            <p className="text-2xl font-bold uppercase">Support</p>
          </div>

          <div className="flex justify- items-center mt-9 p-20 
          max-[600px]:p-2
          ">
            <div className="flex flex-col items-center max-[600px]:hidden">
              <div
                className={`border-2 rounded-full 
                    flex flex-col w-24
                   max-[600px]:hidden`}
                     >
                <img src={logo} alt=""
                className="max-w-full"
                width={width ? 50 : 200} />
              </div>
              <div className="">
               <div className="w-80">
               <p>
                  Cité Chahid Mohamed Dalfa,( cité mostakbal ) wlad Salama ,
                  Blida , n°88
                </p>
               </div>
              </div>
            </div>

            <div className="flex flex-col flex-1 ml-48 max-[600px]:ml-0
            
            "> 
                <input type="text" className="border border-black p-4 m-2 focus:outline-none
                 max-[600px]:p-1      max-[600px]:w-56   
                " name="" id="" placeholder="Full Name"/>
                <input type="text" className="border border-black p-4 m-2 focus:outline-none             max-[600px]:p-1      max-[600px]:w-56   " name="" id="" placeholder="Email"/>
                <textarea id="txtid" name="txtname" rows="4" cols="50" maxlength="200" placeholder=""
                className="border border-black p-4 m-2 focus:outline-none             max-[600px]:p-1      max-[600px]:w-56   "
                />
            <button className="backGround text-white w-full mt-4">SEND</button>
       </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

export default Support;
