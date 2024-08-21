<template>
  <div class="h-screen bg-gray-200 flex flex-col">
    <search-component class="mb-5"></search-component>
    <news-list class="self-center"></news-list>
  </div>
</template>

<script setup lang="ts">
import SearchComponent from "../components/SearchComponent.vue";
import NewsList from "../components/NewsList.vue";
</script>

<style scoped></style>
