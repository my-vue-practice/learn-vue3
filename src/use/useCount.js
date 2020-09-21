import { computed, onMounted, reactive } from 'vue';
export function useCount() {
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

  // 生命周期方法
  onMounted(() => {
    console.log('mounted!');
  });

  return {
    count: state,
    increment,
  };
}
