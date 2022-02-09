// import axios from 'axios';
import baseURL from '../../api/Api';

const removeAuthToken = () => {
  delete baseURL.defaults.headers.common['x-auth-token'];
};

export default removeAuthToken;
