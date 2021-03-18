<template>
    <div class="column" id="right-bar">
        <sui-segment id="seller">
            <img :src="post.sellerPhotoLink" id="seller-photo">
            <p id="seller-name">{{ post.sellerName }} Միքայելյան</p>
            <p id="registered">List.am-ում է` 12.05.2015</p>
            <button class="ui primary button custom-button">
                Գրել
            </button>
            <br>
            <button class="ui positive button custom-button">
                Զանգահարել
            </button>
        </sui-segment>

        <sui-segment id="navigation">
            <a href="#">
                <sui-icon name="angle double up"></sui-icon>
                <p>Տոպ</p>
            </a>
            <a href="#">
                <sui-icon name="home"></sui-icon>
                <p>Գլխավոր էջ</p>
            </a>
            <a href="#">
                <sui-icon name="clock outline"></sui-icon>
                <p>Շտապ</p>       
            </a>
        </sui-segment>

        <sui-segment id="similar-items">
        </sui-segment>
    </div>
</template>

<script>
export default {
    name: 'RightBar',
    props: {
        post: {},
    }
}
</script>

<style scoped>
    #right-bar {
        width: 440px;
    }
    #seller {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        text-align: center;
    }
    #seller-photo {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-bottom: 16px;
    }
    #seller-name {
        font-size: 22px;
        line-height: 4px;
    }
    #registered {
        font-size: 12px;
        color: #707073;
    }
    .custom-button {
        width: 220px;
        height: 34px;
        margin-bottom: 8px;
        border-radius: 20px;
    }
    #navigation {
        display: grid;
        grid-template-columns: auto auto auto;
        text-align: center;
        font-size: 18px;
    }
    #similar-items {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
</style>
