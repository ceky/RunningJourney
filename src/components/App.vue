<template>
    <div>
        <app-header></app-header>
        <!-- <test msg="Hello"></test>
        <users></users> -->
        <main-content></main-content>
        <app-footer></app-footer>
    </div>

</template>

<script>
    import Test from './test'
    import Users from './users'
    import AppHeader from './AppHeader'
    import MainContent from './MainContent'
    import AppFooter from './AppFooter'

    export default {
        name: 'app',
        components: {
            Test, Users, AppHeader, MainContent, AppFooter
        }
    }
</script>

<style>
    #app {
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }
</style>
