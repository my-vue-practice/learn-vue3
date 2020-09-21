<template>
  <div>
    <h3>demo1: count</h3>
    <button @click="increment">increment</button>
    <p>count: {{ state.count }}</p>
    <p>double: {{ state.double }}</p>
    <h3>demo2: mouse</h3>
    <p>x: {{ state.mousePosition.x }} - y: {{ state.mousePosition.y }}</p>
  </div>
</template>

<script>
import { useCount } from './use/useCount.js';
import { useMousePosition } from './use/useMousePosition.js';
export default {
  setup() {
    const { count, increment } = useCount();
    const mousePosition = useMousePosition();
    // 解构和展开会导致丢失响应式。
    // const { x, y } = mousePosition;
    // console.log({ x, y });
    // return {mousePosition: {x, y}} // 解构会导致响应式丢失。x、y无法响应式
    // return {mousePosition: {...mousePosition}} // 展开会导致响应式丢失。x、y无法响应式
    return { state: { count, mousePosition }, increment };
  },
};
</script>

<style lang="scss" scoped></style>
