import React from 'react'
import './css/Contactus.css'
import msg_icon from '../assets/msg-icon.png'
import mail_icon from '../assets/mail-icon.png'
import phone_icon from '../assets/phone-icon.png'
import location_icon from '../assets/location-icon.png'
import white_arrow from '../assets/white-arrow.png'

const Contactus = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d5e33061-a08e-4da5-9313-6a0f05190ec0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact'>
        <h5 className='contact_head'>CONTACT US</h5>
        <h1 className='contact_para'>Get in Touch</h1>
        <div className="contact_container">
            <div className="contact_left">
                <h2>Send us a message
                    <img src={msg_icon} alt="" />
                </h2>
                <p className="contact_info">Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <h5>
                    <img src={mail_icon} alt="" className='mail_icon' />
                    Contact@edusity.in
                </h5>
                <h5>
                    <img src={phone_icon} alt="" className='phone_icon' />
                    +91 9873927897
                </h5>
                <h5>
                    <img src={location_icon} alt="" className='location_icon' />
                    7,bharathi street,mit flower,chromepet,chennai
                </h5>
            </div>
            <div className="contact_right">
                <form onSubmit={onSubmit} action="submit" className='contact_form'>
                    <label htmlFor="name">Your name</label>
                    <input className='input' type="text" placeholder='Enter your name' id='name' required />
                    <label htmlFor="phone">Phone number</label>
                    <input className='input' type="tel" placeholder='Enter your phone number' id='phone' required />
                    <label htmlFor="email">Your Email</label>
                    <input className='input' type="email" placeholder='Enter Your email id' id='email' required />
                    <label htmlFor="message">Write you message here</label>
                    <textarea className='input' name="message" id="message" rows={6} placeholder='Enter your message' required></textarea>
                    <button type='submit' className='submit_btn'>Submit now <img src={white_arrow} alt="" /></button>
                </form>
                <span className='process_msg'>{result}</span>
            </div>
        </div>
    </div>
  )
}

export default Contactus