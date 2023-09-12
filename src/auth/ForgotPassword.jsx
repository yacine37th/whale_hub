import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { auth } from "../firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { forgotPassword } from "./function";


function ForgotPassword() {
  const [email, setemail] = useState("");
  

  return (
    <>
      <div className="bg-red-700 flex-1 ">
        <div className="flex justify-center items-center   ">
          <div
            className="flex flex-col items-start justify-center
          border-white
      background "
          >
            <div className="mb-7 p-8 flex items-start justify-center w-full">
              <h3 className="flex  mb-2 text-white ">Forgot password</h3>
            </div>
            <div className="flex flex-col px-8 items-center justify-center">
              <div className="relative mb-3">
                <input
                  className={` w-60 p-4 border-none outline-none `}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Email"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
                <p className="text-red-700 text-xs flex items-start"></p>
              </div>

              
              <button
                onClick={() => forgotPassword(auth, email)}
                type="submit"
                className="
                  w-60 p-4 button-background border-white   text-white  text-base
                  rounded-none  hover:border-white mb-10 outline-none focus:outline-none
                  "
              >
                ENTER
              </button>
            </div>
           

            
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
