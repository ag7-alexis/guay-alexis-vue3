<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
</script>
<template>
    <section id="header">

        <!-- Logo -->
        <h1><a href="index.html">AmiiVue</a></h1>

        <!-- Nav -->
        <nav id="nav">
            <ul>
                <li :class="{ current: route.name === 'home' }">
                    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
                </li>
                <li :class="{ current: route.name === 'ListAmiibo' }">
                    <RouterLink :to="{ name: 'ListAmiibo' }">Liste Amiibo</RouterLink>
                </li>
            </ul>
        </nav>
        <slot></slot>
    </section>
</template>
