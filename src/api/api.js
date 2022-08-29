import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3001',
  // baseURL: 'https://young-mountain-05032.herokuapp.com/',
});
