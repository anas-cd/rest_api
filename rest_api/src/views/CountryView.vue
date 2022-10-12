<template>
    <RouterLink to="/" class="backLink">
        <img src="@/assets/arrow-back-outline.svg" alt="go back button" />
        <button>Back</button>
    </RouterLink>
    <div class="country" :key="$route.params.code">
        <img :src="flag" alt="flag of {{ name }}" />
        <div class="countryDetails">
            <h2>{{ name }}</h2>
            <div class="CInfo">
                <div class="mainCInfo">
                    <p>
                        Native Name:<span v-for="name in nativeName" :key="name"
                            >&nbsp;{{ name.common }} .</span
                        >
                    </p>
                    <!-- <p>
                        Native Name:<span
                        >&nbsp;{{
                                countryData.name.nativeName[
                                Object.keys(countryData.name.nativeName)[0]
                                .official
                                ]
                            }}</span
                        >
                    </p> -->
                    <p>
                        Population:<span>&nbsp;{{ population }}</span>
                    </p>
                    <p>
                        Region:<span>&nbsp;{{ region }}</span>
                    </p>
                    <p>
                        Sub Region:<span>&nbsp;{{ subregion }}</span>
                    </p>
                    <p>
                        Capital:<span v-for="capital in capitals" :key="capital"
                            >&nbsp;{{ capital }} .</span
                        >
                    </p>
                </div>
                <div class="secondaryCInfo">
                    <p>
                        Top Level Domain:<span
                            v-for="domains in tld"
                            :key="domains"
                            >&nbsp;{{ domains }}</span
                        >
                    </p>
                    <p>
                        Currencies:<span
                            v-for="currency in currencies"
                            :key="currency"
                            >&nbsp;{{ currency.name }} .</span
                        >
                    </p>
                    <p>
                        Languages:<span v-for="lang in languages" :key="lang"
                            >&nbsp;{{ lang }} .</span
                        >
                    </p>
                </div>
            </div>
            <div class="borderCountries" v-if="borders">
                <p>Border Countries:</p>
                <RouterLink
                    v-for="border in borders"
                    :to="border"
                    :key="border"
                    >{{ borderCountryName(border) }}</RouterLink
                >
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import CountriesApi from '@/services/CountriesApi';
import { useStore } from 'vuex';

const route = useRoute();
const router = useRouter();
const store = useStore();
// data
const countryData = ref(
    await CountriesApi.getCountryByCode(route.params.code).catch(() => {
        return null;
    })
);
const flag = ref('');
const name = ref('');
const nativeName = ref('');
const population = ref('');
const region = ref('');
const subregion = ref('');
const capitals = ref('');
const tld = ref('');
const currencies = ref('');
const languages = ref('');
const borders = ref('');

if (countryData.value === null) {
    router.push({
        path: '/notfound',
    });
} else {
    flag.value = countryData.value[0].flags.png;
    name.value = countryData.value[0].name.common;
    nativeName.value = countryData.value[0].name.nativeName;
    population.value = countryData.value[0].population.toLocaleString('en-US');
    region.value = countryData.value[0].region;
    subregion.value = countryData.value[0].subregion;
    capitals.value = countryData.value[0].capital;
    tld.value = countryData.value[0].tld;
    currencies.value = countryData.value[0].currencies;
    languages.value = countryData.value[0].languages;
    borders.value = countryData.value[0].borders;
}

watchEffect(async () => {
    // Why if undefined?, if route.params.code is undefined it means it was changed to go to HomeView, since the watch will detect the change in route.params asynchronously we have to account for this. (NOTE: this issue is only there when we add <Transition> tags in App.vue for some reason).
    if (route.params.code != undefined) {
        countryData.value = await CountriesApi.getCountryByCode(
            route.params.code
        );
        flag.value = countryData.value[0].flags.png;
        name.value = countryData.value[0].name.common;
        nativeName.value = countryData.value[0].name.nativeName;
        population.value =
            countryData.value[0].population.toLocaleString('en-US');
        region.value = countryData.value[0].region;
        subregion.value = countryData.value[0].subregion;
        capitals.value = countryData.value[0].capital;
        tld.value = countryData.value[0].tld;
        currencies.value = countryData.value[0].currencies;
        languages.value = countryData.value[0].languages;
        borders.value = countryData.value[0].borders;
    }
});

function borderCountryName(code) {
    let names = store.getters.getCountryName(code);
    if (names != undefined) {
        return names;
    } else return code;
}
</script>

<style scoped lang="scss">
// router link styling
.backLink {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    width: fit-content;
    margin: 3rem 0rem;
    padding: 0.5rem 1rem;
    box-shadow: 0px 0px 15px 0px var(--shadow);
    background-color: var(--element-bg);
    text-decoration: none;
    border-radius: 0.5rem;
    transition-duration: 0.2s;

    & > img {
        width: 1.5rem;
        filter: var(--icon-color);
    }

    & > button {
        border: none;
        background-color: transparent;
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 1px;
        color: var(--text-color);
        transition-duration: 0.2s;

        &:hover {
            cursor: pointer;
        }
    }
}

// country details
.country {
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 2rem;
    height: 400px;
    justify-content: space-between;

    @media #{$mq-600-down} {
        flex-flow: column nowrap;
        height: auto;
    }

    img {
        flex-basis: 40%;
        flex-shrink: 1;
        max-width: 575px;
        max-height: 400px;
    }

    .countryDetails {
        margin-left: 2rem;
        flex-basis: 40%;
        max-width: 30rem;
        flex-grow: 1;

        @media #{$mq-600-down} {
            margin-left: 0;
            margin-top: 2rem;
        }

        .CInfo {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;

            @media #{$mq-600-down} {
                flex-flow: column wrap;
            }

            p {
                margin-bottom: 0;
                font-weight: 600;

                & > span {
                    font-weight: 400;
                }
            }
        }

        .borderCountries {
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            margin-top: 3rem;

            & > p {
                font-weight: 600;

                @media #{$mq-600-down} {
                    flex-basis: 100%;
                }
            }

            & > a {
                margin: 0.5rem;
                text-decoration: none;
                font-weight: 400;
                color: var(--text-color);
                background-color: var(--element-bg);
                box-shadow: 0px 0px 15px 0px var(--shadow);
                border-radius: 0.2rem;
                padding: 0.2rem 1rem;
                transition-duration: 0.2s;

                @media #{$mq-600-down} {
                    margin-left: 0px;
                    margin-right: 1rem;
                }
            }
        }
    }
}
</style>
