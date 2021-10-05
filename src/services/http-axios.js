import axios from 'axios'

// I created axios object and it has different methods like get and post

export default axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
        "Content-Type": "application/json",
    }
});