import './css/Testimonials.css'
import user_1 from '../assets/user-1.png'
import user_2 from '../assets/user-2.png'
import user_3 from '../assets/user-3.png'
import user_4 from '../assets/user-4.png'
import back_icon from '../assets/back-icon.png'
import next_icon from '../assets/next-icon.png'
import { useRef } from 'react'


const Testimonials = () => {
  
  const slider = useRef()
  let tx = 0

  const singleForword =()=>{
    if (-50 < tx){
      tx-=25
    }
    slider.current.style.transform = `translateX(${tx}%)`

  }

  const singleBackword =()=>{
    if (0 > tx){
      tx+=25
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  return (
    <div className='testimonials_container' id='testimonials'>
        <div className="slider_container">
          <h5 className="testimonial_text">TESTIMONIALS</h5>
          <h1 className="testimonial_head">What Student Says</h1>
          <div className="arrows">
            <img src={back_icon} alt="" className='back_icon' onClick={singleBackword} />
            <img src={next_icon} alt="" className='next_icon' onClick={singleForword}/>
          </div>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="user_profile">
                <img src={user_1} alt="" />
                <div className="details">
                  <h3 className="user_name">alia bhatt</h3>
                  <p className="location">Tamilnadu,INDIA</p>
                </div>
              </div>
              <p className="review">Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </li>
            <li>
              <div className="user_profile">
                <img src={user_2} alt="" />
                <div className="details">
                  <h3 className="user_name">Rohit sharma</h3>
                <p className="location">Tamilnady,INDIA</p>
                </div>
              </div>
              <p className="review">Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </li>
            <li>
              <div className="user_profile">
                <img src={user_3} alt="" />
                <div className="details">
                  <h3 className="user_name">Nayanthara</h3>
                <p className="location">Tamilnady,INDIA</p>
                </div>
              </div>
              <p className="review">Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </li>
            <li>
              <div className="user_profile">
                <img src={user_4} alt="" />
                <div className="details">
                  <h3 className="user_name">Jack sharma</h3>
                <p className="location">Tamilnadu,INDIA</p>
                </div>
              </div>
              <p className="review">Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </li>
          </ul>
        </div>
        </div>
    </div>
  )
}

export default Testimonials