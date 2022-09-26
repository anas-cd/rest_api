<template>
    <header class="header">
        <h1>Where in the world?</h1>
        <button>
            <img src="@/assets/moon.svg" alt="theme toggle">
            Dark Mode
        </button>
    </header>
</template>

<script>
    export default {
      name: "Navigation",
    };
</script>

<style scoped lang="scss">
.header {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
    background-color: $white;
    box-shadow: 1px 0px 7px 1px gray;
    margin-bottom: 1rem;
    h1 {

    }

    & > button {
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