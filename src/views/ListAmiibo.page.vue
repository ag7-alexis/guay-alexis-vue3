<script setup>
import { onBeforeMount, ref } from 'vue'
import axios from 'axios'

import HeaderComponent from '../components/Header.component.vue'
import ListAmiiboRowComponent from '../components/ListAmiiboRow.component.vue';

const API_ALL_AMIIBO = 'https://www.amiiboapi.com/api/amiibo/'

const amiibos = ref([])
const isDataLoading = ref(true)

onBeforeMount(async () => {
    const allAmiibos = await axios.get(API_ALL_AMIIBO);
    const { data, status } = allAmiibos;
    if (status === 200) {
        isDataLoading.value = false
    }
    amiibos.value = data.amiibo;
})
</script>

<template>
    <HeaderComponent />
    <section id="main">
        <img v-if='isDataLoading'
            src='https://media3.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif?cid=790b7611a81de646407fbf6283e4dba07c283ef0a8769292&rid=giphy.gif&ct=g' />

        <div v-else class="container">

            <!-- Content -->
            <article class="box post">

                <header>
                    <h2>Ma Collection</h2>
                    <p>{{ amiibos.length }} Amiibos</p>
                </header>
                <p>
                <table>
                    <thead>
                        <tr>
                            <th>Character</th>
                            <th>game Series</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <ListAmiiboRowComponent v-for="amiibo in amiibos" :amiibo="amiibo" :key="amiibo.tail" />
                    </tbody>
                </table>
                </p>

            </article>

        </div>
    </section>
</template>

<style scoped>

</style>
