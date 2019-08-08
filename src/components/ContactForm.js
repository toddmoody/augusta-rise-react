import React, { Component } from 'react';

import './css/ContactForm.css';

class ContactForm extends Component {
    render() {
      return (
        <div className="form-container">
            <form action="https://formspree.io/kaylah@barretthomes.co.nz" method="POST">
              <div className="form-row-one">
                <input className="form-name f-control" type="text" id="contact-name" name="contact-name" placeholder="Name" required />
                <input className="form-email f-control" type="email" id="contact-email" name="contact-email" placeholder="Email Address" required />
              </div>
              <div className="form-row-two">
                <input className="form-phone f-control" type="text" id="contact-phone" name="contact-phone" placeholder="Phone" />
                <input className="form-subject f-control" type="text" id="contact-subject" name="contact-subject" placeholder="Subject" required />
              </div>
              <div className="form-row-three">
                <textarea className="form-msg f-control" id="contact-message" name="contact-message" rows="1" placeholder="Your Message" required />
              </div>
              <button className="submit-btn" type="submit" id="contact-submit" name="contact-submit" value="submit">Send Message</button>
          </form>
        </div>
      );
    }
  }
  
  export default ContactForm;