<template>
  <div class="about container">
    <article class="media is-hoverable">
      <figure class="has-text-centered">
        <p class="image">
          <img :src="avatar">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <div>
            <strong class="has-text-warning"> {{name}} </strong>
            <br>
            <p> {{desc}} </p>
            <p class="has-text-warning">
              <i class="fas fa-envelope "></i>
              Email:
              <a href="mailto:mvivek3112@gmail.com" target="blank" class="has-text-warning">mvivek3112@gmail.com</a>
            </p>
          </div>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">

            <a class="level-item hvr-icon-spin" href="https://www.facebook.com/vivek.udaya" target="blank" rel="noopener">
              <span class="icon">
                <i class="fab fa-facebook-f hvr-icon"></i>
              </span>
            </a>
            <a class="level-item hvr-icon-spin" href="https://twitter.com/VivekM31" target="blank" rel="noopener">
              <span class="icon">
                <i class="fab fa-twitter hvr-icon"></i>
              </span>
            </a>
            <a class="level-item hvr-icon-spin" href="https://github.com/vivek1996" target="blank" rel="noopener">
              <span class="icon">
                <i class="fab fa-github hvr-icon"></i>
              </span>
            </a>
            <a class="level-item hvr-icon-spin" href="https://www.linkedin.com/in/vivek-m-6598b1b7" target="blank" rel="noopener">
              <span class="icon">
                <i class="fab fa-linkedin-in hvr-icon"></i>
              </span>
            </a>
            <a class="level-item hvr-icon-spin" href="https://www.instagram.com/vivek_m/" target="blank" rel="noopener">
              <span class="icon">
                <i class="fab fa-instagram hvr-icon"></i>
              </span>
            </a>
            <a class="level-item hvr-icon-spin" href="https://medium.com/@mvivek3112" target="blank" rel="noopener">
              <span class="icon">
                <i class="fab fa-medium-m hvr-icon"></i>
              </span>
            </a>
            <!-- Stack icon -->
            <!-- <a class="level-item hvr-icon-spin" target="blank" rel="noopener">
              <span class="fa-stack">
                <i class="fas fa-circle fa-stack-2x" style="color:#fff"></i>
                <i class="fab fa-instagram hvr-icon fa-stack-1x fa-inverse"></i>
              </span>
            </a> -->
            <!-- / stack icon -->
          </div>
        </nav>
      </div>
    </article>
    <Time/>
  </div>
</template>
<style lang="scss" scoped>
.about {
  color: white;
}
// .media {
//   background-color: black;
//   margin: 3rem 0;
//   padding: 1rem;
//   border-radius: 5px;
// }
.image img {
  // border-radius: 50%;
  max-height: 15em;
  max-width: 15em;
  padding: 1rem;
}
.media {
  display: flex;
  flex-wrap: wrap;
  // max-width: 40em;
  background-color: black;
  margin: 3rem 0;
  padding: 1rem;
  border-radius: 5px;
}

.media-content {
  flex: 99999 1 20em;
  max-width: 30em;
}
.fa-facebook-f {
  color: #3b5998;
}
.fa-twitter {
  color: #1da1f2;
}
.fa-github {
  color: #4078c0;
}
.fa-linkedin-in {
  color: #0077b5;
}
.fa-instagram {
  color: #833ab4;
}
.fa-medium-m {
  color: #00ab6c;
}
/* Icon Spin */
.hvr-icon-spin {
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.hvr-icon-spin .hvr-icon {
  transition-duration: 1s;
  transition-property: transform;
  transition-timing-function: ease-in-out;
}
.hvr-icon-spin:hover .hvr-icon,
.hvr-icon-spin:focus .hvr-icon,
.hvr-icon-spin:active .hvr-icon {
  transform: rotate(360deg);
}
</style>
<script>
import Time from "@/components/timeline.vue";
export default {
  data: function () {
    return {
      name: "Vivek M",
      desc: "I'm the Front-End Developer tend to code things from scratch, and enjoy bringing ideas to life in the browser.  I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. I'm an autodidact, keen to learn more about web and the technologies required to work with it.",
      avatar: "https://avatars0.githubusercontent.com/u/15796694"
    };
  },
  components: {
    Time
  }
};
</script>

