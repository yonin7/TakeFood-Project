import React, { useContext, useReducer } from 'react';
import CartContext from './cartContext';
import CartReducer from './cartReducer';
import baseURL from '../../api/Api';

const CartState = (props) => {
  const initialState = {
    total_quantity: 0,
    total_price: 0,
    items: [],
    current: 0,
    loading2: false,
    clicked: 0,
  };
  const [state, dispatch] = useReducer(CartReducer, initialState);
  const loadCart = async () => {
    try {
      dispatch({
        type: 'SetLoading',
      });
      const res = await baseURL.get('/cart');
      await dispatch({
        type: 'LOAD_CART',
        payload: res.data,
      });
      dispatch({
        type: 'UnsetLoading',
      });
    } catch (e) {}
  };
  const clearCart = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await baseURL.put('/cart', config);
      dispatch({
        type: 'CLEAR_CART',
      });
    } catch (e) {}
  };
  const addProduct = (item) => {
    // console.log(item);
    dispatch({
      type: 'ADD_PRODUCT',
      payload: item,
    });
  };

  const removeProduct = (item) => {
    dispatch({
      type: 'REMOVE_PRODUCT',
      payload: item,
    });
  };
  const saveCart = async (user_id, state) => {
    const formData = {
      user_id,
      cart: state,
    };
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await baseURL.post('/cart', formData, config);
      if (res.status === 200) return 1;
      else return 0;
    } catch (err) {
      return 0;
    }
  };
  const deleteClick = (item) => {
    dispatch({
      type: 'DELETE_CLICK',
      payload: item,
    });
  };
  return (
    <CartContext.Provider
      value={{
        addProduct,
        items: state.items,
        total_q: state.total_quantity,
        total_price: state.total_price,
        removeProduct,
        saveCart: saveCart,
        state: state,
        loadCart,
        deleteClick: deleteClick,
        clearCart,
        loading2: state.loading2,
      }}
    >
      {' '}
      {props.children}{' '}
    </CartContext.Provider>
  );
};

export default CartState;
