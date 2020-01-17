<template lang="pug">
.navbar
  ul.app-nav-list.pl-0
    li.app-nav-item(v-for="(menuItem , key) in menus" :key="key")
      router-link(:to="menuItem.path") {{$t(menuItem.name)}}
      template( v-if="menuItem.type === 'sub_menu'")
        ul.sub-menu( v-if="menuItem.children && menuItem.children.length > 0")
          li( v-for="(subMenuItem , subMenuKey) in menuItem.children" :key="subMenuKey")
            router-link( :to="subMenuItem.path" :class="[ subMenuItem.type === 'sub_menu' ? 'menu-item-has-children':'']") {{$t(subMenuItem.name)}}
            ul.sub-menu( v-if="subMenuItem.children_menus")
              li( v-for="(childrenItem , childrenKey) in subMenuItem.children_menus" :key="childrenKey")
                router-link(:to="childrenItem.path") {{$t(childrenItem.name)}}
      template( v-if="menuItem.type === 'mega_menu'")
        ul.sub-menu.mega
          li( v-for="(megaitem,megaitemkey) in menuItem.children" :key="megaitemkey")
            a {{$t(megaitemkey)}}
            ul.sub-menu
              li( v-for="(submega,submegakey) in megaitem" :key="submegakey")
                router-link( :to="{name: 'Products', params: {title:$t(megaitemkey)}, query: {category: submega.path}}" ) {{$t(submega.name)}}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Menu"
})
export default class Menu extends Vue {}
</script>
