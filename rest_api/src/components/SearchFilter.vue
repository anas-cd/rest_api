<template>
    <div class="searchFilter" role="search">
        <!-- search box form -->
        <form action="#">
            <img src="@/assets/search.svg" alt="search box">
            <!-- <label for="search"></label> -->
            <input id="seachBox" type="text" placeholder="Search for country...">
        </form>
        <!-- filter region form -->
        <form action="#">
            <!-- <label for="lang">Language</label> -->
            <select name="regions" id="region" placeholder="test">
                <option value="" disabled selected hidden>Fliter by region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </form>


    </div>
</template>

<script>
    export default {
      name: "SearchFilter",
    };
</script>

<style scoped lang="scss">
div.searchFilter {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    form {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    
    background-color: $white;
    }
}
</style>