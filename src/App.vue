<template>
  <div>
    <button @click="increment">increment</button>
    <p>count: {{ state.count }}</p>
    <p>double: {{ state.double }}</p>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue';
export default {
  setup() {
    // const count = ref(0);
    // console.log('[count]', count);
    // const double = computed(() => count.value * 2);
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
    });
    const increment = () => {
      state.count++;
    };

    onMounted(() => {
      console.log('mounted!');
    });

    return {
      state,
      increment,
    };
  },
};
</script>

<style lang="scss" scoped></style>
