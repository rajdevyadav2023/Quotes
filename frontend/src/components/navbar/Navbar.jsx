import { useState } from 'react';
import './navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsActive(!isActive);
  }
  return (
    <div className='navbar'>
      <div className="logo" onClick={()=>navigate('/')}>
        <span className="fn">Q</span><span className="ln">uotes</span>
      </div>

      <nav>
        <div className="show-nav">
          <button onClick={handleClick}><i className="fa-solid fa-bars"></i></button>
        </div>

        <ul id='sm-nav' className={isActive?"active-nav":""}>
          <div className="hide-nav">
            <button onClick={handleClick}><i className="fa-solid fa-xmark"></i></button>
          </div>
          <li><NavLink to={'/motivational'}>Motivational</NavLink></li>
          <li><NavLink to={'/positive'}>Positive</NavLink></li>
          <li><NavLink to={'/success'}>Success</NavLink></li>
          <li><NavLink to={'/dreams'}>Dreams</NavLink></li>
        </ul>

        <ul id='lg-nav'>
          <li><NavLink to={'/motivational'}>Motivational</NavLink></li>
          <li><NavLink to={'/positive'}>Positive</NavLink></li>
          <li><NavLink to={'/success'}>Success</NavLink></li>
          <li><NavLink to={'/dreams'}>Dreams</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar