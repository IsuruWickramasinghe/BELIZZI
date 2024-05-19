import React from 'react'
import bodyImg1 from '../../assets/bodyImg1.png'

function SectionOne() {
  return (
    <section className='home-container section-one'>
      <div className="section-img-wrapper">
        <img src={bodyImg1} alt="bodyimg1" />
      </div>
      <p className="home-desc">
        <b>Digital art,</b>created using digital art tools, encompasses a diverse range of visual artworks produced through technology. Artists leverage software like Adobe Photoshop, Corel Painter, and Procreate to craft intricate designs, illustrations, and animations. These tools provide a vast array of brushes, effects, and digital canvases, enabling unparalleled creativity and precision. From concept art and digital painting to 3D modeling and graphic design, digital art merges traditional artistic techniques with modern innovation, expanding the boundaries of creative expression.
      </p>
    </section>
  )
}

export default SectionOne