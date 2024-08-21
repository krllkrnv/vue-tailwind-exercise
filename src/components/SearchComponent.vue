<template>
  <div class="h-40 px-24">
    <div class="flex h-20 items-center justify-between">
      <div class="flex items-center gap-10 h-1/2">
        <a class="text-4xl" href="#">Блог</a>
        <input class="h-full w-100 rounded-md" type="text" />
      </div>
      <div class="flex gap-2.5">
        <a href="#">Очистить</a>
        <a href="#">Фильтр</a>
      </div>
    </div>
    <div class="flex items-center h-1/2 gap-2">
      <chip-component></chip-component>
      <chip-component></chip-component>
      <chip-component></chip-component>
      <chip-component></chip-component>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChipComponent from "./ChipComponent.vue";
</script>

<style scoped></style>
