import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";
import logo from '../../assets/Image/logo/logo.png'




function Header() {

  const [cartItems, setCartItems] = useState(
      JSON.parse(localStorage.getItem('cartInfo')) || []
    );


  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="main-header">
      <Container>
        <Row className="align-items-center">

          {/* Logo */}
          <Col xs={6} lg={3}>
            <div className="header-logo">
              <NavLink to="/" onClick={closeMenu}>
                Food<span>Hub</span>
                <img src={logo} alt="header-logo"  />
              </NavLink>
            </div>
          </Col>

          {/* Desktop Menu */}
          <Col lg={6} className="d-none d-lg-block align-items-center">
            <ul className="header-menu">
              <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
              <li>   <NavLink to="/about" onClick={closeMenu}>About</NavLink>  </li>
              <li> <NavLink to="/menu" onClick={closeMenu}>Our Menu</NavLink> </li>
              <li> <NavLink to="/shop" onClick={closeMenu}>Shop</NavLink> </li>
              <li> <NavLink to="/blog" onClick={closeMenu}>Blog</NavLink> </li>  
              <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>  </li>
            </ul>
          </Col>

          {/* Right Buttons (Desktop) */}
          <Col lg={3} className="d-none d-lg-flex justify-content-end gap-3">
            <NavLink to="/cart" className="btn btn-danger header-cart">
              <i className="fa-solid fa-cart-shopping">{cartItems.length }</i>
            </NavLink>

            <NavLink to="/login" className="btn btn-danger header-login">
              <i className="fa-solid fa-user me-1"></i>
              Login
            </NavLink>
          </Col>

          {/* Mobile Toggle Button */}
          <Col xs={6} className="d-lg-none text-end">
            <button
              className="menu-toggle-btn"
              onClick={() => setMenuOpen(true)}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </Col>
        </Row>
      </Container>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <h4>Food <span>Hub</span></h4>
          <button className="close-btn" onClick={closeMenu}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <ul className="mobile-menu-list">
          <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="/service" onClick={closeMenu}>Service</NavLink></li>
          <li><NavLink to="/blog" onClick={closeMenu}>Blog</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
        </ul>

        <div className="mobile-menu-buttons">
          <NavLink to="/cart" className="btn btn-danger w-100 mb-2" onClick={closeMenu}>
            <i className="fa-solid fa-cart-shopping me-2"></i>
            Cart
          </NavLink>

          <NavLink to="/login" className="btn btn-danger w-100" onClick={closeMenu}>
            <i className="fa-solid fa-user me-2"></i>
            Login
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
