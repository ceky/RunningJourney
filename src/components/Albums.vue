<template>
    <div class="albums__container">
        <div class="albums__title">
            Albums go here
        </div>
        <ul class="albums__items-container">
            <li v-for="item in albums" class="albums__item">
                <div class="album__name">
                    {{item.name}}
                </div>
                <div class="album__date">
                    {{item.month}} {{item.year}}
                </div>
                <div class="album__time">
                    {{item.time}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        created: function() {
            this.$http.get('./static/albums.json')
                .then((response) => {
                    this.albums = response.data.past;
                })
        },
        data () {
            return {
                albums: []
            }
        }
    }
</script>

<style scoped>
</style>
