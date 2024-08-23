<template>
  <div class="flex flex-col">
    <search-component
      @search-change="handleSearchChange"
      @chip-click="handleChipClick"
      @clear-click="handleClearClick"
      class="mb-5"
    ></search-component>
    <news-list :posts="sortedPosts" class="self-center"></news-list>
  </div>
</template>

<script setup lang="ts">
import SearchComponent from "../components/SearchComponent.vue";
import NewsList from "../components/NewsList.vue";

import { computed, reactive } from "vue";
import { useStore } from "vuex";

const store = useStore();

const state = reactive({
  activeTags: [],
  searchQuery: "",
});

const posts = computed(() => store.getters.GET_POSTS);

const sortedPostsByTags = computed(() => {
  if (state.activeTags.length > 0) {
    return posts.value.filter((post) => {
      return post.tags.some((tag) => {
        return state.activeTags.includes(tag);
      });
    });
  } else {
    return posts.value;
  }
});

const sortedPosts = computed(() => {
  return sortedPostsByTags.value.filter((post) => {
    return post.title.toLowerCase().includes(state.searchQuery.toLowerCase());
  });
});

const handleSearchChange = (event) => {
  state.searchQuery = event.target.value;
};

const handleChipClick = (event) => {
  state.activeTags = event;
};

const handleClearClick = () => {
  state.activeTags = [];
};
</script>

<style scoped></style>
