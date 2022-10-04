<template>
    <SearchFilter />
    <div class="CListContainer">
        <ContryCard />
        <ContryCard />
        <ContryCard />
        <ContryCard />
    </div>
</template>

<script>
import SearchFilter from '@/components/SearchFilter.vue';
import ContryCard from '@/components/ContryCard.vue';
// @ is an alias to /src

export default {
    name: 'HomeView',
    components: {
        SearchFilter,
        ContryCard,
    },
};
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
