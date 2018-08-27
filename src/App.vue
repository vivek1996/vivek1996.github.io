<template>
  <div id="app">
    <div id="nav">
      <NavBar />
    </div>
    <div class=" container is-fluid">
      <router-view/>
    </div>
  <Footer />
  </div>
</template>

<style lang="scss">
#app {
  background-color: hsl(0, 0%, 21%);

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    NavBar,
    Footer
  }
};
</script>