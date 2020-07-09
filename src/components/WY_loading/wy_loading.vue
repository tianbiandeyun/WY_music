<template>
    <section class="loading-container">
        <Overlay :show="loadingShow" z-index="2">
            <div class="loading-wrapper" @click="close">
                <Loading type="spinner" color="#fff" vertical>{{loadingMsg}}</Loading>
            </div>
        </Overlay>
    </section>
</template>

<script>
    import {Overlay, Loading} from 'vant';

    export default {
        name: "wy_loading",
        components: {Overlay, Loading},
        props: {
            loadingShow: {
                type: Boolean,
                default: false
            },
            loadingMsg: {
                type: String,
                default: '加载中...'
            }
        },
        methods: {
            close() {
                this.$emit('close')
            }
        }
    }
</script>

<style lang="less" scoped>
    .loading-wrapper {
        .default-flex(@jc:center,@ai:center);
        height: 100%;
    }
</style>