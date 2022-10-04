<template>
    <router-link to="/test">
        <div class="card">
            <img
                src="@/assets/flags/Flag_of_Germany.png"
                alt="Germany flag, top black, middle red, bottom yellow"
            />
            <div class="countryInfo">
                <h2>Germany</h2>
                <p>Population:<span>&nbsp;81,770,900</span></p>

                <p>Region:<span>&nbsp;Europe</span></p>

                <p>Capital:<span>&nbsp;Berlin</span></p>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'ContryCard',
};
</script>

<style scoped lang="scss">
a {
    text-decoration: none;
    color: var(--text-color);
    transition-duration: 0.2s;
}
.card {
    margin: 1rem 0rem;
    max-width: 16.5rem;
    width: 100%;
    background-color: var(--element-bg);
    border-radius: 0.3rem;
    box-shadow: 0px 0px 15px 0px var(--shadow);
    overflow: hidden;
    transition-duration: 0.2s;

    &:hover {
        cursor: pointer;
    }

    @media #{$mq-600-down} {
        max-width: 100%;
        margin: 1rem 0rem;

        img {
            width: auto;
            height: 12.5rem;
        }
    }

    img {
        width: 100%;
    }

    .countryInfo {
        padding: 0rem 1rem;

        h2 {
            font-size: 1.3rem;
        }
        p {
            font-weight: 600;
            & > span {
                font-weight: 400;
            }
        }
    }
}
</style>
