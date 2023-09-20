import React, { Fragment } from 'react'
import './Footer.scss'

import Logo from '../assets/images/footer/logo.svg'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <Fragment>
      <section id='contact'>
        <div className="container">
          <div className="contact">
            <div className="contact-info">
              <h1>Sign Up for Our Newsletters</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>
            <div className="contact-input">
              <input type="email" placeholder='Input your email address here'/>
              <button type='submit'>Subscribe Now</button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="footer-logo">
              <NavLink to={'/'}><img src={Logo} alt="" /></NavLink>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>
            <div className="footer-links">
              <ul className="footer-category">
                <li className='footer-category-item'>Categories</li>
                <li className='footer-category-item'><NavLink>International</NavLink></li>
                <li className='footer-category-item'><NavLink>Regional</NavLink></li>
                <li className='footer-category-item'><NavLink>Politics</NavLink></li>
                <li className='footer-category-item'><NavLink>Business</NavLink></li>
                <li className='footer-category-item'><NavLink>Sports</NavLink></li>
                <li className='footer-category-item'><NavLink>Health</NavLink></li>
              </ul>
              <ul className="footer-company">
                <li className='footer-company-item'>Company</li>
                <li className='footer-company-item'><NavLink>About Us</NavLink></li>
                <li className='footer-company-item'><NavLink>Careers</NavLink></li>
                <li className='footer-company-item'><NavLink>Privacy Policy</NavLink></li>
                <li className='footer-company-item'><NavLink>Terms Of Services</NavLink></li>
                <li className='footer-company-item'><NavLink>Contact Us</NavLink></li>
              </ul>
              <ul className="footer-social-media">
                <li className='footer-social-media-item'>Social Media</li>
                <li className='footer-social-media-item'><NavLink>Youtube</NavLink></li>
                <li className='footer-social-media-item'><NavLink>Instagram</NavLink></li>
                <li className='footer-social-media-item'><NavLink>Facebook</NavLink></li>
                <li className='footer-social-media-item'><NavLink>Twitter</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            Copyright Tanah Air Studio
          </div>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer