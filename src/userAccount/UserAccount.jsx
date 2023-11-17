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
import LoadingSpinner from "../components/LoadingSpinner";

// icon28.png

function UserAccount() {
  const [user, setuser] = useState({});
  const [loading, setloading] = useState(false);

  const withdraw = useRef();

  const navigate = useNavigate();
  const [total, settotal] = useState(0);
  const [userInvested, setuserInvested] = useState(0);
  const getUser = async (docID) => {
    setloading(true);
    const docRef = doc(db, "users", `${docID}`);
    const docSnap = await getDoc(docRef);
    var userEarnedTotal = 0;
    var userInvested2 = 0;
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setuser(docSnap.data());
      docSnap.data().userEarnedTotal.forEach((item) => {
        userEarnedTotal += item;
      });
      docSnap.data().userInvested.forEach((item) => {
        userInvested2 += item;
      });
      // console.log(userEarnedTotal);
      setuserInvested(userInvested2.toFixed(2));
      settotal(userEarnedTotal);
      setloading(false);
      // console.log(total);
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
      setloading(true);
      emailjs
        .sendForm(
          // "service_4pho89o",
          `${import.meta.env.VITE_EMAILJS_SERVICEID}`,
          `${import.meta.env.VITE_EMAILJS_TEMPLATEID}`,
          // "template_ebk0dtp",
          withdraw.current,
          // VITE_EMAILJS_ID
          `${import.meta.env.VITE_EMAILJS_ID}`
          // "vi6_bsb5AMeM-KTqK"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      alert("An Email has been sent , Please wait till the admin contact you");
    } catch (error) {
    } finally {
      setloading(false);
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
                 max-md:p-1      max-md:w-56   w-full
                "
          placeholder="Full Name"
          value={user?.userFullName}
        />{" "}
        <input
          type="email"
          name="user_email"
          className="border border-black p-4 m-2 focus:outline-none      w-full          max-md:p-1      max-md:w-56   "
          placeholder="Email"
          value={user?.userEmail}
          // value={"nstitouah@gmail.com"}
        />{" "}
        <input
          value={user?.userUSDWallet}
          id="txtid"
          name="userUSDWallet"
          rows="4"
          cols="50"
          maxlength="200"
          placeholder="your message ..."
          className="border border-black p-4 m-2 focus:outline-none     w-full        max-md:p-1      max-md:w-56   "
        />
        <input
          value={user?.userBaridyMob}
          id="txtid"
          name="userBaridyMob"
          rows="4"
          cols="50"
          maxlength="200"
          placeholder="your message ..."
          className="border border-black p-4 m-2 focus:outline-none     w-full        max-md:p-1      max-md:w-56   "
        />
        {/* userBaridyMob
         */}
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
        max-md:left-0 
        max-md:hidden
        "
        >
          <Link
            to={"/aboutus"}
            className="p-10 text-black uppercase duration-300
            max-md:p-1 
            "
          >
            About US
          </Link>
          <Link
            to={"/plans"}
            className="p-10 text-black uppercase duration-300   max-md:p-1"
          >
            INVESTMENT PLANS
          </Link>

          <Link className="p-10 text-black uppercase duration-300   max-md:p-1">
            rate US
          </Link>
          <Link
            to={"/support"}
            className="p-10 text-black uppercase duration-300   max-md:p-1"
          >
            support
          </Link>
          <Link className="p-10 text-black uppercase duration-300   max-md:p-1">
            faq
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-screen p-0">
            <LoadingSpinner width={"w-16"} height={"h-16"} />
          </div>
        ) : (
          <div
            className=" user flex jus w-screen absolute left-0 top-44 bg-gray-100  max-md:pt-6
max-md:top-20
        "
          >
            <div
              className="flex flex-col bg-white  m-8 h-64 rounded-lg p-4 max-md:p-2  max-md:m-0
          "
            >
              <Link
                className="max-md:text-xs max-md:pt-4 max-md:lowercase
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
                className="max-md:text-xs mt-2 uppercase max-md:lowercase    group          flex items-center justify-between           text-black"
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
                className="max-md:text-xs max-md:pt-4 max-md:lowercase
             flex items-center justify-between      group   mt-2  text-black"
              >
                {/* <button
                className="max-md:text-xs mt-2 max-md:lowercase   group       
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
            className="max-md:text-xs mt-2 max-md:lowercase   group             flex items-center justify-between           text-black">
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
                className="max-md:text-xs mt-2 uppercase max-md:lowercase    group          flex items-center justify-between           text-black"
              >
                {loading ? (
                  <div className=" flex justify-center items-center  ">
                    <img src={spinner} alt="" srcset="" className="w-10" />
                  </div>
                ) : (
                  <p>Withdrawal</p>
                )}
                <img
                  src={arrow}
                  width={8}
                  alt=""
                  className="group-hover:scale-150 group-hover:mr-2 duration-300"
                />
              </Link>
              <Link className="max-md:text-xs mt-2 uppercase max-md:lowercase      group       flex items-center justify-between           text-black">
                <p>user deposit</p>
                <img
                  src={arrow}
                  width={8}
                  alt=""
                  className="group-hover:scale-150 group-hover:mr-2 duration-300"
                />
              </Link>
              <Link className="max-md:text-xs mt-2 uppercase max-md:lowercase   group flex items-center justify-between           text-black">
                <p> transactions </p>

                <img
                  src={arrow}
                  width={8}
                  alt=""
                  className="group-hover:scale-150 group-hover:mr-2 duration-300"
                />
              </Link>
              <Link className="max-md:text-xs mt-2 uppercase max-md:lowercase  group  flex items-center justify-between           text-black">
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
              className=" bg-white max-md:p-4  m-8 flex-1 p-2
          max-md:mt-0 rounded-lg
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
            max-md:hidden
            "
              >
                <a
                  href="https://api.whatsapp.com/send?phone=+213674226441"
                  target="_blank"
                >
                  <button
                    className=" w-44  p-2 backGround  border-white   text-white  text-base
               hover:border-white rounded-2xl
              max-md:text-xs  max-md:p-0    max-md:w-28 focus:outline-none
               "
                  >
                    MAKE DEPOSIT
                  </button>
                </a>

                <button
                  onClick={sendEmail}
                  className="w-44   p-2 backGround  border-white   text-white  text-base
              rounded-2xl  hover:border-white
              max-md:w-20 max-md:text-xs  focus:outline-none uppercase
              "
                >
                  {loading ? (
                    <div className=" flex justify-center items-center  ">
                      <img src={spinner} alt="" srcset="" className="w-10" />
                    </div>
                  ) : (
                    <p>Withdrawal</p>
                  )}
                </button>
              </div>
              <div
                className="flex  justify-between mt-8
            max-md:justify-center      max-md:items-center  max-md:flex-col
            "
              >
                <div
                  className="flex justify-center items-center bg-gray-200 px-9  rounded-lg py-4
              max-md:px-2 max-md:mb-4
              max-md:py-2
              max-md:w-10/12 
              "
                >
                  <img src={balance} alt="" className="max-md:w-2" />
                  <p className="ml-4  max-md:text-xs">BALANCE: </p>
                  <p className="ml-4 text-blue-800 font-bold text-xl  max-md:text-xs">
                    $ {user.userAccountBalance}
                  </p>
                </div>

                <div
                  className="flex justify-center items-center bg-gray-200 px-9  rounded-lg py-4
               max-md:px-2 max-md:mb-4 
              max-md:py-2
              max-md:w-10/12 
              "
                >
                  <img src={invested} alt="" className="  max-md:w-2" />
                  <p className="ml-4  max-md:text-xs  max-md:ml-3  max-md:lowercase">
                    INVESTED:{" "}
                  </p>
                  <p className="ml-4 text-blue-800 font-bold text-xl  max-md:text-xs max-md:ml-1">
                    ${user.userIsAccepted ? userInvested : 0.0}
                  </p>
                </div>

                <div
                  className="flex justify-center items-center bg-gray-200 px-9  rounded-lg py-4 
              max-md:py-2
              max-md:w-10/12 max-md:mb-0
              "
                >
                  <img src={withdrawl} alt="" className="  max-md:w-2" />
                  <p className="ml-4  max-md:text-xs  max-md:ml-3  max-md:lowercase">
                    WITHDREW:{" "}
                  </p>
                  <p className="ml-4 text-red-800 font-bold text-xl  max-md:text-xs max-md:ml-1">
                    $ {total < 0 ? total : 0}
                    {/* {user.userWithdrawalTotal} */}
                  </p>
                </div>
              </div>
              <table
                id="customers"
                className="mt-14 max-md:text-xs max-md:mt-4"
              >
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
                  <td>{total}</td>
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
        )}
      </div>
    </>
  );
}

export default UserAccount;
