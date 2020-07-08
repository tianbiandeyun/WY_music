<template>
    <section class="index">

        <wy_swiper></wy_swiper>

        <loading :loading-show="show"></loading>

    </section>
</template>

<script>

    import wy_swiper from '../components/WY_swiper/wy_swiper.vue'

    export default {
        name: 'index',
        components: {wy_swiper},
        data() {
            return {
                show: false
            }
        },
        created() {
            this.show = true;
            this.request_index();
        },
        methods: {
            request_index() {
                this.$store.dispatch("_getBanner", {
                    im: this.$config.request_face.banner
                }).then(res => {
                    this.show = false;
                    console.log(res)
                })
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
