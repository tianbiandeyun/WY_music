<template>
    <section class="text">
        你好
    </section>
</template>

<script>
    import Phone from '../unit/class_test'

    export default {
        name: "test",
        mounted() {
            let xiaomi = new Phone(2999, 5.5, {'name': 'jack', 'age': 20});
            console.log(xiaomi.getJiage);
            console.log(xiaomi.chicun);
            console.log(xiaomi.call());

            xiaomi.setJiage = 5999;

            console.log(xiaomi.getJiage);

            console.log(xiaomi.call());

        }
    }
</script>

<style scoped>

</style>