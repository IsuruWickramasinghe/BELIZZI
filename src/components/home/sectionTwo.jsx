import React from 'react'
import bodyImg2 from  '../../assets/bodyImg2.png'

function SectionTwo() {
  return (
    <div className='home-container section-two'>
      <div className="side-left">
        <h1 className="title">Why Choose Us ..</h1>
        <span>Choose us for unparalleled expertise, innovative solutions, and dedicated customer support.</span>

        <div className="sets">
          <div className="set-1">
            <h4><i className="ri-mail-send-line"></i></h4>
            <h4>Fast Delivery</h4>
            <p>Choose us for fast delivery, exceptional expertise, and dedicated customer support.</p>
          </div>
          <div className="set-2">
            <h4><i className="ri-chat-3-line"></i></h4>
            <h4>Communication</h4>
            <p>Choose us for fast delivery, clear communication, and exceptional expertise.</p>
          </div>
          <div className="set-3">
            <h4><i className="ri-paint-line"></i></h4>
            <h4>Creativity </h4>
            <p>Choose us for fast delivery, clear communication, and unparalleled creativity.</p>
          </div>
          <div className="set-4">
            <h4><i className="ri-rotate-lock-line"></i></h4>
            <h4>Security </h4>
            <p>Choose us for fast delivery, clear communication, and top-tier security measures.</p>
          </div>
        </div>
      </div>
      <div className="side-right">
        <img src={bodyImg2} alt="img2" />
      </div>
    </div>
  )
}

export default SectionTwo