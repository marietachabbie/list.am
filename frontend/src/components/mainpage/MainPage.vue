<template>
    <div id="container">
        <LeftBarMenu />
        <Announcements />
    </div>
</template>

<script>
import LeftBarMenu from '../leftbarmenu/LeftBarMenu';
import Announcements from '../announcements/Announcements';

export default {
    name: 'LeftMenu',
    components: {
        LeftBarMenu,
        Announcements,
    }
}
</script>

<style scoped>
    #container {
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 20px;
        margin: 0 120px 0 50px;
    }
</style>>
