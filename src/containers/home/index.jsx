import React from 'react'
import '../../styles/home.less'
import Footer from '../footer'
import HomeBanner from '../../components/home/homeBanner'
import HomeProducts from '../../components/home/products'
import SectionOne from '../../components/home/sectionOne'
import SectionTwo from '../../components/home/sectionTwo'


function Home() {
  return (
    <>
      <HomeBanner />
      <HomeProducts />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </>
  )
}

export default Home