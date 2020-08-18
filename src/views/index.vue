<template>
    <section class="index">

        <!--loading-->
        <loading :loading-show="show"></loading>

        <!--轮播图-->
        <wy_swiper :data="banner"></wy_swiper>


    </section>
</template>

<script>

    import wy_swiper from '../components/WY_swiper/wy_swiper.vue'

    export default {
        name: 'index',
        components: {wy_swiper},
        data() {
            return {
                show: false,
                banner: ['a', 'b']
            }
        },
        created() {
            // this.show = true;
            this.request_index();
        },
        methods: {
            request_index() {
                this.$store.dispatch("_getBanner", {
                    im: this.$config.request_face.banner,
                    parames: {
                        type: 2
                    }
                }).then(res => {
                    this.banner = res.banners;
                    this.show = false
                })
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
