app.component("teacher-profile", {
  template: /*html*/ `
    <div>
        <h2>Teacher Profile Component</h2>
        <p>{{name}}</p>
        <p>{{age}} - {{availability}}</p>

        <img v-if="profile" :src="profile" :alt="name" />
        <img v-else src="https://placehold.co/100x100" :alt="name" />

        <p  v-if="availability">Available</p>
        <p v-else>Not Available</p>
    </div>
    `,
  props: {
    name: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      required: false,
    },
    age: {
      type: Number,
      required: true,
    },
    availability: {
      type: Boolean,
      required: true,
    },
  },
});
