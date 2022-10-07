<template>
    <NavigationBar />
    <suspense>
        <template #default>
            <div class="wl">
                <router-view />
            </div>
        </template>
        <template #fallback>Loading..</template>
    </suspense>
</template>

<script setup>
import NavigationBar from './components/NavigationBar.vue';
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--text-color);
}
</style>
