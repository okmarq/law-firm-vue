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
    getClients () {
        try {
            return instance.get('/clients')
        } catch (error) {
            console.error(error.toJSON())
        }
    },
    getClientsByLastName (lastName) {
        try {
            return instance.get('/clients' + lastName)
        } catch (error) {
            console.error(error.toJSON())
        }
    },
    getClient () {
        try {
            return instance.get('/clients')
        } catch (error) {
            console.error(error.toJSON())
        }
    },
    saveClientProfile (payload) {
        try {
            return instance.post('/clients', payload)
        } catch (error) {
            console.error(error.toJSON())
        }
    },
    updateClientProfile (payload) {
        try {
            return instance.post('/clients', payload)
        } catch (error) {
            console.error(error.toJSON())
        }
    },
}