import React from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
export const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bxyz292",
        "template_66cbsae",
        e.target,
        "236udK2u7CF43YT5D"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <form>
        <div>
          <img
            src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/mail-letter-offer-256.png"
            alt="icon"
          />
        </div>
        <input type="text" placeholder="Name (required)" required />
        <input type="text" placeholder="Return address (required)" required />
        <input type="text" placeholder="Topic (required)" required />
        <textarea placeholder="Subject (required)" required></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
