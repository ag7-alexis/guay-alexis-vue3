<script setup>
import FooterComponent from './components/Footer.component.vue';
</script>

<template>

  <body class="no-sidebar is-preload">
    <div id="page-wrapper">
      <router-view />
      <FooterComponent />
    </div>
  </body>
</template>

<style scoped>

</style>
