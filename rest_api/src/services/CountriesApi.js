import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://restcountries.com/v3.1/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Conetent-Type': 'application/json',
    },
});

export default {
    getAll() {
        return apiClient.get('all').then((res) => {
            return res.data;
        });
    },
    getCountryByCode(code) {
        return apiClient.get('alpha/' + code).then((res) => {
            return res.data;
        });
    },
    getCountryByName(name) {
        return apiClient.get('name/' + name).then((res) => {
            return res.data;
        });
    },
    getContriesByRegion(region) {
        return apiClient.get('region/' + region).then((res) => {
            return res.data;
        });
    },
};
