import React, { useState, useContext, useEffect } from 'react';
import CartContext from '../context/cart/cartContext';
import { Toast, Form, Button } from 'react-bootstrap';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import { RadioGroup } from '@material-ui/core';
import { Radio } from '@material-ui/core';
import { Container } from '@material-ui/core/';
import { FormControlLabel } from '@material-ui/core/';
import { FormControl } from '@material-ui/core/';
import { TextField } from '@material-ui/core/';
// import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import AuthContext from '../context/auth/authContext';
import { makeStyles } from '@material-ui/core/styles';
// import Axios from 'axios';
import 'animate.css';
import baseURL from '../api/Api';

// const useStyles = makeStyles({
//   root: {
//     background: (props) =>
//       props.color === 'red'
//         ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
//         : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: (props) =>
//       props.color === 'red'
//         ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
//         : '0 3px 5px 2px rgba(33, 203, 243, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//     margin: 8,
//   },
// });

// function MyButton(props) {
//   const { color, ...other } = props;
//   // const classes = useStyles(props);
//   return <Button className={classes.root} {...other} />;
// }

// MyButton.propTypes = {
//   color: PropTypes.oneOf(['blue', 'red']).isRequired,
// };

const Checkout = (props) => {
  const history = useHistory();
  console.log(props);

  const { state } = useContext(CartContext);
  console.log(state);
  const [alert, setAlert] = useState({
    val: 0,
    type: '',
    msg: '',
  });
  const [value, setValue] = React.useState('Delivery');
  const [payment, setPayment] = React.useState('Online');
  const [deliveryCharges, setCharges] = React.useState(15);
  const [address, setAddress] = React.useState({
    Address: '',
    City: '',
    Phone: '',
    Zip: '',
  });
  const handleOrder = async (e) => {
    let order = {
      mode: value,
      order: {
        items: state.items,
        total_quantity: state.total_quantity,
        total_price: state.total_price,
      },
      deliveryCharges: deliveryCharges,
      payment: payment,
      address: address,
    };
    const res = await baseURL.post('/orders', order);
    history.push('/order');
  };
  const Alerts = () => {
    return (
      <Toast
        className="animate__animated animate__shakeX"
        style={{ position: 'fixed', right: '0', zIndex: '9899899' }}
      >
        <Toast.Header
          style={{
            background: alert.type,
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          <strong className="mr-auto">
            {alert.type === 'red' ? 'Failed' : 'Success'}
          </strong>
          {/* <small>2 seconds ago</small> */}
        </Toast.Header>
        <Toast.Body>{alert.msg}</Toast.Body>
      </Toast>
    );
  };
  const { user } = useContext(AuthContext);
  const handleChange1 = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
    if (value !== 'Delivery') setCharges(1);
    else setCharges(0);
  };
  const handlePayment = (event) => {
    setPayment(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    if (state.items.length === 0) props.history.push('/');
  }, [props.history, state.items.length]);
  // console.log(state);
  useEffect(() => {
    if (value === 'Take Away') {
      setPayment('');
      if (value === 'Delivery') setCharges(50);
    }
  }, [value]);
  // const handlePayment = async () => {};
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      value,
      address,
      payment,
      deliveryCharges,
      txn_amount: state.total_price + deliveryCharges,
      cart: state,
      user: user,
    };
    console.log(address);
    if (
      value === 'Delivery' &&
      (address.Address == '' || address.city == '' || address.zip == '')
    ) {
      setAlert({
        val: 1,
        type: 'red',
        msg: 'Enter Required Fields',
      });
      return setTimeout(() => {
        setAlert({ val: 0, msg: '', type: '' });
      }, 3000);
    }

    if (payment === 'Online') {
      try {
        console.log(data);
        const res = await baseURL.post('/paytm', data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        document.write(res.data);
      } catch (e) {
        console.log(e.response);
      }
    } else {
      try {
        // console.log(data);
        const res = await baseURL.post('/orders', data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(res.data);
        props.history.push('/success?orderid=' + res.data.orderid);
      } catch (e) {
        console.log(e.response);
      }
    }
  };

  return (
    <>
      {/* <Container fixed style={{ fontFamily: "Alata" }}> */}
      <Link className="left_align" to="/cart">
        <i
          className="fa fa-arrow-circle-left"
          style={{
            marginLeft: '0.3rem',
            marginTop: '0.5rem',
            fontSize: '2rem',
            position: 'fixed',
            left: '0.3rem',
          }}
        />
      </Link>
      {alert.val === 1 ? <Alerts /> : ''}
      <div
        className="paymentForm"
        style={{ width: '100%' }}
        onSubmit={handleSubmit}
      >
        <div className="paymentContainer">
          <div className="order">
            <div className="modeOfDelivery">
              <h3 style={{ fontWeight: 'bold', fontFamily: 'Kanit' }}>
                {' '}
                Mode of Order
              </h3>
              <Form
                onChange={handleChange}
                name="delivery"
                value={value}
                className="mb-3"
              >
                <Form.Check
                  defaultChecked
                  name="mode"
                  type="radio"
                  value="Delivery"
                  label={<span style={{ fontFamily: 'Alata' }}>Delivery</span>}
                />
                <Form.Check
                  inline
                  name="mode"
                  type="radio"
                  value="Takeaway"
                  label={<span style={{ fontFamily: 'Alata' }}>Take Away</span>}
                />{' '}
              </Form>
            </div>
            <div className="modeOfPayment animate__animated animate__bounceIn">
              <h3 style={{ fontWeight: 'bold', fontFamily: 'Kanit' }}>
                Mode of Payment
              </h3>
              <Form name="payment" value={payment} onChange={handlePayment}>
                <Form.Check
                  type="radio"
                  defaultChecked
                  value="Cash on Delivery"
                  name="payment"
                  label={
                    <span style={{ fontFamily: 'Alata' }}>
                      Cash on Delivery
                    </span>
                  }
                />{' '}
                <Form.Check
                  type="radio"
                  value="Online"
                  name="payment"
                  label={<span style={{ fontFamily: 'Alata' }}>Online</span>}
                />{' '}
              </Form>
            </div>
            {value === 'Delivery' && (
              <>
                <div
                  className="address animate__animated animate__bounceIn"
                  style={{ fontFamily: 'Mulish' }}
                >
                  <h3 style={{ fontWeight: 'bold', fontFamily: 'Kanit' }}>
                    Address Details
                  </h3>
                  <Form.Label style={{ fontFamily: 'Poppins' }}>
                    Address
                  </Form.Label>
                  <Form.Control
                    placeholder="Address"
                    id="outlined-basic"
                    variant="outlined"
                    margin="normal"
                    name="Address"
                    onChange={handleChange1}
                    // fullWidth
                    // multiline
                  />
                  <Form.Label style={{ fontFamily: 'Poppins' }}>
                    City
                  </Form.Label>
                  <Form.Control
                    placeholder="City"
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    name="City"
                    margin="normal"
                    onChange={handleChange1}
                    // fullWidth
                  />
                  <Form.Label style={{ fontFamily: 'Poppins' }}>
                    Zip Code
                  </Form.Label>
                  <Form.Control
                    placeholder="Zip Code"
                    variant="outlined"
                    name="Zip"
                    type="Number"
                    size="small"
                    margin="normal"
                    onChange={handleChange1}
                    // fullWidth
                  />
                  <Form.Label style={{ fontFamily: 'Poppins' }}>
                    Contact Number
                  </Form.Label>
                  <Form.Control
                    placeholder="Contact Number"
                    id="outlined-basic"
                    variant="outlined"
                    name="Phone"
                    size="small"
                    type="Number"
                    margin="normal"
                    onChange={handleChange1}
                    // fullWidth
                  />
                </div>
              </>
            )}
          </div>
          <div
            style={{
              justifyContent: 'center',
              flex: '1',
              fontFamily: 'Mulish',
              marginTop: '1rem',
              padding: '0.5rem',
            }}
            className="animate__animated animate__fadeIn"
          >
            <div className="checkoutRight">
              <h4>Order Summary</h4>
              <h4>
                <Link to="/cart">Edit Cart</Link>
              </h4>
            </div>
            <br />
            <div className="checkoutRight">
              <h6>Total Items :</h6>
              <h6>{state.total_quantity}</h6>
            </div>
            {deliveryCharges === 0 ? (
              <div></div>
            ) : (
              <div className="checkoutRight">
                <h6>Delivery Charges :</h6>
                <h6 className="Web Rupee"> &#8362; {deliveryCharges}</h6>
              </div>
            )}
            <div className="checkoutRight">
              <h6>Total Amount :</h6>
              <h6 className="Web Rupee">
                {' '}
                &#8362; {state.total_price + deliveryCharges}
              </h6>
            </div>

            <Button
              onClick={handleOrder}
              type="submit"
              color="blue"
              style={{ width: '100%' }}
            >
              {/* <Link to="/order">ORDER</Link> */}
              <span style={{ fontFamily: 'Mulish' }}>ORDER</span>
            </Button>
            <br />
            <img
              src="https://image.freepik.com/free-vector/friends-eating-snacks-friendly-people-group-have-dinner-desk-restaurant-cartoon-vector-characters-isolated_53562-7916.jpg"
              alt="design"
              style={{ width: '90%' }}
            />
          </div>
        </div>
      </div>
      {/* </Container> */}
    </>
  );
};

export default Checkout;
