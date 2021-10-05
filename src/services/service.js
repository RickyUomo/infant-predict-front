import http from './http-axios';

// http is an axios instance

class DataService {
    // here I created custon DataService class and its methods
    getAll() {
        return http.get('/api/')
    }

    get(id) {
        return http.get(`/api/${id}/`)
    }

    create(data) {
        return http.post('/api/', data)
    }
}

export default new DataService();