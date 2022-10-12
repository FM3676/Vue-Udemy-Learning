<template>
  <h3>{{ userName }}</h3>
  <h3>{{ gender }}</h3>
  <div>
    <input type="text" placeholder="FirstName" @input="setFirstName" />
    <input type="text" placeholder="LastName" @input="setLastName" />
    <input type="text" placeholder="Gender" v-model="gender" />
  </div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const gender = ref('');
    const setFirstName = (e) => {
      firstName.value = e.target.value;
    };
    const setLastName = (e) => {
      lastName.value = e.target.value;
    };

    const userName = computed(() => {
      // userName is read only.
      return firstName.value + ' ' + lastName.value;
    });

    return {
      setFirstName,
      setLastName,
      userName,
      gender,
    };
  },
};
</script>
