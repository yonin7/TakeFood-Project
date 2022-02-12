import React, { useContext, useReducer } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from './authContext';
import AuthReducer from './authReducer';
// import axios from 'axios';
import setAuthToken from './setAuthToken';
import removeAuthToken from './removeAuthToken';
import baseURL from '../../api/Api';

const AuthState = (props) => {
  const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    current: 0,
    errors: [],
    verified: false,
    displayVerified: false,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const history = useHistory();

  const userLoaded = async (userId) => {
    let path =
      userId === null || userId === undefined
        ? `/login`
        : `/login/id/${userId}`;
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await baseURL.get(path, config);

      dispatch({
        type: 'USER_LOADED',
        payload: res.data,
      });
      dispatch({
        type: 'REMOVE_LOADING',
      });
      setTimeout(() => {
        dispatch({
          type: 'REMOVE_DISPLAY_VERIFIED',
        });
      }, 3000);
      return 0;
    } catch (err) {
      console.log(err.response.data);
      // localStorage.removeItem('token');
      dispatch({
        type: 'AUTH_ERROR',
      });
      dispatch({
        type: 'REMOVE_LOADING',
      });

      return 0;
    }
  };

  const register = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await baseURL.post('/register', formData, config);
      console.log(res);
      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: res.data,
      });
      // localStorage.setItem('token', res.data);
      userLoaded(res.data.user_id);
      return 0;
    } catch (err) {
      dispatch({
        type: 'REGISTER_FAIL',
        payload: err.response,
      });

      setTimeout(
        () =>
          dispatch({
            type: 'REMOVE_ALERT',
          }),
        3500
      );
    }
  };
  const login = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await baseURL.post('/login', formData, config);
      localStorage.setItem('token', res.data);
      console.log(res.data);
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: res.data,
      });

      console.log(res.data);
      userLoaded(null);
      setTimeout(() => {
        dispatch({
          type: 'REMOVE_CURRENT',
        });
      }, 3000);
      return 0;
    } catch (err) {
      if (!err.response) {
        alert('Connection Cannot Be Made to Server');
      } else {
        dispatch({
          type: 'LOGIN_FAIL',
          payload: err.response,
        });
        dispatch({
          type: 'REMOVE_LOADING',
        });
        // console.log(err.response.data.errors[0].msg);
        setTimeout(
          () =>
            dispatch({
              type: 'REMOVE_ALERT',
            }),
          3500
        );
      }
    }
  };
  const set_loading = () => {
    dispatch({
      type: 'SET_LOADING',
    });
  };
  const logout = () => {
    localStorage.removeItem('token');
    dispatch({
      type: 'LOGOUT',
    });
    removeAuthToken();
    // history.push('/');
  };

  return (
    <AuthContext.Provider
      value={{
        register: register,
        login: login,
        logout: logout,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        userLoaded: userLoaded,
        user: state.user,
        set_loading: set_loading,
        errors: state.errors,
        current: state.current,
        verified: state.verified,
        displayVerified: state.displayVerified,
      }}
    >
      {' '}
      {props.children}{' '}
    </AuthContext.Provider>
  );
};

export default AuthState;
