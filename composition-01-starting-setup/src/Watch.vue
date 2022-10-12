<template>
  <div>
    <h2>{{ age }}</h2>
    <h3>{{ name }}</h3>
    <h3>{{ gender }}</h3>
    <button @click="setAge">Change Watch Age</button>
    <input v-model="name" type="text" placeholder="Watch Name" />
    <input v-model="gender" type="text" placeholder="Watch Gender" />
  </div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
  setup() {
    const age = ref(31);
    const name = ref('');
    const gender = ref('');
    const setAge = () => {
      age.value = 41655;
    };
    watch(age, (newValue, oldValue) => {
      console.log('Old Value: ' + oldValue);
      console.log('New Value: ' + newValue);
    });

    watch([name, gender], (newValues, oldValues) => {
      console.log('Old name: ' + oldValues[0]);
      console.log('New name: ' + newValues[0]);
      console.log('Old name: ' + oldValues[1]);
      console.log('New name: ' + newValues[1]);
    });

    return {
      age,
      setAge,
      name,
      gender,
    };
  },
};
</script>
