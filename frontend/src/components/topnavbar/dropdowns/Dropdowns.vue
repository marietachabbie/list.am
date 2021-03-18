<template>
    <div>
        <div class="ui fixed menu"
        style="margin-top: 50px;
        border-style: none;
        padding: 10px 110px 0 110px;"
        >
            <sui-dropdown simple icon="none"
            style="padding-left: 0;">
                <i class="fa fa-navicon"></i>
                Բոլոր բաժինները
                <sui-dropdown-menu>
                    <sui-dropdown-item
                    v-for="(section, value) in $options.menu"
                    :key="section"
                    :value="value"
                    >
                        {{ value }}
                    </sui-dropdown-item>

                    <sui-dropdown-divider />
                    <sui-dropdown-item>Այլ</sui-dropdown-item>
                </sui-dropdown-menu>
            </sui-dropdown>

            <sui-dropdown simple icon="none"
            v-for="(section, value) in $options.menu" 
            :key="section" 
            :value="value"
            style="font-size: 16px;
            margin-left: 4px;">
                {{ value }}
                <sui-dropdown-menu>

                    <sui-dropdown-item
                    v-for="(item, index) in section" :key="index"
                    >
                        {{ item }}
                    </sui-dropdown-item>

                    <sui-dropdown-divider />
                    <sui-dropdown-item>
                        Այլ
                    </sui-dropdown-item>
                </sui-dropdown-menu>
            </sui-dropdown>
        </div>
    </div>
</template>

<script>
import dropdowns from '../../../../data/dropdowns.json';

export default {
    name: 'Dropdowns',
    menu: dropdowns['Բոլոր բաժինները'],
}
</script>

