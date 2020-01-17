<template lang="pug">
div
  v-menu.userblock-dropdown(transition='scale-transition' offset-overflow='' nudge-bottom='30' nudge-right='20' min-width='200' max-width='200' light)
    template(v-slot:activator='{ on }')
      v-btn(fab='' small='' v-on='on')
        v-icon.accent--text(size="42") account_circle
    v-list.user-dropdown-list
      v-list-item(:href='userLink.path' v-for='(userLink, key) in data' :key='key')
        v-icon.mr-2 {{userLink.icon}}
        span {{userLink.title}}

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "UserBlock"
})
export default class UserBlock extends Vue {
  @Prop() data!: object[];
}
</script>
