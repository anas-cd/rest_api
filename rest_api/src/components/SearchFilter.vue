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
                    <div
                        class="dropdown-divider"
                        v-if="filterInput !== 'Filter by region'"
                    ></div>
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

// Vue consts
const emit = defineEmits(['searchFor', 'regionOf']);
const props = defineProps(['err']);

// data
const errMsg = ref('');
const searchInput = ref('');
const filterInput = ref('Filter by region');

// # searching validation functionality
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
// - search error messages displaying functionality
function displayErr(err) {
    errMsg.value = err;
    setTimeout(() => {
        errMsg.value = '';
    }, 5000);
    resetter();
}
// - search resetting functionality
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

// # filtering validation functionlity
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
            margin-left: 0.5rem;
            width: 100%;
            padding: 1rem 0rem;
            outline: none;
            border: none;
            background-color: transparent;
            color: var(--text-color);
            font-weight: 600;
            letter-spacing: 1px;
            transition-duration: 0.2s;
            &::placeholder {
                font-weight: 600;
            }
            &:focus {
                border: 1px solid lightblue;
            }
        }
        & > button {
            padding: 0.5rem;
            border: none;
            background-color: var(--body-bg);
            border-radius: 0.3rem;
            color: var(--text-color);
        }
    }

    // filter
    .dropdown-center {
        .dropdown-toggle {
            width: 12.5rem;
            height: 100%;
            border: none;
            box-shadow: 0px 0px 15px 0px var(--shadow);
            background-color: var(--element-bg);
            color: var(--text-color);
            font-weight: 600;
            transition-duration: 0.2s;
            &::after {
                margin-left: 2rem;
            }
            &:focus {
                border: 1px solid lightblue;
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
            .dropdown-divider {
                border: 1px dashed gray;
            }
        }
    }

    // error message element
    & > .errMsg {
        position: absolute;
        color: lightcoral;
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
