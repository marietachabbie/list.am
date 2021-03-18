<template>
    <div class="container">
        <div id="vue-top-navbar-wrapper"
        class="ui fixed menu"
        style="padding: 10px 120px 0 120px;
        height: 50px;
        border-style: none;"
        >
            <div style="margin: 5px">
                <img class="ui image" src="https://i.ibb.co/mFnGdC6/list-am-logo-1.jpg"
                height="30px" alt="list-am-logo">
            </div>
            <div class="input"
            style="font-size: 14px;
            background-color: #f1f1f1;
            border-radius: 35px;
            margin: 5px;
            padding: 5px 10px;"
            >
                <i class="fa fa-search"
                style="color:grey;
                margin-right: 5px;"></i>
                <input
                placeholder="Որոնում"
                style="width: 500px;
                border-style: none;
                outline: none;
                background-color:transparent;"
                />
            </div>
            
            <div class="right menu">
                <a href="#"
                style="font-size:14px;
                padding: 10px;"
                >
                    Իմ էջը
                </a>

                <a href="#"
                style="background-color: #0e72ea;
                color: white;
                font-size: 14px;
                border-radius: 35px;
                width: 230px;
                padding: 5px 0 0 15px;
                margin: 5px 0 5px 0;"
                >
                Տեղադրել հայտարարություն
                </a>
            </div>
        </div>

        <Dropdowns />
    </div>
</template>

<script>
import Dropdowns from '../dropdowns/Dropdowns';

export default {
    name: 'Navbar',
    components: {
        Dropdowns,
    }
}
</script>

<style>
    .container {
        background-color: white;
    }
    
</style>
