const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    result() {
      return this.number === 37
        ? this.number
        : this.number < 37
        ? "Not there yet!"
        : "Too much!";
    },
  },
  watch: {
    result() {
      console.log(231);
      const that = this;
      console.log(123);
      setTimeout(function () {
        that.number = 0;
      }, 2000);
    },
  },
  methods: {
    addNumber(num) {
      this.number += num;
    },
  },
});

app.mount("#assignment");
