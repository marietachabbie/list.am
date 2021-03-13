<template>
    <div id="app">
        <Navbar />
        <!--<Antiquities /> -->  
    </div>
</template>

<script>
// import Antiquities from './components/Antiquities';
import Navbar from './components/Navbar';

export default {
    name: 'App',
    components: {
        // Antiquities,
        Navbar,
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
