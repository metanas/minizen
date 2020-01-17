<template lang="pug">
.mr-3
  v-menu.wishlit-menu-wrap(transition='scale-transition' max-width='300' min-width='300' offset-y light)
    template(v-slot:activator='{ on }')
      v-btn.wishlist-btn(fab dark small color='accent' v-on='on')
        v-badge(right large color='accent')
          template(v-if='wishlist.length > 0')
            span(slot='badge') {{wishlist.length}}
          v-icon(dark) favorite
    .text-center.white.pa-6(v-if="wishlist == ''")
      v-icon.accent--text(size='31')
        | shopping_cart
      h5 No Product Found
    .wishlist-menu.white(v-else)
      vue-perfect-scroll-bar.scroll-area(style='max-height:280px')
        v-list.wishlist-cart-items.py-0(v-for='(wishlist, index) in wishlist' :key='index')
          v-layout(row wrap align-center cart-item ma-0)
            v-flex(sm12 md12 lg12 xl12 pa-0)
              v-layout(row wrap align-center ma-0)
                v-flex(xs3 sm3 md3 lg3 xl3 pa-0)
                  img(:src='wishlist.image' width='60' height='77')
                v-flex(xs9 sm9 md9 lg9 xl9 pa-0)
                  .pl-1
                    h6.mb-0.word-wrap-break {{wishlist.name}}
                v-flex(sm4 md4 lg4 xl4 text-center pa-0 cart-action)
                  v-btn.primary.d-inline-block(icon @click.stop='dialog = true' @click='deleteProductFromWishlist(wishlist)')
                    v-icon  remove_shopping_cart
                  v-btn.primary.d-inline-block.ml-2.d-inline-flex.align-items-center(icon to='/cart')
                    v-icon edit
      delete-confirmation(ref='deleteConfirmationDialog' message='Are you sure you want to delete this product?' @onconfirm='onDeleteProductFromWishlist')
      v-layout(align-center pa-3)
        v-btn.accent.white--text(block @click='addAllWishlistItemToCart') Add all to cart
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VuePerfectScrollBar from "vue-perfect-scrollbar";
import DeleteConfirmation from "@/components/deleteConfirmation/index.vue";
import { mapGetters } from "vuex";

@Component({
  name: "Wishlist",
  components: { VuePerfectScrollBar, DeleteConfirmation },
  computed: {
    ...mapGetters(["wishlist", "cart"])
  }
})
export default class Wishlist extends Vue {
  selectDeletedProduct = null;
  settings = {
    maxScrollbarLength: 160
  };
  /**
   * method for claculating total price
   */
  get getTotalPrice() {
    let totalPrice = 0;
    if (this.wishlist.length > 0) {
      for (const item of this.wishlist) {
        totalPrice += item.total;
      }
      return totalPrice.toFixed(2);
    } else {
      return totalPrice;
    }
  }
  /**
   * method for adding all wishlist item to cart
   */
  addAllWishlistItemToCart() {
    this.$snotify.success("Product adding to the cart", {
      closeOnClick: false,
      pauseOnHover: false,
      timeout: 1000,
      showProgressBar: false
    });
    setTimeout(() => {
      this.$store.dispatch("addAllWishlistItemToCart");
    }, 2000);
  }
  /**
   * method for deleting item from wishlist
   */
  deleteProductFromWishlist(product) {
    this.$refs.deleteConfirmationDialog.openDialog();
    this.selectDeletedProduct = product;
  }
  /**
   * method for showing notification after delteion of item from  wishlist
   */
  onDeleteProductFromWishlist() {
    this.$refs.deleteConfirmationDialog.close();
    this.$snotify.success("Product Removing from wishlist", {
      closeOnClick: false,
      pauseOnHover: false,
      timeout: 1000,
      showProgressBar: false
    });
    this.$store.dispatch(
      "onDeleteProductFromWishlist",
      this.selectDeletedProduct
    );
  }
}
</script>

<style scoped></style>
