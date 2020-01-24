<template lang="pug">
  .footerV1-wrap.section-gap
    v-container(grid-list-xl py-0)
      .footer-top
        v-layout(row wrap)
          v-flex(xs12 sm12 md4 lg5 xl5)
            .about-wrap
              h6.white--text.mb-6 {{title}}
              span.white--text {{description}}
          v-flex(xs12 sm3 md2 lg2 xl2)
            h6.white--text.mb-4 About
            .abt-menu
              ul.list-unstyled.pl-0
                li(v-for='(list,key) in about' :key='key')
                  router-link(:to='list.path') {{$t(list.menuItem)}}
          v-flex(xs12 sm3 md2 lg2 xl2)
            h6.white--text.mb-4 Session
            .features-menu
              ul.list-unstyled.pl-0
                li(v-for='(list,key) in session' :key='key')
                  router-link(:to='list.path') {{$t(list.menuItem)}}
          v-flex(xs12 sm3 md2 lg2 xl)
            h6.white--text.mb-4 Categories
            .policy-menu
              ul.list-unstyled.pl-0
                li(v-for='(list,key) in categories' :key='key')
                  router-link(:to='list.path') {{$t(list.menuItem)}}
          v-flex(xs12 sm3 md2 lg1 xl1)
            .policy-menu
              h6.white--text.mb-4 Social
              ul.list-unstyled.pl-0
                li(v-for='(list,key) in socialLinks' :key='key')
                  a(:href='list.path') {{$t(list.menuItem)}}
      hr
      .footer-bottom
        .footer-bottom-content.px-3
          v-layout(row wrap align-center justify-space-between)
            v-flex.text-md-left.text-center(xs12 sm12 md6 lg6 xl6)
              .text-md-right.text-center
                 span.white--text {{copyrightText}}
            v-flex(xs12 sm12 md6 lg6 xl6 py-3 px-2)
              SocialShare.float-right



</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import SocialShare from "@/components/SocialShare/index.vue";

@Component({
  name: "PublicFooter",
  components: { SocialShare }
})
export default class PublicFooter extends Vue {
  @Prop() title: string;
  @Prop() description: string;
  @Prop() img: string;
  about = [
    {
      menuItem: "message.about",
      path: "/about"
    },
    {
      menuItem: "message.termAndCondition",
      path: "/term-condition"
    },
    {
      menuItem: "message.privacyPolicy",
      path: "/privacy-policy"
    },
    {
      menuItem: "message.faq",
      path: "/faq"
    },
    {
      menuItem: "message.contactUs",
      path: "/contact"
    }
  ];
  session = [
    {
      menuItem: "message.signIn",
      path: "/session/signin"
    },
    {
      menuItem: "message.register",
      path: "/session/signup"
    },
    {
      menuItem: "message.forgotPassword",
      path: "/session/forgot-password"
    },
    {
      menuItem: "message.thankYou",
      path: "/session/thank-you"
    }
  ];
  categories = [
    {
      menuItem: "message.men",
      path: "/products/men"
    },
    {
      menuItem: "message.women",
      path: "/products/women"
    },
    {
      menuItem: "message.accessories",
      path: "/products/accesories"
    },
    {
      menuItem: "message.gadgets",
      path: "/products/gadgets"
    }
  ];
  socialLinks = [
    {
      menuItem: "message.facebook",
      path: "https://www.facebook.com/"
    },
    {
      menuItem: "message.twitter",
      path: "https://twitter.com/"
    },
    {
      menuItem: "message.youtube",
      path: "https://www.youtube.com/"
    },
    {
      menuItem: "message.googlePlus",
      path: "https://plus.google.com/discover"
    }
  ];
  copyrightText =
    "© All Rights Reversed | Made With Love by IRON NETWORK for better Web";
}
</script>

<style lang="scss" src="../../stylesheets/footer/index.scss" />
