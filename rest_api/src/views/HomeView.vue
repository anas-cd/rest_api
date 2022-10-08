<template>
    <SearchFilter @searchFor="countrySearch" @regionOf="regionFilter" />
    <div class="CListContainer">
        <ContryCard
            v-for="country in countriesData"
            :key="country.ccn3"
            :countryData="country"
        />
    </div>
</template>

<script setup>
import SearchFilter from '@/components/SearchFilter.vue';
import ContryCard from '@/components/ContryCard.vue';
import CountriesApi from '@/services/CountriesApi';
import { ref } from 'vue';

// data
const countriesData = ref(await CountriesApi.getAll());

// searching functionality
async function countrySearch(country) {
    if (country !== null) {
        countriesData.value = await CountriesApi.getCountryByName(country);
    } else countriesData.value = await CountriesApi.getAll();
}

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
