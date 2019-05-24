import React, { Component } from "react";
import ContactForm from "./contactForm/ContactFrom";

class ContactPage extends Component {
  render() {
    return (
      <div id="contact-page">
          <div className="contact-wrap">
            <div
              className="status alert alert-success"
              style={{ display: "none" }}
            />
              <ContactForm
                id="main-contact-form"
                className="contact-form"
                name="contact-form"
                method="post"
                action=""
              />
          </div>
        </div>
    );
  }
}

export default ContactPage;
