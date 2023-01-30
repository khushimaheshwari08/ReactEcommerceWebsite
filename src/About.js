import React, { useContext } from 'react'
import HeroSection from './components/HeroSection'
import { useProductContext } from './context/ProductContext'

const About = () => {

  const {myName} = useProductContext()
  // const {myName} = useContext(AppContext)
  
  const data={
    name: 'About Page'
  }
  return (
    <>
    {myName}
    <HeroSection myData={data}/>
    </>
  )
}

export default About