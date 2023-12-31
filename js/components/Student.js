app.component("student", {
  template: /*html*/ `
  <div style="border: 1px solid #127676">
    <h2>Student Component</h2>
    {{student.id}}
    {{student.name}}
    {{student.age}}
  </div>
  `,
  props: {
    student: {
      type: Object,
      required: true,
    },
  },
});
