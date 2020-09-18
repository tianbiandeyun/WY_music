<template>
    <section class="login-container">

        <!--<canvas-image ref="canvasImage" :message="message"></canvas-image>-->

        <div class="div" ref="div">
            <img src="../assets/images/1.jpeg" alt="">
            <p>我是一个名字</p>
        </div>

        <button @click="btn" style="position: fixed;top: 0;left: 0;z-index: 999">click me</button>

        <img :src="src" style="width: 100%" alt="">

    </section>
</template>

<script>
    import {Toast} from 'vant'
    import canvasImage from '../components/canvas_image'
    import html2canvas from 'html2canvas'

    export default {
        name: "login",
        components: {canvasImage, Toast},
        data() {
            return {
                message: 'canvas',
                src: ''
            };
        },
        mounted() {

        },
        methods: {
            btn() {

                Toast.loading({
                    message: '加载中...',
                    forbidClick: true,
                    duration: 0,
                    overlay: true
                });

                window.pageYOffset = 0;
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;

                html2canvas(this.$refs.div, {
                    allowTaint: true,
                    useCORS: true
                }).then(canvas => {
                    this.src = canvas.toDataURL();
                    Toast.clear();
                });

            }
        }
    }
</script>

<style lang="less" scoped>

    .login-container {
        height: 100%;
        overflow-y: scroll;

        .div {
            font-size: 0;
            height: 100%;
            width: 100%;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            border: 1px solid red;
            position: relative;

            img {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 0;
            }

            p {
                font-size: 40px;
                color: #fff;
                position: absolute;
                top: 100px;
                left: 100px;
                z-index: 11;
            }
        }
    }

</style>