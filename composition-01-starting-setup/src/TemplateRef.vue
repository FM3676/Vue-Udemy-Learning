<template>
  <h3>{{ actualValue }}</h3>
  <div>
    <input type="text" placeholder="TemplateRef" ref="theRef" />
    <button @click="setActualValue">setActualValue</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const actualValue = ref('');
    const theRef = ref(null);
    // Automatically cobine the template ref with the data ref
    function setActualValue() {
      return (actualValue.value=theRef.value.value);
    }
    return {
      actualValue,
      theRef,
      setActualValue,
    };
  },
};
</script>
