import axios from 'axios';
const instance = axios.create({
    // baseURL: 'https://20.235.105.199:8000/',
    baseURL: 'https://cnta-backend-nfr2i.ondigitalocean.app/',
    timeout: 3000,
    headers: {}
  });

  export default instance