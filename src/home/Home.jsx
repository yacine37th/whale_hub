import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import HomeNavBar from "./HomeNavBar";
import logo from "./img/0_1_1694457176539.png";
import bg from "./img/photo-1596436889106-be35e843f974.jpg";
import arrow from "./img/533-5339992_arrow-down-icon-gif-arrow-down-white-hd-removebg-preview.png";
import facebook from "./img/facebook.png";
import tieicon from "./img/tie-icon.png";
import icon2 from "./img/2.png";
import icon3 from "./img/icon3.png";
import lockicon from "./img/lock-icon.png";
import settings from "./img/settings-icon.png";
import icon6 from "./img/icon6.png";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import im1 from "./img/im1.png";
import tab2 from "./img/tab2.png";
import icon14 from "./img/icon14.png";
import arrow2 from "./img/arrow2.png";
import arrow1 from "./img/arrow1.png";
import icon13 from "./img/icon13.png";
import icon15 from "./img/icon15.png";
import table from "./img/1008.gif";
import { collection, getDocs, query } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import BottomNav from "../auth/BottomNav";

// 1008.gif
function Home() {
  // const ref = useRef(null);
  var width = false;

  const handleClick = () => {
    //  scrollIntoView({ behavior: 'smooth' , scrollY :1500 });
    window.scroll({
      top: width ? window.innerHeight : window.innerHeight + 90,
      // left: 100,
      behavior: "smooth",
    });
  };

  const q = query(collection(db, "users"));
  const recent_deposits = query(collection(db, "recent_deposits"));
  const recent_payment = query(collection(db, "recent_payment"));

  const [data, setdata] = useState([]);
  const [recents, setrecents] = useState([]);
  const [recentpay, setrecentpay] = useState([]);
  const [date, setdate] = useState("");
  const userArray = [];
  const recentsArray = [];
  const recentsArraypay = [];
  const getdata = async () => {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.data());

      if (!userArray.includes(doc.data())) {
        userArray.push(doc.data());
      }
      // if (userArray.indexOf(doc.data()) === -1) {

      //   // console.log(userArray);
      // }
      // userArray.push(doc.data())
    });
    setdata(userArray);
    console.log("====================================");
    console.log(userArray);
    // console.log(userArray.length);
    console.log("====================================");
  };

  const get_recent_deposits = async () => {
    const querySnapshot = await getDocs(recent_deposits);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.data());
      if (recentsArray.indexOf(doc.data()) === -1) {
        recentsArray.push(doc.data());
        // console.log(recentsArray);
      }
      // recentsArray.push(doc.data())
    });
    setrecents(recentsArray);
    // console.log("====================================");
    // console.log(recentsArray);
    // // console.log(recentsArray.length);
    // console.log("====================================");
  };

  const get_recent_payment = async () => {
    const querySnapshot = await getDocs(recent_payment);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.data());
      if (recentsArraypay.indexOf(doc.data()) === -1) {
        recentsArraypay.push(doc.data());
        // console.log(recentsArraypay);
      }
      // recentsArraypay.push(doc.data())
    });
    setrecentpay(recentsArraypay);
    // console.log("====================================");
    // console.log(recentsArraypay);
    // // console.log(recentsArray.length);
    // console.log("====================================");
  };

  useEffect(() => {
    if (window.screen.width <= "600") {
      width = true;
    }
    let today = new Date().toISOString().slice(0, 10);

    const startDate = "2023-09-12";
    const endDate = today;

    const diffInMs = new Date(endDate) - new Date(startDate);
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    setdate(diffInDays);
    // return () => {
      getdata();
      get_recent_deposits();
      get_recent_payment();
    // };
  }, []);

  const slides = [
    {
      url: `${im1}`,
    },
    {
      url: `${tab2}`,
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
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
        <div className=" pt-7 max-[600px]:hidden">
          <Link
            to={"/aboutus"}
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
            to={"/plans"}
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
            to={"/support"}
            className="p-3 text-white hover:text-white border-t border-b border-gray-200 border-opacity-30
transition ease-in-out  duration-700    font-mono
 hover:border-white"
          >
            SUPPORT
          </Link>

          <span className=" w-1 bg-white border-r"></span>

          <Link
            to={"/faq"}
            className="p-3 text-white hover:text-white border-t border-b border-gray-200 border-opacity-30
transition ease-in-out  duration-700    font-mono
hover:border-white"
          >
            FAQ
          </Link>
        </div>

        <div
          className="max-[600px]:w-full pt-20 text-white  max-[600px]:pt-80 
         max-[600px]:flex
         max-[600px]:flex-col
         max-[600px]:justify-center
         max-[600px]:items-center
        "
        >
          <div className=" pr-48 pl-48 flex justify-center items-center flex-col  max-[600px]:px-6 ">
            <span className="text-7xl mb-1 font-bold max-[600px]:text-4xl">
              SIMPLE AND PROFITABLE
            </span>
            <h1
              className="pt-6 text-white font-bold  pr-48 pl-48  text-5xl font-sans
            max-[600px]:text-xl max-[600px]:pl-0 max-[600px]:pr-0
            "
            >
              SUCCESS BEGINS WITH WHILE HUB
            </h1>
          </div>
          <div className="pr-48 pl-48 w-full max-[600px]:p-0">
            <Link to={"/register"}>
              <button
                className=" px-28 py-5 max-[600px]:py-2 max-[600px]:px-16 text-white
                 bg-blue-600  bg-opacity-75 transition ease-in-out duration-500 
              text-2xl max-[600px]:text-sm  font-bold max-[600px]:w-72
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
            hover:border-white focus:outline-none max-[600px]:p-4
            "
          >
            <img src={arrow} alt="" width={25} />
          </button>
        </div>

        <div
          className="flex justify-center flex-col items-center mt-44
        max-[600px]:mt-52
        "
        >
          <div className=" flex justify-center flex-col items-center">
            <h3 className="text-gray-700 italic    max-[600px]:text-xs ">
              THE DREAM BEGINS WITH A SEARCH OF CAPABILITY
            </h3>
            <h2 className="text-4xl font-bold text-black mb-2      max-[600px]:text-xl">
              WHY INVESTORS CHOOSE US
            </h2>
          </div>
          <div className="border-b-4 w-36 text-center justify-center flex items-center"></div>
        </div>
        {/* 



*/}
        <div
          className="flex justify-evenly  items-center flex-row mt-14 
        max-[600px]:flex-col max-[600px]:mt-20 mb-14
        "
        >
          <div className=" flex flex-col justify-end items-end  max-[600px]:items-center max-[600px]:justify-center  ">
            {/*  */}
            <div
              className="flex justify-center items-center flex-row 
            max-[600px]:flex-col-reverse 
            "
            >
              <div className="flex justify-end  flex-col items-end p-8 max-[600px]:items-center max-[600px]:justify-center">
                <p className=" font-bold">REAL BUSINESS</p>
                <div className="w-64 text-right max-[600px]:text-center">
                  <p className=" text-gray-600 text-xs">
                    Investing in securities of small companies in Japan
                  </p>
                </div>
              </div>
              <div
                className="icon  relative group 
            "
              >
                <img
                  src={tieicon}
                  alt=""
                  width={width ? 70 : 50}
                  className="group-hover:rotate-0 "
                />
              </div>
            </div>

            {/* ddededokoed */}
            <div
              className="flex justify-center items-center flex-row 
            mr-20
            max-[600px]:flex-col-reverse 
            max-[600px]:mr-0
            "
            >
              <div
                className="flex justify-end 
              flex-col items-end p-8 max-[600px]:items-center max-[600px]:justify-center"
              >
                <p className=" font-bold">HIGH INTEREST</p>
                <div className="w-64 text-right">
                  <p className=" text-gray-600  text-xs max-[600px]:text-center">
                    Stock Exchange - is a highly profitable segment of the
                    market of investments
                  </p>
                </div>
              </div>
              <div
                className="icon  relative group 
            "
              >
                <img
                  src={icon2}
                  alt=""
                  width={width ? 70 : 50}
                  className="group-hover:rotate-0 "
                />
              </div>
            </div>

            {/* doejdieidji */}
            <div
              className="flex justify-center items-center flex-row 
            max-[600px]:flex-col-reverse"
            >
              <div className="flex justify-end  flex-col items-end p-8 max-[600px]:items-center max-[600px]:justify-center">
                <p className=" font-bold">OPERATIONAL SUPPORT</p>
                <div className="w-64 text-right max-[600px]:text-center">
                  {" "}
                  <p className=" text-gray-600  text-xs">
                    High-quality, 24/7 support at all stages of cooperation
                  </p>
                </div>
              </div>
              <div
                className="icon  relative group 
                
            "
              >
                <img
                  src={icon3}
                  alt=""
                  width={width ? 70 : 50}
                  className="group-hover:rotate-0 "
                />
              </div>
            </div>
          </div>

          {/* ////////////////// logo */}
          <div
            className={`border-2 rounded-full  ${
              width ? "p-8 " : "p-16"
            } max-[600px]:hidden`}
          >
            <img src={logo} alt="" width={width ? 250 : 50} />
          </div>

          {/* right side  */}
          <div className="flex flex-col ">
            <div
              className="flex justify-center items-center flex-row max-[600px]:flex-col max-[600px]:mt-10
            

            "
            >
              <div
                className="icon-right  relative group 
                max-[600px]:justify-center     max-[600px]:items-center 
            "
              >
                <img
                  src={icon6}
                  alt=""
                  width={width ? 70 : 50}
                  className="group-hover:rotate-0 "
                />
              </div>
              <div className="flex justify-start  flex-col items-start p-8                 max-[600px]:justify-center     max-[600px]:items-center ">
                <p className=" font-bold">LICENSED SCRIPT</p>
                <div className="w-64 text-left max-[600px]:text-center">
                  {" "}
                  <p className=" text-gray-600 text-xs">
                    While Hub - is the best investment on-line platform
                  </p>
                </div>
              </div>
            </div>
            {/* ddededokoed */}

            <div
              className="
              
           ml-20 
            flex justify-center items-center flex-row max-[600px]:flex-col max-[600px]:mt-10
            max-[600px]:ml-0
            "
            >
              <div
                className="relative group icon-right 
                max-[600px]:justify-center   max-[600px]:items-center 
            "
              >
                <img
                  src={lockicon}
                  alt=""
                  width={width ? 70 : 50}
                  className="group-hover:rotate-0 "
                />
              </div>
              <div className="flex justify-start  flex-col items-start p-8    max-[600px]:justify-center     max-[600px]:items-center ">
                <p className=" font-bold">DATA PROTECTION</p>
                <div className="w-64 text-left">
                  <p className=" text-gray-600 text-xs">
                    Guaranteed protection of clients' personal data{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* doejdieidji */}
            <div
              className=" flex justify-center items-center flex-row max-[600px]:flex-col max-[600px]:mt-10
          "
            >
              <div
                className="icon-right  relative group 
            "
              >
                <img
                  src={settings}
                  alt=""
                  width={width ? 70 : 50}
                  className="group-hover:rotate-0 "
                />
              </div>
              <div className="flex justify-start  flex-col items-start p-8 max-[600px]:justify-center     max-[600px]:items-center">
                <p className=" font-bold">AUTOMATED SYSTEM</p>
                <div className="w-64 text-left">
                  {" "}
                  <p className=" text-gray-600 text-xs max-[600px]:text-center">
                    Comprehensible and easy to use investment instruments{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* //////////////////////////////////// OUR INVESTMENT PLANS */}

        <div className="back-inside w-full">
          <div
            className="flex justify-center flex-col items-center mt-32
        max-[600px]:mt-52
        "
          >
            <div className=" flex justify-center flex-col items-center">
              {/* <h3 className="text-white italic    max-[600px]:text-xs ">
              THE DREAM BEGINS WITH A SEARCH OF CAPABILITY
            </h3> */}
              <h2 className="text-5xl font-bold text-white mb-2      max-[600px]:text-xl">
                OUR INVESTMENT PLANS
              </h2>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2  max-[600px]:text-xs px-16 max-[600px]:px-5">
                  OUR COMPANY GUARANTEES YOU A PROFIT RATE OF 50% TO 30% OF THE
                  CAPITAL, WHICH WE LIST AS FOLLOWS:
                </h4>
              </div>
            </div>

            <div className="border-b-4 w-36 text-center justify-center flex items-center"></div>

            {/* ////////////////////// TABLE  */}
            <div
              className="text-white mt-9  mb-12
                        max-[600px]:overflow-x-scroll max-[600px]:w-full max-[600px]:px-4 
            "
            >
              <ul className={`flex `}>
                <li className="border-4  mr-2">
                  <div
                    className="text-4xl border-b-4 p-4
                  max-[600px]:text-2xl
                  "
                  >
                    {" "}
                    BEGINNER PLAN
                  </div>
                  <div
                    className="flex justify-center flex-col p-4 bg-white text-blue-900 font-bold
                  text-opacity-100
                  "
                  >
                    <span className="text-5xl     max-[600px]:text-3xl">
                      40
                      <span className="text-6xl font-bold  max-[600px]:text-4xl ">
                        %
                      </span>{" "}
                      - 60
                      <span className="text-6xl font-bold  max-[600px]:text-4xl ">
                        %
                      </span>
                    </span>
                    <div className="flex justify-between p-4   text-xl max-[600px]:text-sm">
                      <span>Company</span>
                      <span>Investor</span>
                    </div>
                  </div>

                  <div
                    className="flex justify-between text-3xl p-4  px-12 border-b 
                 
                  "
                  >
                    <span>50$</span>-<span>999$</span>
                  </div>
                  <div className="font-bold p-4">DURATION : 7 DAYS</div>
                </li>

                <li className="border-4 mr-2">
                  <div
                    className="text-4xl border-b-4 p-4
                           max-[600px]:text-xl
                  "
                  >
                    TRAINEES PLAN
                  </div>
                  <div
                    className="flex justify-center flex-col p-4 bg-white text-blue-900 font-bold
                  text-opacity-100
                  "
                  >
                    <span className="text-5xl     max-[600px]:text-3xl ">
                      30
                      <span className="text-6xl font-bold  max-[600px]:text-4xl ">
                        %
                      </span>{" "}
                      - 70
                      <span className="text-6xl font-bold  max-[600px]:text-4xl ">
                        %
                      </span>{" "}
                    </span>
                    <div className="flex justify-between p-4   text-xl max-[600px]:text-base">
                      <span className="mr-4">Company</span>
                      <span>Investor</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-3xl p-4 border-b">
                    <span>1000$</span>-<span>4999$</span>
                  </div>
                  <div className="font-bold p-4">DURATION : 7 DAYS</div>
                </li>

                <li className="border-4 mr-2">
                  <div className="text-4xl border-b-4 p-4           max-[600px]:text-2xl">
                    WORKER PLAN
                  </div>
                  <div
                    className="flex justify-center text-4xl flex-col p-4 bg-white text-blue-900 font-bold
                  text-opacity-100"
                  >
                    <span className="text-5xl     max-[600px]:text-3xl ">
                      20
                      <span className="text-6xl font-bold  max-[600px]:text-4xl ">
                        %
                      </span>{" "}
                      - 80
                      <span className="text-6xl font-bold  max-[600px]:text-4xl ">
                        %
                      </span>
                    </span>
                    <div className="flex justify-between p-4   text-xl max-[600px]:text-sm">
                      <span>Company</span>
                      <span>Investor</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-3xl p-4 border-b">
                    <span>5000$</span>-<span>49999$</span>
                  </div>
                  <div className="font-bold p-4">DURATION : 7 DAYS</div>
                </li>

                <li className="border-4  mr-2">
                  <div className="text-4xl border-b-4 p-4          max-[600px]:text-xl">
                    PROFESSIONALS PLAN
                  </div>
                  <div
                    className="flex justify-center flex-col  p-4 bg-white text-blue-900 font-bold
                  text-opacity-100
                  "
                  >
                    <div>
                      {" "}
                      <span className="text-5xl     max-[600px]:text-3xl">
                        10
                        <span className="text-6xl font-bold  max-[600px]:text-4xl">
                          %
                        </span>{" "}
                        - 90
                        <span className="text-6xl font-bold  max-[600px]:text-4xl">
                          %
                        </span>
                      </span>
                    </div>{" "}
                    <div
                      className="flex justify-between p-4   text-xl max-[600px]:text-sm
                    max-[600px]:px-7
                    "
                    >
                      <span>Company</span>
                      <span>Investor</span>
                    </div>
                  </div>

                  <div
                    className="flex justify-between text-2xl p-4 px-20 border-b
                  "
                  >
                    <span className="mr-3">OVER THEN 50000$</span>
                  </div>
                  <div className="font-bold p-4">DURATION : 7 DAYS</div>
                </li>
              </ul>
            </div>

            {/* /////////////////carousel  */}

            {/* <div className="min-[601px]:hidden max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
              <div
                style={{
                  backgroundImage: `url(${slides[currentIndex].url})`,
                }}
                className="w-auto h-full rounded-2xl bg-center bg-cover duration-500 "
              ></div>
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>
     
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
              </div>
              <div className="flex top-4 justify-center py-2 ">
                {slides.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className="text-2xl cursor-pointer  text-white"
                  >
                    <RxDotFilled />
                  </div>
                ))}
              </div>
            </div> */}

            {/* <Carousel data={slides} /> */}
          </div>
        </div>

        <div
          className="flex justify-center flex-col items-center mt-32
        max-[600px]:mt-52
        "
        >
          <div className=" flex justify-center flex-col items-center">
            <h3 className="text-gray-700 italic    max-[600px]:text-xs ">
              IT IS SILLY TO RELY ON LUCK, RISK CAUTIOUSLY!
            </h3>
            <h2 className="text-4xl font-bold text-black mb-2      max-[600px]:text-xl">
              HOW IT ALL WORKS
            </h2>
          </div>
          <div className="border-b-4 w-36 text-center justify-center flex items-center"></div>
        </div>

        {/* ///////////////arrow */}
        <div className="flex justify-center items-center max-[600px]:flex-col">
          <div className="flex flex-col justify-center items-center mt-16">
            <div
              className="bg-black rounded-full p-12 back group
            mb-7 
            "
            >
              <img
                src={icon14}
                className="max-w-full group-hover:scale-150 transition ease-in-out duration-300"
                alt=""
              />
            </div>
            <div>
              <p className="font-bold text-lg">REGISTER</p>
              <div className="w-64 ">
                <p className=" text-sm">
                  Go to the registration page, fill in the required fields and
                  get access to investment instruments
                </p>
              </div>
            </div>
          </div>
          <div className="mx-4 max-[600px]:hidden">
            <img src={arrow2} alt="" />
          </div>

          <div className="flex flex-col justify-center items-center mt-16">
            <div
              className="bg-black rounded-full p-12 back group
            mb-7 
            "
            >
              <img
                src={icon13}
                className="max-w-full group-hover:scale-150 transition ease-in-out duration-300"
                alt=""
              />
            </div>
            <div>
              <p className="font-bold text-lg">CREATE A DEPOSIT</p>
              <div className="w-64">
                <p className=" text-sm">
                  In your personal account in the section "Create a deposit"
                  choose an investment plan and follow the instructions
                </p>
              </div>
            </div>
          </div>
          <div className="mx-4 max-[600px]:hidden">
            <img src={arrow1} alt="" />
          </div>

          <div className="flex flex-col justify-center items-center mt-16">
            <div
              className="bg-black rounded-full p-12 back group
            mb-7
            "
            >
              <img
                src={icon15}
                className="max-w-full group-hover:scale-150 transition ease-in-out duration-300"
                alt=""
              />
            </div>
            <div>
              <p className="font-bold text-lg">GET PROFIT</p>
              <div className="w-64 ">
                <p className=" text-sm">
                  According to the chosen plan, please, wait the required amount
                  of time, then get access to earned dividends
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="back4 mt-16 w-full ">
          <div
            className="flex justify-center flex-col items-center mt-32
        max-[600px]:mt-52
        "
          >
            <div className=" flex justify-center flex-col items-center">
              <h3 className="text-white italic    max-[600px]:text-xs ">
                EVERYONE IS ABLE TO PERFORM A MIRACLE! GO FOR IT!
              </h3>
              <h2 className="text-4xl font-bold text-white mb-2      max-[600px]:text-xl">
                BRIEFLY ABOUT OUR INVESTMENT PROJECT
              </h2>
            </div>
            <div className="border-b-4 w-36 text-center justify-center flex items-center text-gray-600"></div>
          </div>

          <div className="flex flex-col mt-32 max-[600px]:items-center max-[600px]:justify-center">
            <div
              className="flex justify-start px-28 flex-col items-start max-[600px]:px-3
            max-[600px]:p-0 max-[600px]:items-center max-[600px]:justify-center
            "
            >
              <p className="font-bold text-white text-xl">WHO ARE WE?</p>
              <div className="  text-left text-white max-[600px]:text-center  ">
                <p className="w-96 max-[600px]:w-auto">
                  <span className="w-4 text-transparent max-[600px]:hidden">
                    -----
                  </span>{" "}
                  Whale Hub dz - is the company of beneficial short-term and
                  long-term investments aimed at making a profit by investing in
                  constantly growing shares of the Tokyo Stock Exchange.
                </p>
              </div>
            </div>

            <div
              className="flex justify-start px-28 flex-col items-start max-[600px]:px-3
            max-[600px]:p-0 max-[600px]:items-center max-[600px]:justify-center mt-10
            "
            >
              <p className="font-bold text-white text-xl">WHAT ARE WE DOING?</p>
              <div className="  text-left text-white max-[600px]:text-center ">
                <p className="w-96  max-[600px]:w-auto">
                  <span className="w-4 text-transparent max-[600px]:hidden">
                    -----
                  </span>{" "}
                  Our activities are focused on establishing a long-term trust
                  relationship between the company, its partners and customers.
                  Our goal - a stable income of each investor.
                </p>
              </div>
            </div>

            <div
              className="flex justify-start px-28 flex-col items-start max-[600px]:px-3
            max-[600px]:p-0 max-[600px]:items-center max-[600px]:justify-center  mt-10"
            >
              <p className="font-bold text-white text-xl">
                WHY DO INVESTORS CHOOSE US?
              </p>
              <div
                className=" text-left text-white max-[600px]:text-center
              "
              >
                <p className="w-96 max-[600px]:w-auto">
                  <span className="w-4 text-transparent max-[600px]:hidden">
                    -----
                  </span>{" "}
                  We offer you an interesting investment plans, an international
                  working environment and excellent career opportunities,
                  qualified support to partners at all stages of cooperation.
                </p>
              </div>
            </div>

            <div className="flex justify-start items-start px-28 mt-14  mb-14 ">
              <Link to={"/register"}>
                <button
                  className="  max-[600px]:py-2 max-[600px]:px-16 text-white
                 bg-blue-600  bg-opacity-75 transition ease-in-out duration-500 
              max-[600px]:text-sm 
            border-white hover:bg-opacity-100 hover:border-white
       focus:outline-none"
                >
                  START EARNING
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* ////////////// projects statistics */}
        <div className="w-ful ">
          <div
            className="flex justify-center flex-col items-center mt-32
        max-[600px]:mt-52
        "
          >
            <div className=" flex justify-center flex-col items-center">
              <h3 className="text-black italic    max-[600px]:text-xs ">
                FREEDOM BEGINS WHERE WORK FINISHES
              </h3>
              <h2 className="text-4xl font-bold text-black mb-2      max-[600px]:text-xl">
                PROJECT STATISTICS
              </h2>
            </div>
            <div className="border-b-4 w-36 text-center justify-center flex items-center text-gray-600"></div>
          </div>
        </div>

        <div
          className="flex w-full justify-evenly mt-8
        max-[600px]:flex-col   max-[600px]:justify-center  max-[600px]:items-center 
        "
        >
          <div
            className="max-[600px]:flex max-[600px]:flex-col  max-[600px]:justify-center  max-[600px]:items-center 
            max-[600px]:mb-8         max-[600px]:mt-8
            "
          >
            <p
              className="w-44 border-b text-5xl text-blue-900 border-gray-300 p-2
              max-[600px]:text-2xl max-[600px]:w-24   
              "
            >
              {date}
            </p>
            <p
              className="font-bold p-2
              max-[600px]:text-lg
              "
            >
              DAYS ON-LINE
            </p>
          </div>
          <div>
            <p
              className="w-44 border-b text-5xl text-blue-900 border-gray-300 p-2
         max-[600px]:text-2xl max-[600px]:w-24
            "
            >
              {data?.length}
            </p>
            <p className="font-bold p-2">INVESTORS</p>
          </div>
        </div>

        <div
          className="flex justify-evenly  w-full
        max-[600px]:flex-col max-[600px]:justify-center max-[600px]:items-center max-[600px]:px-4
        "
        >
          <ul>
            <li
              className="text-xl border px-32 py-4 text-black font-semibold mt-8
            max-[600px]:text-sm
            "
            >
              RECENT DEPOSITS
            </li>
            {recents.map((item) => (
              <li
                key={item.name}
                className="flex justify-between items-center px-12 border py-3"
              >
                <div className="flex items-center justify-center">
                  <img src={table} width={40} alt="" />{" "}
                  <p
                    className="text-2xl ml-4
                          max-[600px]:text-lg
                  "
                  >
                    {item.name}
                  </p>
                </div>
                <div
                  className="text-2xl text-blue-900 font-semibold 
                 max-[600px]:text-lg
                "
                >
                  ${item.price}{" "}
                </div>
              </li>
            ))}
          </ul>

          <ul>
            <li
              className="text-xl border px-32 py-4 text-black font-semibold mt-8
                  max-[600px]:text-sm
            "
            >
              RECENT PAYMENT
            </li>
            {recentpay.map((item) => (
              <li
                key={item.name}
                className="flex justify-between items-center px-12 border py-3"
              >
                <div className="flex items-center justify-center">
                  <img src={table} width={40} alt="" />{" "}
                  <p className="text-2xl ml-4   max-[600px]:text-lg">
                    {item.name}
                  </p>
                </div>
                <div className="text-2xl text-blue-900 font-semibold      max-[600px]:text-lg">
                  ${item.price}{" "}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ////////////////////Affiliation program */}

        <div className="back5 mt-28 w-full text-white">
          <div className="w-ful ">
            <div
              className="flex justify-center flex-col items-center mt-32
        max-[600px]:mt-52
        "
            >
              <div className=" flex justify-center flex-col items-center">
                <h3 className="text-white italic    max-[600px]:text-xs ">
                  BUY THE STOCK QUICKLY, AND SELL HIGH!
                </h3>
                <h2 className="text-4xl font-bold text-white mb-2      max-[600px]:text-xl">
                  AFFILIATE PROGRAM
                </h2>
              </div>
              <div
                classNa
                me="border-b-4 w-36 text-center justify-center flex items-center text-gray-700"
              ></div>
            </div>
          </div>

          <div
            className="px-32 text-lg  mt-14 max-[600px]:px-4  max-[600px]:text-center
        max-[600px]:text-sm
        "
          >
            <p>
              The affiliate program of WAHLE HUB DZ gives everyone an easy and
              convenient way to make profit by attracting new members.
              <p>
                If you are an active user of the Internet, know how to write
                interesting articles or reviews, you have your own website,
                blog, forum and other resources and ways to attract new users
                (both online and offline) in the investment company WAHLE HUB
                DZ, and you wish to receive income from building your own
                network of partners, so this project is for you!
              </p>
            </p>
            <p>
              Each participant of the investment company WAHLE HUB DZ can
              attract new users to the site of the project and receive 8% of the
              deposit of new member! The model of the affiliate program involves
              making a profit in the second.
            </p>
            <p>
              If your referral makes a deposit on any of the represented plans,
              you get referral bonuses instantly to your bonus account, then you
              can withdraw funds to your personal e-wallet in the relevant
              payment system as fast as you wish.
            </p>
            <p
              className="text-5xl font-bold 
max-[600px]:text-2xl mt-8  mb-20
"
            >
              REWARD 5%
            </p>
          </div>
        </div>

        <div className="border-b-4 w-36 text-center justify-center flex items-center"></div>

        {/* buttom */}

        <div
          className="background    h-80 px-44 flex justify-between items-start 
    max-[600px]:p-5 max-[600px]:h-auto
mt-16 w-full left-0 
    max-[600px]:flex-col      max-[600px]:items-center 
  max-[600px]:mt-32 
    "
        >
          <div
            className=" mt-14  max-[600px]:flex      max-[600px]:flex-col    max-[600px]:items-center 
        max-[600px]:justify-center
      "
          >
            <Link to={"/"} className="">
              <img
                src={logo}
                width={50}
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
      </div>
    </>
  );
}

export default Home;
