import React from 'react'
import './App.css'
import Headcomponent from './Header'
import Hero from './Hero'
import Threecols from './Threecols'
import ImageText from './ImageText'
import Team from './Team'
import HeroAgain from './Hero-bottom'
import Footer from './Footer'
function App() {

  return <React.Fragment>
    <Headcomponent />
    <Hero />
    <Threecols />
    <ImageText />
    <Team />
    <HeroAgain />
    <Footer />
  </React.Fragment>
}

export default App
