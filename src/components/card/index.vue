<template lang="pug">
   .main-cart(:style="{backgroundColor:Background}")
    img.back-image(:src="Logo")
    .main-layer
    .text-layer.text-center
     h3.inside-text {{Title | capitalize}}
     p {{Description}}
     v-btn.orange(:to="Link") Buy now

</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { capitalize } from "lodash";
@Component({
  filters: {
    capitalize
  }
})
export default class Card extends Vue {
  @Prop() Logo: string;
  @Prop() Title: string;
  @Prop() Description: string;
  @Prop() Background: string;
  @Prop() Link: string;
}
</script>
<style lang="scss">
@import "../../stylesheets/variable";
@import "~bootstrap/scss/utilities/float";
@import "~bootstrap/scss/utilities/flex";
.main-cart {
  height: 250px;
  width: 100%;
  border-radius: 10px;
  position: relative;
  box-shadow: 2px 4px 6px 3px #888888;

  .back-image {
    margin-top: 12.5px;
    height: 90%;
    margin-left: 5px;
  }
  .main-layer {
    position: absolute;
    background-color: #353535;
    opacity: 0.2;
    width: 100%;
    height: 100%;
    top: 0;
    border-radius: 10px;
  }
  .text-layer {
    position: absolute;
    top: 0;
    padding: 10px;
    margin-top: 40px;
    right: 5%;
    p {
      color: white;
    }

    .inside-text {
      color: white;
      opacity: 1;
    }
  }
}
</style>
