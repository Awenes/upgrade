import logo from '../../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <ul className='Poppins'>
            <li>Personal Loan</li>
            <li>One Card</li>
            <li>Savings</li>
            <li>Checking</li>
            <li>Help</li>
        </ul>
        <button className="signin">Sign In</button>
      </nav>
    </div>
  )
}

export default Navbar
