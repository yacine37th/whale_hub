import React, { useEffect, useState } from "react";
import HomeNavBar from "../home/HomeNavBar";
import NavBarAuth from "../auth/NavBarAuth";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db, userCollection } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import "./user.css";
import { Link } from "react-router-dom";
import arrow from "./img/images.png";

function UserAccount() {
  const [user, setuser] = useState({});

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

  return (
    <>
      <div className=" bg-gray-0 ">
        <NavBarAuth />

        <div
          className=" user flex jus w-screen absolute left-0 top-14 bg-gray-100  max-[600px]:pt-6
max-[600px]:top-20
        "
        >
          <div
            className="flex flex-col bg-white  m-8 h-56 rounded-lg p-4 max-[600px]:p-2  max-[600px]:m-0
       
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
                className="group-hover:scale-150 group-hover:mr-2 "
              />
            </Link>
            <Link className="max-[600px]:text-xs mt-2 max-[600px]:lowercase   group             flex items-center justify-between           text-black">
              <p>MAKE DEPOSIT</p>
              <img
                src={arrow}
                width={8}
                alt=""
                className="group-hover:scale-150 group-hover:mr-2 "
              />
            </Link>
            <Link className="max-[600px]:text-xs mt-2 uppercase max-[600px]:lowercase    group          flex items-center justify-between           text-black">
              <p>Withdrawal</p>
              <img
                src={arrow}
                width={8}
                alt=""
                className="group-hover:scale-150 group-hover:mr-2 "
              />
            </Link>
            <Link className="max-[600px]:text-xs mt-2 uppercase max-[600px]:lowercase      group       flex items-center justify-between           text-black">
              <p>user deposit</p>
              <img
                src={arrow}
                width={8}
                alt=""
                className="group-hover:scale-150 group-hover:mr-2 "
              />
            </Link>
            <Link className="max-[600px]:text-xs mt-2 uppercase max-[600px]:lowercase   group flex items-center justify-between           text-black">
              <p> transactions </p>

              <img
                src={arrow}
                width={8}
                alt=""
                className="group-hover:scale-150 group-hover:mr-2 "
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
              <button
                className=" w-44  p-2 backGround  border-white   text-white  text-base
               hover:border-white rounded-2xl
              max-[600px]:text-xs  max-[600px]:p-0    max-[600px]:w-28 focus:outline-none
               "
              >
                MAKE A DEPOSIT
              </button>
              <button
                className="w-44   p-2 backGround  border-white   text-white  text-base
              rounded-2xl  hover:border-white
              max-[600px]:w-20 max-[600px]:text-xs  focus:outline-none uppercase
              "
              >
                Withdrawal
              </button>
            </div>

            <table id="customers" className="mt-14 max-[600px]:text-xs">
              <tr>
                <td>User :</td>
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
