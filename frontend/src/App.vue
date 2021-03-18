<template>
    <div id="app">
        <Navbar />
        <SmallNavbar />
        <router-view />
    </div>
</template>

<script>
import Navbar from './components/topnavbar/navbar/Navbar';
import SmallNavbar from './components/topnavbar/smallnavbar/SmallNavbar';
// import MainPage from "./components/mainpage/MainPage";

export default {
    name: 'App',
    components: {
        Navbar,
        SmallNavbar,
        // MainPage,
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
