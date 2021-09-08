<template>
  <div>
    <v-app-bar
      dense
      dark
    >

    <v-menu
        right
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(n,idx) in items"
            :key="idx"
            :to="n.to"
          >
            <v-list-item-title> {{ n.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>


  </div>
</template>

<script>
  import { sync } from 'vuex-pathify'
  export default {
    methods: {
    },
    computed: {
      items: sync('app/items'),
    },
  }
</script>

<style>
  ul.menu li{float:left; padding:0px 20px; list-style:none; display: inline;}
</style>