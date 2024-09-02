<template>
  <div class="font-main min-h-screen relative">
    <modal-window
      v-if="Object.keys(pickedPost).length"
      class="overflow-y-scroll absolute z-10"
    >
      <news-item
        class="fixed top-[5%] mx-2.5 overflow-scroll max-h-[80vh] lg:max-h-[70vh] max-w-2xl bg-white p-4 rounded-xl"
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

import { computed, watch } from "vue";

import { useStore } from "vuex";

const store = useStore();

const pickedPost = computed(() => store.getters.GET_PICKED_POST);

watch(pickedPost, (newVal) => {
  const htmlElement = document.getElementById("html-element");
  if (htmlElement) {
    if (Object.keys(newVal).length) {
      htmlElement.style.overflow = "hidden";
      htmlElement.style.marginLeft = "calc(100vw - 100%)";
    } else {
      htmlElement.style.overflow = "";
      htmlElement.style.marginLeft = "";
    }
  } else {
    console.warn("Element with ID 'html-element' not found.");
  }
});
</script>

<style lang="scss" scoped></style>
