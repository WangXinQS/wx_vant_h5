<template>
  <router-view />
  <Tabbar route v-show="route.meta.navShow">
    <Tabbar-Item replace to="/" icon="home-o">home</Tabbar-Item>
    <Tabbar-Item replace to="/about" icon="search">me</Tabbar-Item>
  </Tabbar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Tabbar, TabbarItem } from "vant";
import { useRoute } from "vue-router";
export default defineComponent({
  components: {
    Tabbar,
    TabbarItem,
  },
  setup() {
    const route = useRoute();
    console.log(route.meta);
    
    return {
      route
    }
  }
});
</script>

<style lang="less"></style>
