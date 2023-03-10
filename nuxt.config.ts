// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // modules: [
  //   [
  //     "@nuxtjs/google-fonts",
  //     {
  //       families: {
  //         Cabin: {
  //           wght: [400, 700],
  //           ital: [400, 700],
  //         },
  //         "Cinzel+Decorative": [700],
  //         Comfortaa: {
  //           wght: [300 + ".." + 700],
  //         },
  //         "Odibee+Sans": [400],
  //         Ubuntu: {
  //           wght: [300, 400, 500, 700],
  //           ital: [300, 400, 500, 700],
  //         },
  //       },
  //       download: true,
  //     },
  //   ],
  // ],
  app: {
    head: {
      meta: [
        {
          name: "author",
          content: "Lavra Tamutus, Austin Yorski",
        },
        {
          name: "description",
          content: "Homepage of Dice Funk Podcast",
        },
        {
          name: "keywords",
          content:
            "goblins,anarchists,lesbians,dungeons,dnd,dragons,podcast,comedy,drama,leftist",
        },
      ],
      link: [{ rel: "stylesheet", href: "/stylesheets/main.css" }],
    },
    pageTransition: {
      name: "page",
    },
  },
  components: true,
  routeRules: {
    "/profile": { ssr: false },
  },
  runtimeConfig: {
    public: {
      authDomain: "",
      authClientId: "",
    },
  },
});
