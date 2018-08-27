<template>
  <div id="app">
    <div id="nav">
      <NavBar />
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "home",
  components: {
    NavBar
  }
};
</script>