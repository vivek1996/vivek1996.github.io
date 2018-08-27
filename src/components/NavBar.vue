<template>
  <div class="hello">
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">Vivek
          <!-- <img src="http://bulma.io/images/bulma-logo.png" alt="Vivek"> -->
        </a>
        <div class="navbar-burger " @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu " :class="{ 'is-active': showNav }">
        <div class="navbar-end is-dark">
          <router-link class="navbar-item" to="/"><b-icon pack="fas" size="is-small" icon="home"></b-icon> Home</router-link>
          <router-link class="navbar-item" to="/about"><b-icon pack="fas" icon="info-circle" size="is-small"></b-icon>About</router-link>
          <router-link class="navbar-item" to="/projects"><b-icon pack="fas" icon="code" size="is-small"></b-icon>Projects</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data: function() {
    return {
      showNav: false
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
nav {
  text-align: center;
  a {
    font-weight: bold;
    &.router-link-exact-active {
      color: #ffdc00 !important;
      background-color: rgb(39, 39, 39);
    }
  }
}
.navbar-menu {
  background-color: hsl(0, 0%, 21%);
  a {
    color: white;
  }
}
.icon {
  padding: 0 1.3rem;
}
</style>
