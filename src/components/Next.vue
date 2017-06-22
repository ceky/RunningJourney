<template>
    <div class="next__container">
        <ul class="next__items-container">
            <li class="next__item">
                <div class="next__date">
                    28 August 2017
                </div>
                <div class="next__name">
                    Via Maria Theresia
                </div>
                <div class="next__distance">
                    21km
                </div>
            </li>
            <li class="next__item">
                <div class="next__date">
                    1 October 2017
                </div>
                <div class="next__name">
                    Ascotid Trail Race
                </div>
                <div class="next__distance">
                    21km
                </div>
            </li>
            <li class="next__item">
                <div class="next__date">
                    15 October 2017
                </div>
                <div class="next__name">
                    Bucharest Marathon
                </div>
                <div class="next__distance">
                    42km
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
.next__items-container {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0;
}

.next__item {
    background-color: coral;
    border-radius: 50%;
    width: 250px;
    height: 250px;
    box-shadow: 3px 3px 6px rgba(0,0,0,0.5);
    text-align: center;
    font-size: 26px;
    margin-bottom: 40px;
}

.next__item:hover {
    transform: scale(1.1);
    transition: all ease 0.3s;
}

.next__name {
    font-weight: bold;
    text-shadow: 0px 0px 6px rgba(255,255,255,0.7);
}

.next__date {
    margin-top: 64px;
    font-style: italic;
}
</style>
