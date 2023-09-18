import React from 'react'
import BottomNav from '../auth/BottomNav'
import { Link } from 'react-router-dom'
import NavBarAuth from '../auth/NavBarAuth'
import logo from "./img/0_1_1694457176539.png";

function AboutUS() {
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
        to={"/aboutus"}
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
            <p className="text-2xl font-bold uppercase">about us</p>
          </div>

          <div className="flex justify- items-center mt-9 p-20 
          max-[600px]:p-2
          ">
            {/* <div className="flex flex-col items-center max-[600px]:hidden">
              <div
                className={`border-2 rounded-full 
                    flex flex-col w-24
                   max-[600px]:hidden`}
                     >
                {/* <img src={logo} alt=""
                className="max-w-full"
                // width={width ? 50 : 200}
                 /> */}
              {/* </div>
              <div className="">
               <div className="w-80">
               <p>
                  Cité Chahid Mohamed Dalfa,( cité mostakbal ) wlad Salama ,
                  Blida , n°88
                </p>
               </div>
              </div>
            </div>  */}

            <div className="flex flex-col flex-1 ml-48 max-[600px]:ml-0
            
            "> 
              
       </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}

export default AboutUS