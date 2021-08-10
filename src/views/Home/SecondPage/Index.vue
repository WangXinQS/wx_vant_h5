<template>
  <div class="box">
    <NavBar title="Header" fixed left-arrow @click-left="back"></NavBar>
    <PullRefresh v-model="loading" @refresh="onRefresh">
      <div class="content">content</div>
      <div class="content">content</div>
      <div class="content">content</div>
    </PullRefresh>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { PullRefresh, NavBar } from "vant";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "SecondPage",
  components: {
    PullRefresh,
    NavBar,
  },
  setup() {
    const router = useRouter();
    const loading = ref(false);
    const onRefresh = () => {
      setTimeout(() => {
        loading.value = false;
      }, 1000);
    };
    const back = () => {
      router.back();
    };
    return {
      loading,
      onRefresh,
      back,
    };
  },
});
</script>

<style lang="less" scoped>
.box {
  padding: 50px 0 55px 0;
  .header {
    position: fixed;
    width: 100%;
    height: 30px;
    background-color: red;
    top: 0;
    z-index: 100;
  }
  .content {
    height: 200px;
    width: 100%;
    background-color: bisque;
    margin-bottom: 100px;
  }
}
</style>
