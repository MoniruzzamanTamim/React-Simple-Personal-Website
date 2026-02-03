import React, { useState } from 'react';
import MainLayout from '../../Layouts/MainLayout';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import './cartpage.css';

function CartPage() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cartInfo')) || []
  );

  // quantity change
  const updateQty = (id, type) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity:
            type === 'inc'
              ? item.quantity + 1
              : item.quantity > 1
              ? item.quantity - 1
              : 1
        };
      }
      return item;
    });

    setCartItems(updatedCart);
    localStorage.setItem('cartInfo', JSON.stringify(updatedCart));
  };

  // remove item
  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cartInfo', JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <MainLayout>
      <section className="cartpage">
        <Container>

          <Row>
            <Col lg={{ span: 8, offset: 2 }}>
              <div className="cart-title text-center">
                <h1>Your Cart</h1>
              </div>
            </Col>
          </Row>

          {cartItems.length === 0 ? (
            <div className="empty-cart text-center">
              <h3>Your cart is empty 🛒</h3>
              <a className='allbtn my-5' type="button"onClick={()=>navigate("/") } >Back Shop Page</a>
            </div>
          ) : (
            <>
              <Row>
                <Col>
                  <table className="cart-table">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Remove</th>
                      </tr>
                    </thead>

                    <tbody>
                      {cartItems.map(item => (
                        <tr key={item.id}>
                          <td>
                            <img src={item.image} alt={item.title} />
                          </td>
                          <td>{item.title}</td>
                          <td>${item.price}</td>
                          <td>
                            <div className="qty-box">
                              <button onClick={() => updateQty(item.id, 'dec')}>-</button>
                              <span>{item.quantity}</span>
                              <button onClick={() => updateQty(item.id, 'inc')}>+</button>
                            </div>
                          </td>
                          <td>${item.price * item.quantity}</td>
                          <td>
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={() => removeItem(item.id)}
                            >
                              ✕
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Col>
              </Row>

              <Row>
                <Col className="text-end">
                  <div className="cart-total">
                    <h4>Total: <span>${totalPrice}</span></h4>
                    <Button variant="dark">Proceed to Checkout</Button>
                  </div>
                </Col>
              </Row>
            </>
          )}

        </Container>
      </section>
    </MainLayout>
  );
}

export default CartPage;
