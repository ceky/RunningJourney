<template>
    <header class="header__container">
        <div class="header__title">
            <router-link to="/">Running Adventures</router-link>            
        </div>
        <ul class="header__menu">
            <li class="header__menu-item">
                <router-link to="/">Albums</router-link>
            </li>
            <li class="header__menu-item">
                <router-link to="/best">Personal Best</router-link>
            </li>
            <li class="header__menu-item">
                <router-link to="/next">What's Next</router-link>
            </li>
        </ul>
    </header>
</template>

<script>
</script>

<style scoped>
.header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 65rem;
    margin: 0 auto;
}

.header__menu {
    display: flex;
    list-style: none;
    justify-content: space-between;
    width: 16rem;
}
</style>
