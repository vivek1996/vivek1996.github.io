<template>
  <div id="app">
    <div id="nav">
      <NavBar />
    </div>
    <div class=" container">
      <!-- <transition name="page" mode="out-in">
       <router-view/>
    </transition> -->
      <transition name="custom-classes-transition" enter-active-class="animated slideInDown" leave-active-class="animated slideOutDown">
        <router-view/>
      </transition>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
#app {
  // background-color: hsl(0, 0%, 21%);
  background: #232526;
  background: linear-gradient(to right, #414345, #232526);

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //min-height: 85vh;
}
*::selection {
  background-color: hsl(49, 86%, 58%);
  color: black;
}
// .page-enter-active, .page-leave-active {
//   transition: opacity 1s, transform 1s;
// }
// .page-enter, .page-leave-to {
//   opacity: 0;
//   transform: translateX(-30%);
// }
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.slideInDown {
  animation-name: slideInDown;
}
@keyframes slideOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
}

.slideOutDown {
  animation-name: slideOutDown;
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
