import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.scss';



export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jtk7pi4', 'template_81bninu', form.current, 'user_S2ygykPghTx3idW7GW8r6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className="contact">
        <form ref={form} onSubmit={sendEmail}>
            <div className="input-content">
                <input type="text" name="user_name" placeholder="Nom"/>
            </div>
            <div className="input-content">
                <input type="email" name="user_email" placeholder="Email"/>
            </div>
            <div className="input-content-message">
                 <input type="text" name="message" placeholder="Votre Message" />
            </div>
            <div className="input-content-validation">
                <input type="submit" value="Send" />
            </div>
        </form>
    </div>
  );
};

export default Contact;