<template>
    <div>
        <child></child>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import Child from './child.vue';

@Component({
    name: 'app',
    components: { Child }
})

export default class App extends Vue {
    created() {
        document.title = this.$store.getters["app/getPageTitle"];
    }
}

</script>

<style lang="scss">
    
    body {
        margin: 0;
    }
    
</style>