<template>
    <div class="best__container">
        <div class="best__title">
            These are my best times:
        </div>

        <ul class="best__items-container">
            <li class="best__item">
                <div class="best__distance">
                    10km
                </div>
                <div class="best__time">
                    51m 52s
                </div>
                <div class="best__competition">
                    Crosul de noapte 2017
                </div>
            </li>
            <li class="best__item best__item--second">
                <div class="best__distance">
                    21km
                </div>
                <div class="best__time">
                    1h 55m 02s
                </div>
                <div class="best__competition">
                    Cluj Half Marathon 2017
                </div>
            </li>
            <li class="best__item">
                <div class="best__distance">
                    42km
                </div>
                <div class="best__time">
                    4h 33m 23s
                </div>
                <div class="best__competition">
                    Rome Marathon 2017
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
.best__title {
    font-size: 28px;
    text-shadow: azure 2px 1px;
}

.best__items-container {
    list-style: none;
    padding: 0;
}

.best__item {
    transform: rotate(-1deg);
    box-shadow: 0 0 0 2px rgba(0,0,0,0.1);
    margin-bottom: 3rem;
    background-color: coral;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.best__item:hover
{
    transition: all 0.3s ease;
    transform: rotate(1deg);
}

.best__distance {
    font-size: 32px;
}

.best__time {
    position: relative;
    font-size: 40px;
    animation: pulse 2s infinite;
}

.best__competition {
    font-size: 20px;
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
