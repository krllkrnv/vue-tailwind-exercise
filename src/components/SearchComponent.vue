<template>
  <div class="flex flex-col lg:h-[9.5rem] px-8 lg:px-24 bg-white">
    
    <!-- Tablet + Desktop -->

    <div class="hidden md:flex h-20 items-center justify-between">
      <div class="flex items-center h-20">
        <div class="h-10 flex flex-row gap-10 items-center">
          <a class="text-4xl font-bold" href="#">Блог</a>
          <input
            class="h-full lg:w-100 rounded-md p-3 bg-bg-secondary"
            type="text"
            placeholder="Поиск"
          />
        </div>
      </div>
      <div class="flex gap-2.5 text-base">
        <a class="hidden lg:block" href="#">Очистить</a>
        <a href="#">Фильтр</a>
      </div>
    </div>

    <!-- Mobile -->

    <div class="flex flex-col h-24 gap-2.5 md:hidden justify-center">
      <div class="flex flex-row gap-10 items-center justify-between h-6">
        <a class="text-2xl font-bold" href="#">Блог</a>
        <div class="flex gap-2.5 text-base">
          <a class="hidden lg:block" href="#">Очистить</a>
          <a href="#">Фильтр</a>
        </div>
      </div>
      <div>
        <input
          class="h-10 w-full rounded-md p-3 bg-bg-secondary"
          type="text"
          placeholder="Поиск"
        />
      </div>
    </div>

    <!-- Chips -->

    <div class="hidden lg:flex items-center h-[4.5rem] gap-2">
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
