<template>
    <div class="container">
        <sui-segment class="ui grid" id="announcements">
            <div class="row">
                <div class="five wide column">
                    <a href="#">
                        <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" />
                    hello</a>
                </div>
                <div class="five wide column">
                    <a href="#">
                        <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" />
                    hello</a>
                </div>
                <div class="five wide column">
                    <a href="#">
                        <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" />
                    hello</a>
                </div>
            </div>
        </sui-segment>
    </div>
</template>

<script>

export default {
    name: 'Announcements',
    data() {
        return {
            posts: [],
            error: ''
        }
    }
}
</script>

<style scoped>
    .error {
        color: red;
    }
    .container {
        width: 900px;
        background-color: transparent;
    }
    #announcements {
        margin-top: 10px;
        border-radius: 10px;
    }
    img {
        width: 200px;
        border-radius: 10px;
    }
</style>
