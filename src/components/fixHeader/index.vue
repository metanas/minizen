<template lang="pug">
.fixed-header-wrap
  .header-wrap.primary.px-4
    v-container(grid-list-xl)
      v-layout(align-center justify-space-between row ma-0)
        .site-logo.d-inline-block
          router-link(to='/')
            img(alt='site-logo' height='34' :src='logo' width='224')
        div
          .menu-alignment
            menu
          .layout.align-left.responsive-menu
            v-btn.toggle-btn(icon dark @click='toggleMobileSidebar')
              i.material-icons menu
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Menu from "@/components/menu/index.vue";
import logo from "@/assets/logo.png";

@Component({
  name: "FixHeader",
  components: { Menu }
})
export default class FixHeader extends Vue {
  logo = logo;

  toggleMobileSidebar() {
    this.$store.dispatch("toggleSidebar", true);
  }
}
</script>

<style lang="scss"></style>
