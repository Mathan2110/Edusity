import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import './css/header.css'
import { Link } from 'react-scroll'
import menu_icon from '../assets/menu-icon.png'

const Header = () => {
  const [sticky,setSticky] = useState(false) 
  const [menu,setMenu] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 100 ? setSticky(true) :setSticky(false)
    })
  },[])

  const view_menu = ()=>{
    menu? setMenu(false) : setMenu(true)
  }

  return (
    <nav className={`nav_container ${sticky ? 'nav_dark' : ''}`}>
        <div className='logo'>
            <img src={logo} alt="" />
        </div> 

        <div className={menu?'nav_links show_menu':'nav_links '}>
          <div className="menu_icon" onClick={view_menu}>
            <img src={menu_icon} alt="" />
          </div>
          <ul>
            <li><Link to='home' smooth={true} duration={500} >Home</Link></li>
            <li><Link to='program' smooth={true} duration={500} offset={-50} >Program</Link></li>
            <li><Link to='about' smooth={true} duration={500} offset={-120} >About us</Link></li>
            <li><Link to='campus' smooth={true} duration={500} offset={-50}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} duration={500} offset={-120} >Testimonials</Link></li>
            <Link to='contact' smooth={true} duration={500} offset={-80} className='contact_btn'>Contact us</Link>
          </ul>
        </div>
    </nav>
  )
}

export default Header; 