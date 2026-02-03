import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

// CSS
import '../../Pages/Home/HomePage.css';

// Images
import Image1 from "../../assets/Image/menu/burger-11.jpg";
import Image2 from "../../assets/Image/menu/burger-12.jpg";
import Image3 from "../../assets/Image/menu/burger-13.jpg";
import Image4 from "../../assets/Image/menu/burger-14.jpg";
import Image5 from "../../assets/Image/menu/burger-15.jpg";
import Image6 from "../../assets/Image/menu/burger-16.jpg";
import Image7 from "../../assets/Image/menu/burger-17.jpg";
import Image8 from "../../assets/Image/menu/burger-18.jpg";

// Mock Data
const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Crispy Chicken",
    paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
    rating: 5,
    price: 99.15,
  },
  {
    id: "0002",
    image: Image2,
    title: "Ultimate Bacon",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 4.5,
    price: 99.32,
  },
  {
    id: "0003",
    image: Image3,
    title: "Black Sheep",
    paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
    rating: 4,
    price: 69.15,
  },
  {
    id: "0004",
    image: Image4,
    title: "Vegan Burger",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 3.5,
    price: 99.25,
  },
  {
    id: "0005",
    image: Image5,
    title: "Double Burger",
    paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
    rating: 3.0,
    price: 59.25,
  },
  {
    id: "0006",
    image: Image6,
    title: "Turkey Burger",
    paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 3,
    price: 79.18,
  },
  {
    id: "0007",
    image: Image7,
    title: "Smokey House",
    paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 2.5,
    price: 99.19,
  },
  {
    id: "0008",
    image: Image8,
    title: "Classic Burger",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 89.12,
  },
];

function ItemLists({coutCartItem}) {
    

    const [wishlist, seTWishlist] = useState({})
    const toggleWishlist = (id) => {
        seTWishlist((prev) => ({
             ...prev,
            [id]: !prev[id],
    }));
    
};
  return (
    <section className="itemList-section">
      <Container>
         <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <div className="itemtop">
                <h2>OUR CRAZY BURGERS</h2>
            <p className="para">
              Aliquam a augue suscipit, luctus neque purus ipsum neque undo
              dolor primis libero tempus, blandit a cursus varius magna
            </p>
            </div>
          </Col>
        </Row>
        
        <Row className="g-4">
          {mockData.map((data) => (
            <Col lg={3} md={4} sm={6} xs={12} key={data.id}>
              <div className="itemList">

                {/* Image */}
                <div className="itemimg">
                  <img src={data.image} alt={data.title} />
                </div>

                {/* Content */}
                <div className="itemcontent">

                  {/* Rating & Heart */}
                  <div className="itemRW d-flex justify-content-between align-items-center ">
                    <span>{data.rating}</span>
                    <span>
                     <i className={`fa-heart ${wishlist[data.id] ? 'fa-solid' : 'fa-regular'}`} onClick={() => toggleWishlist(data.id)} style={{ cursor: 'pointer', color: wishlist[data.id] ? 'red' : '#555' }}></i>
                    </span>
                  </div>

                  <h3>{data.title}</h3>
                  <h5>{data.paragraph}</h5>

                  {/* Price & Button */}
                  <div className="itemPC d-flex justify-content-between align-items-center ">
                    <span>${data.price}</span>
                    <NavLink className="allbtn" onClick={()=> coutCartItem(data)}>
                      Add to Cart
                    </NavLink>
                  </div>

                </div>
              </div>
            </Col>
          ))}
        </Row>

          <Row className="pt-5">
          <Col sm={6} lg={5}>
            <div className="ads_box ads_img1 mb-5 mb-md-0">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <NavLink to="/" className=" allbtn px-4 rounded-0">
                Learn More
              </NavLink>
            </div>
          </Col>
          <Col sm={6} lg={7}>
            <div className="ads_box ads_img2">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <NavLink to="/" className="allbtn px-4 rounded-0">
                Learn More
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ItemLists;
