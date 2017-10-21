<template>
    <div class="filter">
        <a href="#" class="filter__btn" v-on:click="onClickFilter">Filter</a>
        <div class="filter__open" v-if="isFilterOpen">
            <button class="filter__close-btn" v-on:click="onClickClose"></button>
            <input type="text" placeholder="Search..." class="filter__search" v-model="searchText">
            <div class="filter__option-container">
                Distance:
                <div class="expanded button-group">
                    <a v-bind:class="{ active: activeDistanceFilter === 'all' }" v-on:click="onClickDistanceFilter('all')" class="button">All</a>
                    <a v-bind:class="{ active: activeDistanceFilter === '21km' }" v-on:click="onClickDistanceFilter('21km')" class="button">Half-Marathon</a>
                    <a v-bind:class="{ active: activeDistanceFilter === '42km' }" v-on:click="onClickDistanceFilter('42km')" class="button">Marathon</a>
                </div>
            </div>
            <div class="filter__option-container">
                Year:
                <div class="expanded button-group">
                    <a v-bind:class="{ active: activeYearFilter === 'all' }" v-on:click="onClickYearFilter('all')" class="button">All</a>
                    <a v-bind:class="{ active: activeYearFilter === '2015' }" v-on:click="onClickYearFilter('2015')" class="button">2015</a>
                    <a v-bind:class="{ active: activeYearFilter === '2016' }" v-on:click="onClickYearFilter('2016')" class="button">2016</a>
                    <a v-bind:class="{ active: activeYearFilter === '2017' }" v-on:click="onClickYearFilter('2017')" class="button">2017</a>
                </div>
            </div>
            <div class="filter__option-container">
                Terrain:
                <div class="expanded button-group">
                    <a v-bind:class="{ active: activeTerrainFilter === 'all' }" v-on:click="onClickTerrainFilter('all')" class="button">All</a>
                    <a v-bind:class="{ active: activeTerrainFilter === 'road' }" v-on:click="onClickTerrainFilter('road')" class="button">Road</a>
                    <a v-bind:class="{ active: activeTerrainFilter === 'trail' }" v-on:click="onClickTerrainFilter('trail')" class="button">Trail</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            searchText: '',
            isFilterOpen: false,
            activeDistanceFilter: 'all',
            activeYearFilter: 'all',
            activeTerrainFilter: 'all'
        }
    },
    methods: {
        onClickFilter: function (event) {
            this.isFilterOpen = !this.isFilterOpen;
        },
        onClickDistanceFilter: function(filter) {
            this.activeDistanceFilter = filter;
            this.$emit('distanceFilterChanged', this.activeDistanceFilter);
        },
        onClickYearFilter: function(filter) {
            this.activeYearFilter = filter;
            this.$emit('yearFilterChanged', this.activeYearFilter);
        },
        onClickTerrainFilter: function(filter) {
            this.activeTerrainFilter = filter;
            this.$emit('terrainFilterChanged', this.activeTerrainFilter);
        },
        onClickClose: function (event) {
            this.isFilterOpen = false;
        }
    },
    watch: {
        'searchText': function(val, oldVal) {
            this.$emit('searchTextChanged', this.searchText);
        }
    }
}
</script>

<style scoped>
.filter {
    position: relative;
    left: 10px;
    margin-right: 20px;
    margin-bottom: 10px;
    padding: 10px;
    box-shadow: 0 1px 1px;
    border-radius: 4px;
    border: 1px solid rgb(85, 26, 139);
    background-color: rgba(85, 26, 139, 0.2);
}

.filter__btn {
    display: block;
    padding-top: 4px;
    color: rgb(85, 26, 139);
    text-align: center;
    font-size: 20px;
    line-height: 32px;
}

.filter__close-btn {
    position: absolute;
    top: 10px;
    right: 0;
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
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
    color: rgb(85, 26, 139);
    background: none;
    outline: none;
    border: none;
    border-bottom: 2px solid rgb(85, 26, 139);
}

.filter__option-container {
    font-size: 14px;
    font-weight: bold;
    font-family: sans-serif;
}

.button.active {
    background-color: rgb(85, 26, 139);
}
</style>
