
import React, { useEffect } from 'react';
import image from '../routes/images/background.jpg';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';

const Hero = () => {
  useEffect(() => {
    try {
      const typed = new Typed(".text", {
        strings: ["FRONTEND DEVELOPER"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        backDelay: 1000,
      });
      return () => {
        typed.destroy();
      };
    } catch (error) {
      console.error("Error initializing Typed.js:", error);
    }
  }, []);

  return (
    <div className="hero">
      <div className="hero-image">
        <img className="img" src={image} alt="Computer" />
      </div>
      <div className="content">
        <h1 style={{ fontSize: "3rem", color: "wheat" }}>
          HI I'M{" "}
          <span className="text" style={{ fontSize: "3rem", color: "brown" }}></span>
        </h1>
        <div style={{ marginTop: "2rem" }}>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <button style={{ backgroundColor: "brown", color: "black", border: "none",padding: '16px 25px', borderRadius: '1rem', fontWeight: "bold", cursor: "pointer", fontSize: '20px'}} >Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
