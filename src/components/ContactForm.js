import React, { Component } from 'react';

class ContactForm extends Component {
    render() {
      return (
        <div id="contact-form">
            <form action="https://formspree.io/todd@moodsdigital.co.nz" method="POST">
              <div>
                <input className="" type="text" id="contact-name" name="contact-name" placeholder="name" required />
                <input className="" type="email" id="contact-email" name="contact-email" placeholder="email address" required />
              </div>
              <div>
                <input className="" type="text" id="contact-phone" name="contact-phone" placeholder="phone" />
                <input className="" type="text" id="contact-subject" name="contact-subject" placeholder="subject" required />
              </div>
              <div>
                <textarea className="" id="contact-message" name="contact-message" placeholder="Your message" />
              </div>
              <button className="" type="submit" id="contact-submit" name="contact-submit" value="submit">Send Message</button>
          </form>
        </div>
      );
    }
  }
  
  export default ContactForm;