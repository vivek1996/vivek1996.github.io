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
  // background-color: hsl(0, 0%, 21%);
  // background: #232526; /* fallback for old browsers */
  // background: -webkit-linear-gradient(
  //   to right,
  //   #414345,
  //   #232526
  // ); /* Chrome 10-25, Safari 5.1-6 */
  // background: linear-gradient(
  //   to right,
  //   #414345,
  //   #232526
  // ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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