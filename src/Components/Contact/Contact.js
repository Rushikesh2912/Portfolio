import React, { useState } from 'react';
import '../Contact/Contact.css';
import sentImg from '../Images/sentMsg.png';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      event.target.submit();
    }, 2000);

  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-4 col-md-6 my-4">
          <h1 style={{ marginBottom: 0, fontWeight: 600 }}><i style={{ color: 'orange' }} class="fa-regular fa-address-book"></i> Contact</h1>
          <p className='my-3' style={{ fontFamily: 'monospace' }}>Anticipating the pleasure of your response with great interest and enthusiasm.</p>
          <div>
            <h4 style={{ marginBottom: 0, fontWeight: 600 }}> <i style={{ color: 'orange' }} class="fa-solid fa-phone"></i> Phone No.</h4>
            <p style={{ fontFamily: 'monospace' }}>+91 9623548002</p>
          </div>
          <div className="">
            <h4 style={{ marginBottom: 0, fontWeight: 600 }}> <i style={{ color: 'orange' }} class="fa-solid fa-envelope"></i> Email</h4>
            <a href="mailto:omkumar7828@gmail.com" style={{ fontFamily: 'monospace', textDecoration: 'none', color: '#000' }}>omkumar7828@gmail.com</a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <img className="img-fluid" src={sentImg} alt="Sent Message" />
        </div>
      </div>

      <hr style={{ color: 'orange' }} className="container m-5" />

      <div className="row justify-content-center">
        <form action="https://api.web3forms.com/submit" method="POST" className="col-lg-8 col-md-10 col-sm-12" onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="f324543e-d53f-470a-9d74-af905032776e" />
          <div className="row my-4">
            <div className="col">
              <label htmlFor="validationDefault01" className="form-label">First name</label>
              <input type="text" className="form-control" id="validationDefault01" name="first_name" required />
            </div>
            <div className="col">
              <label htmlFor="validationDefault02" className="form-label">Last name</label>
              <input type="text" className="form-control" id="validationDefault02" name="last_name" required />
            </div>
          </div>

          <div className="row my-4">
            <div className="col">
              <label htmlFor="validationDefault03" className="form-label">Email</label>
              <input type="email" className="form-control" id="validationDefault03" name="email" required />
            </div>
            <div className="col">
              <label htmlFor="validationDefault04" className="form-label">Subject</label>
              <input type="text" className="form-control" id="validationDefault04" name="subject" required />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="validationDefault05" className="form-label">Message</label>
              <textarea className="form-control" id='validationDefault05' name="message" rows="3" required></textarea>
            </div>
            <div className="col d-flex align-items-center justify-content-center">
              <button type="submit" className="mySpinner">
                <span className='circle-span'>Submit</span>
              </button>
            </div>
          </div>
        </form>

      </div>

      {formSubmitted && (
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-sm-12 text-center">
            <p className="mt-4">Thank you for your message. We will get back to you soon.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
