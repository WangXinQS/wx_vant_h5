<template>
  <div class="box">
    <Button @click="toChild" type="primary">To Child</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { Button } from "vant";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  name: "Home",
  components: {
    Button,
  },
  setup() {
    // const route = useRoute();
    const router = useRouter();
    const toChild = () => {
      router.push("/home/child");
    };
    return {
      toChild,
    };
  },
});
</script>

<style lang="less" scoped>
</style>
