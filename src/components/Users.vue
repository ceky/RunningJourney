<template>
    <div class="users">
        <h1>Users</h1>
        <form v-on:submit="addUser">
            <input type="text" v-model="newUser.name" placeholder="Enter name" /> <br>
            <input type="text" v-model="newUser.email" placeholder="Enter email" /> <br>
            <input type="submit" label="Submit">
        </form>
        <ul>
            <li v-for="user in users">
                {{user.name}}: {{user.email}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'users',
        data() {
            return {
                newUser: {},
                users: [
                    {
                        name: 'Lu Dr',
                        email: 'aaa@a.com',
                        contacted: false
                    },
                    {
                        name: 'Bi La',
                        email: 'aaa@a.com',
                        contacted: false
                    },
                    {
                        name: 'Io Ma',
                        email: 'aaa@a.com',
                        contacted: false
                    }
                ]
            }
        },
        methods: {
            addUser: function(e) {
                e.preventDefault();

                this.users.push({
                    name: this.newUser.name,
                    email: this.newUser.email,
                    contacted: false
                });
                console.log('add');
            }
        }
    }
</script>

<style scoped>
</style>
