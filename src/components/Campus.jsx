import React from 'react'
import image1 from '../assets/gallery-1.png'
import image2 from '../assets/gallery-2.png'
import image3 from '../assets/gallery-3.png'
import image4 from '../assets/gallery-4.png'
import white_arrow from '../assets/white-arrow.png'
import './css/Campus.css'

const Campus = () => {
  return (
    <div className='campus_container'>
        <h5 className="gallery_text">GALLERY</h5>
        <h1 className="campus_img_text">Campus Photos</h1>
        <div className="campus_images">
            <div className="image">
                <img src={image1} alt="" />
            </div>
            <div className="image">
                <img src={image2} alt="" />
            </div>
            <div className="image">
                <img src={image3} alt="" />
            </div>
            <div className="image">
                <img src={image4} alt="" />
            </div>
        </div>
        <button className="see_more_btn">See more here
            <img src={white_arrow} alt="" />
        </button>
    </div>
  )
}

export default Campus