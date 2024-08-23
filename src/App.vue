<template>
  <div class="font-main min-h-screen relative">
    <modal-window v-if="pickedPost" class="absolute">
      <news-item
        class="max-w-3xl bg-white w-2/5 p-4 rounded-xl mt-20"
        :modal="true"
        :post="pickedPost"
      ></news-item>
    </modal-window>
    <header-component></header-component>
    <main-page></main-page>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue";
import MainPage from "./pages/MainPage.vue";
import ModalWindow from "./components/Modalwindow.vue";
import NewsItem from "./components/NewsItem.vue";

import { computed } from "vue";

import { useStore } from "vuex";

const store = useStore();

const pickedPost = computed(() => store.getters.GET_PICKED_POST);
</script>

<style lang="scss" scoped></style>
