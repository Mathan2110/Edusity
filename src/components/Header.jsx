import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import './css/header.css'

const Header = () => {
  const [sticky,setSticky] = useState(false) 

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 100 ? setSticky(true) :setSticky(false)
    })
  },[])

  return (
    <nav className={`nav_container ${sticky ? 'nav_dark' : ''}`}>
        <div className='logo'>
            <img src={logo} alt="" />
        </div> 

        <div className='nav_links'>
          <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <button className='contact_btn'>Contact us</button>
          </ul>
        </div>
    </nav>
  )
}

export default Header; 