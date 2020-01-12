<template lang="pug">
.container-fluid.header-content
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "PublicHeader"
})
export default class PublicHeader extends Vue {}
</script>

<style lang="scss" src="../../stylesheets/header/index.scss"/>
