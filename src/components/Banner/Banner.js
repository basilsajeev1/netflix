import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
      <div className='bannerContent'>
        <h2>Money Heist</h2>
        <div className="bannerButtons">
        <button className='bannerButton'>Play</button>
        <button className='bannerButton'>My List</button>
        </div>
        <h5 className='bannerDescription'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</h5>
      </div>
      <div className='fade'></div>
    </div>
  )
}

export default Banner
