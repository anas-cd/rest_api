<template>
    <header class="header">
        <div class="wl flexer_row">
            <h1>Where in the world?</h1>
            <button>
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
    background-color: $white;
    box-shadow: 1px 0px 7px 1px #80808025;
    margin-bottom: 3rem;

    button {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        font-size: 1rem;
        font-weight: 600;
        background-color: transparent;
        border: none;

        &:hover {
            cursor: pointer;
        }
        img {
            margin-right: 0.5rem;
        }
    }
}
</style>
