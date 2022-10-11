<template>
    <div>
        <div class="searchFilter" role="search">
            <!-- error messages display -->
            <Transition name="fade">
                <p v-if="errMsg != ''" class="errMsg">{{ errMsg }}</p>
            </Transition>
            <!-- search box form -->
            <form action="#" class="searcher" @submit.prevent="countrySearch">
                <img
                    src="@/assets/search.svg"
                    alt="search box"
                    @click.prevent="countrySearch"
                />
                <!-- <label for="search"></label> -->
                <input
                    id="seachBox"
                    type="text"
                    placeholder="Search for country..."
                    v-model="searchInput"
                />
                <button
                    type="button"
                    v-if="searchInput !== ''"
                    @click="countrySearch('')"
                >
                    reset
                </button>
            </form>
            <!-- filter region form -->
            <div class="dropdown-center">
                <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    {{ filterInput }}
                </button>
                <ul class="dropdown-menu">
                    <li v-if="filterInput !== 'Filter by region'">
                        <button
                            class="dropdown-item"
                            type="button"
                            @click="countryFilter('Filter by region')"
                        >
                            View all
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            type="button"
                            @click="countryFilter('africa')"
                        >
                            Africa
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            type="button"
                            @click="countryFilter('america')"
                        >
                            America
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            type="button"
                            @click="countryFilter('asia')"
                        >
                            Asia
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            type="button"
                            @click="countryFilter('europe')"
                        >
                            Europe
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            type="button"
                            @click="countryFilter('oceania')"
                        >
                            Oceania
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineEmits, defineProps, watch } from 'vue';

const emit = defineEmits(['searchFor', 'regionOf']);
const props = defineProps(['err']);
// general data
const errMsg = ref('');

// # searching functionality
const searchInput = ref('');
function countrySearch(config) {
    // resetting filter by region
    filterInput.value = 'Filter by region';
    if (config !== '' && searchInput.value !== '') {
        emit('searchFor', searchInput.value);
    } else {
        if (searchInput.value !== '') {
            resetter();
        } else {
            displayErr('please type the country you want to show first');
        }
    }
}
// - search error messages functionality
function displayErr(err) {
    errMsg.value = err;
    setTimeout(() => {
        errMsg.value = '';
    }, 5000);
    resetter();
}
// - search bar resetting functionality
function resetter() {
    searchInput.value = '';
    emit('searchFor', null);
}
watch(
    () => props.err,
    () => {
        if (props.err != '') {
            displayErr(props.err);
        }
    }
);

// # filtering functionlity
const filterInput = ref('Filter by region');
function countryFilter(region) {
    // resetting search
    searchInput.value = '';
    if (region !== 'Filter by region') {
        filterInput.value = region;
        emit('regionOf', filterInput.value);
    } else {
        filterInput.value = 'Filter by region';
        emit('regionOf', null);
    }
}
</script>

<style scoped lang="scss">
@import '@../../node_modules/bootstrap/scss/bootstrap';
div.searchFilter {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-bottom: 3rem;

    @media #{$mq-600-down} {
        flex-flow: column nowrap;
        align-items: unset;
        form.searcher {
            margin-bottom: 2rem;
            width: 100% !important;
        }
    }
    form.searcher {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        width: 50%;
        padding: 0rem 1rem;
        box-shadow: 0px 0px 10px 0px var(--shadow);
        border-radius: 0.2rem;
        background-color: var(--element-bg);
        transition-duration: 0.2s;
        & > img {
            filter: var(--icon-color);
            &:hover {
                cursor: pointer;
            }
        }
        & > input {
            border: none;
            background-color: transparent;
            margin-left: 0.5rem;
            padding: 1rem 0rem;
            width: 100%;
            font-weight: 600;
            letter-spacing: 1px;
            outline: none;
            color: var(--text-color);
            transition-duration: 0.2s;
            &::placeholder {
                font-weight: 600;
            }
        }
        & > button {
            border: none;
            background-color: var(--body-bg);
            border-radius: 0.3rem;
            color: var(--text-color);
            padding: 0.5rem;
        }
    }

    // filter
    .dropdown-center {
        .dropdown-toggle {
            background-color: var(--element-bg);
            color: var(--text-color);
            border: none;
            box-shadow: 0px 0px 15px 0px var(--shadow);
            font-weight: 600;
            width: 12.5rem;
            height: 100%;
            transition-duration: 0.2s;
            &::after {
                margin-left: 2rem;
            }
        }
        .dropdown-menu {
            width: 12.5rem;
            box-shadow: 0px 0px 15px 0px var(--shadow);
            background-color: var(--element-bg);
            transition-duration: 0.2s;

            .dropdown-item {
                color: var(--text-color);

                &:hover {
                    background-color: var(--shadow);
                }
            }
        }
    }

    // error message element
    & > .errMsg {
        color: lightcoral;
        position: absolute;
        transform: translateY(-30px);
    }
}

.fade-enter-active {
    transition: all 0.3s ease-out;
}

.fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>
