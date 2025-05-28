import React from 'react'
import copyright from '../assets/copyright-icon.svg'
import './css/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <hr className='horizontal_line'/>
        <div className="footer_contents">
            <p className="copyrights"><img src={copyright} alt="" /> 2025 Edusity.All rights reserved.</p>
            <div className="terms_policy">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            </div>
        </div>
    </div>
  )
}

export default Footer