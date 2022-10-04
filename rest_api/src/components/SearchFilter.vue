<template>
    <div>
        <div class="searchFilter" role="search">
            <!-- search box form -->
            <form action="#" class="searcher">
                <img src="@/assets/search.svg" alt="search box" />
                <!-- <label for="search"></label> -->
                <input
                    id="seachBox"
                    type="text"
                    placeholder="Search for country..."
                />
            </form>
            <!-- filter region form -->
            <div class="dropdown-center">
                <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Filter by region
                </button>
                <ul class="dropdown-menu">
                    <li>
                        <button class="dropdown-item" type="button">
                            Africa
                        </button>
                    </li>
                    <li>
                        <button class="dropdown-item" type="button">
                            America
                        </button>
                    </li>
                    <li>
                        <button class="dropdown-item" type="button">
                            Asia
                        </button>
                    </li>
                    <li>
                        <button class="dropdown-item" type="button">
                            Europe
                        </button>
                    </li>
                    <li>
                        <button class="dropdown-item" type="button">
                            Oceania
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchFilter',
};
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
}
</style>
