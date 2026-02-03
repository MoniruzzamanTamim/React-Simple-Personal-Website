import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import HomePage from '../Pages/Home/HomePage'
import AboutPage from '../Pages/About/AboutPage'
import MenuPage from '../Pages/Menu/menuPage'
import ShopPage from '../Pages/Shop/shopPage'
import BlogsPage from '../Pages/Blog/BlogsPage'
import BlogPage from '../Pages/Blog/BlogPage'
import ContactPage from '../Pages/Contact/ContactPage'
import CartPage from '../Pages/Cart/CartPage'

function RoutesAll() {
  return (
    <>

        <Router>
            <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/menu' element={<MenuPage />} />
                    <Route path='/shop' element={<ShopPage />} />
                    <Route path='/blog' element={<BlogsPage />} />
                     <Route path='/blog/:title' element={<BlogPage />} />
                    <Route path='/contact' element={<ContactPage  />} />
                    <Route path='/cart' element={<CartPage/>} />
            
            </Routes>
        </Router>

    
    
    </>
  )
}

export default RoutesAll