<template lang="pug">
.input-attr
  .form-group
    label(v-if="hasLabel") {{ label }}
    input.form-control(:class="{'is-invalid': hasError, 'is-valid': isValid }" :name="name" v-model="dataValue" :placeholder="placeholder" :type="type" :required="required" :autocomplete="autocomplete")
    slot
</template>
<script lang="ts">
import { Component, Vue, Prop, PropSync } from "vue-property-decorator";
import { isEmpty } from "lodash";

@Component({
  name: "InputAttr"
})
export default class InputAttr extends Vue {
  @Prop({ default: false }) required!: boolean;

  @Prop({ default: false }) hasError!: boolean;

  @Prop({ default: false }) isValid!: boolean;

  @PropSync("value", { required: true }) dataValue!: string;

  @Prop({ default: "text" }) type!: string;

  @Prop({ required: true }) name!: string;

  @Prop() autocomplete!: string;

  @Prop() placeholder?: string;

  @Prop() label?: string;

  get hasLabel(): boolean {
    return !isEmpty(this.label);
  }
}
</script>
<style lang="scss" src="../../stylesheets/input-attr/input-attr.scss" />
