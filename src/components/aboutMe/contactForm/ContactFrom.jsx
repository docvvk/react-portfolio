import React, { Component } from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import * as emailjs from "emailjs-com";
import "jquery";

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      errors: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    };
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({ [name]: value });
  }

  validateMail() {
    let errors = {};
    let formIsValid = true;

    if (!this.state.name || this.state.name.length < 3) {
      errors.name = "Minimum 3 symbols";
      formIsValid = false;
    }
    if (!this.state.subject || this.state.subject.length < 3) {
      errors.subject = "Minimum 3 symbols";
      formIsValid = false;
    }
    if (!this.state.message || this.state.message.length < 10) {
      errors.message = "Minimum 10 symbols";
      formIsValid = false;
    }
    if (!this.state.email || this.state.email.length < 3) {
      errors.email = "Minimum 3 symbols";
      formIsValid = false;
    }

    let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!pattern.test(this.state.email)) {
      errors.email = "This is not a valid email";
      formIsValid = false;
    }

    this.setState({ errors });

    return formIsValid;
  }

  sentMessage(event) {
    event.preventDefault();

    if (!this.validateMail()) {
      return;
    }

    let template_params = {
      to_name: "Vivek",
      from_name: this.state.name,
      from_email: this.state.email,
      subject: this.state.subject,
      message_html: this.state.message
    };

    const service_id = "gmail";
    const template_id = "portfolio-1.0";
    const user_id = "user_lit2jnTmPLHaVuLTIbOmo";
    emailjs.send(service_id, template_id, template_params, user_id).then(
      function(res) {
        toastr.options = {
          closeButton: true,
          debug: false,
          newestOnTop: false,
          progressBar: true,
          positionClass: "toast-top-center",
          preventDuplicates: true,
          showDuration: "300",
          timeOut: "2000",
          showEasing: "swing",
          hideEasing: "linear",
          showMethod: "slideDown",
          hideMethod: "slideUp"
          // "onclick": function() { toastr.warning('HEY WHATS UPP..HAVING FUN :)'); }
        };
        toastr.clear();
        setTimeout(() => toastr.success(`MESSAGE SENT SUCCESSFULLY !!`), 300);
        console.log("SUCCESS!", res.status, res.text);
      },
      function(err) {
        toastr.error(err);
        console.log(err);
      }
    );

    this.setState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  }

  render() {
    return (
      <div className="contactUs">
        <form
          id={this.props.id}
          className={this.props.className}
          name={this.props.name}
          method={this.props.method}
          action={this.props.action}
        >
          <Input
            type="text"
            name="name"
            // style={{ fontFamily:"monospace" }}
            className="form-control"
            required="required"
            onChange={this.handleInputChange.bind(this)}
            value={this.state.name}
            error={this.state.errors.name}
          />

          <Input
            type="email"
            name="email"
            className="form-control"
            required="required"
            onChange={this.handleInputChange.bind(this)}
            value={this.state.email}
            error={this.state.errors.email}
          />

          <Input
            type="text"
            name="subject"
            className="form-control"
            required="required"
            onChange={this.handleInputChange.bind(this)}
            value={this.state.subject}
            error={this.state.errors.subject}
          />

          <Textarea
            name="message"
            id="message"
            required="required"
            className="form-control"
            rows="3"
            onChange={this.handleInputChange.bind(this)}
            value={this.state.message}
            error={this.state.errors.message}
          />

          <Button
            onClick={this.sentMessage.bind(this)}
            type="button"
            name="submit"
            className="btn btn-primary btn-lg"
            required="required"
          />
        </form>
      </div>
    );
  }
}

export default ContactForm;
