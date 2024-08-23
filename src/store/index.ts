import { createStore } from "vuex";

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export default createStore({
  state: {
    POSTS: [
      {
        id: 1,
        title: "Вдохновение в каждом шаге",
        date: new Date(2024, 12, 21),
        readingTime: 2,
        comments: [
          {
            authorId: Math.random(),
            authorName: "John Doe",
            date: randomDate(new Date(2012, 0, 1), new Date()),
            text: "Lorem nisi adipisicing elit magna ad consequat ad incididunt tempor dolor.",
          },
          {
            authorId: Math.random(),
            authorName: "Jane Smith",
            date: randomDate(new Date(2012, 0, 1), new Date()),
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
        ],
        description: `Наши путешественники находят вдохновение в каждом шаге своего пути.`,
        tags: ["Природа", "Люди"],
        text: `Каждое утро, когда я просыпаюсь в палатке, окружённой лесом и горами, я чувствую, как природа наполняет меня энергией. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу. В такие моменты я понимаю, что настоящая красота мира скрыта в его простоте и величии.`,
        imageUrl: "/src/images/hiking.jpg",
      },
      {
        id: 2,
        title: "Моменты тишины и покоя",
        date: new Date(2024, 11, 6),
        readingTime: 3,
        comments: [
          {
            authorId: Math.random(),
            authorName: "Alice Johnson",
            date: randomDate(new Date(2012, 0, 1), new Date()),
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          },
          {
            authorId: Math.random(),
            authorName: "Bob Brown",
            date: randomDate(new Date(2012, 0, 1), new Date()),
            text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
        ],
        description: `В такие моменты наши фотографы ощущают гармонию и умиротворение.`,
        tags: ["Природа", "Животные"],
        text: `Excepteur quis magna esse sint enim dolore nulla et. Pariatur ut qui ad deserunt dolore nisi laboris eu velit. Consequat sunt cupidatat cillum duis minim amet culpa dolore duis sint. Enim et occaecat voluptate cillum ex sint voluptate est voluptate excepteur esse officia ea. Proident proident eiusmod officia cupidatat incididunt qui cupidatat quis commodo tempor ad in.`,
        imageUrl: `/src/images/koala.jpg`,
      },
      {
        id: 3,
        title: "Цвета природы в наших руках",
        date: new Date(2024, 4, 5),
        readingTime: 3,
        comments: [
          {
            authorId: Math.random(),
            authorName: "Charlie Smith",
            date: randomDate(new Date(2012, 0, 1), new Date()),
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
          },
          {
            authorId: Math.random(),
            authorName: "Dana Lee",
            date: randomDate(new Date(2012, 0, 1), new Date()),
            text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
          },
          {
            authorId: Math.random(),
            authorName: "Eve White",
            date: randomDate(new Date(2012, 0, 1), new Date()),
            text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
          },
        ],
        description: `Наши художники выражают всю красоту окружающего мира через творчество.`,
        tags: ["Природа", "Искусство"],
        text: `Excepteur anim reprehenderit veniam eiusmod ullamco consequat sunt consectetur eiusmod aute est. Sunt quis incididunt quis laborum nulla amet et nisi dolore. Ea ex laboris magna dolore sunt sit pariatur Lorem est aute. Velit et non consectetur aute deserunt et elit consectetur incididunt dolor. Enim ea Lorem exercitation commodo ad cupidatat ad elit exercitation duis est proident eu qui. Cillum officia adipisicing exercitation eu et dolor laboris ullamco consectetur ipsum est nulla amet irure.`,
        imageUrl: `/src/images/painting-1.jpg`,
      },
      {
        id: 4,
        title: "Семейные узы в дикой природе",
        date: new Date(2024, 3, 4),
        readingTime: 15,
        comments: [],
        description: `Наблюдая за этими сценами, наши фотографы чувствуют тепло и единство.`,
        tags: ["Природа", "Животные"],
        text: `Lorem ut et ut do Lorem Lorem labore mollit eu. Consectetur magna aute cupidatat magna cillum consectetur aliqua labore adipisicing in ullamco. Ex amet commodo velit aliquip nisi nisi. Ea fugiat fugiat qui non et aliqua eiusmod. Incididunt ex ea reprehenderit ut mollit excepteur fugiat cupidatat adipisicing voluptate aliquip anim. Magna eiusmod in quis esse nostrud exercitation fugiat nulla mollit. Sint qui eiusmod ullamco voluptate sit veniam aute eiusmod.`,
        imageUrl: `/src/images/monkeys.jpg`,
      },
      {
        id: 5,
        title: "Гармония городских и природных пейзажей ",
        date: new Date(2024, 3, 3),
        readingTime: 2,
        comments: [
          {
            authorId: Math.random(),
            authorName: "Alice Johnson",
            date: randomDate(new Date(2012, 0, 1), new Date()),
            text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
          },
          {
            authorId: Math.random(),
            authorName: "Bob Brown",
            date: randomDate(new Date(2012, 0, 1), new Date()),
            text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.",
          },
        ],
        description: `Этот вид напоминает нам о том, как природа и город могут сосуществовать в гармонии.`,
        tags: ["Природа", "Искусство"],
        text: `Culpa excepteur amet est incididunt laborum excepteur veniam nulla nostrud. Ad magna cupidatat laboris elit incididunt reprehenderit nulla ullamco laboris. Ipsum dolor eiusmod qui exercitation eiusmod ut quis laborum quis commodo nostrud irure. Excepteur quis mollit pariatur dolor reprehenderit adipisicing. Id ad anim et officia incididunt sunt ea et do. Sit proident nostrud anim fugiat est enim est.`,
        imageUrl: `/src/images/painting-3.jpg`,
      },
      {
        id: 6,
        title: "Моменты, которые остаются в сердце ",
        date: new Date(2024, 4, 1),
        readingTime: 4,
        comments: [
          {
            authorId: Math.random(),
            authorName: "Grace Kim",
            date: randomDate(new Date(2012, 0, 1), new Date()),
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          },
        ],
        description: `Эти мгновения наполняют наши сердца радостью и любовью.`,
        tags: ["Природа", "Люди", "Животные"],
        text: `Reprehenderit do commodo sunt cillum incididunt culpa mollit laboris in laborum. Culpa est elit esse sunt commodo ex labore fugiat labore consectetur incididunt. Veniam sunt minim aliqua sit sit sint commodo reprehenderit deserunt deserunt fugiat enim velit adipisicing.`,
        imageUrl: `/src/images/canyon.jpg`,
      },
      {
        id: 7,
        title: "Моменты тишины и покоя",
        date: new Date(2024, 2, 1),
        readingTime: 3,
        comments: [],
        description: `В такие моменты наши фотографы ощущают гармонию и умиротворение.`,
        tags: ["Природа", "Животные"],
        text: `Ea ullamco mollit eu consequat quis consectetur. Laboris minim qui tempor qui sit sint proident eiusmod. Ad qui proident laborum mollit eu consectetur consectetur amet in. Ut in eu consequat do cupidatat. Amet proident ex incididunt deserunt non nisi veniam sit do elit nisi qui amet dolor.`,
        imageUrl: "/src/images/koala-sleeping.jpg",
      },
      {
        id: 8,
        title: "Объятия, которые говорят больше слов",
        date: new Date(2024, 6, 18),
        readingTime: 3,
        comments: [
          {
            authorId: Math.random(),
            authorName: "John Doe",
            date: randomDate(new Date(2012, 0, 1), new Date()),
            text: "Lorem nisi adipisicing elit magna ad consequat ad incididunt tempor dolor.",
          },
        ],
        description: `В мире, где слова иногда теряют свою силу, объятия могут стать самым мощным...`,
        tags: ["Природа", "Люди"],
        text: `Nostrud laboris officia sit culpa quis veniam commodo ut incididunt. Occaecat ullamco eiusmod dolor mollit mollit ad commodo velit ad. Reprehenderit sunt laboris Lorem sunt incididunt. Proident ipsum sit incididunt esse cupidatat. Quis laboris exercitation ea voluptate dolore officia. Consequat consectetur consectetur irure id dolor dolore commodo dolor.`,
        imageUrl: "/src/images/family.jpg",
      },
      {
        id: 9,
        title: "Вечная гармония",
        date: new Date(2024, 6, 12),
        readingTime: 15,
        comments: [
          {
            authorId: Math.random(),
            authorName: "John Doe",
            date: randomDate(new Date(2012, 0, 1), new Date()),
            text: "Lorem nisi adipisicing elit magna ad consequat ad incididunt tempor dolor.",
          },
          {
            authorId: Math.random(),
            authorName: "Jane Smith",
            date: randomDate(new Date(2012, 0, 1), new Date()),
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
        ],
        description: `Фреска с божествами, словно окно в иной мир, где царит вечная гармония и покой.`,
        tags: ["Природа", "Животные"],
        text: `Id mollit velit laboris magna laborum veniam qui laboris occaecat commodo cupidatat ut aliquip et. Excepteur dolore proident excepteur eu incididunt laborum occaecat fugiat minim dolor magna laboris. Labore voluptate dolor incididunt voluptate ut qui sint dolor in eu cillum. Cupidatat aliquip officia non quis elit. Consequat esse elit veniam laborum aliquip esse in incididunt incididunt deserunt consectetur sit. Proident officia pariatur deserunt commodo aute commodo voluptate eu culpa aliquip amet adipisicing quis excepteur. Elit ea tempor id exercitation ullamco velit cupidatat deserunt.`,
        imageUrl: "/src/images/painting-2.jpg",
      },
      {
        id: 10,
        title: "Вкус лета",
        date: new Date(2024, 9, 9),
        readingTime: 2,
        comments: [
          {
            authorId: Math.random(),
            authorName: "John Doe",
            date: randomDate(new Date(2012, 0, 1), new Date()),
            text: "Lorem nisi adipisicing elit magna ad consequat ad incididunt tempor dolor.",
          },
          {
            authorId: Math.random(),
            authorName: "Jane Smith",
            date: randomDate(new Date(2012, 0, 1), new Date()),
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
        ],
        description: `Напоминание о том, что простые удовольствия могут приносить огромное счастье.`,
        tags: ["Еда"],
        text: `Commodo quis commodo aliquip fugiat sunt nisi sunt fugiat ad sint excepteur sit elit. Irure et aute excepteur ad duis ad excepteur occaecat velit ad culpa exercitation sit. Proident officia culpa aliqua deserunt. Laboris labore nostrud magna fugiat. Consectetur ea velit consequat dolore.`,
        imageUrl: "/src/images/dish.jpg",
      },
      {
        id: 11,
        title: "Эхо прошлого",
        date: new Date(2024, 2, 17),
        readingTime: 4,
        comments: [],
        description: `Старинное здание, укрытое под кронами деревьев, словно хранит в себе эхо прошлого.`,
        tags: ["Город", "Архитектура"],
        text: `Culpa non exercitation adipisicing proident elit amet consequat non duis amet excepteur. Fugiat incididunt magna reprehenderit sunt quis magna enim sint enim reprehenderit culpa ea. Elit ex commodo laboris tempor veniam. Lorem id dolore culpa duis laboris ut enim non labore irure aliqua dolor. Aliqua deserunt nostrud consectetur deserunt proident ex eu dolore nulla sunt culpa qui. Officia veniam fugiat exercitation eiusmod nostrud sint excepteur do et elit non. Ipsum occaecat velit ea consectetur velit culpa nisi amet fugiat ea ea id..`,
        imageUrl: "/src/images/university.jpg",
      },
    ],
    PICKED_POST: {},
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
    ADD_COMMENT_TO_POST: (state, payload) => {
      state.PICKED_POST.comments.push(payload);
    },
  },
});
