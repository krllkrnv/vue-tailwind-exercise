import { useStore } from "vuex";

export default createStore({
  state: {
    state: {
      POSTS: [
        {
            title: 'Вдохновение в каждом шаге',
            date: new Date(2024, 4, 9),
            readingTime: new Date().setMinutes(2),
            comments: [],
            
        }
      ]
    },
  },
  getters: {
    GET_MOVIE_ITEM: (state) => {
      return state.MOVIE_ITEM;
    },
  },
  mutations: {
    SET_MOVIE_ITEM: (state, payload) => {
      state.MOVIE_ITEM = payload;
    },
  },
});
