import './Header.css'

import logo from './images/logo.jpg'

const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt="" />
        <h1>Dog Breed</h1>
    </div>
  )
}

export default Header