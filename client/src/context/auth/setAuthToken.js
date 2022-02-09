// import axios from 'axios';
import baseURL from '../../api/Api';

const setAuthToken = (token) => {
  if (token) {
    baseURL.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete baseURL.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
