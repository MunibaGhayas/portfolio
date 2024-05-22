import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = ()=>{
    setClick(!click);
  }
  return (
    <div className="header">
        <Link to="/">PORTFOLIO</Link>
      <ul className={click ? "nav active" : "nav"}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/project">Project</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (
          <CloseIcon style={{ color: "brown", width: "36px", height: '30px', marginRight: '0.5rem'}} />
         ) : (
          <MenuIcon  style={{color: "brown", width: "35px", height: '30px', marginRight: '0.5rem'}}/>
        )}

      </div>
    </div>
  )
}

export default Navbar
