<template>
    <NavigationBar />
    <div class="wl">
        <router-view />
    </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
export default {
    components: {
        NavigationBar,
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--text-color);
}
</style>
