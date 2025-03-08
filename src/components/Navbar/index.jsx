import './index.css'
import netflixLogo from '../../assets/netflix-logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img 
        src={netflixLogo} 
        alt='netflix=logo' 
        width={150}
      />
      <div>
        <select className='language-select'>
          <option value='english'>English</option>
          <option value='hindi'>Hindi</option>
          <option value='french'>French</option>
          <option value='german'>German</option>
        </select>
        <button className='signin-btn'>
          Sign In
        </button>
      </div>
    </div>
  )
}

export default Navbar