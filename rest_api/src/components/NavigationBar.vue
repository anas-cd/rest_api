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
    background-color: var(--element-bg);
    box-shadow: 1px 0px 7px 1px var(--shadow);
    margin-bottom: 3rem;
    transition-duration: 0.2s;

    button {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        font-size: 1rem;
        font-weight: 600;
        background-color: transparent;
        border: none;
        color: var(--text-color);
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
