import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { db } from "../firebase/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export const signIN = async (au, em, pa) => {
   if (em === "" || pa === "") {
    alert("Please Enter Email and Password");
  } else {
    const res = await signInWithEmailAndPassword(au, em, pa)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(userCredential);          
        alert("Login Success");

        console.log("deded");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.code);
        console.log("test");
        if (error.code === "auth/invalid-email") {
          alert("Please enter Valid Email");
        }
      });
  }
};

export const register = async (
  au,
  em,
  pa,
  fullName,
  username,
  betcoinAccount,
  usdt,
  Baridymob
) => {
  if (em === "" || pa === "") {
    alert("Please Enter Email and Password");
  } else {
    var currentdate = new Date(); 
    var datetime =  + currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/" 
    + currentdate.getFullYear()

    console.log("datetime");
    console.log(datetime);
    await createUserWithEmailAndPassword(au, em, pa)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.uid);
        try {
          setDoc(doc(db, "users", user.uid), {
            userFullName: fullName,
            userName: username,
            userBitcoinAccount: betcoinAccount,
            userUSDWallet: usdt,
            userBaridyMob: Baridymob,
            userEmail: em,
            userPassword: pa,
            userID: user.uid,
            userRegistrationDate : datetime,
            userLastAccess : datetime,
            userAccountBalance : 0.00,
            userEarnedTotal: 0.00,
            userPendingWithdrawal : 0.00,
            userWithdrawalTotal : 0.00,
            userActiveDeposit :  0.00,
          });
          //      const docRef =  addDoc( user.uid, collection(db, "users"), {
          //   email : email,
          //   userid : auth.currentUser.uid
          // });
          // console.log("Document written with ID: ", docRef.id);
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
      });
  }
};

export const forgotPassword = async (au, em) => {
  try {
    if (em === "") {
      alert("Please enter Valid Email");
    } else {
      const res = await sendPasswordResetEmail(au, em);
      console.log(res);
      //  toast("Wow so easy!");
      alert(`An Email Has been sent to : ${em} Please Check your email.`);
    }
  } catch (error) {
    if (error.code === "auth/invalid-email") {
      alert("Please enter Valid Email");
    }
  }

  // console.log(error);

  // toast.error("Could not send reset email");
};
