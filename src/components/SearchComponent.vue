<template>
  <div class="flex flex-col px-8 lg:px-24 bg-white">
    <!-- Tablet + Desktop -->

    <div class="hidden md:flex h-20 items-center justify-between">
      <div class="flex items-center h-20">
        <div class="h-10 flex flex-row gap-10 items-center">
          <a class="text-4xl font-bold" href="#">Блог</a>
          <input
            @input="handleSearchChange"
            class="h-full lg:w-100 rounded-md p-3 focus:outline-primary bg-bg-secondary text-base font-medium"
            type="text"
            placeholder="Поиск"
          />
        </div>
      </div>
      <div class="flex gap-2.5 text-base text-plain">
        <button
          class="hidden lg:block transition duration-150"
          :class="hasSelectedChip ? 'text-primary' : ''"
          @click="handleClearClick"
        >
          Очистить
        </button>
        <div
          class="flex items-center gap-1 cursor-pointer"
          @click="areChipsShown = !areChipsShown"
        >
          <button href="#">Фильтр</button>
          <svg
            :class="
              (areChipsShown ? '-rotate-180' : '') + ' transition duration-150'
            "
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99996 11.4667C7.91222 11.4672 7.82525 11.4504 7.74402 11.4172C7.6628 11.384 7.58892 11.3351 7.52663 11.2733L3.52663 7.27334C3.46447 7.21118 3.41516 7.13739 3.38152 7.05618C3.34788 6.97496 3.33057 6.88792 3.33057 6.80001C3.33057 6.62247 3.40109 6.45221 3.52663 6.32668C3.65216 6.20114 3.82243 6.13062 3.99996 6.13062C4.1775 6.13062 4.34776 6.20114 4.47329 6.32668L7.99996 9.85334L11.5266 6.32668C11.5888 6.26452 11.6626 6.21521 11.7438 6.18157C11.825 6.14793 11.9121 6.13062 12 6.13062C12.0879 6.13062 12.1749 6.14793 12.2561 6.18157C12.3373 6.21521 12.4111 6.26452 12.4733 6.32668C12.5355 6.38884 12.5848 6.46263 12.6184 6.54384C12.652 6.62506 12.6694 6.7121 12.6694 6.80001C12.6694 6.88792 12.652 6.97496 12.6184 7.05618C12.5848 7.13739 12.5355 7.21118 12.4733 7.27334L8.47329 11.2733C8.411 11.3351 8.33712 11.384 8.2559 11.4172C8.17467 11.4504 8.0877 11.4672 7.99996 11.4667Z"
              fill="#A1A5B7"
            />
          </svg>
        </div>
      </div>
    </div>

    <!-- Mobile -->

    <div class="flex flex-col h-24 gap-2.5 md:hidden justify-center">
      <div class="flex flex-row gap-10 items-center justify-between h-6">
        <a class="text-2xl font-bold" href="#">Блог</a>
        <div class="flex flex-row gap-2.5 text-base text-plain">
          <button
            class="md:hidden transition duration-150"
            :class="hasSelectedChip ? 'text-primary' : ''"
            @click="handleClearClick"
          >
            Очистить
          </button>
          <div
            @click="areChipsShown = !areChipsShown"
            class="flex gap-1 text-base items-center text-plain cursor-pointer"
          >
            <button href="#">Фильтр</button>
            <svg
              :class="
                (areChipsShown ? '-rotate-180' : '') +
                ' transition duration-150'
              "
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99996 11.4667C7.91222 11.4672 7.82525 11.4504 7.74402 11.4172C7.6628 11.384 7.58892 11.3351 7.52663 11.2733L3.52663 7.27334C3.46447 7.21118 3.41516 7.13739 3.38152 7.05618C3.34788 6.97496 3.33057 6.88792 3.33057 6.80001C3.33057 6.62247 3.40109 6.45221 3.52663 6.32668C3.65216 6.20114 3.82243 6.13062 3.99996 6.13062C4.1775 6.13062 4.34776 6.20114 4.47329 6.32668L7.99996 9.85334L11.5266 6.32668C11.5888 6.26452 11.6626 6.21521 11.7438 6.18157C11.825 6.14793 11.9121 6.13062 12 6.13062C12.0879 6.13062 12.1749 6.14793 12.2561 6.18157C12.3373 6.21521 12.4111 6.26452 12.4733 6.32668C12.5355 6.38884 12.5848 6.46263 12.6184 6.54384C12.652 6.62506 12.6694 6.7121 12.6694 6.80001C12.6694 6.88792 12.652 6.97496 12.6184 7.05618C12.5848 7.13739 12.5355 7.21118 12.4733 7.27334L8.47329 11.2733C8.411 11.3351 8.33712 11.384 8.2559 11.4172C8.17467 11.4504 8.0877 11.4672 7.99996 11.4667Z"
                fill="#A1A5B7"
              />
            </svg>
          </div>
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

    <transition>
      <div
        class="flex my-auto mb-5 flex-wrap items-center gap-2"
        v-if="areChipsShown"
      >
        <chip-component
          @click="handleChipClick(chip)"
          v-for="chip in tags"
          :key="chip.id"
          :chip="chip.name"
          :clickable="true"
          :selected="chip.selected"
        ></chip-component>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import ChipComponent from "./ChipComponent.vue";

import { reactive, computed, ref } from "vue";

const hasSelectedChip = computed(() => {
  return tags.some((chip) => chip.selected);
});

const areChipsShown = ref(false);

const emit = defineEmits(["search-change", "chip-click", "clear-click"]);

const tags = reactive([
  { id: 1, name: "Город", selected: false },
  { id: 2, name: "Природа", selected: false },
  { id: 3, name: "Люди", selected: false },
  { id: 4, name: "Животные", selected: false },
  { id: 5, name: "Еда", selected: false },
  { id: 6, name: "Напитки", selected: false },
  { id: 7, name: "Архитектура", selected: false },
  { id: 8, name: "Искусство", selected: false },
]);

const handleChipClick = (chip) => {
  chip.selected = !chip.selected;
  emit(
    "chip-click",
    tags.filter((chip) => chip.selected).map((chip) => chip.name)
  );
};

const handleClearClick = () => {
  tags.map((chip) => (chip.selected = false));
  emit("clear-click");
};

const handleSearchChange = (event) => {
  emit("search-change", event);
};
</script>

<style scoped></style>
