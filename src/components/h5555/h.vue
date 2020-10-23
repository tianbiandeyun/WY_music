<template>
    <section class="swiper-wy-container">

        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">

                    <p
                            class="ani"
                            swiper-animate-effect="animate__zoomIn"
                            swiper-animate-duration="1s"
                            swiper-animate-delay="0s">五星红旗迎风飘扬</p>

                    <p
                            class="ani"
                            swiper-animate-effect="animate__zoomIn"
                            swiper-animate-duration="1s"
                            swiper-animate-delay="1s">五星红旗迎风飘扬</p>

                </div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
                <div class="swiper-slide">Slide 6</div>
                <div class="swiper-slide">Slide 7</div>
                <div class="swiper-slide">Slide 8</div>
                <div class="swiper-slide">Slide 9</div>
                <div class="swiper-slide">Slide 10</div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>


    </section>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.css'
    import {swiperAnimateCache, swiperAnimate} from "../../unit/swiper.animate1.0.3.min"

    export default {
        name: "wy_swiper",
        data() {
            return {}
        },
        mounted() {
            let swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                direction: 'vertical',
                onInit: function (swiper) {
                    swiperAnimateCache(swiper)
                    swiperAnimate(swiper)
                },
                onSlideChangeEnd: function (swiper) {
                    swiperAnimate(swiper)
                }
            });
        }
    }
</script>

<style lang="less" scoped>
    .swiper-wy-container {
        height: 100%;

        .swiper-container {
            width: 100%;
            height: 100%;
        }

        .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;

            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
        }

    }


</style>