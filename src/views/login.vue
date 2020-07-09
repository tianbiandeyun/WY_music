<template>
    <section class="login-container">

        <div class="login-message">
            <Form>
                <Field
                        v-model="photo"
                        type="tel"
                        name="手机号码"
                        label="手机号码"
                        placeholder="手机号码"
                        :rules="[{ required: true, message: '手机号码不能为空' }]"
                />
                <Field
                        v-model="password"
                        type="password"
                        name="密码"
                        label="密码"
                        placeholder="密码"
                        :rules="[{ required: true, message: '密码不能为空' }]"
                />
                <Field
                        v-model="code"
                        type="digit"
                        center
                        clearable
                        label="验证码"
                        placeholder="请输入短信验证码"
                        :rules="[{ required: true, message: '验证码不能为空' }]"
                >
                    <template #button>
                        <Button size="small" type="primary">{{code_msg}}</Button>
                    </template>
                </Field>
                <Field
                        v-model="nickname"
                        name="昵称"
                        label="昵称"
                        placeholder="昵称"
                        :rules="[{ required: true, message: '昵称不能为空' }]"
                />
            </Form>
        </div>

        <div class="button-container">
            <Button round block type="primary" size="small" @click="submit">提交</Button>
        </div>

    </section>
</template>

<script>
    import {Form, Field, Button} from 'vant';

    export default {
        name: "login",
        components: {Form, Field, Button},
        data() {
            return {
                photo: '',
                password: '',
                code: '',
                nickname: '',
                code_msg: '获取验证码'
            };
        },
        methods: {
            submit() {

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