import React from 'react'
import MainHeader from '../Components/Header/MainHeader'
import MainFooter from '../Components/Footer/MainFooter'
import GoToTop from '../Components/CommonComponent/GoToTop'

function MainLayout({children}) {
  return (
   <>
   <MainHeader/>
   {children}
   <GoToTop/>
   <MainFooter/>
   </>
  )
}

export default MainLayout