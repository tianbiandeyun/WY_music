<template>
    <section class="login-container">

        <div class="login-message">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </div>

        <Tabs v-model="active">
            <Tab title="标签 1">内容 1</Tab>
            <Tab title="标签 2">内容 2</Tab>
            <Tab title="标签 3">内容 3</Tab>
            <Tab title="标签 4">内容 4</Tab>
        </Tabs>

        <div class="button-container">
            <Button round block type="primary" size="small" @click="submit">提交</Button>
        </div>

        <!--<occlude></occlude>-->

    </section>
</template>

<script>
    import {Button, Picker, Tab, Tabs} from 'vant';
    import '../../node_modules/animate.css/animate.css'
    import occlude from '../components/occlude/occlude'

    import a from '../components/alert/notification'

    export default {
        name: "login",
        components: {Button, Picker, Tab, Tabs, occlude},
        data() {
            return {
                active: 2,
                // ---
                code_msg: '获取验证码',
                timer: null
            };
        },
        methods: {
            submit() {
                // this.$Alert.info({
                //     content: '我是提示信息'
                // });

                this.$Occlude.show('我是一个穿进去的');

                setTimeout(() => {
                    this.$Occlude.close()
                }, 1000)

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
        }
    }
</script>

<style lang="less" scoped>

    .login-container {
        position: relative;
        height: 100%;

        .login-message {
            border: 1px solid black;
            padding: 10px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 100px);
            grid-column-gap: 10px;
            grid-row-gap: 10px;
            justify-content: end;

            div {
                border: 1px solid red;
                text-align: center;
                line-height: 100px;
            }

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