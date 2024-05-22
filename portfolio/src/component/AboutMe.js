import React from 'react'
import img1 from '../routes/images/work1.jpg';
import Button from '@mui/material/Button';

const aboutMe = () => {
  return (
    <div className='about-wrapper'>
      <div className='about-img'>
        <img className='img' src={img1} alt='pic'/>
      </div>
      <div className='main-info'>
        <h1 style={{color: "wheat", fontWeight: "bold"}}>About Me</h1>
        <p style={{color: "white", marginTop: "1rem", textAlign: "center"}}>Hardworking student, starting my career as web developer, I aim to
          create astonishing websites, having vast knowledge and some hands on
          experience in frontend technologies, and learning new things everyday.
        </p>
        <a href='https://github.com/MunibaGhayas/cv.github.io'>
        <Button variant="contained" style={{backgroundColor: "white", color: "black", marginTop: "1.5rem"}} >More About Me</Button>
        </a>
        
      </div>
      
    </div>
  )
}

export default aboutMe
