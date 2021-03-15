<template>
    <div id="app">
        <Navbar />
        <SmallNavbar />
        <MainPage />  
    </div>
</template>

<script>
import Navbar from './components/Navbar';
import SmallNavbar from './components/SmallNavbar';
import MainPage from "./components/MainPage";

export default {
    name: 'App',
    components: {
        Navbar,
        SmallNavbar,
        MainPage,
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
