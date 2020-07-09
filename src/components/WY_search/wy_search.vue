<template>
    <section class="search-container">
        <Search v-model="value"
                show-action
                placeholder="请输入搜索关键词"
                @search="onSearch"
                @cancel="onCancel"></Search>
    </section>
</template>

<script>
    import {Search} from 'vant';

    export default {
        name: "wy_search",
        components: {Search},
        data() {
            return {
                value: '',
            };
        },
        methods: {
            onSearch(val) {
                console.log(val);
            },
            onCancel() {
                console.log('取消');
            },
        }
    }
</script>

<style lang="less" scoped>

</style>