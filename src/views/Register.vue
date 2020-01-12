<template lang="pug">
  .register-page.d-flex.align-items-center
    .container
      .row
         .col-md-6.offset-md-3.register-card
          .row
            .col-md-6
              input-attr(name='input' label="First name")
            .col-md-6
              input-attr(name='input' label='Last name')
          .row
            .col-md-2
              .form-group
                label
                  b Day
                select.form-control
                  option(v-for="i in 31" :value='i') {{i}}
            .col-md-2
             .form-group
              label
                b Month
              select.form-control
                option(v-for="i in 12" :value='i') {{i}}
            .col-md-2
              .form-group
                label
                  b Year
                select.form-control
                  option(v-for="i in range(2020,1950)" :value="i") {{i}}
          .row
            .col-md-12
              input-attr(name='input' :value='value' label="Email" placeholder="email@email.com")
              input-attr(name='input' :value='value' type="password" label="Password" placeholder="Password ")
              input-attr(name='input' :value='value' type="password" label="Confirm Password" placeholder="Password ")
              button.btn.btn-minizen.float-right(type='submit') Enregistrer-vous

</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import inputAttr from "@/components/inputs/inputAttr.vue";
import { range } from "lodash";
@Component({
  name: "Register",
  components: { inputAttr },
  methods: { range }
})
export default class Register extends Vue {}
</script>

<style lang="scss">
@import "../stylesheets/variable";
@import "~bootstrap/scss/utilities/flex";
@import "~bootstrap/scss/utilities/display";
@import "~bootstrap/scss/buttons";
@import "~bootstrap/scss/utilities/float";
.register-page {
  height: 100%;
  .register-card {
    background-color: #2d2c2c;
    padding: 30px;
    border-radius: 14px;
    label {
      color: white;
    }
  }
}
</style>
