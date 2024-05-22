import React from 'react';
import { useEffect } from 'react';
import image from '../routes/images/work1.jpg';
import Typed from 'typed.js';

const Hero2 = () => {
  useEffect(() => {
    const options = {
      strings: ["WHAT I HAVE DONE SO FAR"],
      typeSpeed: 50,
      backSpeed: 100,
      loop: true,
      backDelay: 1000,
    };

    const typed = new Typed(".work", options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
      <div className='project'>
        <div className="pro-image">
          <img className="img" src={image} alt="Computer" />
        </div>
        <div className='content'>
          <h1 style={{color: "wheat", fontWeight: "bold", fontSize: "2rem"}}>MY WORK</h1>
          <span
            className="work"
            style={{ fontSize: "1.5rem", color: "brown", textAlign: "center" }}
          ></span>{" "}
        </div>
      </div>      
  )
}
export default Hero2;
