<template>
  <div>
    <button @click="increment">increment</button>
    <p>count: {{ state.count }}</p>
    <p>double: {{ state.double }}</p>
  </div>
</template>

<script>
import { useCount } from './use/useCount.js';
export default {
  setup() {
    const { state, increment } = useCount();
    return { state, increment };
  },
};
</script>

<style lang="scss" scoped></style>
