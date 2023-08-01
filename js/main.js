const { createApp, ref } = Vue;

let app = createApp({
  setup() {
    const message = ref("Hello ");
    return {
      message,
    };
  },
  data() {
    return {
      name: "Peter",
      imageSrc: "https://placehold.co/300x200",
      availability: true,
      av: "av-label",
      nav: "av-label disabled",
      age: 25,
      students: [
        { id: 1, name: "Patrick", age: 26 },
        { id: 2, name: "John", age: 31 },
        { id: 3, name: "Mary", age: 32 },
      ],
    };
  },
  methods: {
    action() {
      console.log("Action");
    },
  },
}).mount("#app");
