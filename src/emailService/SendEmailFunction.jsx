import emailjs from "@emailjs/browser";

export const sendEmail = () => {
//     e.preventDefault();
//   emailjs.sendForm("serviceID" , "templateid" ,e.target ,   "publicKEy" );
//   emailjs.sendForm("service_4pho89o" , "template_2lfl9hx" ,{} ,   "vi6_bsb5AMeM-KTqK" );

  var templateParams = {
    name: 'James',
    notes: 'Check this out!'
};
  emailjs.send('service_4pho89o', 'template_2lfl9hx', templateParams , "vi6_bsb5AMeM-KTqK")
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
};
