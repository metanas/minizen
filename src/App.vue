<template lang="pug">
  #app
    PublicHeader( name="Login")
    router-view.content
    PublicFooter
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PublicFooter from "@/components/footer/index.vue";
import PublicHeader from "@/components/header/index.vue";

@Component({
  components: { PublicHeader, PublicFooter }
})
export default class App extends Vue {}
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  width: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .content {
    min-height: calc(100% - 140px);
  }
}
</style>
