import axios from 'axios';

export default axios.create({
    baseURL: 'http://192.168.43.70/retrofit_data'
});