<template lang="pug">
div
  .search-box
    v-btn.d-inline-block(fab dark v-if='isHidden' color='accent' @click='isHidden = false')
      v-icon search
  .search-form(v-if='!isHidden')
    .form
      input(type='text' placeholder='Search Here')
      v-btn.close-btn.white(@click='isHidden = !isHidden')
        v-icon close
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Search"
})
export default class Search extends Vue {
  isHidden = true;
}
</script>

<style scoped></style>
