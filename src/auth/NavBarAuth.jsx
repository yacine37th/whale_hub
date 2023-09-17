import React, { useEffect, useState } from "react";
import logo from "./img/0_1_1694457176539.png";
import facebook from "./img/facebook.png";
import telegram from "./img/telegram.png";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { onLogout } from "../home/functions";

export default function NavBarAuth() {
  const [isLogin, setisLogin] = useState(false  );
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

  // const onLogout = (au) => {
  //   signOut(au)
  //     .then(() => {
  //       // Sign-out successful.
  //       setisLogin(false);
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //       console.log('====================================');
  //       console.log("logout");
  //       console.log('====================================');
  //     });
  // };

  return (
    <div className="background  absolute top-0 left-0  px-44 flex justify-between items-center w-full
    max-[600px]:p-5
    ">
      <div className="">
        <Link to={"/"}>
          <img
            src={logo}
            width={50}
            className=" max-w-full cursor-pointer"
            // height={250}
            alt=""
          />
        </Link>
      </div>
    {isLogin ?
    (<div>
    <button
    onClick={()=>onLogout(auth)}
      className="flex items-center background justify-between p-3 bg-transparent outline-none
focus:outline-none border-none header-button rounded-none  text-white hover:text-white
"
    >
      <span className=" max-[600px]:text-xs">Logout</span>
    </button>
  </div>)
    :  ( <div className="flex
   
   ">
     <button
       className="flex items-center background justify-between p-4 bg-transparent outline-none
  focus:outline-none border-none header-button rounded-none    max-[600px]:hidden
  "
     >
       <img src={telegram} className="mr-2" width={20} alt="" />{" "}
       <span className="text-white">Telegram</span>
     </button>
     <button
       className="flex items-center background justify-between p-4 bg-transparent outline-none
  focus:outline-none border-none header-button rounded-none    max-[600px]:hidden
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
   </div>)}
    </div>
  );
}
