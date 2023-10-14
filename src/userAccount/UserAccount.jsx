import React, { useEffect, useRef, useState } from "react";
import HomeNavBar from "../home/HomeNavBar";
import NavBarAuth from "../auth/NavBarAuth";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db, userCollection } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import "./user.css";
import { Link, useNavigate } from "react-router-dom";
import arrow from "./img/images.png";
import balance from "./img/icon26.png";
import invested from "./img/icon27.png";
import withdrawl from "./img/icon28.png";
import emailjs from "@emailjs/browser";
import spinner from "../assets/images/output-onlinegiftools.gif";


// icon28.png

function UserAccount() {
  const [user, setuser] = useState({});
  const [loading, setloading] = useState(false);

  const withdraw = useRef();

  const navigate = useNavigate();

  const getUser = async (docID) => {
    const docRef = doc(db, "users", `${docID}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setuser(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("====================================");
        console.log(uid);
        console.log("====================================");
        getUser(uid);
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

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("====================================");
    console.log(withdraw.current);
    console.log("====================================");
    try {
  setloading(true)
      emailjs
        .sendForm(
          "service_4pho89o",
          "template_ebk0dtp",
          withdraw.current,
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
        alert("An Email has been sent , Please wait till the admin contact you")
    } catch (error) {

    }finally {
      setloading(false)

    }
  };
  return (
    <>
      <form
        action=""
        className="flex-col justify-center items-center hidden"
        ref={withdraw}
        onSubmit={sendEmail}
      >
        <input
          type="text"
          name="user_name"
          className="border border-black p-4 m-2 focus:outline-none
                 max-[600px]:p-1      max-[600px]:w-56   w-full
                "
          placeholder="Full Name"
          value={user?.userFullName}
        />{" "}
        <input
          type="email"
          name="user_email"
          className="border border-black p-4 m-2 focus:outline-none      w-full          max-[600px]:p-1      max-[600px]:w-56   "
          placeholder="Email"
          value={user?.userEmail}
          // value={"nstitouah@gmail.com"}
        />{" "}
        <textarea
          value={"Withraw Request"}
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
            <Link
              to={"/profilSettings"}
              className="max-[600px]:text-xs mt-2 uppercase max-[600px]:lowercase    group          flex items-center justify-between           text-black"
            >
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

           
           
           
            <Link 
            onClick={sendEmail}
            className="max-[600px]:text-xs mt-2 uppercase max-[600px]:lowercase    group          flex items-center justify-between           text-black">
            {loading ? (
                <div className=" flex justify-center items-center  ">
                  <img src={spinner} alt="" srcset=""  className="w-10"/>
                </div>
              ) : (
                <p>Withdrawal

                </p>
              )}
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
            font-bold border-b pb-2
            "
              >
                USER ACCOUNT
              </h4>
            </div>
            <div
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
                onClick={sendEmail}
                className="w-44   p-2 backGround  border-white   text-white  text-base
              rounded-2xl  hover:border-white
              max-[600px]:w-20 max-[600px]:text-xs  focus:outline-none uppercase
              "
              >
                  {loading ? (
                <div className=" flex justify-center items-center  ">
                  <img src={spinner} alt="" srcset=""  className="w-10"/>
                </div>
              ) : (
                <p>Withdrawal</p>
              )}
                
              </button>
            </div>
            <div className="flex  justify-between mt-8 max-[600px]:hidden">
              <div
                className="flex justify-center items-center bg-gray-200 px-9  rounded-lg py-4
              max-[600px]:px-2
              "
              >
                <img src={balance} alt="" />
                <p className="ml-4">BALANCE: </p>
                <p className="ml-4 text-blue-800 font-bold text-xl">
                  $ {user.userAccountBalance}
                </p>
              </div>
              <div className="flex justify-center items-center bg-gray-200 px-9  rounded-lg py-4">
                <img src={invested} alt="" />
                <p className="ml-4">INVESTED: </p>
                <p className="ml-4 text-blue-800 font-bold text-xl">
                  $ {user.userInvested}
                </p>
              </div>

              <div className="flex justify-center items-center bg-gray-200 px-9  rounded-lg py-4">
                <img src={withdrawl} alt="" />
                <p className="ml-4">WITHDREW: </p>
                <p className="ml-4 text-blue-800 font-bold text-xl">
                  $ {user.userWithdrawalTotal}
                </p>
              </div>
            </div>
            <table id="customers" className="mt-14 max-[600px]:text-xs">
              <tr>
                <td>User </td>
                <td>{user.userFullName}</td>
              </tr>
              <tr>
                <td> Registration Date </td>
                <td> {user.userRegistrationDate}</td>
              </tr>
              <tr>
                <td> Last Access </td>
                <td> {user.userLastAccess} </td>
              </tr>
              <tr>
                <td> Account Balance </td>
                <td> {user.userAccountBalance} </td>
              </tr>
              <tr>
                <td>Earned Total </td>
                <td> {user.userEarnedTotal} </td>
              </tr>
              <tr>
                <td> Pending Withdrawal </td>
                <td> {user.userPendingWithdrawal}</td>
              </tr>
              <tr>
                <td>Withdrawal Total </td>
                <td> {user.userWithdrawalTotal} </td>
              </tr>
              <tr>
                <td> Active Deposit </td>
                <td>{user.userActiveDeposit} </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserAccount;
