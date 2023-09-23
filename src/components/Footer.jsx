import React, { Fragment } from 'react'
import './Footer.scss'

import Logo from '../assets/images/footer/logo.svg'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const submit = (e) => {
    e.preventDefault()
  }
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
              <form onSubmit={submit}>
                <input type="email" placeholder='Input your email address here'/>
                <button type='submit'>Subscribe Now</button>
              </form>
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
                <NavLink><li className='footer-category-item'>International</li></NavLink>
                <NavLink><li className='footer-category-item'>Regional</li></NavLink>
                <NavLink><li className='footer-category-item'>Politics</li></NavLink>
                <NavLink><li className='footer-category-item'>Business</li></NavLink>
                <NavLink><li className='footer-category-item'>Sports</li></NavLink>
                <NavLink><li className='footer-category-item'>Health</li></NavLink>
              </ul>
              <ul className="footer-company">
                <li className='footer-company-item'>Company</li>
                <NavLink><li className='footer-company-item'>About Us</li></NavLink>
                <NavLink><li className='footer-company-item'>Careers</li></NavLink>
                <NavLink><li className='footer-company-item'>Privacy Policy</li></NavLink>
                <NavLink><li className='footer-company-item'>Terms Of Services</li></NavLink>
                <NavLink><li className='footer-company-item'>Contact Us</li></NavLink>
              </ul>
              <ul className="footer-social-media">
                <li className='footer-social-media-item'>Social Media</li>
                <NavLink><li className='footer-social-media-item'>Youtube</li></NavLink>
                <NavLink><li className='footer-social-media-item'>Instagram</li></NavLink>
                <NavLink><li className='footer-social-media-item'>Facebook</li></NavLink>
                <NavLink><li className='footer-social-media-item'>Twitter</li></NavLink>
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