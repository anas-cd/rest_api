<template>
    <router-link :to="countryCode">
        <div class="card">
            <img :src="flag" :alt="flagAlt" />
            <div class="countryInfo">
                <h2>{{ countryName }}</h2>
                <p>
                    Population:<span>&nbsp;{{ population }}</span>
                </p>

                <p>
                    Region:<span>&nbsp;{{ region }}</span>
                </p>

                <p v-if="capitals">
                    Capital:<span v-for="capital in capitals" :key="capital"
                        >&nbsp;{{ capital }}</span
                    >
                </p>
            </div>
        </div>
    </router-link>
</template>

<script setup>
// imports
import { ref } from 'vue';

// data
// eslint-disable-next-line no-undef
const props = defineProps({
    countryData: {
        type: Object,
        required: true,
    },
});

const flag = ref(props.countryData.flags.png);
const flagAlt = ref('flag of ' + props.countryData.name.common);
const countryName = ref(props.countryData.name.common);
const population = ref(props.countryData.population.toLocaleString('en-US'));
const region = ref(props.countryData.region);
const capitals = ref(props.countryData.capital);
const countryCode = ref(props.countryData.cca3);
</script>

<style scoped lang="scss">
a {
    text-decoration: none;
    color: var(--text-color);
    transition-duration: 0.2s;
}
.card {
    margin: 1rem 0rem;
    max-width: 16.5rem;
    width: 100%;
    background-color: var(--element-bg);
    border-radius: 0.3rem;
    box-shadow: 0px 0px 15px 0px var(--shadow);
    overflow: hidden;
    transition-duration: 0.2s;

    &:hover {
        cursor: pointer;
    }

    @media #{$mq-600-down} {
        max-width: 100%;
        margin: 1rem 0rem;

        img {
            width: 100% !important;
            height: 12.5rem !important;
        }
    }

    img {
        width: 250px;
        height: 150px;
    }

    .countryInfo {
        padding: 0rem 1rem;

        h2 {
            font-size: 1.3rem;
        }
        p {
            font-weight: 600;
            & > span {
                font-weight: 400;
            }
        }
    }
}
</style>
