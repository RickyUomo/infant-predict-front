import axios from 'axios'

// I created axios object and it has different methods like get and post

export default axios.create({
    baseURL: 'https://infant-back.herokuapp.com/',
    headers: {
        "Content-Type": "application/json",
    }
});