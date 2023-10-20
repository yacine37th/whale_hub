import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { auth, db } from "../firebase/firebase";
import facebook from "./img/facebook.png";
import telegram from "./img/telegram.png";
import logo from "./img/logo.png";
import NavBarAuth from "./NavBarAuth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import spinner from "../assets/images/output-onlinegiftools.gif";
import LoadingSpinner from "../components/LoadingSpinner";


function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);

  const signIN = async (au, em, pa) => {
    if (em === "" || pa === "") {
      alert("Please Enter Email and Password");
    } else {
    try {
      setloading(true);

      const res = await signInWithEmailAndPassword(au, em, pa)
      .then((userCredential) => {
        var currentdate = new Date();
        var datetime =
          +currentdate.getDate() +
          "/" +
          (currentdate.getMonth() + 1) +
          "/" +
          currentdate.getFullYear() +
          " " +
          currentdate.getHours() +
          ":" +
          currentdate.getMinutes() +
          ":" +
          currentdate.getSeconds();
        console.log("datetime");
        console.log(datetime);

        // Signed in
        const user = userCredential.user;
        // ...
        // console.log(user.uid);
        updateDoc(doc(db, "users", user.uid), {
          userLastAccess: datetime,
        });
        alert("Login Success");
        navigate("/profil", {replace : true});
        console.log("deded");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.code);
        //
        console.log("test");
        if (error.code === "auth/invalid-email") {
          alert("Please enter Valid Email");
        }
        if (error.code === "auth/wrong-password") {
          alert("Your Password is wrong ");
        }
      });
    } catch (error) {
      
    }finally{
      setloading(false);

    }

      //  navigate("/" , {replace : true})
    }
  };
  return (
    <>
      <div>
        <NavBarAuth />

        <div className="bg-red-700 flex-1 ">
          <div className="flex justify-center items-center   ">
            <div
              className="flex flex-col items-start justify-center
          border-white
      background "
            >
              <div className="mb-7 p-8 flex items-start justify-center w-full">
                <h3 className="flex  mb-2 text-white ">LOGIN</h3>
              </div>
              <div className="flex flex-col px-8 items-center justify-center">
                <div className="relative mb-3">
                  <input
                    className={` w-60 p-4 border-none outline-none `}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Login"
                    onChange={(e) => {
                      setemail(e.target.value);
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
                    w-60 p-4 text-black  border-none outline-none 
          `}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                  />
                  <p className="text-red-700 text-xs flex items-start">
                    {/* {errors.password?.message} */}
                  </p>
                </div>
                <button
                  onClick={() => signIN(auth, email, password)}
                  type="submit"
                  className="
                  w-60 p-4 button-background border-white   text-white  text-base
                  rounded-none  hover:border-white
                  "
                >
                  {loading ? (
                // <div className=" flex justify-center items-center  ">
                //   <img src={spinner} alt="" srcset=""  className="w-14"/>
                // </div>
                <div
                // className="flex justify-center items-center   h-screen p-0
                // "
                >
                  {/* <div class=" flex justify-center items-center">
                    <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-900"></div>
                  </div> */}
                  <LoadingSpinner width={"w-5"} height={"h-5"} text={"Loading ..."} />
                </div>
              ) : (
                <p>ENTER</p>
              )}
             
                </button>
              </div>
              <div className="flex  px-8 w-full mb-5 cursor-pointer justify-end">
                <Link
                  to={"/forgetPassword"}
                  className="text-white text-size mt-3"
                >
                  FORGOT YOUR PASSWORD?
                </Link>
                {/* <span className="ml-2 hover:underline font-semibold"> */}
                {/* <a href="/register" className="hover:underline">
                  Sign up   
                </a> */}
                {/* <Link to="/register">Sign up</Link>
              </span> */}
              </div>

              <div className="flex  w-full registrationBack p-5 justify-evenly items-center">
                <p className="text-white text-size mt-3 ">NOT A MEMBER ? </p>
                {/* <span className="ml-2 hover:underline font-semibold"> */}
                {/* <a href="/register" className="hover:underline">
                  Sign up   
                </a> */}
                {/* <Link to="/register">Sign up</Link>
              </span> */}
                <Link
                  to={"/register"}
                  className="hover:underline  text-blue-700 textReg mt-3 cursor-pointer"
                >
                  REGISTRATION
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
