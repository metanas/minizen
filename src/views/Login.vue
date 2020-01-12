<template lang="pug">
.login-page.d-flex.align-items-center
  .container
    .row
      .col-md-6.offset-md-3.login-card
        input-attr(name='input' v-model='email' label="Email" placeholder="email@email.com" @update:value="setEmail")
        input-attr(name='input' v-model="email" type="password" label="Password" placeholder="*********")
        button.btn.btn-minizen.float-right(type='submit') connectez vous

</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import inputAttr from "@/components/inputs/inputAttr.vue";
@Component({
  name: "Login",
  components: { inputAttr }
})
export default class Login extends Vue {
  email = "";

  setEmail(value: string): void {
    this.email = value;
  }
}
</script>
<style lang="scss">
@import "../stylesheets/variable";
@import "~bootstrap/scss/utilities/flex";
@import "~bootstrap/scss/utilities/display";
@import "~bootstrap/scss/buttons";
@import "~bootstrap/scss/utilities/float";

.login-page {
  height: 100%;

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
