<template>
    <div id="container">
        <IconsBar />
        <LeftBarMenu />
        <Announcements />
    </div>
</template>

<script>
import IconsBar from './iconsbar/IconsBar';
import LeftBarMenu from './leftbarmenu/LeftBarMenu';
import Announcements from './announcements/Announcements';

export default {
    name: 'LeftMenu',
    components: {
        IconsBar,
        LeftBarMenu,
        Announcements,
    }
}
</script>

<style scoped>
    #container {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-column-gap: 20px;
        margin: 0 120px 0 70px;
    }
</style>>
