// Write your code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        className="mobile-image"
        alt="home"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        className="desktop-image"
        alt="home"
      />
    </div>
  </div>
)

export default Home
