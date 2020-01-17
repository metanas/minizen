<template lang="pug">
.mr-3
  v-menu.cart(transition='scale-transition' min-width='300' max-width='300' offset-y light)
    template(v-slot:activator='{ on }')
      v-btn.cart-btn(fab dark small color='accent' v-on='on')
        v-badge(right large color='accent')
          template(v-if='cart.length > 0')
            span(slot='badge') {{cart.length}}
          v-icon(dark) shopping_cart
    .cart-menu-list.white(v-if='cart && cart.length > 0')
      vue-perfect-scroll-bar.scroll-area(style='max-height:280px')
        v-list.cart-list-items.py-0(v-for='(cart, index) in cart' :key='index')
          v-layout(row wrap align-center cart-item ma-0)
            v-flex(sm12 md12 lg12 xl12 pa-0)
              v-layout.ma-0(row wrap align-center)
                v-flex(xs3 sm3 md3 lg3 xl3 pa-0)
                  img(:src='cart.image' width='60' height='70')
                v-flex(xs9 sm9 md9 lg9 xl9 pa-0)
                  .pl-1
                    h6.word-wrap-break {{cart.name}}
                v-flex(sm4 md4 lg4 xl4 text-center pa-0 cart-action)
                  v-btn.primary.d-inline-block(icon @click.stop='dialog = true' @click='deleteProductFromCart(cart)')
                    v-icon remove_shopping_cart
                  v-btn.primary.d-inline-block.ml-2.d-inline-flex.align-items-center(icon to='/cart')
                    v-icon edit
      delete-confirmation(ref='deleteConfirmationDialog' message='Are you sure you want to delete this product?' @onconfirm='onDeleteProductFromCart')
      v-layout(align-center pa-3)
        v-btn.accent.white--text(block to='/checkout') Checkout
    .text-center.white.pa-6(v-else)
      v-icon.accent--text(size='31') shopping_cart
      h5 No Product Found
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VuePerfectScrollBar from "vue-perfect-scrollbar";
import DeleteConfirmation from "@/components/deleteConfirmation/index.vue";
import { mapGetters } from "vuex";

@Component({
  name: "Cart",
  components: { VuePerfectScrollBar, DeleteConfirmation },
  computed: {
    ...mapGetters(["cart", "selectedCurrency", "currencies"])
  }
})
export default class Cart extends Vue {
  selectDeletedProduct = null;
  settings = {
    maxScrollbarLength: 160
  };
  get getTotalPrice() {
    let totalPrice = 0;
    if (this.cart.length > 0) {
      for (const item of this.cart) {
        totalPrice += item.total;
      }
      return totalPrice.toFixed(2);
    } else {
      return totalPrice;
    }
  }
  deleteProductFromCart(product) {
    this.$refs.deleteConfirmationDialog.openDialog();
    this.selectDeletedProduct = product;
  }
  onDeleteProductFromCart() {
    this.$refs.deleteConfirmationDialog.close();
    this.$snotify.success("Product Removing from cart", {
      closeOnClick: false,
      pauseOnHover: false,
      timeout: 1000
    });
    this.$store.dispatch("onDeleteProductFromCart", this.selectDeletedProduct);
  }
}
</script>
