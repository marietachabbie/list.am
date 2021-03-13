<template>
    <div class="container" >
        <div id="vue-top-navbar-wrapper"
        class="ui fixed menu"
        style="padding: 0 100px 0 100px;
        height: 40px;
        margin-top: 10px;
        border-style: none;"
        >
            <div class="item">
                <img class="ui image" src="https://i.ibb.co/mFnGdC6/list-am-logo-1.jpg"
                height="30px" alt="list-am-logo">
            </div>
            <sui-input transparent
            placeholder="Որոնում"
            icon-position="left"
            icon="search"
            style="background-color: #f1f1f1;
            width: 500px;
            border-radius: 15px;
            font-size: 16px;
            "
            />
            <div class="right menu"
            >
                <a class="item" href="#"
                    style="font-size:16px;"
                >
                    Իմ էջը
                </a>
                <a class="item" href="#"
                style="background-color: #0e72ea;
                color: white;
                font-size: 16px;
                border-radius: 15px;"
                >
                Տեղադրել հայտարարություն
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style>
    .container {
        background-color: white;
    }
    
</style>
