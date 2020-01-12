<template lang="pug">
.login-page.d-flex.align-items-center
  .container
    .row
      .col-md-6.offset-md-3.login-card
        form(@submit.prevent="submit")
          input-attr(name='email' v-model='$v.email.$model' label="Email" placeholder="email@email.com" @update:value="setEmail" :has-error="$v.email.$error" :is-valid="!$v.email.$error && $v.email.$model")
          input-attr(name='password' v-model="$v.password.$model" type="password" label="Password" placeholder="*********" @update:value="setPassword" :has-error="$v.password.$error" :is-valid="!$v.password.$error && $v.password.$model")
          button.btn.btn-minizen.float-right(type='submit') connectez vous
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import inputAttr from "@/components/inputs/inputAttr.vue";
import Vuelidate from "vuelidate";
import { email, minLength } from "vuelidate/lib/validators";

Vue.use(Vuelidate);

@Component({
  name: "Login",
  components: { inputAttr },
  validations: {
    email: {
      email
    },
    password: {
      minLength: minLength(8)
    }
  }
})
export default class Login extends Vue {
  email = "";

  password = "";

  setEmail(value: string): void {
    this.email = value;
    this.$v.$touch();
  }

  setPassword(value: string): void {
    this.password = value;
    this.$v.$touch();
  }

  submit(): void {
    console.log(this.$v);
  }
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
