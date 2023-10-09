import emailjs from "@emailjs/browser";
import { useRef } from "react";

export const sendEmail = () => {
  //     e.preventDefault();
  //   emailjs.sendForm("serviceID" , "templateid" ,e.target ,   "publicKEy" );
  //   emailjs.sendForm("service_4pho89o" , "template_2lfl9hx" ,{} ,   "vi6_bsb5AMeM-KTqK" );

  var templateParams = {
    name: "James",
    notes: "Check this out!",
  };
  emailjs
    .send(
      "service_4pho89o",
      "template_2lfl9hx",
      templateParams,
      "vi6_bsb5AMeM-KTqK"
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
};
export const formDATA = () => {
   const first = useRef()

  return (
    <form
      ref={first}
      className="flex flex-col flex-1 ml-48 max-[600px]:ml-0
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
        value={'nstitouah@gmail.com'}
      />{" "}
      {/* <label>Message</label> */}
      <textarea
        id="txtid"
        name="message"
        rows="4"
        cols="50"
        maxlength="200"
        placeholder="your message ..."
        value={'nstitouah@gmail.comsdddddddddddd'}

        className="border border-black p-4 m-2 focus:outline-none             max-[600px]:p-1      max-[600px]:w-56   "
      />
      <input
        type="submit"
        value="Send"
        className="bg-blue-800 p-5 text-white w-full mt-4 "
      />
    </form>
  );
};
