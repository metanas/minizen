<template lang="pug">
.container-fluid.public-footer
  FontAwesomeIcon(:icon="['fab', 'school']")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSchool);
@Component({
  name: "PublicFooter",
  components: { FontAwesomeIcon }
})
export default class PublicFooter extends Vue {}
</script>

<style lang="scss" src="../../stylesheets/footer/index.scss" />
