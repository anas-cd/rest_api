<template>
    <NavigationBar />
    <RouterView v-slot="{ Component }">
        <template v-if="Component">
            <Transition mode="in-out">
                <suspense timeout="0">
                    <div class="wl">
                        <component
                            :is="Component"
                            :key="$route.path"
                        ></component>
                    </div>

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
slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
