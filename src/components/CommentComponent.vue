<template>
  <div class="flex flex-row mb-3 px-3 items-center gap-3">
    <img
      class="bg-gray-200 w-10 h-10 rounded-full"
      src="../images/woman.png"
      alt="User image"
    />
    <div class="flex flex-col font-medium">
      <p class="font-semibold">{{ props.comment.authorName }}</p>
      <p class="text-base">
        {{ props.comment.text }}
      </p>
      <span class="text-[0.75rem] text-gray-500">{{ formattedDate }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  comment: {
    type: Object,
    required: true,
  },
});

const formattedDate = computed(() => {
  const date = props.comment.date;
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}.${month}.${year} в ${hours}:${minutes}`;
});
</script>

<style scoped></style>
