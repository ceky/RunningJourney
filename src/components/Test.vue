<template>
    <div class="test">
        <h1>{{title}}</h1>
        <div>{{user.firstName}}</div>
        <div v-text="user.lastName"></div>
        <h2>{{msg}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'test',
        props: {
            msg: {
                type: String,
                default: 'msg'
            }
        },
        data() {
            return {
                title: 'Hello World!',
                user: {
                    firstName: 'John',
                    lastName: 'Doe'
                }
            }
        }
    }
</script>

<style scoped>
</style>
