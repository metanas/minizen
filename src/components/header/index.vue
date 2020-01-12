<template lang="pug">
.container-fluid.header-content
  .row
    .col-md-3
      router-link(to="/")
        img.logo( :src="logo")
    .col-md-6
      span
        router-link.link(to="/")
    .col-md-3.align-items-center.actions
      span
        router-link.link(to="/login")
          span {{ name }}
        span.bar &nbsp;|&nbsp;
        router-link.link(to="/register")
          span Register
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import logo from "@/assets/logo.png";
@Component({
  name: "PublicHeader"
})
export default class PublicHeader extends Vue {
  logo = logo;

  @Prop() name!: string;
}
</script>

<style lang="scss" src="../../stylesheets/header/index.scss" />
