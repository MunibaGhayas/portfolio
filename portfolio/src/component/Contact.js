import React from 'react'
import { useState } from 'react';
import img1 from '../routes/images/work1.jpg';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const serviceId = 'service_g568dym';
  const publicKey = 'rf_CERuKaKN9FkIjC';
  const templateId = 'template_ew0orrw';

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response);
        alert('Message sent successfully!');
      });
  }
  return (
    <div className='contact'>
      <div className='contact-img'>
        <img className='img'src={img1} alt='pic'/>
      </div>
      <div className='container'>
        <div className='contact-info'>
          <p>Feel free to contact me!</p>
        </div>
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input type='text' value={name} onChange={(e)=> setName(e.target.value)}></input> 
            <label>Email</label>
            <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)}></input> 
            <label>Message</label>
            <textarea placeholder='your message here' rows={5} value={message} onChange={(e)=> setMessage(e.target.value)}/>
            <button className='contact-btn' type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
