<template>
  <v-app>
      <main-header />
      <main-view />
  </v-app>
</template>

<script>
  export default {
    name: 'Layout',

    components: {
      // 헤더
      MainHeader: () => import(
        './Header'
      ),
      // 바디
      MainView: () => import(
        './View'
      ),
    },
  }
</script>
