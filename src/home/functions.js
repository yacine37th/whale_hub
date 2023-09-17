// import { collection, getDocs, query } from "firebase/firestore";
// import { useState } from "react";
// import { db } from "../firebase/firebase";

import { signOut } from "firebase/auth";

// const q = query(collection(db, "users"));
// const recent_deposits = query(collection(db, "recent_deposits"));
// export const [data, setdata] = useState([]);
// export const [recents, setrecents] = useState([]);
// export  const [date, setdate] = useState("");
// const userArray = [];
// const recentsArray = [];
// export const getdata = async () => {
//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.data());
//     if (userArray.indexOf(doc.data()) === -1) {
//       userArray.push(doc.data());
//       console.log(userArray);
//     }
//     // userArray.push(doc.data())
//   });
//   setdata(userArray);
//   // console.log("====================================");
//   // console.log(userArray);
//   // console.log(userArray.length);
//   // console.log("====================================");
// };

// export const get_recent_deposits = async () => {
//   const querySnapshot = await getDocs(recent_deposits);
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.data());
//     if (recentsArray.indexOf(doc.data()) === -1) {
//       recentsArray.push(doc.data());
//       console.log(recentsArray);
//     }
//     // recentsArray.push(doc.data())
//   });
//   setrecents(recentsArray);
//   console.log("====================================");
//   console.log(recentsArray);
//   // console.log(recentsArray.length);
//   console.log("====================================");
// };

export const onLogout = (au) => {
    signOut(au)
      .then(() => {
        // Sign-out successful.
        setisLogin(false);
      })
      .catch((error) => {
        // An error happened.
      });
  };