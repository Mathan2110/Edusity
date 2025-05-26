import about from '../assets/about.png'
import './css/Aboutus.css'
import play_icon from '../assets/play-icon.png'

const Aboutus = () => {
  return (
    <div className="about_container">
        <div className="about_img">
            <img src={about} alt="" />
            <div className="play_icon">
              <img src={play_icon} alt="" />
            </div>
        </div>
        <div className="about">
            <h4 className='about_text'>ABOUT UNIVERSITY</h4>
            <h1 className='about_head'>Nurturing Tomorrow's </h1>
            <h1 className='about_head'>Leaders Today </h1>
            <p className='about_text2 '>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
            <p className='about_text2'>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>

            <p className='about_text2'>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
        </div>
    </div>
  )
}

export default Aboutus