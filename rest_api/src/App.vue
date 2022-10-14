<template>
    <NavigationBar />
    <RouterView v-slot="{ Component }">
        <template v-if="Component">
            <Transition name="scale" mode="out-in" appear>
                <suspense>
                    <template #default>
                        <component :is="Component"></component>
                    </template>
                    <template #fallback>
                        <SkeletonLoader></SkeletonLoader>
                    </template>
                </suspense>
            </Transition>
        </template>
    </RouterView>
</template>

<script setup>
import NavigationBar from './components/NavigationBar.vue';
import SkeletonLoader from './components/SkeletonLoader.vue';
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--text-color);
}
// transition styling
.scale-enter-active,
.scale-leave-active {
    transition: all 0.2s ease;
}

.scale-enter-from,
.scale-leave-to {
    opacity: 0;
    transform: scale(0.8);
}
</style>
