<template>
    <div class="wl">
        <RouterLink to="/" class="backLink">
            <img src="@/assets/arrow-back-outline.svg" alt="go back button" />
            <button>Back to home</button>
        </RouterLink>
        <h1>woops, we only cover earth for now.</h1>
    </div>
</template>

<script setup></script>

<style scoped lang="scss">
.backLink {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    width: fit-content;
    margin: 3rem 0rem;
    padding: 0.5rem 1rem;
    box-shadow: 0px 0px 15px 0px var(--shadow);
    background-color: var(--element-bg);
    text-decoration: none;
    border-radius: 0.5rem;
    transition-duration: 0.2s;

    & > img {
        width: 1.5rem;
        filter: var(--icon-color);
    }

    & > button {
        border: none;
        background-color: transparent;
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 1px;
        color: var(--text-color);
        transition-duration: 0.2s;

        &:hover {
            cursor: pointer;
        }
    }
}
</style>
