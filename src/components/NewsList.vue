<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2.5 lg:mx-12 max-w-7xl p-5 gap-x-5 gap-y-10 mb-8 bg-white rounded-xl"
  >
    <news-item></news-item>
    <news-item></news-item>
    <news-item></news-item>
    <news-item></news-item>
    <news-item></news-item>
    <news-item></news-item>
  </div>
</template>

<script setup lang="ts">
import NewsItem from "./NewsItem.vue";
</script>

<style scoped></style>
