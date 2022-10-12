<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
} from 'vue';
export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const userName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });

    const age = inject('userAge');

    console.log(context);
    context.emit('save-data', 1); // this.$emit('save-data',1)

    onBeforeMount(function () {
      console.log('onBeforeMount');
    });
    onBeforeUnmount(function () {
      console.log('onBeforeUnmount');
    });
    onBeforeUpdate(function () {
      console.log('onBeforeUpdate');
    });
    onMounted(function () {
      console.log('onMounted');
    });
    onUnmounted(function () {
      console.log('onUnmounted');
    });
    onUpdated(function () {
      console.log('onUpdated');
    });

    return { userName, age };
  },
};
</script>

<style scoped></style>
