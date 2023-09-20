import React, { useState } from 'react'
import './Header.scss';
import Logo from '../assets/images/header/logo.svg'
import { AiOutlineSearch } from 'react-icons/ai' 
import { NavLink } from 'react-router-dom';
import { useKeyword } from './context/KeywordContext';

const Header = ({ onKeywordChange }) => {
  const [dropdown, setDropdown] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const { keyword, updateKeyword } = useKeyword();

  const handleInputChange = (event) => {
    const newKeyword = event.target.value;
    updateKeyword(newKeyword); // Update the keyword in the context
  };

  return (
    <header>
        <nav>
          <div className="navbar">
            <div className="navbar-top">
              <div className="container">
                <ul className='navbar-categories'>
                  <NavLink><li className='navbar-category-links'>News</li></NavLink>
                  <NavLink><li className='navbar-category-links'>Innovaton</li></NavLink>
                  <NavLink><li className='navbar-category-links'>Science</li></NavLink>
                  <NavLink><li className='navbar-category-links'>Industry</li></NavLink>
                </ul>
                <ul className='navbar-social-media'>
                  <NavLink><li className='navbar-social-media-links'>Ig</li></NavLink>
                  <NavLink><li className='navbar-social-media-links'>Tw</li></NavLink>
                  <NavLink><li className='navbar-social-media-links'>Fb</li></NavLink>
                  <NavLink><li className='navbar-social-media-links'>Yt</li></NavLink>
                </ul>
              </div>
            </div>
            <div className="navbar-bottom">
              <div className="container">
                <ul className='navbar-page-links'>
                  <NavLink to={'/'}><li className='navbar-page-link navbar-logo'><img src={Logo} alt="logo"/></li></NavLink>
                  <NavLink><li className='navbar-page-link'>Home</li></NavLink>
                  <NavLink><li className='navbar-page-link'>Feature</li></NavLink>
                  <NavLink><li className='navbar-page-link'>Shop</li></NavLink>
                  <NavLink><li className='navbar-page-link'>Gallery</li></NavLink>
                  <NavLink><li className='navbar-page-link'>Blog</li></NavLink>
                  <NavLink><li className='navbar-page-link'>About</li></NavLink>
                  <NavLink><li className='navbar-page-link'>Contact</li></NavLink>
                </ul>
                <ul className='navbar-features'>
                  <li className='navbar-search' onClick={() => setDropdown(!dropdown)}>
                    <AiOutlineSearch />
                  </li>
                  <li className='navbar-button'>
                    <button>Subscribe</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className={`navbar-search-dropdown ${dropdown ? 'dropdown-open' : ''}`}>
          <div className="container">
            <input type="text" placeholder='Search topic what you want to know' onChange={handleInputChange} />
            <button className='dropdown-button' onClick={() => setDropdown(!dropdown)}><AiOutlineSearch /></button>
          </div>
        </div>
    </header>
  )
}

export default Header