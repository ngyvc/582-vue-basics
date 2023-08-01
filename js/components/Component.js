app.component("component", {
  template: /*html*/ `
    <div>
        <h1>Component</h1>
        <p>{{given.name}}</p>
    </div> 
    `,
  props: {
    given: {
      type: Object,
      required: true,
    },
  },
});
