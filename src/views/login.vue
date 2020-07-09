<template>
    <section class="login-container">

        <div class="login-message">

        </div>

        <div class="button-container">
            <Button round block type="primary" size="small" @click="submit">提交</Button>
        </div>

    </section>
</template>

<script>
    import {Button} from 'vant';

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
                timer: null
            };
        },
        methods: {
            submit() {

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
            }
        },
    }
</script>

<style lang="less" scoped>
    .login-container {
        position: relative;
        height: 100%;

        .login-message {
            .default-box-sizing;
            width: 100%;
            position: absolute;
            left: 0;
            top: 200px;
            border: 1px solid black;
        }

        .button-container {
            .default-padding-10-20();
            .default-box-sizing;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
        }
    }
</style>