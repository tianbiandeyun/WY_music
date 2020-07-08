<template>
    <section class="index">

        <!--<wy_swiper></wy_swiper>-->

    </section>
</template>

<script>
    import wy_swiper from '../components/WY_swiper/wy_swiper.vue'

    export default {
        name: 'index',
        components: {wy_swiper},
        created() {
            this.$store.dispatch("_getBanner", {
                im: this.$config.request_face.banner
            })
        }
    }
</script>
