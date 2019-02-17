import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 7aeaa4304851c331374f7ef38308b6bfcda5565afa7a2e8fae86838b4e802e7f'
    }
});