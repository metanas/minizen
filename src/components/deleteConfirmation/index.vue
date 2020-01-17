<template lang="pug">
v-dialog(v-model='open' max-width='550')
  v-card.py-6.px-2
    h4.text-center.mb-6 {{message}}
    v-card-actions.layout.justify-center
      v-btn(color='accent mx-2' @click='open = false') Cancel
      v-btn(color='accent' @click="$emit('onConfirm')") Yes
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "DeleteConfirmation"
})
export default class DeleteConfirmation extends Vue {
  @Prop() message?: string;

  @Prop() onConfirm?: string;

  open = false;

  openDialog() {
    this.open = true;
  }

  close() {
    this.open = false;
  }
}
</script>
