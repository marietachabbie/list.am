<template>
    <div id="app">
        <NavBar />
        <SmallNavbar />
        <IconsBar />
        <router-view />
    </div>
</template>

<script>
import NavBar from './components/topnavbar/firstrow/NavBar';
import SmallNavbar from './components/topnavbar/smallnavbar/SmallNavbar';
import IconsBar from './components/iconsbar/IconsBar';

export default {
    name: 'App',
    components: {
        NavBar,
        SmallNavbar,
        IconsBar,
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
</style>
