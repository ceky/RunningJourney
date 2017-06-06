<template>
    <div class="">
        Races go here
    </div>
</template>

<script>
    export default {
        created: function() {
            this.$http.get('./static/races.json')
                .then((response) => {
                    console.log(response.data.past);
                })
        }

    }
</script>

<style scoped>
</style>
