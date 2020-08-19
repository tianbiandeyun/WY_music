<template>
    <section class="tabs-container">

        <div class="tabs-nav">
            <div class="tabs-nav-item"
                 v-for="(item,index) in size"
                 :key="index"
                 @click="select(index)">
                {{item}}
            </div>
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
                size: 4,
                item_index: 0
            }
        },
        methods: {
            select(res) {
                this.item_index = res;
            }
        }
    }
</script>

<style lang="less" scoped>

    @nav-item-width: 100% / 4;
    @nav-item-height: 40px;

    .tabs-container {

        .tabs-nav {
            border: 1px solid black;

            display: grid;
            grid-template-columns: repeat(auto-fill, @nav-item-width);

            .tabs-nav-item {
                border: 1px solid red;
                height: @nav-item-height;
                text-align: center;
                line-height: @nav-item-height;
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