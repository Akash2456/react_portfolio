import "./FooterStyles.css";

import React from 'react'

import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                   <FaHome size={20} style={{color:"white", marginRight:"2rem"}}/>
                   <div>
                    <p>Ward NO. 14 Gandhi Path</p>
                    <p>Bihar India</p>
                   </div>
                </div>
                <div className="phone">
                  <h4><FaPhone size={20} style={{color:"white", marginRight:"2rem"}}/> 99710 82860</h4>
                </div>
                <div className="email">
                  <h4><FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}}/>akashbharti05071995@gamil.com</h4>
                </div>
            </div>
            <div className="right">
              <h4>About Myself</h4>
              <p>This is Akash Bharti.I am learning webdevelopment & my aim to become fullstack developer.I enjoy daily challenges, project design </p>
              <div className="social">
                <FaFacebook size={30} style={{color:"white", marginRight:"1rem"}}/>
                <FaTwitter size={30} style={{color:"white", marginRight:"1rem"}}/>
                <FaInstagram size={30} style={{color:"white", marginRight:"1rem"}}/>
                <FaLinkedin size={30} style={{color:"white", marginRight:"1rem"}}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer