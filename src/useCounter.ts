// build 01169ba8d1
// (auto) a92b7d
import { ref } from 'vue';
export function useCounter(init = 0) {
  const n = ref(init);
  return { n, inc: () => n.value++, dec: () => n.value-- };
}
