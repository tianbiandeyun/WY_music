<template>
    <section class="login-container">

        <!--<div class="login-message">-->

        <!--</div>-->

        <!--<div class="button-container">-->
        <!--<Button round block type="primary" size="small" @click="submit">提交</Button>-->
        <!--</div>-->

        <!--<p>{{new_size}}</p>-->

        <Picker show-toolbar title="标题" :columns="columns" @change="onChange"/>

    </section>
</template>

<script>
    import {Button, Picker} from 'vant';
    import '../../node_modules/animate.css/animate.css'

    export default {
        name: "login",
        components: {Button, Picker},
        data() {
            return {
                columns: [
                    // 第一列
                    {
                        values: ['周一', '周二', '周三', '周四', '周五'],
                        defaultIndex: 2
                    },
                    // 第二列
                    {
                        values: ['上午', '下午', '晚上'],
                        defaultIndex: 1
                    }
                ],
                // ---
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
            onChange(picker, value, index) {
                console.log(`当前值：${value}, 当前索引：${index}`)
            },
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