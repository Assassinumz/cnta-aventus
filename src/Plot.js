import axios from 'axios';
const instance = axios.create({
    // baseURL: 'https://20.235.105.199:8001/',
    baseURL: 'https://coral-app-9sbea.ondigitalocean.app/',
    timeout: 3000,
    headers: {}
});

export default instance