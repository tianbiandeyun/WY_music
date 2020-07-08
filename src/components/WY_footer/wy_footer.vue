<template>
    <section class="footer-container">
        footer-container
    </section>
</template>

<script>
    export default {
        name: "wy_footer"
    }
</script>

<style lang="less" scoped>
    .footer-container {
        font-size: @default-font-size-16;
        background-color: #19be6b;
        .default-padding-10-20();
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
    }
</style>