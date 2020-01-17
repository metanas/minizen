<template lang="pug">
div
  div.headerV2-wrap
    div.header-wrap
      div.top-header-wrap.d-block.primary
        div.top-header
          v-container(grid-list-xl)
            v-layout( row wrap align-center justify-space-between pa-0 ma-0 )
              v-flex( xs6 sm6 md4 lg3 xl3 px-0)
                div.site-logo.d-inline-block
                  router-link( to="/")
                    img( alt="site-logo" height="60" :src="logo" width="60")
              v-flex( xs12 sm7 md5 lg7 xl7 search-v2-wrap)
                div.search-v2
                  input(type="text" placeholder="Enter a keyword to search")
              v-flex( xs6 sm6 md3 lg2 xl2 px-0)
                div.notifications.d-flex.align-items-center.justify-end
                  cart
                  wishlist
                  user-block(:data="userLinks")
    div.bottom-header
      v-container
        div.bottom-header-inner
          div.menu-alignment
            menu
          div.layout.align-left.responsive-menu
            v-btn( icon dark @click="toggleMobileSidebar" class="toggle-btn")
              i.material-icons menu
          search
  div#fixedHeader
   fix-header
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import logo from "@/assets/logo.png";
import Cart from "@/components/cart/index.vue";
import Wishlist from "@/components/wishlist/index.vue";
import UserBlock from "@/components/userBlock/index.vue";
import Menu from "@/components/menu/index.vue";
import Search from "@/components/Search/index.vue";
import FixHeader from "@/components/fixHeader/index.vue";

@Component({
  name: "PublicHeader",
  components: { Cart, Wishlist, UserBlock, Menu, Search, FixHeader }
})
export default class PublicHeader extends Vue {
  logo = logo;

  userLinks = [
    {
      icon: "account_circle",
      title: "User Profile",
      path: "/account/profile"
    },
    {
      icon: "settings",
      title: "Account",
      path: "/account/profile"
    },
    {
      icon: "local_post_office",
      title: "Messages",
      path: "/account/profile"
    },
    {
      icon: "power_settings_new",
      title: "LogOut",
      path: "/session/signin"
    }
  ];

  @Prop() name!: string;

  mounted() {
    this.fixedHeader();
  }

  toggleMobileSidebar() {
    this.$store.dispatch("toggleSidebar", true);
  }

  fixedHeader() {
    var fixedHeader = document.getElementById("fixedHeader");
    window.onscroll = function() {
      if (window.pageYOffset > 100) {
        fixedHeader.style.opacity = "1";
        fixedHeader.style.visibility = "visible";
        fixedHeader.style.translate = "translateY(0)";
      } else {
        fixedHeader.style.opacity = "0";
        fixedHeader.style.visibility = "hidden";
        fixedHeader.style.translate = "translateY(-200px)";
      }
    };
  }
}
</script>

<style lang="scss" src="../../stylesheets/header/index.scss" />
