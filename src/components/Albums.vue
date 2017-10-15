<template>
    <div class="albums__container">
        <albums-filter
            v-on:searchTextChanged="onSearchTextChanged"
            v-on:distanceFilterChanged="onDistanceFilterChanged"
            v-on:yearFilterChanged="onYearFilterChanged"
            v-on:terrainFilterChanged="onTerrainFilterChanged">
        </albums-filter>
        <div class="albums__total">
            Total: {{filteredAlbumItems.length}}
        </div>
        <ul class="albums__items-container">
            <li v-for="item in filteredAlbumItems" class="albums__item" v-on:click="onClickAlbum(item.images)">
                <img class="album__cover lozad" v-bind:data-src="'./static/albums/' + item.folder + '/' + item.cover"/>
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
    import AlbumsFilter from './AlbumsFilter';
    import lozad from 'lozad'

    export default {
        components: {
            AlbumsFilter
        },
        created: function() {
            this.$http.get('./static/albums.json')
                .then((response) => {
                    this.albums = response.data.past.reverse();

                    setTimeout(function(){
                        const observer = lozad(); // lazy loads elements with default selector as '.lozad'
                        observer.observe();

                        window.sr = ScrollReveal();
                        sr.reveal('.albums__item', { duration: 1000, scale: 0.5 });
                    }, 10);
                })
        },
        data () {
            return {
                albums: [],
                searchText: '',
                distanceFilter: 'all',
                yearFilter: 'all',
                terrainFilter: 'all'
            }
        },
        methods: {
            onSearchTextChanged: function(value) {
                this.searchText = value;
            },
            onDistanceFilterChanged: function(value) {
                this.distanceFilter = value;
            },
            onYearFilterChanged: function(value) {
                this.yearFilter = value;
            },
            onTerrainFilterChanged: function(value) {
                this.terrainFilter = value;
            },
            onClickAlbum: function(images) {
                let items = [];

                for (var image of images) {
                    items.push({src: image});
                }

                $('.albums__items-container').magnificPopup({
                    items: items,
                    gallery: {
                        enabled: true
                    },
                    type:'image'
                });
            }
        },
        computed: {
            filteredAlbumItems: function() {
                return this.albums.filter((item) => {
                    return ((item.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1) &&
                            (item.distance === this.distanceFilter || this.distanceFilter === 'all') &&
                            (item.year === this.yearFilter || this.yearFilter === 'all') &&
                            (item.terrain === this.terrainFilter || this.terrainFilter === 'all'))
                })
            }
        }
    }
</script>

<style scoped>
.albums__container {
    padding: 10px;
}

.albums__total {
    font-family: 'Londrina Solid', cursive;
    margin-left: 10px;
    font-size: 18px;
}

.albums__items-container {
    list-style: none;
    display: grid;
    margin-top: 0px;
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
    -webkit-filter: sepia(0.6) saturate(1.5);
    filter: sepia(0.6) saturate(1.5);
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
    bottom: 9px;
    padding: 1px 7px;
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
    line-height: 18px;
    width: 50px;
    height: 50px;
    padding: 7px 0px;
}
</style>
