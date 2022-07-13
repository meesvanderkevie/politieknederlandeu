<template>
  <div class="nav">
    <Header />

    <RouterView />
  </div>
</template>

<script>
import Header from "@/components/Header.vue"

export default {
  components: {
    Header
  }
}
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>
