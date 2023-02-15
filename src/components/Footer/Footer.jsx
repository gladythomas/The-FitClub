import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'
function Footer() {
  return (
    <div className="Footer-container">

    <hr />

    <div className="footer">
    <div className="social-links">

        <a href='https://github.com/gladythomas' target='_blank'><img src={Github} style={{width:50}}/></a>
        <a href="https://www.instagram.com/" target="_blank" >  <img src={Instagram} style={{width:50}} alt="" /></a>

      
       <a href='https://www.linkedin.com/in/glady-thomas-4b66a31b1/' target='_blank'><img src={Linkedin} style={{width:50}} alt="" /></a> 
    </div>
<div className="logo-f">
    <img src={Logo} alt="" />
</div>
    </div>

    </div>
    
  )
}

export default Footer
