<template>
    <section class="animate-container">
        <button @click="go">clicke me</button>


        <div class="box">


        </div>


        <div :class="{test:animate_name}"></div>


    </section>
</template>

<script>
    export default {
        name: "animate-container",
        data() {
            return {
                animate_name: false
            }
        },
        methods: {
            go() {
                console.log('1');
                this.animate_name = true;
            }
        }
    }
</script>

<style lang="less" scoped>


    .test {
        width: 100px;
        height: 100px;
        animation: test-animation 1s;
        animation-fill-mode: forwards;
    }

    @-webkit-keyframes test-animation {
        0% {
            background-color: rgba(0, 0, 0, 0)
        }
        100% {
            background-color: rgba(100, 100, 100, 0.5);
            transform: translateX(200px);
        }
    }

    @keyframes test-animation {
        0% {
            background-color: rgba(0, 0, 0, 0)
        }
        100% {
            background-color: rgba(100, 100, 100, 0.5);
            transform: translateX(200px);
        }
    }

    .box {

        .box-item {
            margin: 0 auto;
            border: 1px solid black;
            width: 50px;
            height: 100px;
        }
    }
</style>