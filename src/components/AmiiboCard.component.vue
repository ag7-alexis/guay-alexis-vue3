<script setup>
defineProps(['amiibo'])
</script>

<template>

    <div v-bind="$attrs">
        <section class="middle">
            <img :src="amiibo.image" />
            <header>
                <h2>{{ amiibo.character }}</h2>
            </header>
            <p>{{ amiibo.gameSeries }}</p>
        </section>
    </div>

</template>

<style scoped>

</style>