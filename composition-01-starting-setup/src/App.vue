<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <p>{{ user.name }}</p>
    <p>{{ user.age }}</p>
    <p>{{ gender }}</p>
    <br />
    <button @click="setNewAge">Change Age</button>
    <br /><br /><br />
    <computed></computed>
    <br /><br /><br />
    <watch></watch>
    <br /><br /><br />
    <template-ref></template-ref>
  </section>
  <br /><br /><br />
  <section class="container">
    <user-data></user-data>
  </section>
</template>

<script>
import { ref, reactive, toRefs, provide } from 'vue';
import Computed from './Computed.vue';
import Watch from './Watch.vue';
import TemplateRef from './TemplateRef.vue';
import UserData from './Components/UserData.vue';
export default {
  components: { Computed, Watch, TemplateRef, UserData },
  setup() {
    const userName = ref('Maximilian');
    const age = ref(31);

    const user = reactive({
      name: 'Max',
      age: 56,
    });

    const gender = reactive({ gender: 'male' });

    // setTimeout(() => {
    //   userName.value = 'Max';
    //   age.value = 100;
    //   user.name = 'Min';
    //   user.age = 45;
    //   gender.gender = 'female';
    // }, 2000);

    const userRefs = toRefs(gender); // Values in gender object will be ref

    const setNewAge = () => {
      age.value = 100;
      user.age = 546;
    };

    provide('userAge', age);

    return {
      userName,
      age,
      user,
      gender: userRefs.gender,
      setNewAge,
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
