<template>
  <div class="home">
    <section class="hero full-height is-dark">
      <div class="hero-head">
        <img :src="imageUrl" alt="">
      </div>
      <div class="hero-body">
        <section class="has-text-centered">
          <h1 class="has-text-warning is-size-1	has-text-centered">Hi,I'm Vivek</h1>
          <p class="has-text-warning has-text-centered is-size-5">Welcome to my little place on the internet. I’m a Frontend developer</p>
          <router-link class="button has-text-weight-semibold is-danger mt-3 hvr-shutter-out-horizontal" to="/projects">Glad to meet u, have a look at my works</router-link>
          <br>
          <a href="https://s3.ap-south-1.amazonaws.com/vivek-public/Vivek_m_resume.pdf" class="button is-danger mt-3 hvr-icon-down ">
            <i class="fas fa-file-download hvr-icon"></i>
            <span class="pl-2">Resume</span>
          </a>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data: function () {
    return {
      imageUrl: ""
    }
  },
  components: {},
  created: function () {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    this.imageUrl = `https://source.unsplash.com/5Xwaj9gaR0g/${width}x${height}`;
  }
};
</script>

<style lang="scss" scoped>
.hero-head {
  img {
    background-color: rgba(56, 56, 56, 0.933);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 80vh;
  }
}
.mt-3 {
  margin-top: 2rem;
}
.pl-2 {
  padding-left: 0.5rem;
}
/* Shutter Out Horizontal */
.hvr-shutter-out-horizontal {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  background: #e1e1e1;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.hvr-shutter-out-horizontal:before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: hsl(348, 80%, 50%);
  color: #000;
  transform: scaleX(0);
  transform-origin: 50%;
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
}
.hvr-shutter-out-horizontal:hover,
.hvr-shutter-out-horizontal:focus,
.hvr-shutter-out-horizontal:active {
  color: rgb(0, 0, 0);
}
.hvr-shutter-out-horizontal:hover:before,
.hvr-shutter-out-horizontal:focus:before,
.hvr-shutter-out-horizontal:active:before {
  transform: scaleX(1);
}
/* Icon Down */
@-webkit-keyframes hvr-icon-down {
  0%,
  50%,
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  25%,
  75% {
    -webkit-transform: translateY(6px);
    transform: translateY(6px);
  }
}
@keyframes hvr-icon-down {
  0%,
  50%,
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  25%,
  75% {
    -webkit-transform: translateY(6px);
    transform: translateY(6px);
  }
}
/* Icon Down */
.hvr-icon-down {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.hvr-icon-down .hvr-icon {
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
.hvr-icon-down:hover .hvr-icon,
.hvr-icon-down:focus .hvr-icon,
.hvr-icon-down:active .hvr-icon {
  -webkit-animation-name: hvr-icon-down;
  animation-name: hvr-icon-down;
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
}
</style>
