<template>
    <div class="container">
        <h1 v-html="title">{{ this.$store.getters["app/getTitle"] }}</h1>
        <h2 v-html="subtitle"></h2>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    name: 'test',
    components: {}
})

export default class Child extends Vue {
    title  = this.$store.getters["app/getTitle"];
    subtitle  = this.$store.getters["app/getSubTitle"];
}
</script>

<style lang="scss">
    
    @import '../scss/main';

    .container {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
    

        h1 {
            font-family: 'Open Sans', sans-serif;
            text-align: center;
            line-height: 1.2;
            font-size: 300px;
            margin: 0;
        }

        h2 {
            width: 100%;
            margin: 0;
            font-size: 30px;
            font-family: 'Open Sans', sans-serif;
            text-align: center;

            .vue-color-green {
                color: $vue-color-green;
            }
            .vue-color-blue {
                color: $vue-color-blue;
            }
            .ts-color {
                color: $ts-color;
            }
        }
    }

</style>
