<template>
    <section class="login-container">

        <div class="login-message">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </div>

        <div class="vant-tabs">
            <Tabs v-model="active">
                <Tab v-for="index in 3" :title="'标签 ' + index">内容 1</Tab>
            </Tabs>
        </div>

        <div class="button-container">
            <Button round block type="primary" size="small" @click="submit">提交</Button>
        </div>

        <tabs></tabs>

    </section>
</template>

<script>
    import {Button, Picker, Tab, Tabs} from 'vant';
    import '../../node_modules/animate.css/animate.css'
    import tabs from '../components/tabs/tabs'

    export default {
        name: "login",
        components: {Button, Picker, Tab, Tabs, tabs},
        data() {
            return {
                active: 0,
                // ---
                code_msg: '获取验证码',
                timer: null
            };
        },
        methods: {
            submit() {
                // this.$Alert.info({
                //     content: '3434'
                // });

                this.$Occlude.show({prpos_data: '我是一个穿进去的 props'});

                setTimeout(() => {
                    this.$Occlude.close()
                }, 3000)

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

        .vant-tabs {

            .van-tab__pane {
                border: 1px solid red;
            }
        }

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