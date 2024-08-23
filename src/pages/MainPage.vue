<template>
  <div class="flex flex-col">
    <search-component
      @search-change="handleSearchChange"
      @chip-click="handleChipClick"
      @clear-click="handleClearClick"
      class="mb-5"
    ></search-component>

    <div
      class="flex self-center w-full justify-center"
      style="padding-left: calc(100vw - 100%)"
    >
      <news-list :posts="sortedPosts" class="self-center"></news-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchComponent from "../components/SearchComponent.vue";
import NewsList from "../components/NewsList.vue";

import { computed, reactive } from "vue";
import { useStore } from "vuex";

interface Post {
  title: string;
  tags: string[];
}

const store = useStore();

const state = reactive<{
  activeTags: string[];
  searchQuery: string;
}>({
  activeTags: [],
  searchQuery: "",
});

const posts = computed<Post[]>(() => store.getters.GET_POSTS);

const sortedPostsByTags = computed<Post[]>(() => {
  if (state.activeTags.length > 0) {
    return posts.value.filter((post) => {
      return post.tags.some((tag) => state.activeTags.includes(tag));
    });
  }
  return posts.value;
});

const sortedPosts = computed<Post[]>(() => {
  return sortedPostsByTags.value.filter((post) => {
    return post.title.toLowerCase().includes(state.searchQuery.toLowerCase());
  });
});

const handleSearchChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  state.searchQuery = target.value;
};

const handleChipClick = (event: string[]) => {
  state.activeTags = event;
  console.log(state.activeTags);
};

const handleClearClick = () => {
  state.activeTags = [];
};
</script>

<style scoped></style>
