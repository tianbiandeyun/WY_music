<template>
    <section class="occlude-container" v-if="show">
        <p>我来自 data {{message}}</p>
        <p>我来自 props {{prpos_data}}</p>
    </section>
</template>

<script>
    export default {
        name: "occlude",
        props: {
            prpos_data: {
                type: String,
                default: '我是默认props'
            }
        },
        data() {
            return {
                show: false,
                message: '我是一个data'
            }
        },
        methods: {
            showOcclude(res) {
                this.message = res;
                this.show = true;
            },
            closeOcclude() {
                this.show = false;
            }
        }
    }
</script>

<style lang="less" scoped>
    .occlude-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .6);
        z-index: 99;
        display: grid;
        justify-items: center;
        align-items: center;

        p {
            margin: 0;
            padding: 0;
            color: #fff;
            font-size: @default-font-size-20;
        }
    }
</style>