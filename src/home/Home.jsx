import React, { useRef } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import HomeNavBar from "./HomeNavBar";
import logo from "./img/0_1_1694457176539.png";
import bg from "./img/photo-1596436889106-be35e843f974.jpg";
import arrow from "./img/533-5339992_arrow-down-icon-gif-arrow-down-white-hd-removebg-preview.png";
// import facebook from "./img/facebook.png";

function Home() {
  // const ref = useRef(null);

  const handleClick = () => {
    //  scrollIntoView({ behavior: 'smooth' , scrollY :1500 });
    window.scroll({
      top: window.innerHeight,
      // left: 100,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div
        // className=" flex justify-center items-center back h-screen"
        className="back flex flex-col items-center absolute top-0 left-0 h-full w-full "
      >
        <HomeNavBar />

        <div>
          <img src={logo} alt="" width={80} className="m-4" />
        </div>
        <div className="pt-7">
          <Link
            className="p-3 text-white hover:text-white border-t border-b border-gray-200 border-opacity-30
          transition ease-in-out  duration-700
           hover:border-white
      font-mono
           "
          >
            ABOUT US
          </Link>
          <span className=" w-1 bg-white border-r"></span>

          <Link
            className="p-3 text-white hover:text-white border-t border-b border-gray-200  border-opacity-30
          transition ease-in-out  duration-700    font-mono
           hover:border-white"
          >
            INVESTIMENT PLANS
          </Link>
          <span className=" w-1 bg-white border-r"></span>

          <Link
            className="p-3 text-white hover:text-white border-t border-b border-gray-200 border-opacity-30
transition ease-in-out  duration-700    font-mono
 hover:border-white"
          >
            RATE US
          </Link>
          <span className=" w-1 bg-white border-r"></span>

          <Link
            className="p-3 text-white hover:text-white border-t border-b border-gray-200 border-opacity-30
transition ease-in-out  duration-700    font-mono
 hover:border-white"
          >
            SUPPORT
          </Link>

          <span className=" w-1 bg-white border-r"></span>

          <Link
            className="p-3 text-white hover:text-white border-t border-b border-gray-200 border-opacity-30
transition ease-in-out  duration-700    font-mono
hover:border-white"
          >
            FAQ
          </Link>
        </div>

        <div className="pt-20 text-white   ">
          <div className=" pr-48 pl-48 flex justify-center items-center flex-col ">
            <span className="text-7xl mb-1 font-bold">
              SIMPLE AND PROFITABLE
            </span>
            <h1 className="pt-6 text-white font-bold   pr-48 pl-48  text-5xl font-sans">
              SUCCESS BEGINS WITH WHILE HUB
            </h1>
          </div>
          <div className=" pr-48 pl-48 w-full ">
            <Link to={"/register"}>
              <button
                className=" px-28 py-5 text-white bg-blue-600  bg-opacity-75 transition ease-in-out duration-500 
              text-2xl font-bold
            border-white hover:bg-opacity-100 hover:border-white
       focus:outline-none
            "
              >
                OPEN AN ACCOUNT
              </button>
            </Link>
          </div>

          <button
            onClick={handleClick}
            className="text-black p-7 mt-5 rounded-full border-2 border-white bg-blue-600  bg-opacity-5
            hover:border-white focus:outline-none
            "
          >
            <img src={arrow} alt="" width={25} />
          </button>
        </div>

        <div className="flex justify-center flex-col items-center mt-32">
          <div className=" flex justify-center flex-col items-center">
            <h3 className="text-gray-700 italic">
              THE DREAM BEGINS WITH A SEARCH OF CAPABILITY
            </h3>
            <h2 className="text-4xl font-bold text-black mb-2 ">
              WHY INVESTORS CHOOSE US
            </h2>
          </div>
          <div className="border-b-4 w-36 text-center justify-center flex items-center"></div>
        </div>

        <div className="flex justify-center items-center flex-row">
          <div className="flex justify-center items-center flex-row">
            <div>
              <p>REAL BUSINESS</p>
              <p>Investing in securities of small companies in Japan</p>
            </div>
            
          </div>
          <div>
              <img src={logo} alt="" width={300} />
            </div>
        </div>
      </div>
    </>
  );
}

export default Home;
