<template>
    <div id="app">
        <router-view name="search"></router-view>
        <router-view></router-view>
        <router-view name="footer"></router-view>
    </div>
</template>

<style lang="less" scoped>
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        .default-box-sizing;
    }
</style>
