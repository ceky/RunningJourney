<template>
    <div class="best__container">
        <ul class="best__items-container">
            <li class="best__item">
                <div class="best__item-container">
                    <div class="best__distance">
                        10km
                    </div>
                    <div class="best__time">
                        47m 19s
                    </div>
                    <div class="best__competition">
                        Crosul de noapte 2017
                    </div>
                </div>
            </li>
            <li class="best__item best__item--second">
                <div class="best__item-container">
                    <div class="best__distance">
                        21km
                    </div>
                    <div class="best__time">
                        1h 55m 02s
                    </div>
                    <div class="best__competition">
                        Cluj Half Marathon 2017
                    </div>
                </div>
            </li>
            <li class="best__item">
                <div class="best__item-container">
                    <div class="best__distance">
                        42km
                    </div>
                    <div class="best__time">
                        4h 33m 23s
                    </div>
                    <div class="best__competition">
                        Rome Marathon 2017
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
.best__items-container {
    list-style: none;
    padding: 0;
}

.best__item {
    font-size: 18px;
    transform: rotate(-1deg);
    margin-bottom: 3rem;
}

.best__item-container {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.best__item::before {
    content: "";
    background-color: dimgrey;
    height: 100%;
    width: 94%;
    position: absolute;
    left: 3%;
    z-index: -1;
    transform: rotate(1deg);
}

.best__item::after {
    content: "";
    background-color: coral;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    box-shadow: 0 0 10px rgba(0,0,0,0.4);
}

.best__distance {
}

.best__time {
    position: relative;
    animation: pulse 2s infinite;
    font-weight: bold;
}

.best__competition {
}

@keyframes pulse {
    0% { transform: scale(1); }
    30% { transform: scale(1); }
    40% { transform: scale(1.08); }
    50% { transform: scale(1); }
    60% { transform: scale(1); }
    70% { transform: scale(1.05); }
    80% { transform: scale(1); }
    100% { transform: scale(1); }
}

</style>
