<template>
    <section class="swiper-wy-container">
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(item,index) in data" :key="index">
                {{item}}
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </section>
</template>

<script>
    import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        name: "wy_swiper",
        components: {Swiper, SwiperSlide},
        props: {
            data: {
                type: Array,
                default: () => {
                    return [11, 22, 33, 44, 55]
                }
            }
        },
        data() {
            return {
                swiperOptions: {
                    autoplay: true,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        dynamicBullets: true
                    },
                }
            }
        }
    }
</script>

<style lang="less" scoped>

    .swiper-slide {
        height: @default-swiper-height;
        line-height: @default-swiper-height;
        text-align: center;
        background-color: #c5c8ce;
    }
</style>