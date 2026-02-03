import React,{useState,useEffect} from 'react'
import MainLayout from '../../Layouts/MainLayout'
import HeroSection from '../../Components/HomePage/HeroSection'
import AboutSection from '../../Components/HomePage/AboutSection'
import ItemLists from '../../Components/HomePage/ItemLists'
import PromotionSection from '../../Components/HomePage/PromotionSection'
import Brand from '../../Components/HomePage/Brand'
import UserFeedBack from '../../Components/HomePage/UserFeedBack'
import ContactSection from '../../Components/HomePage/ContactSection'
import BlogSection from '../../Components/HomePage/BlogSection'

function HomePage() {

  const [cartItems, setCartItems] = useState([]);
  const [cartLenth, setCartLenth] = useState();
  console.log(cartLenth);
  

  const coutCartItem = (item) => {
    setCartItems((prev) => {
      const updatedCart = [...prev, item];

      // ✅ localStorage এ ঠিক data
      localStorage.setItem("cartInfo", JSON.stringify(updatedCart));
      return updatedCart;
    });
    

  };


useEffect(() => {
  setCartLenth(cartItems.length)
}, [cartItems]);
  return (
    <MainLayout>
      <section className='homePage'>
        <HeroSection/>
        <AboutSection/>
        <ItemLists coutCartItem={coutCartItem} />
        <PromotionSection/>
        <Brand/>
        <UserFeedBack/>
        <ContactSection/>
        <BlogSection/>
      </section>
    </MainLayout>
  )
}

export default HomePage;
