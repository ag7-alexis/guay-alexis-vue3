<script setup>
import { onBeforeMount, ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router';

import HeaderComponent from '../components/Header.component.vue'

const API_ALL_AMIIBO = 'https://www.amiiboapi.com/api/amiibo/'
const route = useRoute()
const amiibo = ref(undefined)
const isDataLoading = ref(true)

onBeforeMount(async () => {
    const allAmiibos = await axios.get(API_ALL_AMIIBO + `?tail=${route.params.amiiboTail}`);
    const { data, status } = allAmiibos;
    if (status === 200) {
        isDataLoading.value = false
    }
    amiibo.value = data.amiibo[0];
})
</script>

<template>
    <HeaderComponent />
    <section id="main">

        <div class="container">
            <img v-if='isDataLoading'
                src='https://media3.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif?cid=790b7611a81de646407fbf6283e4dba07c283ef0a8769292&rid=giphy.gif&ct=g' />

            <div v-else class="row">
                <div class="col-4 col-12-medium">

                    <!-- Sidebar -->
                    <section class="box">
                        <header>
                            <h3>Infos</h3>
                        </header>
                        <p> amiiboSeries: <b>{{ amiibo.amiiboSeries }}</b> <br />
                            character: {{ amiibo.character }}<br />
                            gameSeries: {{ amiibo.gameSeries }}<br />
                            type: {{ amiibo.type }}
                        </p>

                    </section>
                    <section class="box">
                        <header>
                            <h3>Dates sorties</h3>
                        </header>

                        <ul class="divided">
                            <li v-for="(item, key) in amiibo.release">{{ key }}: {{ item }}</li>
                        </ul>

                    </section>

                </div>
                <div class="col-8 col-12-medium imp-medium">

                    <!-- Content -->
                    <article class="box post">
                        <div class="featured"><img :src="amiibo.image" alt="" /></div>
                        <header>
                            <h2>{{ amiibo.name }}</h2>
                            <p>{{ amiibo.type }}</p>
                        </header>



                    </article>

                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>
