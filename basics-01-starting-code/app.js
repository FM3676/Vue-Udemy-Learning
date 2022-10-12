const app = Vue.createApp({
  data() {
    return {
        courseGoalA: "Finish the course and learn Vue!",
        courseGoalB: "<h2>Finish the course and learn React!</h2>",
        
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      return Math.random() > 0.5 ? "Learn Vue" : "Master Vue";
    },
  },
});

app.mount("#user-goal");
