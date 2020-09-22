# learn-vue3

## API

### setup

作为在组件内使用 Composition API 的入口点。

**特点：**

1. 调用时机：初始化完 props 就会调用 setup 函数。从生命周期钩子视角来看，在`beforeCreate`之前执行。
2. 模板中使用：如果`setup`返回一个对象，则对象的属性将被合并到组件模板的渲染上下文中。

```vue
<template>
  <div>{{ count }} {{ object.foo }}</div>
</template>

<script>
import { ref, reactive } from 'vue';
export default {
  setup() {
    // 创建一个响应式值
    const count = ref(0);
    // 创建一个响应式对象
    const object = reactive({ foo: 'bar' });
    // 暴露给模板
    return {
      count,
      object,
    };
  },
};
</script>
```

**注意：**`setup`返回的`ref`在模板中会自动解开，不需要写`.value`

3. 渲染函数或 JSX 中使用：`setup`也可以放回一个函数，函数中也能使用当前`setup`函数作用域中的响应式数据：

```js
import { h, ref, reactive } from 'vue';
export default {
  setup() {
    const count = ref(0);
    const object = reactive({ foo: 'bar' });
    // 返回函数中使用setup中的响应式数据。
    return () => h('div', [count.value, object.foo]);
  },
};
```

4. 参数：`setup`接收`props`为第一个参数，第二个参数提供了上下文对象。

```ts
interface Data {
  [key: string]: unknown;
}

interface SetupContext {
  attrs: Data;
  slots: Slots;
  emit: (event: string, ...args: unknown[]) => void;
}

function setup(props: Data, context: SetupContext): Data;
```

**注意：** `props`对象是响应式的，不要`解构`props（`setup({name})`），这样会丢失响应性。另外，props 对象对用户空间代码不可变（也就是不要尝试去在使用 props 的地方修改 props）。

> **提示：**为了获得传递给 setup() 参数的类型推断，需要使用 defineComponent。

### reactive

接收一个普通对象然后返回该对象的响应式代理。等同于 2.x 的 `Vue.observable()`。

```ts
function reactive<T extends object>(raw: T): T;
```

### ref

接收一个参数值并返回一个响应式且可改变的`ref对象`，（通过`.value`获得内部值）。

> 如果传入 ref 的是一个对象，将调用 reactive 方法进行深层响应转换。

