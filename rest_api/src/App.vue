<template>
    <NavigationBar />
    <RouterView v-slot="{ Component }">
        <Transition mode="out-in">
            <suspense timeout="0">
                <template #default>
                    <div class="wl">
                        <component :is="Component"></component>
                    </div>
                </template>
                <template #fallback>Loading..</template>
            </suspense>
        </Transition>
    </RouterView>
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
// transition styling
.v-enter-active,
.v-leave-active {
    transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
