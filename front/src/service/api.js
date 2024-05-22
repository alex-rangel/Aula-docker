import axios from "axios";

const api = axios.create({
    baseURL: 'http://54.174.231.184:3003'
})

export default api