<template>
    <div>
        <child></child>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Child from "~/components/child.vue";

@Component({
    name: 'app',
    components: {
        Child
    }
})
export default class Index extends Vue {

}
</script>

<style lang="scss">

    body {
        margin: 0;
    }

</style>
