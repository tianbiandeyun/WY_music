<template>
    <section class="index">
        大家好
    </section>
</template>

<script>
    import config from '../unit/config'

    export default {
        name: 'index',
        components: {},
        created() {
            console.log(config.request_url)
        }
    }
</script>
<style lang="less" scoped>
    .index {
        color: @default-font-color-title;
    }
</style>