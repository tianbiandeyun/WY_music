<template>
    <section class="occlude-container" v-if="occlude_show">

    </section>
</template>

<script>
    export default {
        name: "occlude",
        data() {
            return {
                occlude_show: false
            }
        },
        methods: {
            add() {
                this.occlude_show = true;
            },
            remove() {
                this.occlude_show = false;
            }
        }
    }
</script>

<style lang="less" scoped>
    .occlude-container {
        background-color: rgba(0, 0, 0, .5);
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 9;
    }
</style>