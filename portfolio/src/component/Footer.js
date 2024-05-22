import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div
          className="social"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <a href="https://www.linkedin.com/in/muniba-ghayas-269544248/">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/MunibaGhayas">
            <GitHubIcon />
          </a>
        </div>
        <div className="footer-bottom">
          <p style={{ color: "white" }}>
            Copyright &copy; 2023; Designed by <span style={{color: "brown"}}>Muniba Ghayas</span>
          </p>
        </div>
      </div>
    </div>
  )
}
