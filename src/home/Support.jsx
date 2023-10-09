import React, { useEffect, useRef } from "react";
import BottomNav from "../auth/BottomNav";
import NavBarAuth from "../auth/NavBarAuth";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
// import { sendEmail } from "../emailService/SendEmailFunction";
import emailjs from "@emailjs/browser";

function Support() {
  var width = false;
  const form = useRef();
  const first = useRef();

  useEffect(() => {
    if (window.screen.width <= "600") {
      width = true;
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("====================================");
    console.log(first.current);
    console.log("====================================");

    emailjs
      .sendForm(
        "service_4pho89o",
        "template_ebk0dtp",
        first.current,
        "vi6_bsb5AMeM-KTqK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-gray-100 flex-1 rounded-2xl">
      <NavBarAuth />
      <form
        ref={first}
        className=" flex-col flex-1 ml-48 max-[600px]:ml-0 hidden
   "
      >
        {/* <label>Name</label> */}
        <input
          type="text"
          name="user_name"
          className="border border-black p-4 m-2 focus:outline-none
        max-[600px]:p-1      max-[600px]:w-56   
       "
          placeholder="Full Name"
          value={"test"}
        />{" "}
        {/* <label>Email</label> */}
        {/* <label>Email</label> */}
        <input
          type="email"
          name="user_email"
          className="border border-black p-4 m-2 focus:outline-none             max-[600px]:p-1      max-[600px]:w-56   "
          placeholder="Email"
          value={"nstitouah@gmail.com"}
        />{" "}
        {/* <label>Message</label> */}
        <textarea
          id="txtid"
          name="message"
          rows="4"
          cols="50"
          maxlength="200"
          placeholder="your message ..."
          value={"nstitouah@gmail.comsdddddddddddd"}
          className="border border-black p-4 m-2 focus:outline-none             max-[600px]:p-1      max-[600px]:w-56   "
        />
        <input
          type="submit"
          value="Send"
          className="bg-blue-800 p-5 text-white w-full mt-4 "
        />
      </form>
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
            <p className="text-2xl font-bold uppercase">Support</p>
          </div>

          <div
            className="flex justify-between items-center mt-9
          max-[600px]:p-2
          "
          >
            <div className="flex flex-col items-center max-[600px]:hidden">
              <div
                className={`border-2 rounded-full 
                    flex flex-col w-56 mb-8
                   max-[600px]:hidden`}
              >
                <img
                  src={logo}
                  alt=""
                  // className="max-w-full"
                  width={200}
                />
              </div>

              <div className="flex flex-col items-start">
                <div className="">
                  <p>Bir khadem Alger</p>
                </div>
                <div>
                  <p>
                    Our e-mail :{" "}
                    <a href="mailto:whalehubdz@gmail.com">
                      whalehubdz@gmail.com
                    </a>
                  </p>
                </div>
                <div>
                  <p>
                    Telegram Chat:{" "}
                    <a href="https://t.me/whale_hub2023" target="_blank">
                      Whale_Hub2023
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-1 ml-48 max-[600px]:ml-0">
              <form
                action=""
                className="flex flex-col justify-center items-center "
              >
                <input
                  type="text"
                  name="user_name"
                  className="border border-black p-4 m-2 focus:outline-none
                 max-[600px]:p-1      max-[600px]:w-56   w-full
                "
                  placeholder="Full Name"
                />{" "}
                <input
                  type="email"
                  name="user_email"
                  className="border border-black p-4 m-2 focus:outline-none      w-full          max-[600px]:p-1      max-[600px]:w-56   "
                  placeholder="Email"
                />{" "}
                <textarea
                  id="txtid"
                  name="message"
                  rows="4"
                  cols="50"
                  maxlength="200"
                  placeholder="your message ..."
                  className="border border-black p-4 m-2 focus:outline-none     w-full        max-[600px]:p-1      max-[600px]:w-56   "
                />
                <input
                  type="submit"
                  value="SEND"
                  className="bg-blue-800 p-4 text-white w-full mt-4 rounded-xl font-bold"
                />
              </form>
              {/* <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col flex-1 ml-48 max-[600px]:ml-0
            "
              >
                <input
                  type="text"
                  name="user_name"
                  className="border border-black p-4 m-2 focus:outline-none
                 max-[600px]:p-1      max-[600px]:w-56   
                "
                  placeholder="Full Name"
                />{" "}
                <input
                  type="email"
                  name="user_email"
                  className="border border-black p-4 m-2 focus:outline-none             max-[600px]:p-1      max-[600px]:w-56   "
                  placeholder="Email"
                />{" "}
                <textarea
                  id="txtid"
                  name="message"
                  rows="4"
                  cols="50"
                  maxlength="200"
                  placeholder="your message ..."
                  className="border border-black p-4 m-2 focus:outline-none             max-[600px]:p-1      max-[600px]:w-56   "
                />
                <input
                  type="submit"
                  value="Send"
                  className="bg-blue-800 p-5 text-white w-full mt-4 "
                />
              </form> */}
              {/* <input
                type="text"
                className="border border-black p-4 m-2 focus:outline-none
                 max-[600px]:p-1      max-[600px]:w-56   
                "
                name=""
                
                placeholder="Full Name"
              />
              <input
                type="text"
                className="border border-black p-4 m-2 focus:outline-none             max-[600px]:p-1      max-[600px]:w-56   "
                name=""
                id=""
                placeholder="Email"
              />
              <textarea
                id="txtid"
                name="txtname"
                rows="4"
                cols="50"
                maxlength="200"
                placeholder=""
                className="border border-black p-4 m-2 focus:outline-none             max-[600px]:p-1      max-[600px]:w-56   "
              /> */}
              {/* <button className="backGround text-white w-full mt-4">
                SEND
              </button> */}
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

export default Support;
