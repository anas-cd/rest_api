<template>
    <div class="wl">
        <div class="actionSection"></div>
        <!-- <div class="ListSection"></div> -->
        <div class="infoSection">
            <div class="card">
                <div class="img"></div>
                <div class="mainInfo">
                    <div class="name"></div>
                    <div class="CInfo"></div>
                    <div class="CInfo"></div>
                    <div class="CInfo"></div>
                </div>
            </div>
            <div class="card">
                <div class="img"></div>
                <div class="mainInfo">
                    <div class="name"></div>
                    <div class="CInfo"></div>
                    <div class="CInfo"></div>
                    <div class="CInfo"></div>
                </div>
            </div>
            <div class="card">
                <div class="img"></div>
                <div class="mainInfo">
                    <div class="name"></div>
                    <div class="CInfo"></div>
                    <div class="CInfo"></div>
                    <div class="CInfo"></div>
                </div>
            </div>
            <div class="card">
                <div class="img"></div>
                <div class="mainInfo">
                    <div class="name"></div>
                    <div class="CInfo"></div>
                    <div class="CInfo"></div>
                    <div class="CInfo"></div>
                </div>
            </div>
            <div class="card">
                <div class="img"></div>
                <div class="mainInfo">
                    <div class="name"></div>
                    <div class="CInfo"></div>
                    <div class="CInfo"></div>
                    <div class="CInfo"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.actionSection {
    width: 100%;
    height: 3.5rem;
    margin-bottom: 3rem;
    border-radius: 0.3rem;
    animation: pulse 1s infinite;
    animation-delay: 0.2s;
    background-repeat: no-repeat;
    background-image: linear-gradient(
        90deg,
        transparent 0%,
        var(--shadow) 50%,
        transparent 100%
    );
}
.infoSection {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    @media #{$mq-600-down} {
        flex-flow: column nowrap;
    }
    & .card {
        width: 265px;
        height: 20.5rem;
        margin: 1rem 0;
        background-color: var(--element-bg);
        box-shadow: 0 0 15px 0 var(--shadow);
        border-radius: 0.3rem;
        overflow: hidden;
        @media #{$mq-600-down} {
            width: 100%;
        }
        @for $i from 1 through 5 {
            &:nth-child(#{$i}) {
                opacity: calc(1 /#{$i});
            }
        }
        & > .img {
            width: 100%;
            height: 150px;
            animation: pulse 1s infinite;
            animation-delay: 0.5s;
            background-repeat: no-repeat;
            background-image: linear-gradient(
                90deg,
                transparent 0%,
                var(--shadow) 50%,
                transparent 100%
            );
        }

        & > .mainInfo {
            padding: 1rem;
            & > .name {
                margin-bottom: 2rem;
                width: 100%;
                height: 40px;
                border-radius: 0.3rem;
                animation: pulse 1s infinite;
                animation-delay: 0.9s;
                background-repeat: no-repeat;
                background-image: linear-gradient(
                    90deg,
                    transparent 0%,
                    var(--shadow) 50%,
                    transparent 100%
                );
            }
            & > .CInfo {
                width: 100%;
                height: 15px;
                margin-bottom: 1rem;
                border-radius: 0.3rem;
                animation: pulse 1s infinite;
                animation-delay: 0.4s;
                background-repeat: no-repeat;
                background-image: linear-gradient(
                    90deg,
                    transparent 0%,
                    var(--shadow) 50%,
                    transparent 100%
                );
            }
        }
    }
}

// loading animations
@keyframes pulse {
    0% {
        background-position-x: 0px;
    }
    50% {
        background-position-x: 200px;
    }
    100% {
        background-position-x: 0px;
    }
}
</style>
