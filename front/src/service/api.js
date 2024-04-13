import axios from "axios";

const api = axios.create({
    baseURL: 'http://api-register:3003'
})

export default api