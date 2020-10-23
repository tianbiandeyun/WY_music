<!--<template>-->
    <!--<section class="swiper-wy-container">-->
        <!--<swiper ref="mySwiper" :options="swiperOptions">-->
            <!--<swiper-slide v-for="(item,index) in data" :key="index">-->
                <!--<img :src="item.pic" alt="" @click="getBanner(item.bannerId,item.song.al.id)">-->
            <!--</swiper-slide>-->
            <!--<div class="swiper-pagination" slot="pagination"></div>-->
        <!--</swiper>-->
    <!--</section>-->
<!--</template>-->

<!--<script>-->
    <!--import {Swiper, SwiperSlide} from 'vue-awesome-swiper'-->
    <!--import 'swiper/css/swiper.css'-->

    <!--export default {-->
        <!--name: "wy_swiper",-->
        <!--components: {Swiper, SwiperSlide},-->
        <!--props: {-->
            <!--data: {-->
                <!--type: Array,-->
                <!--default: () => {-->
                    <!--return [11, 22, 33, 44, 55]-->
                <!--}-->
            <!--}-->
        <!--},-->
        <!--data() {-->
            <!--return {-->
                <!--swiperOptions: {-->
                    <!--effect: 'coverflow',-->
                    <!--autoplay: true,-->
                    <!--loop: true,-->
                    <!--disableOnInteraction: false,-->
                    <!--pagination: {-->
                        <!--el: '.swiper-pagination',-->
                        <!--dynamicBullets: true-->
                    <!--},-->
                <!--}-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--getBanner(bannerId, songId) {-->
                <!--console.log(bannerId)-->
                <!--console.log(songId)-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->

<!--<style lang="less" scoped>-->

    <!--.swiper-slide {-->
        <!--height: @default-swiper-height;-->
        <!--line-height: @default-swiper-height;-->
        <!--text-align: center;-->
        <!--img {-->
            <!--width: 92%;-->
            <!--height: 88%;-->
        <!--}-->
    <!--}-->

    <!--.swiper-container {-->
        <!--&#45;&#45;swiper-theme-color: #ff6600;-->
        <!--&#45;&#45;swiper-pagination-color: #000; /* 两种都可以 */-->
    <!--}-->
<!--</style>-->