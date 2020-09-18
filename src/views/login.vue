<template>
    <section class="login-container">

        <canvas-image ref="canvasImage" :message="message"></canvas-image>

    </section>
</template>

<script>
    import canvasImage from '../components/canvas_image'

    export default {
        name: "login",
        components: {canvasImage},
        data() {
            return {
                message: 'canvas'
            };
        },
        mounted() {
            let _canvasImage = this.$refs.canvasImage;
            console.log(_canvasImage)
        },
        methods: {}
    }
</script>

<style lang="less" scoped>

    .login-container {
    }

</style>