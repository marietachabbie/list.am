<template>
    <div id="app">
        <NavBar />
        <SmallNavbar />

        <div id="main">
            <IconsBar />
            <router-view />
        </div>

        <Footer />
    </div>
</template>

<script>
import NavBar from './components/topnavbar/firstrow/NavBar';
import SmallNavbar from './components/topnavbar/smallnavbar/SmallNavbar';
import IconsBar from './components/iconsbar/IconsBar';
import Footer from './components/footer/Footer'

export default {
    name: 'App',
    components: {
        NavBar,
        SmallNavbar,
        IconsBar,
        Footer,
    }
}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #f1f1f1;
    }

    #main {
        display: grid;
        grid-template-columns: auto auto;
    }
</style>
