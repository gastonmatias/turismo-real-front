import emailjs from '@emailjs/browser';

export const sendEmailJS = (username,user_email,id_reservation) => {
  
  const templateParams = {
    username,user_email,id_reservation
  }

  emailjs.send(
      'service_1bwnlso', // service id
      'template_g5o2mrx', //template id
      templateParams, 
      'djlLRorjHrA7GDgXN' //public key
  )
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
      
};
