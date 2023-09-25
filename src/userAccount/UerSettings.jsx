import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import arrow from "./img/images.png";
import NavBarAuth from "../auth/NavBarAuth";
import logo from "../home/img/logo.png";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";

function UerSettings() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setuserid(uid);
        const docRef = doc(db, "users", `${user.uid}`);
        // ...
      } else {
        // User is signed out
        console.log("====================================");
        console.log("no user");
        console.log("====================================");
        // ...
      }
    });
    // };
  }, []);
  const [userid, setuserid] = useState("");
  const [bitcoinicon, setBetcoinAccount] = useState("");
  const [usdt, setUsdt] = useState("");
  const [baridi, setBaridi] = useState("");
  const upadteData = async (bi, us, ba, us2) => {
    if (ba === "") {
      alert("Please Enter valid informations");
    } else {
      await updateDoc(doc(db, "users", `${us2}`), {
        // console.log(data.data().userType);
        userBitcoinAccount: bi,
        userBaridyMob: ba,
        userUSDWallet: us,
        // setadminType(data.data().userType)
      });
    }
  };
  return (
    <>
      <div className=" bg-gray-0 ">
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

        <div
          className=" user flex jus w-screen absolute left-0 top-44 bg-gray-100  max-[600px]:pt-6
max-[600px]:top-20
    "
        >
          <div
            className="flex flex-col bg-white  m-8 h-64 rounded-lg p-4 max-[600px]:p-2  max-[600px]:m-0
      "
          >
            <Link
              to={"/profil"}
              className="max-[600px]:text-xs max-[600px]:pt-4 max-[600px]:lowercase
        flex items-center justify-between      group     text-black
        "
            >
              <p> USER ACCOUNT</p>

              <img
                src={arrow}
                width={8}
                alt=""
                className="group-hover:scale-150 group-hover:mr-2 duration-300 "
              />
            </Link>
            <Link className="max-[600px]:text-xs mt-2 uppercase max-[600px]:lowercase    group          flex items-center justify-between           text-black">
              <p>USER SETTINGS</p>
              <img
                src={arrow}
                width={8}
                alt=""
                className="group-hover:scale-150 group-hover:mr-2 duration-300"
              />
            </Link>

            <a
              href="https://api.whatsapp.com/send?phone=+213674226441"
              target="_blank"
              className="max-[600px]:text-xs max-[600px]:pt-4 max-[600px]:lowercase
         flex items-center justify-between      group   mt-2  text-black"
            >
              {/* <button
            className="max-[600px]:text-xs mt-2 max-[600px]:lowercase   group       
            border-none bg-transparent  focus:outline-none
            flex items-center justify-between           text-black"
          > */}
              <p> MAKE DEPOSIT</p>
              {/* </button> */}
              <img
                src={arrow}
                width={8}
                alt=""
                className="group-hover:scale-150 group-hover:mr-2 duration-300"
              />
            </a>

            {/* <Link 
        to={`/deposit`}
        state={{ from: test }}
        className="max-[600px]:text-xs mt-2 max-[600px]:lowercase   group             flex items-center justify-between           text-black">
          <p>MAKE DEPOSIT</p>
          <img
            src={arrow}
            width={8}
            alt=""
            className="group-hover:scale-150 group-hover:mr-2 duration-300"
          />
        </Link> */}

            <Link className="max-[600px]:text-xs mt-2 uppercase max-[600px]:lowercase    group          flex items-center justify-between           text-black">
              <p>Withdrawal</p>
              <img
                src={arrow}
                width={8}
                alt=""
                className="group-hover:scale-150 group-hover:mr-2 duration-300"
              />
            </Link>
            <Link className="max-[600px]:text-xs mt-2 uppercase max-[600px]:lowercase      group       flex items-center justify-between           text-black">
              <p>user deposit</p>
              <img
                src={arrow}
                width={8}
                alt=""
                className="group-hover:scale-150 group-hover:mr-2 duration-300"
              />
            </Link>
            <Link className="max-[600px]:text-xs mt-2 uppercase max-[600px]:lowercase   group flex items-center justify-between           text-black">
              <p> transactions </p>

              <img
                src={arrow}
                width={8}
                alt=""
                className="group-hover:scale-150 group-hover:mr-2 duration-300"
              />
            </Link>
            <Link className="max-[600px]:text-xs mt-2 uppercase max-[600px]:lowercase  group  flex items-center justify-between           text-black">
              <p>deposit history</p>
              <img
                src={arrow}
                width={8}
                alt=""
                className="group-hover:scale-150 "
              />
            </Link>
          </div>

          <div
            className=" bg-white max-[600px]:p-4  m-8 flex-1 p-2
      max-[600px]:mt-0 rounded-lg       
      "
          >
            <div>
              <h4
                className="text-black
        font-bold border-b p-5
        "
              >
                ACCOUNT SETTINGS
              </h4>
            </div>

            <div className="flex flex-col mt-5      ">
              <div className="flex items-center my-3 px-8 max-[600px]:px-0 max-[600px]:flex-col max-[600px]:items-start ">
                <div className="w-52  max-[600px]:w-32 max-[600px]:mb-4">
                  <p className="mr-4 text-gray-500 max-[600px]:mr-0">
                    Bitcoin Account :{" "}
                  </p>
                </div>
                <input
                  className={` w-80 p-2 border-2   border-gray outline-none 
                
                max-[600px]:w-48`}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Bitcoin Account"
                  onChange={(e) => {
                    setBetcoinAccount(e.target.value);
                  }}
                />
              </div>

              <div className="flex items-center my-3 px-8 max-[600px]:px-0 max-[600px]:flex-col max-[600px]:items-start">
                <div className="w-52  max-[600px]:w-48 max-[600px]:mb-4">
                  <p className="mr-4 text-gray-500 max-[600px]:mr-0">
                    USDT Wallet ID Account :{" "}
                  </p>
                </div>
                <input
                  className={` w-80 p-2 border-2   border-gray outline-none 
                
                max-[600px]:w-48`}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your USDT Wallet ID Account"
                  onChange={(e) => {
                    setUsdt(e.target.value);
                  }}
                />
              </div>

              <div className="flex items-center my-3 px-8 max-[600px]:px-0 max-[600px]:flex-col max-[600px]:items-start">
                <div className="w-52  max-[600px]:w-48 max-[600px]:mb-4">
                  <p className="mr-4 text-gray-500 max-[600px]:mr-0">
                    Baridy Mob Account :{" "}
                  </p>
                </div>

                <input
                  className={`  w-80 p-2 border-2   border-gray outline-none 
                
                max-[600px]:w-48`}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Baridi Mob"
                  onChange={(e) => {
                    setBaridi(e.target.value);
                  }}
                />
              </div>
              <div className="flex items-center  mt-3 px-8              max-[600px]:px-0">
                <div className="w-52 max-[600px]:w-0">
                  <p className="mr-4 text-gray-500"></p>
                </div>
                <button
                  onClick={() => upadteData(bitcoinicon, usdt, baridi, userid)}
                  type="submit"
                  className="
              w-80 p-4 button-background-register border-white   text-white  text-base
                  rounded-none  hover:border-white bg-blue-900 
                
                  max-[600px]:w-48
                  max-[600px]:
                  
                  "
                >
                  ENTER
                </button>
              </div>
            </div>
            {/* <div
          className="w-full flex  justify-between pt-4 
        max-[600px]:hidden
        "
        >
          <a
            href="https://api.whatsapp.com/send?phone=+213674226441"
            target="_blank"
          >
            <button
              className=" w-44  p-2 backGround  border-white   text-white  text-base
           hover:border-white rounded-2xl
          max-[600px]:text-xs  max-[600px]:p-0    max-[600px]:w-28 focus:outline-none
           "
            >
              MAKE DEPOSIT
            </button>
          </a>

          <button
            className="w-44   p-2 backGround  border-white   text-white  text-base
          rounded-2xl  hover:border-white
          max-[600px]:w-20 max-[600px]:text-xs  focus:outline-none uppercase
          "
          >
            Withdrawal
          </button>


        </div>
        <div className="flex  justify-between mt-8 max-[600px]:hidden">
          <div className="flex justify-center items-center bg-gray-200 px-9  rounded-lg py-4
          max-[600px]:px-2
          ">
            <img src={balance} alt="" />
            <p className="ml-4">BALANCE: </p>
            <p className="ml-4 text-blue-800 font-bold text-xl">$ {user.userAccountBalance}</p>

          </div>
          <div className="flex justify-center items-center bg-gray-200 px-9  rounded-lg py-4">
            <img src={invested} alt="" />
            <p className="ml-4">INVESTED: </p>
            <p className="ml-4 text-blue-800 font-bold text-xl">$ {user.userAccountBalance}</p>

          </div>

          <div className="flex justify-center items-center bg-gray-200 px-9  rounded-lg py-4">
            <img src={withdrawl} alt="" />
            <p className="ml-4">WITHDREW: </p>
            <p className="ml-4 text-blue-800 font-bold text-xl">$ {user.userAccountBalance}</p>

          </div>
        </div> */}
          </div>
        </div>
      </div>

      {/* <div
        className="background    h-80 px-44 flex justify-between items-start 
max-[600px]:p-5 max-[600px]:h-auto
 w-full left-0 absolute
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
      </div> */}
    </>
  );
}

export default UerSettings;
