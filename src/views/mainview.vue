<template>
  <div class="container">
    <sidebar></sidebar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import sidebar from '../components/sidebar.vue'
</script>
<style scoped>
.container {
  display: flex;
}
.coontent {
  flex: 1;
  padding: 20px;
}
</style>
