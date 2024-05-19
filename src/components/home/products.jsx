import React from 'react'
import crochet from '../../assets/crochet.svg'
import digitalArt from '../../assets/digital-arts.svg'
import woodenStatues from '../../assets/wooden-statues.svg'

function HomeProducts() {
  return (
    <div className='home-container home-products'>
      <h1 className='title'>PRODUCTS</h1>
      <div className="home-products-items">
        <div className="item">
          <img src={crochet} alt="item" />
          <h2>Crochet</h2>
          <p>Crochet is a technique for creating fabric using yarn and a hooked needle, producing items like clothing, accessories, and home décor through loops and stitches.</p>
        </div>
        <div className="item">
          <img src={digitalArt} alt="item" />
          <h2>Digital Art</h2>
          <p>Digital art involves creating artwork using digital tools and software, encompassing forms like digital painting, illustration, 3D modeling, and animation, for screen or print.</p>
        </div>
        <div className="item">
          <img src={woodenStatues} alt="item" />
          <h2>Wooden Statues</h2>
          <p>Wooden statues are sculptures carved from wood, depicting figures, animals, or abstract forms. They showcase intricate craftsmanship and natural beauty of wood.</p>
        </div>
      </div>
    </div>
  )
}

export default HomeProducts