<template>
    <section class="index">

        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <swiper-slide>Slide 5</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

    </section>
</template>

<script>
    import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
    import 'swiper/swiper-bundle.css'

    export default {
        name: 'index',
        components: {Swiper, SwiperSlide},
        data() {
            return {
                swiperOptions: {
                    autoplay: true,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination'
                    }
                    ,
                }
            }
        }
    }
</script>
<style lang="less" scoped>

    .swiper-slide {
        height: 400px;
        background: pink;
        font-size: 50px;
        text-align: center;
        line-height: 400px;
    }
</style>