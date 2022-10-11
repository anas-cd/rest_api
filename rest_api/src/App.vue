<template>
    <NavigationBar />
    <RouterView v-slot="{ Component }">
        <template v-if="Component">
            <Transition name="route" mode="out-in" appear>
                <suspense timeout="0">
                    <template #default>
                        <div class="wl">
                            <component :is="Component"></component>
                        </div>
                    </template>
                    <template #fallback>Loading..</template>
                </suspense>
            </Transition>
        </template>
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
// .v-enter-active,
// .v-leave-active {
//     transition: opacity 1s ease;
// }

// .v-enter-from,
// .v-leave-to {
//     opacity: 0;
// }
.route-enter-from {
    opacity: 0;
    // transform: translateY(100px);
}
.route-enter-active,
.route-leave-active {
    transition: all 0.2s ease-out;
}
.route-leave-to {
    opacity: 0;
    // transform: translateY(100px);
}
</style>
