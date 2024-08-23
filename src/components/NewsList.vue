<template>
  <div
    v-if="posts.length > 0"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2.5 lg:mx-12 max-w-7xl p-5 gap-x-5 gap-y-10 mb-8 bg-white rounded-xl"
  >
    <news-item
      v-for="post in props.posts"
      :post="post"
      :key="post.id"
      :clickable="true"
    ></news-item>
  </div>
  <div class="w-full px-2.5 xl:px-0 max-w-7xl" v-else>
    <stub-component></stub-component>
  </div>
</template>

<script setup lang="ts">
import StubComponent from "./StubComponent.vue";
import NewsItem from "./NewsItem.vue";

interface Post {
  id: number;
}

const props = defineProps<{
  posts: Post[];
}>();
</script>

<style scoped></style>
