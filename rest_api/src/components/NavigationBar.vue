<template>
    <header class="header">
        <div class="wl flexer_row">
            <h1>Where in the world?</h1>
            <button id="themeSwitch">
                <img src="@/assets/moon.svg" alt="theme toggle" />
                Dark Mode
            </button>
        </div>
    </header>
</template>

<script>
export default {
    name: 'NavigationBar',
};
</script>

<style scoped lang="scss">
.header {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin-bottom: 3rem;
    box-shadow: 1px 0px 7px 1px var(--shadow);
    background-color: var(--element-bg);
    transition-duration: 0.2s;

    button {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        border: none;
        background-color: transparent;
        color: var(--text-color);
        font-size: 1rem;
        font-weight: 600;
        transition-duration: 0.2s;

        &:hover {
            cursor: pointer;
        }
        img {
            margin-right: 0.5rem;
            filter: var(--icon-color);
        }
    }
}
</style>
