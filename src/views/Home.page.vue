<script setup>
import { onBeforeMount, ref } from 'vue'
import axios from 'axios'
import HeaderComponent from '../components/Header.component.vue'
import AmiiboCardComponent from '../components/AmiiboCard.component.vue';

const API_ALL_AMIIBO = 'https://www.amiiboapi.com/api/amiibo/'

const amiibos = ref([])
const isDataLoading = ref(true)

onBeforeMount(async () => {
    const allAmiibos = await axios.get(API_ALL_AMIIBO);
    const { data, status } = allAmiibos;
    if (status === 200) {
        isDataLoading.value = false
    }
    amiibos.value = data.amiibo.sort(() => Math.random() - Math.random()).slice(0, 3);
})
</script>

<template>
    <HeaderComponent>
        <section id="banner">
            <header>
                <h2>Hey.Bienvenue sur ma collection</h2>
            </header>
        </section>
    </HeaderComponent>

    <!-- Intro -->
    <section id="intro" class="container">
        <img v-if='isDataLoading'
            src='https://media3.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif?cid=790b7611a81de646407fbf6283e4dba07c283ef0a8769292&rid=giphy.gif&ct=g' />

        <div v-else class="row">
            <AmiiboCardComponent v-for="amiibo in amiibos" :key="amiibo.tail" :amiibo="amiibo"
                class="col-4 col-12-medium" />
        </div>
        <footer>
            <ul class="actions">
                <li>
                    <RouterLink :to="{ name: 'ListAmiibo' }" class="button large">Liste complète</RouterLink>
                </li>
            </ul>
        </footer>
    </section>

</template>

<style scoped>

</style>
