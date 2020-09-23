<template>
    <section class="swiper-wy-container">


        <swiper :options="swiperOptions" ref="mySwiper">
            <swiper-slide>

                <p
                        class="ani"
                        swiper-animate-effect="animate__fadeInUp"
                        swiper-animate-duration=".5s"
                        swiper-animate-delay="0s">
                    内容
                </p>

                <p
                        class="ani"
                        swiper-animate-effect="animate__bounce"
                        swiper-animate-duration="1s"
                        swiper-animate-delay=".5s">
                    内容
                </p>

            </swiper-slide>

            <swiper-slide>
                2
            </swiper-slide>

            <swiper-slide>
                3
            </swiper-slide>

        </swiper>

    </section>
</template>

<script>
    import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    import {swiperAnimateCache, swiperAnimate} from "../../unit/swiper.animate1.0.3.min"

    export default {
        name: "wy_swiper",
        components: {Swiper, SwiperSlide},
        data() {
            return {
                swiper: '',
                swiperOptions: {
                    direction: 'vertical',
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    on: {
                        init() {
                            swiperAnimateCache(this); //隐藏动画元素
                            swiperAnimate(this); //初始化完成开始动画
                        },
                        // 页面过度到下一个 / 页面过度到下一个
                        slideChangeTransitionStart() {
                            console.log('页面过度到下一个')
                        },
                        slideChangeTransitionEnd() {
                            console.log('页面过度到下一个')
                            swiperAnimate(this); //初始化完成开始动画
                        },
                        // 页面滑动开始 / 滑动结束
                        transitionStart() {
                            console.log('页面滑动开始')
                        },
                        transitionEnd() {
                            console.log('滑动结束')
                            swiperAnimate(this); //初始化完成开始动画
                        },
                    }
                }
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    .swiper-wy-container {
        height: 100%;

        .swiper-slide {
            height: 100%;
            border: 1px solid black;
            box-sizing: border-box;

            font-size: 50px;

            #array {
                border: 1px solid black;
                position: absolute;
                z-index: 999;
                -webkit-animation: start 1.5s infinite ease-in-out;
            }

            @-webkit-keyframes start {
                0%, 30% {
                    opacity: 0;
                    -webkit-transform: translate(0, 10px);
                }
                60% {
                    opacity: 1;
                    -webkit-transform: translate(0, 0);
                }
                100% {
                    opacity: 0;
                    -webkit-transform: translate(0, -8px);
                }
            }

            @-moz-keyframes start {
                0%, 30% {
                    opacity: 0;
                    -moz-transform: translate(0, 10px);
                }
                60% {
                    opacity: 1;
                    -moz-transform: translate(0, 0);
                }
                100% {
                    opacity: 0;
                    -moz-transform: translate(0, -8px);
                }
            }

            @keyframes start {
                0%, 30% {
                    opacity: 0;
                    transform: translate(0, 10px);
                }
                60% {
                    opacity: 1;
                    transform: translate(0, 0);
                }
                100% {
                    opacity: 0;
                    transform: translate(0, -8px);
                }
            }

        }

        .swiper-container {
            height: 100%;
            --swiper-theme-color: #ff6600;
            --swiper-pagination-color: #000; /* 两种都可以 */
        }

    }
</style>