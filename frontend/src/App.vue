<template>
    <div id="app">
        <Navbar />
        <SmallNavbar />
        <LeftBar />
        <Antiquities />  
    </div>
</template>

<script>
import Navbar from './components/Navbar';
import LeftBar from './components/LeftBar';
import Antiquities from './components/Antiquities';
import SmallNavbar from './components/SmallNavbar';

export default {
    name: 'App',
    components: {
        Navbar,
        SmallNavbar,
        LeftBar,
        Antiquities,
    }
}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        background-color: #f1f1f1;
    }
</style>
