<template>
    <div id="container">
        <sui-segment id="icons" vertical>
            <sui-icon name="heart outline" style="color: #5b5b5c; font-size: 24px;" />
            <div style="height: 60px;"></div>
            <sui-button social="facebook" icon="facebook" style="font-size: 10px; width: 24px; padding-left: 6px;" />
            <sui-button social="vk" icon="vk" style="font-size: 10px; width: 24px; padding-left: 6px;"/>
            <sui-button style="font-size: 10px; width: 24px; background-color: orange; color: white; padding-left: 6px;" icon="odnoklassniki" />
            <sui-button style="font-size: 10px; width: 24px; background-color: #5ADF29; color: white; padding-left: 6px;" icon="whatsapp" />
        </sui-segment>

        <LeftBarMenu />
    </div>
</template>

<script>
import LeftBarMenu from './LeftBarMenu'

export default {
    name: 'LeftMenu',
    components: {
        LeftBarMenu,
    }
}
</script>

<style scoped>
    #container {
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 20px;

        width: 320px;
        margin: 0px 0 0 70px;
    }
    #icons {
        background-color: transparent;
        border-style: none;
        display: grid;
        grid-row-gap: 5px;
        padding-top: 40px;
        height: 260px;
    }
</style>>
