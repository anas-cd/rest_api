<template>
    <router-link to="/" class="backLink">
        <img src="@/assets/arrow-back-outline.svg" alt="go back button" />
        <button>Back</button>
    </router-link>
    <div class="country">
        <img
            src="@/assets/flags/Flag_of_Germany.png"
            alt="flag of {{ $route.params.name }}"
        />
        <div class="countryDetails">
            <h2>{{ $route.params.name }}</h2>
            <div class="CInfo">
                <div class="mainCInfo">
                    <p>Native Name:<span>&nbsp;81,770,900</span></p>
                    <p>Population:<span>&nbsp;81,770,900</span></p>
                    <p>Region:<span>&nbsp;81,770,900</span></p>
                    <p>Sub Region:<span>&nbsp;81,770,900</span></p>
                    <p>Capital:<span>&nbsp;81,770,900</span></p>
                </div>
                <div class="secondaryCInfo">
                    <p>Top Level Domain:<span>&nbsp;81,770,900</span></p>
                    <p>Currencies:<span>&nbsp;81,770,900</span></p>
                    <p>Languages:<span>&nbsp;81,770,900</span></p>
                </div>
            </div>
            <div class="borderCountries">
                <p>Border Countries:</p>
                <router-link to="/france">France</router-link>
                <router-link to="/germany">Germany</router-link>
                <router-link to="/netherland">Netherland</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CountryView',
};
</script>

<style scoped lang="scss">
// router link styling
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

// country details
.country {
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 2rem;
    height: 400px;
    justify-content: space-between;
    @media #{$mq-600-down} {
        flex-flow: column nowrap;
        height: auto;
    }
    img {
        flex-basis: 40%;
        flex-shrink: 1;
        max-width: 575px;
        max-height: 400px;
    }
    .countryDetails {
        margin-left: 2rem;
        flex-basis: 40%;
        max-width: 30rem;
        flex-grow: 1;
        @media #{$mq-600-down} {
            margin-left: 0;
            margin-top: 2rem;
        }
        .CInfo {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            @media #{$mq-600-down} {
                flex-flow: column wrap;
            }
            p {
                margin-bottom: 0;
                font-weight: 600;
                & > span {
                    font-weight: 400;
                }
            }
        }

        .borderCountries {
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            margin-top: 3rem;

            & > p {
                font-weight: 600;
                @media #{$mq-600-down} {
                    flex-basis: 100%;
                }
            }
            & > a {
                margin-left: 0.7rem;
                text-decoration: none;
                font-weight: 400;
                color: var(--text-color);
                background-color: var(--element-bg);
                box-shadow: 0px 0px 15px 0px var(--shadow);
                border-radius: 0.2rem;
                padding: 0.2rem 1rem;
                transition-duration: 0.2s;
                &:first-of-type {
                    @media #{$mq-600-down} {
                        margin-left: 0px;
                    }
                }
            }
        }
    }
}
</style>
