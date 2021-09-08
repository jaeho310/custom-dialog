<template>
      <router-view :key="$route.path" />
</template>

<script>
  export default {
    name: 'MainView',
  }
</script>
