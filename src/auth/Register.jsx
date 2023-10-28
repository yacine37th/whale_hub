import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../firebase/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import "./index.css";
import icon from "./img/icon-person.png";
import emailpic from "./img/email.png";
import passwordicon from "./img/password.png";
import bitcoinicon from "./img/bitcoin.png";
import baridimob from "./img/baridimob.png";
import logo from "./img/logo.png";
import facebook from "./img/facebook.png";
import telegram from "./img/telegram.png";
import phnoe from "./img/phone.png";
import money from "./img/money.png";

// 0_1_1694457176539.png

import { Link, useNavigate } from "react-router-dom";
import NavBarAuth from "./NavBarAuth";
import spinner from "../assets/images/output-onlinegiftools.gif";
import LoadingSpinner from "../components/LoadingSpinner";

function Register() {
  const navigate = useNavigate();

  const [fullName, setfullName] = useState("");
  const [username, setusername] = useState("");
  const [phone, setphone] = useState("");
  const [betcoinAccount, setBetcoinAccount] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Baridymob, setBaridymob] = useState("");
  const [usdt, setusdt] = useState("");
  const [amountInvest, setamountInvest] = useState(0);
  const [loading, setloading] = useState(false);

  const [Pack, setPack] = useState("");

  const handlePack = (e) => {
    setPack(e.target.value);
  };

  const register = async (
    au,
    em,
    pa,
    fullName,
    username,
    betcoinAccount,
    usdt,
    Baridymob
  ) => {
    if (em === "" || pa === "" || Pack==="") {
      alert("Please Enter Email and Password");
    } else {
      try {
        setloading(true);
        var currentdate = new Date();
        var datetime =
          +currentdate.getDate() +
          "/" +
          (currentdate.getMonth() + 1) +
          "/" +
          currentdate.getFullYear();

        console.log("datetime");
        console.log(datetime);
        await createUserWithEmailAndPassword(au, em, pa)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user.uid);
            try {
              setDoc(doc(db, "users", user.uid), {
                userIsAccepted: false,
                userFullName: fullName,
                userName: username,
                userPhoneNumber: phone,
                userBitcoinAccount: betcoinAccount,
                userUSDWallet: usdt,
                userBaridyMob: Baridymob,
                userEmail: em,
                userPassword: pa,
                userID: user.uid,
                userRegistrationDate: datetime,
                userLastAccess: datetime,
                userAccountBalance: 0.0,
                userEarnedTotal: [0],
                userPendingWithdrawal: 0.0,
                userWithdrawalTotal: 0.0,
                userActiveDeposit: 0.0,
                userInvested: [Number(amountInvest)],
                userPack : Pack,
              });
              //      const docRef =  addDoc( user.uid, collection(db, "users"), {
              //   email : email,
              //   userid : auth.currentUser.uid
              // });
              // console.log("Document written with ID: ", docRef.id);
              navigate("/login", { replace: true });
            } catch (error) {}
            alert("Account has Been created");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorMessage);
            console.log(error.code);
            if (error.code === "auth/email-already-in-use") {
              alert("This Email is already in use");
            }
            else if (error.code ==="auth/weak-password"){
              alert("Enter a valid password");

            }
          });
      } catch (error) {
        console.log(error.message);
      } finally {
        setloading(false);
      }
    }
  };
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
      <NavBarAuth />

      <div className="flex justify-center flex-col items-center mt-48">
        <div
          className=" flex justify-center flex-col items-center
        "
        >
          <h3
            className="text-gray-400
            max-[600px]:text-xs
          "
          >
            FREEDOM BEGINS WHERE WORK FINISHES
          </h3>
          <h2
            className="text-4xl font-bold text-gray-600 mb-2 
          max-[600px]:text-xl
          "
          >
            REGISTRATION AT WHALE HUB
          </h2>
        </div>
        <div className="border-b-4 w-36 text-center justify-center flex items-center"></div>
      </div>

      <div
        className="flex pt-20  justify-evenly max-w-screen
      
      "
      >
        <div className=" justify-between max-[600px]:hide ">
          <div className="flex flex-col items-start justify-center border-white  ">
            <div className="flex justify-center items-center mb-3">
              {/* <span><img src={require("../assets/icon-person (2).png")} alt="" /></span> */}
              <div
                className=" p-4 mr-1 h-full
              max-[600px]:p-0   
              "
              >
                <img src={icon} alt="" className="w-4 " />
              </div>
              <input
                className={` w-80 p-4 border-2   border-gray outline-none 
                
                max-[600px]:w-72`}
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

            <div className="flex justify-center items-center mb-3">
              <div
                className=" p-4 mr-1 h-full
                     max-[600px]:p-0
              "
              >
                <img src={emailpic} alt="" className="w-4" />
              </div>
              <input
                className={`
                w-80 p-4 text-black  border-2 border-gray outline-none   max-[600px]:w-72
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

            <div className="flex justify-center items-center mb-3">
              <div className=" p-4 mr-1 h-full        max-[600px]:p-0">
                <img src={icon} alt="" className="w-4" />
              </div>
              <input
                className={`
                w-80 p-4 text-black  border-2 border-gray outline-none  max-[600px]:w-72
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

            <div className="flex justify-center items-center mb-3">
              <div className=" p-4 mr-1 h-full max-[600px]:p-0">
                <img src={phnoe} alt="" className="w-4" />
              </div>
              <input
                className={`
                w-80 p-4 text-black  border-2 border-gray outline-none  max-[600px]:w-72
      `}
                type="tel"
                name="tel"
                id="tel"
                placeholder="Your Phone number"
                onChange={(e) => {
                  setphone(e.target.value);
                }}
              />
              <p className="text-red-700 text-xs flex items-start"></p>
            </div>

            <div className="flex justify-center items-center mb-3">
              <div className=" p-4 mr-1 h-full        max-[600px]:p-0">
                <img src={passwordicon} alt="" className="w-4" />
              </div>
              <input
                // {...register("password")}
                // onChange={(e) => {
                //   setpassword(e.target.value);
                // }}
                className={`
                    w-80 p-4 text-black  border-2 border-gray outline-none  max-[600px]:w-72
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

            <div className="flex justify-center items-center mb-3">
              <div className=" p-4 mr-1 h-full        max-[600px]:p-0">
                <img src={bitcoinicon} alt="" className="w-4" />
              </div>
              <input
                className={`
                w-80 p-4 text-black  border-2 border-gray outline-none  max-[600px]:w-72
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

            <div className="flex justify-center items-center mb-3">
              <div className=" p-4 mr-1 h-full        max-[600px]:p-0">
                <img src={""} alt="" className="w-4" />
              </div>
              <input
                className={`
                w-80 p-4 text-black  border-2 border-gray outline-none  max-[600px]:w-72
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

            <div className="flex justify-center items-center mb-3">
              <div className=" p-4 mr-1 h-full        max-[600px]:p-0">
                <img src={baridimob} alt="" className="w-4" />
              </div>
              {/*  */}
              <input
                className={`
                w-80 p-4 text-black  border-2 border-gray outline-none  max-[600px]:w-72
      `}
                type="Baridymob"
                name="Baridymob"
                id="Baridymob"
                placeholder="Your Baridymob While Hub Account"
                onChange={(e) => {
                  setBaridymob(e.target.value);
                }}
              />
              <p className="text-red-700 text-xs flex items-start"></p>
            </div>

            <div className="flex justify-center items-center mb-3">
              <div className=" p-4 mr-1 h-full        max-[600px]:p-0">
                <img src={money} alt="" className="w-4" />
              </div>
              {/*  */}
              <input
                className={`
                w-80 p-4 text-black  border-2 border-gray outline-none  max-[600px]:w-72
      `}
                type="number"
                name="Baridymob"
                id="Baridymob"
                placeholder="Your amount of investment"
                onChange={(e) => {
                  setamountInvest(e.target.value);
                }}
              />
              <p className="text-red-700 text-xs flex items-start"></p>
            </div>

            <div className="flex flex-col  my-5">
              <p className="text-2xl">PLEASE SELECT THE PACK</p>

              <div className="flex gap-3  mt-4" >
                <input
                  id="normal_pack"
                  type="radio"
                  name="normal"
                  value="NORMAL PACK"
                  onChange={handlePack}
                />
                <label htmlFor="normal_pack" className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer text-xl">
                  NORMAL PACK
                </label>
              </div>

              <div className="flex gap-3 ">
                <input
                  id="golden_pack"
                  type="radio"
                  name="normal"
                  value="GOLDEN PACK"
                  onChange={handlePack}
                />
                <label htmlFor="golden_pack" className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer text-xl">
                  GOLDEN PACK
                </label>
              </div>

              <div className="flex gap-3 ">
                
                <input
                  className="checked:bg-blue-900 p-3 bg-red-700"
                  id="diamand_pack"
                  type="radio"
                  name="normal"
                  value="DIAMAND PACK"
                  onChange={handlePack}
                />
                <label htmlFor="diamand_pack"  className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer text-xl">
                DIAMOND PACK
                </label>
              </div>
              {/* <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handlegender}
              />
              Female */}
            </div>

            {/* <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="radio"
                name="flexRadioDefault"
                id="radioDefault01"
              />
              <label
                className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="radioDefault01"
              >
                Default radio
              </label>
            </div>
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="radio"
                name="flexRadioDefault"
                id="radioDefault02"
                checked
              />
              <label
                className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="radioDefault02"
              >
                Default checked radio
              </label>
            </div> */}
            <button
              onClick={() => {
                register(
                  auth,
                  email,
                  password,
                  fullName,
                  username,
                  betcoinAccount,
                  usdt,
                  Baridymob
                );
              }}
              type="submit"
              className="
                  w-full p-4 button-background-register border-white   text-white  text-base
                  rounded-none  hover:border-white bg-blue-900
                  "
            >
              {loading ? (
                // <div className=" flex justify-center items-center  ">
                //   <img src={spinner} alt="" srcset=""  className="w-20"/>
                // </div>
                <div
                // className="flex justify-center items-center   h-screen p-0
                // "
                >
                  {/* <div class=" flex justify-center items-center">
                    <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-900"></div>
                  </div> */}
                  <LoadingSpinner
                    width={"w-5"}
                    height={"h-5"}
                    text={"Loading ..."}
                  />
                </div>
              ) : (
                <p>ENTER</p>
              )}
            </button>
          </div>
        </div>
        <div className=" border-2 mr-44 ml-32 max-[600px]:hidden"></div>
        <div
          className="   flex justify-center items-center flex-col
        max-[600px]:hidden
        "
        >
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
          <Link
            to={"/login"}
            className=" hover:text-white  w-72 p-4 button-background-register    text-white  text-base
                  rounded-none  hover:border-white bg-blue-900 focus:outline-none"
          >
            {" "}
            Login
          </Link>
          {/* </button> */}
        </div>
      </div>
    </div>
  );
}

export default Register;
