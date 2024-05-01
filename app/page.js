import React from 'react'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import SocialMedia from './components/SocialMedia'
import Cards from './components/Cards'
import Experience from './components/Experience'
import FAQ from './components/FAQ'

const page = () => {
  return (
    <div>
      <Home />
      <Cards />
      <Experience />
      <Portfolio />
      <SocialMedia />
      <FAQ />
    </div>
  )
}

export default page