import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import facebook from "./img/facebook.png";
import telegram from "./img/telegram.png";
import "./index.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { onLogout } from "./functions";

function HomeNavBar() {
  const [isLogin, setisLogin] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("====================================");
        console.log(uid);
        console.log("====================================");
        setisLogin(true);
        // ...
      } else {
        // User is signed out
        console.log("====================================");
        console.log("no user");
        console.log("====================================");
        // ...
      }
    });


  }, []);


  return (
    <div className=" top-0 left-0  px-44 flex justify-between items-center w-full max-[600px]:px-8 ">
      <div className="flex">
        
          <a
            className="flex items-center background justify-between p-3 bg-transparent outline-none
   focus:outline-none border-none header-button rounded-none 
   "
   href="https://telegram.me/WHALEHUBDZ2023"
   target="_blank"
          >
            <img src={telegram} className="mr-2" width={25} alt="" />{" "}
            <p 
            className="text-white max-[600px]:text-xs ">Telegram</p>
          </a>
        <a 
          href="https://web.facebook.com/profile.php?id=61551873030825&_rdc=1&_rdr"
          target="_blank"
        >
          <button
            className="flex items-center background justify-between p-3 bg-transparent outline-none
   focus:outline-none border-none header-button rounded-none 
   "
          >
            <img src={facebook} className="mr-2" width={25} alt="" />{" "}
            <span className="text-white max-[600px]:text-xs">Facebook</span>
          </button>
        </a>
      </div>
      {isLogin ? (
        <div className="flex">
           <Link
           to={'/profil'}
          // onClick={()=>onLogout(auth)}
            className="flex items-center background justify-between p-3 bg-transparent outline-none
   focus:outline-none border-none header-button rounded-none  text-white hover:text-white
   "
          >
            <span className=" max-[600px]:text-xs">ACCOUNT</span>
          </Link>
          <button
          onClick={()=>{onLogout(auth)
            window.location.reload(false);
          }
          
          }
            className="flex items-center background justify-between p-3 bg-transparent outline-none
   focus:outline-none border-none header-button rounded-none  text-white hover:text-white
   "
          >
            <span className=" max-[600px]:text-xs">Logout</span>
          </button>
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default HomeNavBar;
