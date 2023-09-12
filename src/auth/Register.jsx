import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../firebase/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import "./index.css";
import { register } from "./function";
import icon from "./img/icon-person.png";
import { Link } from "react-router-dom";

function Register() {
  const [fullName, setfullName] = useState("");
  const [username, setusername] = useState("");
  const [betcoinAccount, setBetcoinAccount] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Baridymob, setBaridymob] = useState("");
  const [usdt, setusdt] = useState("");
  // setusdt
  // const register = async (au, em, pa) => {
  //   if (em === "" || pa === "" || pa.lenght < 8) {
  //     alert("Please Enter Email and Password");
  //   } else {
  //     await createUserWithEmailAndPassword(au, em, pa)
  //       .then((userCredential) => {
  //         // Signed in
  //         const user = userCredential.user;
  //         console.log(user.uid);
  //         try {
  //           setDoc(doc(db, "users", user.uid), {
  //             userID: user.uid,
  //             userEmail: em,
  //             userPassword: pa,
  //           });
  //           //      const docRef =  addDoc( user.uid, collection(db, "users"), {
  //           //   email : email,
  //           //   userid : auth.currentUser.uid
  //           // });
  //           // console.log("Document written with ID: ", docRef.id);
  //         } catch (error) {}

  //         // setDoc(newDocRef, {
  //         //   id: newDocRef.id,
  //         //   // car: "Volvo",
  //         //   email: email,
  //         //   password: password,
  //         // });
  //         //  doc.set({
  //         //         email: em,
  //         //         password: pa,
  //         //         userID:user.uid
  //         //     })

  //         // ...
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         // ..
  //         // console.log(error.code);
  //         console.log(error.message);
  //         if (error.code === "auth/email-already-in-use") {
  //           alert("This Email is already in use");
  //         } else if (error.code === "auth/weak-password") {
  //           alert(" Password should be at least 6 characters ");
  //         }
  //         // auth/weak-password
  //       });
  //   }
  // };
  return (
    <div>
      <div className="background w-full h-14 absolute top-0 left-0 ">
        <div>
          {/* <img
                src={icon}
                width={100}
                className=" sm:w-20 max-[600px]:w-16 "
                // height={250}
                alt=""
              />     */}
        </div>
        <div></div>
      </div>
      <div className="flex justify-center flex-col items-center mt-9">
        <div className=" flex justify-center flex-col items-center">
          <h3 className="text-gray-400">FREEDOM BEGINS WHERE WORK FINISHES</h3>
          <h2 className="text-4xl font-bold text-gray-600 mb-2 ">
            REGISTRATION AT WHALE HUB
          </h2>
        </div>
        <div className="border-b-4 w-36 text-center justify-center flex items-center"></div>
      </div>

      <div className="flex pt-20  justify-evenly max-w-screen ">
        <div className=" justify-between ">
          <div className="flex flex-col items-start justify-center border-white  ">
            <div className="relative mb-3">
              {/* <span><img src={require("../assets/icon-person (2).png")} alt="" /></span> */}
              <input
                className={` w-80 p-4 border-2 border-gray outline-none `}
                type="text"
                name="name"
                id="name"
                placeholder="Your Full Name"
                onChange={(e) => {
                  setfullName(e.target.value);
                }}
              />
              <p className="text-red-700 text-xs flex items-start"></p>
            </div>

            <div className="relative mb-3">
              <input
                className={`
                w-80 p-4 text-black  border-2 border-gray outline-none 
      `}
                type="email"
                name="email"
                id="email"
                placeholder="Your Email Address"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <p className="text-red-700 text-xs flex items-start"></p>
            </div>

            <div className="relative mb-3">
              <input
                className={`
                w-80 p-4 text-black  border-2 border-gray outline-none 
      `}
                type="username"
                name="username"
                id="username"
                placeholder="Your Username"
                onChange={(e) => {
                  setusername(e.target.value);
                }}
              />
              <p className="text-red-700 text-xs flex items-start"></p>
            </div>

            <div className="relative mb-3">
              <input
                // {...register("password")}
                // onChange={(e) => {
                //   setpassword(e.target.value);
                // }}
                className={`
                    w-80 p-4 text-black  border-2 border-gray outline-none 
          `}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>

            <div className="relative mb-3">
              <input
                className={`
                w-80 p-4 text-black  border-2 border-gray outline-none 
      `}
                type="Bitcoin"
                name="Bitcoin"
                id="Bitcoin"
                placeholder="Your Bitcoin Account"
                onChange={(e) => {
                  setBetcoinAccount(e.target.value);
                }}
              />
              <p className="text-red-700 text-xs flex items-start"></p>
            </div>

            <div className="relative mb-3">
              <input
                className={`
                w-80 p-4 text-black  border-2 border-gray outline-none 
      `}
                type="USDT"
                name="USDT"
                id="USDT"
                placeholder="Your USDT Wallet ID Account"
                onChange={(e) => {
                  setusdt(e.target.value);
                }}
              />
              <p className="text-red-700 text-xs flex items-start"></p>
            </div>

            <div className="relative mb-3">
              <input
                className={`
                w-80 p-4 text-black  border-2 border-gray outline-none 
      `}
                type="Baridymob"
                name="Baridymob"
                id="Baridymob"
                placeholder="Your Baridymob Dzforex Account"
                onChange={(e) => {
                  setBaridymob(e.target.value);
                }}
              />
              <p className="text-red-700 text-xs flex items-start"></p>
            </div>

            <button
              onClick={() =>
                register(
                  auth,
                  email,
                  password,
                  fullName,
                  username,
                  betcoinAccount,
                  usdt,
                  Baridymob
                )
              }
              type="submit"
              className="
                  w-80 p-4 button-background-register border-white   text-white  text-base
                  rounded-none  hover:border-white bg-blue-900
                  "
            >
              ENTER
            </button>
          </div>
        </div>
              <div className=" border-2 mr-16 ml-16"></div>
        <div className="   flex justify-center items-center flex-col">
          <img
          
            src={icon}
            width={100}
            className=" mb-11"
            // height={250}
            alt=""
          />{" "}
          <h4 className="font-bold">Already a member? </h4>
              <p className="mb-14">Log In.</p>
              {/* <button */}
             
              {/* type="submit" */}
            
            <Link to={"/login"} className=" hover:text-white  w-72 p-4 button-background-register    text-white  text-base
                  rounded-none  hover:border-white bg-blue-900 focus:outline-none">  Login</Link>
            {/* </button> */}
        </div>
      </div>
    </div>
  );
}

export default Register;
