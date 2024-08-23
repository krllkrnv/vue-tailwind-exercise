import { createStore } from "vuex";

export default createStore({
  state: {
    POSTS: [
      {
        id: 1,
        title: "Вдохновение в каждом шаге",
        date: new Date(2024, 4, 9),
        readingTime: new Date().setMinutes(2),
        comments: [],
        description: `Наши путешественники находят вдохновение в каждом шаге своего пути.`,
        tags: ["Природа", "Люди"],
        text: `Каждое утро, когда я просыпаюсь в палатке, окружённой лесом и горами, я чувствую, как природа наполняет меня энергией. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.`,
        imageUrl: "/src/images/hiking.jpg",
      },
      {
        id: 2,
        title: "Моменты тишины и покоя",
        date: new Date(2024, 4, 6),
        readingTime: new Date().setMinutes(3),
        comments: [],
        description: `В такие моменты наши фотографы ощущают гармонию и умиротворение.`,
        tags: ["Природа", "Животные"],
        text: `Excepteur quis magna esse sint enim dolore nulla et. Pariatur ut qui ad deserunt dolore nisi laboris eu velit. Consequat sunt cupidatat cillum duis minim amet culpa dolore duis sint. Enim et occaecat voluptate cillum ex sint voluptate est voluptate excepteur esse officia ea. Proident proident eiusmod officia cupidatat incididunt qui cupidatat quis commodo tempor ad in.`,
        imageUrl: `/src/images/koala.jpg`,
      },
      {
        id: 3,
        title: "Цвета природы в наших руках",
        date: new Date(2024, 4, 5),
        readingTime: new Date().setMinutes(3),
        comments: [],
        description: `Наши художники выражают всю красоту окружающего мира через творчество.`,
        tags: ["Природа", "Искусство"],
        text: `Excepteur anim reprehenderit veniam eiusmod ullamco consequat sunt consectetur eiusmod aute est. Sunt quis incididunt quis laborum nulla amet et nisi dolore. Ea ex laboris magna dolore sunt sit pariatur Lorem est aute. Velit et non consectetur aute deserunt et elit consectetur incididunt dolor. Enim ea Lorem exercitation commodo ad cupidatat ad elit exercitation duis est proident eu qui. Cillum officia adipisicing exercitation eu et dolor laboris ullamco consectetur ipsum est nulla amet irure.`,
        imageUrl: `/src/images/painting-2.jpg`,
      },
      {
        id: 4,
        title: "Семейные узы в дикой природе",
        date: new Date(2024, 4, 4),
        readingTime: new Date().setMinutes(15),
        comments: [],
        description: `Наблюдая за этими сценами, наши фотографы чувствуют тепло и единство.`,
        tags: ["Природа", "Животные"],
        text: `Lorem ut et ut do Lorem Lorem labore mollit eu. Consectetur magna aute cupidatat magna cillum consectetur aliqua labore adipisicing in ullamco. Ex amet commodo velit aliquip nisi nisi. Ea fugiat fugiat qui non et aliqua eiusmod. Incididunt ex ea reprehenderit ut mollit excepteur fugiat cupidatat adipisicing voluptate aliquip anim. Magna eiusmod in quis esse nostrud exercitation fugiat nulla mollit. Sint qui eiusmod ullamco voluptate sit veniam aute eiusmod.`,
        imageUrl: `/src/images/monkeys.jpg`,
      },
      {
        id: 5,
        title: "Гармония городских и природных пейзажей ",
        date: new Date(2024, 4, 3),
        readingTime: new Date().setMinutes(2),
        comments: [],
        description: `Этот вид напоминает нам о том, как природа и город могут сосуществовать в гармонии.`,
        tags: ["Природа", "Искусство"],
        text: `Culpa excepteur amet est incididunt laborum excepteur veniam nulla nostrud. Ad magna cupidatat laboris elit incididunt reprehenderit nulla ullamco laboris. Ipsum dolor eiusmod qui exercitation eiusmod ut quis laborum quis commodo nostrud irure. Excepteur quis mollit pariatur dolor reprehenderit adipisicing. Id ad anim et officia incididunt sunt ea et do. Sit proident nostrud anim fugiat est enim est.`,
        imageUrl: `/src/images/painting-3.jpg`,
      },
      {
        id: 6,
        title: "Моменты, которые остаются в сердце ",
        date: new Date(2024, 4, 1),
        readingTime: new Date().setMinutes(4),
        comments: [],
        description: `Эти мгновения наполняют наши сердца радостью и любовью.`,
        tags: ["Природа", "Люди", "Животные"],
        text: `Reprehenderit do commodo sunt cillum incididunt culpa mollit laboris in laborum. Culpa est elit esse sunt commodo ex labore fugiat labore consectetur incididunt. Veniam sunt minim aliqua sit sit sint commodo reprehenderit deserunt deserunt fugiat enim velit adipisicing.`,
        imageUrl: `/src/images/canyon.jpg`,
      },
    ],
    PICKED_POST: null,
  },
  getters: {
    GET_POSTS: (state) => {
      return state.POSTS;
    },
    GET_PICKED_POST: (state) => {
      return state.PICKED_POST;
    },
  },
  mutations: {
    SET_PICKED_POST: (state, payload) => {
      state.PICKED_POST = payload;
    },
  },
});
