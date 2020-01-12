<template lang="pug">
.container-fluid.vh-100
  .row
    PublicHeader
  .login-page.d-flex.align-items-center
    .container
      .row
        .col-md-6.offset-md-3.login-card
          input-attr(name='input' :value='value' label="Email" placeholder="email@email.com")
          input-attr(name='input' :value='value' type="password" label="Password" placeholder="*********")
          button.btn.btn-minizen.float-right(type='submit') connectez vous
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import inputAttr from "@/components/inputs/inputAttr.vue";
import PublicHeader from "@/components/header/index.vue";
@Component({
  name: "Login",
  components: { inputAttr, PublicHeader }
})
export default class Login extends Vue {
  value = "";
}
</script>
<style lang="scss">
@import "../stylesheets/variable";
@import "~bootstrap/scss/utilities/flex";
@import "~bootstrap/scss/utilities/display";
@import "~bootstrap/scss/buttons";
@import "~bootstrap/scss/utilities/float";
@import "~bootstrap/scss/utilities/sizing";

.login-page {
  height: calc(100% - 70px);
  width: 100%;

  .login-card {
    background-color: #2d2c2c;
    padding: 30px;
    border-radius: 14px;

    label {
      color: white;
    }
  }
}
</style>
