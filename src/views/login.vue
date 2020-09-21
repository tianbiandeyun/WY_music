<template>
    <section class="login-container">

        <Button @click="btn">click me</Button>

        <div class="div" id="div">
            <img src="../assets/images/1.jpeg" alt="">
            <p>fdsfdfds</p>
            <div class="header"></div>
        </div>

        <img v-if="src !== ''" :src="src" style="width: 100%" alt="">

    </section>
</template>

<script>
    import {Toast, Button} from 'vant'
    import canvasImage from '../components/canvas_image'
    import html2canvas from '../unit/ioio'

    export default {
        name: "login",
        components: {canvasImage, Toast, Button},
        data() {
            return {
                src: ''
            };
        },
        mounted() {

        },
        methods: {
            btn() {

                const that = this;
                that.src = '';

                Toast.loading({
                    message: '加载中...',
                    forbidClick: true,
                    duration: 0,
                    overlay: true
                });

                window.pageYOffset = 0;
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;

                (window.html2canvas || html2canvas)(
                    document.querySelector("#div"), {
                        allowTaint: true,
                        useCORS: true
                    }).then(canvas => {
                    that.src = canvas.toDataURL("image/png");
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
                color: red;
                position: absolute;
                top: 100px;
                left: 100px;
                z-index: 11;
            }

            .header {
                background-color: #19be6b;
                width: 200px;
                height: 200px;
                position: absolute;
                top: 200px;
                left: 100px;
            }
        }
    }

</style>