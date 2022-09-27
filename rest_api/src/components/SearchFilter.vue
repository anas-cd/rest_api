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
            <form action="#">
                <!-- <label for="lang">Language</label> -->
                <select name="regions" id="region" placeholder="test">
                    <option value="" disabled selected hidden>
                        Fliter by region
                    </option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchFilter',
};
</script>

<style scoped lang="scss">
div.searchFilter {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    form.searcher {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        width: 50%;
        padding: 1rem;
        box-shadow: 0px 0px 10px 0px #80808025;
        border-radius: 0.2rem;
        background-color: $white;

        & > input {
            border: none;
            background-color: transparent;
            margin-left: 0.5rem;
            padding: 0rem 0.5rem;
            width: 100%;
            outline: none;
            &::placeholder {
                font-weight: 600;
            }
        }
    }

    #region {
        padding: 1rem;
        background-color: white;
        border: none;
        box-shadow: 0px 0px 10px 0px #80808025;
        border-radius: 0.2rem;
        & * {
            background-color: $white;
            padding: 0.5rem 0rem;
        }
    }
}
</style>
