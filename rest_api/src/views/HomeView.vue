<template>
    <SearchFilter
        @searchFor="countrySearch"
        @regionOf="regionFilter"
        :err="searchErr"
    />
    <div class="CListContainer">
        <TransitionGroup class="CListContainer" name="fade" tag="div">
            <ContryCard
                v-for="country in countriesData"
                :key="country.ccn3"
                :countryData="country"
            />
        </TransitionGroup>
    </div>
</template>

<script setup>
import SearchFilter from '@/components/SearchFilter.vue';
import ContryCard from '@/components/ContryCard.vue';
import CountriesApi from '@/services/CountriesApi';
import { ref } from 'vue';
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

.fade-enter-active {
    // transition: all 0.3s ease-out;
}

.fade-leave-active {
    // transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>
