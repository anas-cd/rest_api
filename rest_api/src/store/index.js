import { createStore } from 'vuex';

export default createStore({
    state: {
        countryCodes: {},
    },
    getters: {
        getCountryName: (state) => (code) => {
            return state.countryCodes[code];
        },
    },
    mutations: {
        ADD_COUNTRY: (state, { key, value }) => {
            // key is the code and value is the name
            state.countryCodes[key] = value;
        },
    },
    actions: {
        setCountryCodes: ({ commit }, countriesObj) => {
            let key = null;
            let value = null;
            for (let i = 0; i < countriesObj.length; i++) {
                key = countriesObj[i].cca3;
                value = countriesObj[i].name.common;
                commit('ADD_COUNTRY', { key, value });
            }
        },
    },
    modules: {},
});
