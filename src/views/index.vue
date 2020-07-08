<template>
    <section class="index">

        <!--<wy_swiper></wy_swiper>-->

        <CellGroup>
            <Cell title="单元格" value="内容"/>
            <Cell title="单元格" value="内容" label="描述信息"/>
        </CellGroup>

    </section>
</template>

<script>
    import {Cell, CellGroup} from 'vant';
    import wy_swiper from '../components/WY_swiper/wy_swiper.vue'

    export default {
        name: 'index',
        components: {wy_swiper, Cell, CellGroup},
        created() {

        },
        methods: {
            request_index() {
                this.$store.dispatch("_getBanner", {
                    im: this.$config.request_face.banner
                }).then(res => {
                    console.log(res)
                })
            }
        }
    }
</script>
