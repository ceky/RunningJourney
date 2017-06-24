<template>
    <div class="albums__container">
        <div class="filter">
            <a href="#" class="filter__btn" v-on:click="onClickFilter">Filter</a>
            <div class="filter__open" v-if="isFilterOpen">
                <button class="filter__close-btn" v-on:click="onClickClose"></button>
                <input type="text" placeholder="Search..." class="filter__search" v-model="searchText">
            </div>
        </div>
        <ul class="albums__items-container">
            <li v-for="item in itemsLessThanTen" class="albums__item">
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
                    this.albums = response.data.past.reverse();
                })
        },
        data () {
            return {
                albums: [],
                searchText: '',
                isFilterOpen: false
            }
        },
        methods: {
            onClickFilter: function (event) {
                this.isFilterOpen = !this.isFilterOpen;
            },
            onClickClose: function (event) {
                this.isFilterOpen = false;
            }
        },
        computed: {
            itemsLessThanTen: function() {
                return this.albums.filter((item) => {
                    return item.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1;
                })
            }
        }
    }
</script>

<style scoped>
.albums__container {
    padding: 10px;
}

.filter {
    position: relative;
    left: 10px
}

.filter__btn {
    display: block;
    width: calc(100% - 20px);
    padding-top: 4px;
    color: rgb(85, 26, 139);
    text-align: center;
    font-size: 20px;
    line-height: 32px;
    box-shadow: 0 1px 1px;
    border-radius: 4px;
    border: 1px solid rgb(85, 26, 139);
    background-color: rgba(85, 26, 139, 0.2);
}

.filter__close-btn {
    position: absolute;
    top: 0;
    right: 18px;
    width: 40px;
    height: 40px;
    background: transparent;
    border: 2px solid mediumvioletred;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
    transform: scale(0.6);
    outline: none;
}

.filter__close-btn::before {
    left: 50%;
    top: 50%;
    margin-left: -12px;
    margin-top: -2px;
    width: 24px;
    height: 2px;
    background-color: mediumvioletred;
    content: "";
    position: absolute;
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}

.filter__close-btn::after {
    width: 24px;
    height: 2px;
    background-color: mediumvioletred;
    content: "";
    left: 50%;
    top: 50%;
    margin-left: -12px;
    margin-top: -2px;
    position: absolute;
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

.filter__search {
    width: calc(100% - 20px);
    margin-top: 10px;
    font-size: 20px;
    font-weight: bold;
    color: rgb(85, 26, 139);
    background: none;
    outline: none;
    border: none;
    border-bottom: 2px solid rgb(85, 26, 139);
}

.albums__items-container {
    list-style: none;
    display: grid;
    padding: 0px;
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
