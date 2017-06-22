<template>
    <div class="albums__container">
        <ul class="albums__items-container">
            <li v-for="item in albums" class="albums__item">
                <img class="album__cover" v-bind:src="'./static/albums/' + item.folder + '/' + item.cover" />
                <div class="album__data-container">
                    <div class="album__name">
                        {{item.name}}
                    </div>
                    <div class="album__date">
                        {{item.month}} {{item.year}}
                    </div>
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
li nth-child(odd) {
    top: 178px;
}

.albums__items-container {
    list-style: none;
    display: grid;
    padding: 10px;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
}

.albums__item {
    position: relative;
    cursor: pointer;
    border: 1px solid rgba(45, 42, 42, 0.3);
    padding: 10px;
    margin: 10px;
    border-radius: 3px;
    box-shadow: 0.5rem 0.7rem 2rem rgba(0, 0, 0, 0.7);
}

.albums__item:hover {
    transform: scale(1.1);
    transition: all ease 0.3s;
}

.album__cover {
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
    width: 100%;
    -webkit-filter: sepia(0.5) saturate(1.5);
    filter: sepia(0.5) saturate(1.5);
}

.album__data-container {
    position: absolute;
    top: 0;
    width: calc(100% - 20px);
    height: 100%;
}

.album__name {
    font-family: 'Londrina Solid', cursive;
    font-size: 20px;
    position: absolute;
    bottom: 18px;
    padding: 10px;
    background-color: #e74c3c;
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.album__date {
    font-family: 'Londrina Solid', cursive;
    font-size: 17px;
    text-align: center;
    text-transform: uppercase;
    border-radius: 50%;
    background-color: #e74c3c;
    color: white;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 57px;
    height: 41px;
    padding: 7px 0px;
}
</style>
