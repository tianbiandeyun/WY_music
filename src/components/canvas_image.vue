<template>
    <section class="canvas-container">
        {{message}}
    </section>
</template>

<script>
    export default {
        name: "canvas_image",
        props: {
            message: {
                type: String
            }
        },
        data() {
            return {}
        }
    }
</script>

<style lang="less" scoped>

</style>