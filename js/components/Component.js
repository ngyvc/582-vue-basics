app.component("component", {
  template: /*html*/ `
    <div>
        <h1>Component</h1>
        <p>{{given.name}}</p>
        <button @click="componentAction">Action</button>
    </div> 
    `,
  props: {
    given: {
      type: Object,
      required: true,
    },
  },
  methods: {
    componentAction() {
      this.$emit("actionFromComponent");
    },
  },
});
