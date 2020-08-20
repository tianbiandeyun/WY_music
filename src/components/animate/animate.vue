<template>
    <section class="animate-container">

        <button @click="go">clicke me</button>

        <div class="box">

            <div class="box-item box-item-1" :class="{boxItemActiveYi:item_active}">1</div>
            <div class="box-item box-item-2">2</div>
            <div class="box-item box-item-3" :class="{boxItemActiveSan:item_active}">3</div>
            <div class="box-item box-item-4" :class="{boxItemActiveSi:item_active}">4</div>
            <div class="box-item box-item-5" :class="{boxItemActiveWu:item_active}">5</div>
            <div class="box-item box-item-6" :class="{boxItemActiveLiu:item_active}">6</div>

        </div>

    </section>
</template>

<script>
    export default {
        name: "animate-container",
        data() {
            return {
                item_active: false
            }
        },
        methods: {
            go() {
                this.item_active = true;
            }
        }
    }
</script>

<style lang="less" scoped>

    .box {
        border: 1px solid red;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 10px;
        justify-items: center;

        .box-item {
            width: 70px;
            height: 100px;
            text-align: center;
            line-height: 100px;
            font-size: 30px;
            color: #fff;
            transition: all .3s ease-in;
        }

        .box-item-1 {
            background-color: #2b85e4;
            transform: translateX(124px);
            opacity: 0;
        }

        .boxItemActiveYi {
            animation: box-item-1-animation 1s;
            animation-fill-mode: forwards;
        }

        @-webkit-keyframes box-item-1-animation {
            0% {
                transform: translateX(124px);
                opacity: 0;
            }
            100% {
                transform: translateX(0px);
                opacity: 1;
            }
        }

        @keyframes box-item-1-animation {
            0% {
                transform: translateX(124px);
                opacity: 0;
            }
            100% {
                transform: translateX(0px);
                opacity: 1;
            }
        }

        .box-item-2 {
            background-color: #515a6e;
        }

        .box-item-3 {
            background-color: #19be6b;
            transform: translateX(-124px);
            opacity: 0;
        }

        .boxItemActiveSan {
            animation: box-item-3-animation 1s;
            animation-fill-mode: forwards;
        }

        @-webkit-keyframes box-item-3-animation {
            0% {
                transform: translateX(-124px);
                opacity: 0;
            }
            100% {
                transform: translateX(0px);
                opacity: 1;
            }
        }

        @keyframes box-item-3-animation {
            0% {
                transform: translateX(-124px);
                opacity: 0;
            }
            100% {
                transform: translateX(0px);
                opacity: 1;
            }
        }

        .box-item-4 {
            background-color: #808695;
            transform: translate(124px, -110px);
            opacity: 0;
        }

        .boxItemActiveSi {
            animation: box-item-4-animation 1s;
            animation-fill-mode: forwards;
            animation-delay: 1s;
        }

        @-webkit-keyframes box-item-4-animation {
            0% {
                transform: translate(124px, -110px);
                opacity: 0;
            }
            100% {
                transform: translate(0px, 0px);
                opacity: 1;
            }
        }

        @keyframes box-item-4-animation {
            0% {
                transform: translate(124px, -110px);
                opacity: 0;
            }
            100% {
                transform: translate(0px, 0px);
                opacity: 1;
            }
        }

        .box-item-5 {
            background-color: #ed4014;
            transform: translateY(-110px);
            opacity: 0;
        }

        .boxItemActiveWu {
            animation: box-item-5-animation 1s;
            animation-fill-mode: forwards;
            animation-delay: 1s;
        }

        @-webkit-keyframes box-item-5-animation {
            0% {
                transform: translateY(-110px);
                opacity: 0;
            }
            100% {
                transform: translateY(0px);
                opacity: 1;
            }
        }

        @keyframes box-item-5-animation {
            0% {
                transform: translateY(-110px);
                opacity: 0;
            }
            100% {
                transform: translateY(0px);
                opacity: 1;
            }
        }

        .box-item-6 {
            background-color: #5cadff;
            transform: translate(-124px, -110px);
            opacity: 0;
        }

        .boxItemActiveLiu {
            animation: box-item-6-animation 1s;
            animation-fill-mode: forwards;
            animation-delay: 1s;
        }

        @-webkit-keyframes box-item-6-animation {
            0% {
                transform: translate(-124px, -110px);
                opacity: 0;
            }
            100% {
                transform: translate(0px, 0px);
                opacity: 1;
            }
        }

        @keyframes box-item-6-animation {
            0% {
                transform: translate(-124px, -110px);
                opacity: 0;
            }
            100% {
                transform: translate(0px, 0px);
                opacity: 1;
            }
        }

    }
</style>