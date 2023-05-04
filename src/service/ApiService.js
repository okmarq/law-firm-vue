import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://law-firm-x.test/api/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getClients() {
        return instance.get('/clients')
    },
    getClientsByLastName(lastName) {
        return instance.get('/clients/filter/' + lastName)
    },
    getClient(id) {
        return instance.get('/clients/' + id)
    },
    saveClientProfile(payload) {
        return instance.post('/clients', payload)
    },
    updateClientProfile(payload) {
        return instance.post('/clients', payload)
    },
}