<template>
    <SearchFilter />
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
