import React from 'react'
import MainLayout from "../landing/LandingUpperPage/MainLayout"
import FunctionalSec from '../FuctionalCOM/FunctionalSec'
import ProductsSection from '../ProjectSec/ProductsSection'
import MainComponent from '../Footer/MainComponent'
import ResponsiveFooter from '../Footer/ResponsiveFooter'
import MyComponent from "../reviewSection/MyComponents"
const LandingPage = () => {
  return (
    <>
    <MainLayout/>
    <FunctionalSec/>
    <ProductsSection/>
    <div>
    <MyComponent/>
    <MainComponent/>
    <ResponsiveFooter/>
    </div>
    </>
  )
}

export default LandingPage