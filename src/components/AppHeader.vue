<template>
    <header class="header__container">
        <div class="header__title">
            <router-link to="/" class="header__logo bounceIn animated" ><span style="font-size: 50px;">RUNNING</span> <span style="top: -31px; position: relative; color: mediumvioletred">ADVENTURES</span></router-link>
        </div>
        <ul class="header__menu">
            <li class="header__menu-item">
                <router-link to="/">Albums</router-link>
            </li>
            <li class="header__menu-item">
                <router-link to="/best">Personal Best</router-link>
            </li>
        </ul>
    </header>
</template>

<script>
</script>

<style scoped>
ul .router-link-exact-active {
    color: mediumvioletred;
}

.header__logo {
    width: 164px;
    display: inline-block;
}

.header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 65rem;
    margin: 0 auto;
    flex-wrap: wrap;
    padding: 0 15px;
}

.header__menu {
    display: flex;
    list-style: none;
    justify-content: center;
    padding: 0;
    margin: 0;
    z-index: 10;
}

.header__menu-item {
    white-space: nowrap;
    font-size: 20px;
}

.header__menu-item:not(:last-child) {
    margin-right: 20px;
}

.header__title {
    font-family: 'Londrina Solid', cursive;
    font-size: 34px;
    height: 100px;
}

@media only screen and (max-width: 595px) {
    .header__title {
        width: 100%;
        text-align: center;
    }
    .header__menu {
        width: 100%;
    }
}
</style>
