<template lang="pug">
.container-fluid.header-content
  .row
    .col-md-3
      img.logo( :src="logo")
    .col-md-6
    .col-md-3.align-items-center.actions
      span
       router-link.link(to="/login")
        span Login
       span.bar  |
        router-link.link(to="/register")
          span  Register
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import logo from "@/assets/logo.png";
@Component({
  name: "PublicHeader"
})
export default class PublicHeader extends Vue {
  logo = logo;
}
</script>

<style lang="scss" src="../../stylesheets/header/index.scss" />
