<template>
    <section class="tabs-container">

        <div class="tabs-nav">
            <div class="tabs-nav-item"
                 v-for="(item,index) in size"
                 :key="index"
                 @click="select(index)">
                {{item}}
            </div>
            <div class="tabs-nav-item-active"
                 :style="{transitionDuration:`${s}s`,width:`${navItemWidth}px`,transform:`translateX(${navItemWidth*item_index}px)`}"
            ></div>
        </div>

        <div class="tabs-main">
            <div class="tabs-main-item"
                 v-for="(item,index) in size"
                 v-show="item_index === index"
                 :key="index">
                {{item}}
            </div>
        </div>

    </section>
</template>

<script>
    export default {
        name: "tabs",
        data() {
            return {
                w: 20,
                s: .3,
                size: 4,
                item_index: 0
            }
        },
        methods: {
            select(res) {
                this.item_index = res;
            }
        },
        computed: {
            navItemWidth() {
                return document.body.scrollWidth / this.size;
            }
        }
    }
</script>

<style lang="less" scoped>

    @nav-item-width: 100% / 4px;
    @nav-item-height: 40px;

    .tabs-container {

        .tabs-nav {
            border-bottom: 1px solid black;
            display: grid;
            grid-template-columns: repeat(auto-fill, @nav-item-width);
            margin-bottom: 10px;
            position: relative;

            .tabs-nav-item {
                height: @nav-item-height;
                text-align: center;
                line-height: @nav-item-height;
            }

            .tabs-nav-item-active {
                position: absolute;
                bottom: 0;
                left: 0;
                z-index: 1;
                height: 4px;
                background-color: #ee0a24;
                border-radius: 10px;
            }
        }

        .tabs-main {

            .tabs-main-item {
                border: 1px solid black;
                height: 100px;
                text-align: center;
                line-height: 100px;
            }
        }
    }

</style>