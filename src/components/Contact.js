import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">

      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>
          Get in touch with us by filling the form, your suggestions and reviews
          matter a lot to us.
        </p>
      </div>
      
      <div className="form-container">
        <label htmlFor="First-name">First Name</label>
        <input type="text" id="First-name" />
        <label htmlFor="Last-name">Last Name</label>
        <input type="text" id="Last-name" />
        <label htmlFor="Email">Email</label>
        <input type="email" id="Email" />
        <label htmlFor="Message">What can we help you with</label>
        <input type="text" id="Message" />
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default Contact;
