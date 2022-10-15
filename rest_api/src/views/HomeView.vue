<template>
    <div class="wl">
        <SearchFilter
            @searchFor="countrySearch"
            @regionOf="regionFilter"
            :err="searchErr"
        />
        <div v-if="countriesData">
            <TransitionGroup
                appear
                tag="div"
                :css="false"
                @before-enter="onBeforeEnter"
                @enter="onEnter"
                class="CListContainer"
            >
                <ContryCard
                    v-for="(country, index) in countriesData"
                    :key="country.cca3"
                    :countryData="country"
                    :data-index="index"
                />
            </TransitionGroup>
        </div>
    </div>
</template>

<script setup>
import SearchFilter from '@/components/SearchFilter.vue';
import ContryCard from '@/components/ContryCard.vue';
import CountriesApi from '@/services/CountriesApi';
import { ref } from 'vue';
import { useStore } from 'vuex';
import gsap from 'gsap';
import NProgress from 'nprogress';
// Vue consts
const store = useStore();

// data
const countriesData = ref(await CountriesApi.getAll());
const searchErr = ref('');
store.dispatch('setCountryCodes', countriesData.value);

// searching functionality
async function countrySearch(country) {
    NProgress.start();
    if (country !== null) {
        countriesData.value = await CountriesApi.getCountryByName(country)
            .catch((err) => {
                if (err.response.status == 404) {
                    setTimeout(() => {
                        searchErr.value =
                            'no match was found, please try again';
                    }, 10);
                    searchErr.value = '';
                }
                return async () => {
                    await CountriesApi.getAll();
                };
            })
            .finally(() => {
                NProgress.done();
            });
    } else countriesData.value = await CountriesApi.getAll();
}

// filtering functionality
async function regionFilter(region) {
    if (region !== null) {
        countriesData.value = await CountriesApi.getContriesByRegion(region);
    } else countriesData.value = await CountriesApi.getAll();
}

// list animations using Vue hooks
function onBeforeEnter(el) {
    el.style.opacity = 0;
    el.style.transform = 'translateY(100px)';
}
function onEnter(el, done) {
    gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        delay: el.dataset.index * 0.05,
        onComplete: done,
    });
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
