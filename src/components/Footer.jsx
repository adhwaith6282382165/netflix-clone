import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center flex-column mt-5 bg-dark pt-5 '>
        <div className='d-flex a justify-content-evenly'>
          <div className='overview' style={{ width: '400px' }}>
            <h5>
              <i className="fa-solid fa-video fa-beat text-warning me-3"></i>
              <span style={{ color: 'white' }}>MEDIA PLAYER</span>
            </h5>
            <p style={{ color: 'white', textAlign: 'justify' }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non placeat reiciendis consequatur natus fuga, eius voluptatum! Labore impedit cupiditate quis consequatur minima quo delectus, pariatur odit nobis ex. Dignissimos, veritatis.
            </p>
          </div>

          <div className='links d-flex flex-column ms-3' style={{ color: 'white' }}>
            <h5>LINK</h5>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}> LANDING PAGE</Link>
            <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>HOME</Link>
            <Link to="/watch" style={{ textDecoration: 'none', color: 'white' }}>WATCH HISTORY</Link>
          </div>

          <div className='links d-flex flex-column ms-3' style={{ color: 'white' }}>
            <h5>GUIDES</h5>
            REACT
            <br />
            REACT BOOTSTRAP
            <br />
            FONT AWESOME
          </div>

          <div className='contact-us ms-3'>
            <h5 className='textStyle'>CONTACT US</h5>
            <div className='d-flex'>
              <input type="text" placeholder='Enter Your Email' className='form-control' />
              <button className='btn btn-warning ms-3'>SUBSCRIBE</button>
            </div>
            <div className='d-flex justify-content-between align-items-center mt-3' style={{ color: 'white' }}>
              <i class="fa-brands fa-instagram fa-2x"></i>
              <i class="fa-brands fa-whatsapp fa-2x"></i>
              <i class="fa-brands fa-twitter fa-2x"></i>
              <i class="fa-brands fa-telegram fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center mt-3' style={{ color: 'white' }}>COPY RIGHT &copy; 2025 MEDIA PLAYER BUILT WITH REACT</p>

    </>
  )
}

export default Footer;
