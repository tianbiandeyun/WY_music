<template>
    <section class="login-container">

        <!--<div class="login-message">-->

        <!--</div>-->

        <!--<div class="button-container">-->
        <!--<Button round block type="primary" size="small" @click="submit">提交</Button>-->
        <!--</div>-->

        <!--<p>{{new_size}}</p>-->


        <div class="grid-box">

            <div class="header">
                header
            </div>

            <div class="content">
                <div class="left-slide">left-slide</div>
                <div class="main-content">main-content</div>
                <div class="right-slide">right-slide</div>
            </div>

            <div class="footer">
                footer
            </div>

        </div>

    </section>
</template>

<script>
    import {Button} from 'vant';
    import '../../node_modules/animate.css/animate.css'

    export default {
        name: "login",
        components: {Button},
        data() {
            return {
                photo: '',
                password: '',
                code: '',
                nickname: '',
                code_msg: '获取验证码',
                timer: null,
                size: '123'
            };
        },
        methods: {
            submit() {
                this.size += '4344'
            },
            getCode() {
                const TIME_COUNT = 3;
                if (!this.timer) {
                    this.code_msg = TIME_COUNT;
                    this.timer = setInterval(() => {
                        if (this.code_msg > 0 && this.code_msg <= TIME_COUNT) {
                            this.code_msg--;
                        } else {
                            clearInterval(this.timer);
                            this.timer = null;
                            this.code_msg = '获取验证码';
                        }
                    }, 1000)
                }
            },
            go() {
                this.visible = !this.visible
            }
        },
        computed: {
            new_size() {
                return this.size
            }
        }
    }
</script>

<style lang="less" scoped>

    .grid-box {
        border: 1px solid black;
        width: 960px;
        height: 400px;
        margin: 0 auto;
        color: #000;
        text-align: center;
        font-size: 20px;
        /*---*/
        display: grid;
        grid-template-rows: 1fr 3fr 1fr;

        .header {
            background-color: #ff9900;
        }

        .content {
            display: grid;
            grid-template-columns: 100px auto 100px;
            grid-column-gap: 20px;

            .left-slide {
                background-color: #808695;
            }
            .main-content {
                background-color: #515a6e;
            }
            .right-slide {
                background-color: #c5c8ce;
            }
        }

        .footer {
            background-color: bisque;
        }
    }

    /*.login-container {*/
    /*position: relative;*/
    /*height: 100%;*/

    /*.login-message {*/
    /*//.default-box-sizing;*/
    /*width: 100%;*/
    /*position: absolute;*/
    /*left: 0;*/
    /*top: 200px;*/
    /*border: 1px solid black;*/
    /*}*/

    /*.button-container {*/
    /*//.default-padding-10-20();*/
    /*//.default-box-sizing;*/
    /*position: fixed;*/
    /*bottom: 0;*/
    /*left: 0;*/
    /*width: 100%;*/
    /*}*/
    /*}*/
</style>