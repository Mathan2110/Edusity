import './css/Home.css'
import arrow from '../assets/dark-arrow.png'

const Home = () => {
  return (
    <div className='container'>
        <h1 className='head'>We ensure better education for a better world</h1>
        <p className='text'>Our cutting-edge curriculum is designed to empower students with the knowledge,skills,and experience needed to excel in the dynamic field of education</p>
        <button className='explore_btn'><h5>Explore more</h5>
            <div className='arrow'>
                <img src={arrow} alt="" />
            </div>
        </button>
    </div>
  )
}

export default Home