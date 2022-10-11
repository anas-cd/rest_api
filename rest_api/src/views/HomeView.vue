<template>
    <SearchFilter
        @searchFor="countrySearch"
        @regionOf="regionFilter"
        :err="searchErr"
    />

    <TransitionGroup class="CListContainer" name="slide-fade" tag="div">
        <ContryCard
            v-for="country in countriesData"
            :key="country.ccn3"
            :countryData="country"
        />
    </TransitionGroup>
</template>

<script setup>
import SearchFilter from '@/components/SearchFilter.vue';
import ContryCard from '@/components/ContryCard.vue';
import CountriesApi from '@/services/CountriesApi';
import { ref, onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
// data
const countriesData = ref(await CountriesApi.getAll());
const searchErr = ref('');
store.dispatch('setCountryCodes', countriesData.value);
// searching functionality
async function countrySearch(country) {
    if (country !== null) {
        countriesData.value = await CountriesApi.getCountryByName(
            country
        ).catch((err) => {
            if (err.response.status == 404) {
                setTimeout(() => {
                    searchErr.value = 'no match was found, please try again';
                }, 10);
                searchErr.value = '';
            }
            return async () => {
                await CountriesApi.getAll();
            };
        });
    } else countriesData.value = await CountriesApi.getAll();
}
onMounted(() => {
    console.log('hello');
});
onUnmounted(() => {
    console.log('good bye');
});

// filtering functionality
async function regionFilter(region) {
    if (region !== null) {
        countriesData.value = await CountriesApi.getContriesByRegion(region);
    } else countriesData.value = await CountriesApi.getAll();
}
</script>

<style scoped lang="scss">
.CListContainer {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    @media #{$mq-600-down} {
        flex-flow: column nowrap;
    }
}
</style>
