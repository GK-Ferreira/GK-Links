import axios from 'axios'

export const key = "988fb6df6c773b28e897dad25beee3f8c3b5fc51";

const api = axios.create({
    baseURL:'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${key}`
    }
});

export default api

