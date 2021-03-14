<template>
    <div id="menu">
        <sui-segment id="statuses">
            <sui-segment vertical>
                <form>
                    <input type="radio" name="status" id="sell"/>
                    <label for="sell"> Վաճառք</label><br>
                    <input type="radio" name="status" id="exchange" />
                    <label for="exchange"> Փոխանակում</label>
                </form>
            </sui-segment>
            <sui-dropdown-divider />
            <sui-segment vertical>
                <input type="checkbox" id="photo" v-model="checked">
                <label for="photo"> Լուսանկարով</label>
            </sui-segment>
        </sui-segment>

        <sui-segment id="locations">
            <div class="ui grid">
                <div class="row">
                    <div class="ten wide column">
                        Տարածաշրջան
                    </div>
                    <div class="row">
                        <div class="column">
                            <sui-dropdown text="Ամբողջը">
                                <sui-dropdown-menu>
                                        <sui-dropdown-item>Երեւան</sui-dropdown-item>
                                        <sui-dropdown-item>Գեղարքունիք</sui-dropdown-item>
                                        <sui-dropdown-item>Լոռի</sui-dropdown-item>
                                        <sui-dropdown-item>Տավուշ</sui-dropdown-item>
                                        <sui-dropdown-item>Սյունիք</sui-dropdown-item>
                                        <sui-dropdown-item>Արարատ</sui-dropdown-item>
                                        <sui-dropdown-item>Արագածոտն</sui-dropdown-item>
                                        <sui-dropdown-item>Կոտայք</sui-dropdown-item>
                                        <sui-dropdown-item>Սյունիք</sui-dropdown-item>
                                        <sui-dropdown-item>Արմավիր</sui-dropdown-item>
                                </sui-dropdown-menu>
                            </sui-dropdown>
                        </div>
                    </div>
                </div>
            </div>
            
        </sui-segment>

        <sui-segment>
            <div class="ui grid">
                <div class="eight wide column">
                    Գին
                </div>
                <div class="three wide column">
                    <sui-input placeholder="Մին" transparent />
                </div>
                <div class="three wide column">
                    <sui-input placeholder="Մաքս" transparent />
                </div>
            </div>
        </sui-segment>

        <sui-segment id="categories">
            Կատեգորիաներ<br>
            <a href="#" style="padding-left: 20px;">Մշակույթ և հոբբի</a><br>
            <div id="list">
                <p style="color: #5b5b5c">Հնաոճ իրեր և արվեստ</p>
                <p style="padding-left: 20px; font-weight: bold">Հավաքածուներ</p>
                <a href="#">Նկարչություն և նկարներ</a><br>
                <a href="#">Արվեստի առարկաներ</a><br>
                <a href="#">Արհեստ և ձեռագործություն</a><br>
                <a href="#">Այլ</a><br>
                <a href="#">Երաժշտական գործիքներ</a><br>
                <a href="#">Սպորտ և Ֆիտնես</a><br>
                <a href="#">Որսորդություն և ձկնորսություն</a><br>
                <a href="#">Զբոսաշրջություն և ճանապարհորդություն</a><br>
                <a href="#">Գրքեր և ամսագրեր</a><br>
                <a href="#">Երաժշտություն եւ կինոնկարներ</a>
            </div>
        </sui-segment>
    </div>
</template>

<script>

export default {
    name: 'LeftBarMenu',
}
</script>

<style scoped>
    #menu {
        width: 280px;
    }
    #statuses {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding-top: 5px;
    }
    #locations {
        
    }
    #price {
    }
    #categories {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    #list {
        padding-left: 40px;
    }
    #statuses, #locations, #price, #categories {
        margin: 10px 0 0 0;
    }

</style>

