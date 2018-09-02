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
          </div>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item">
              <span class="icon is-small">
                <i class="fas fa-reply"></i>
              </span>
            </a>
            <a class="level-item">
              <span class="icon is-small">
                <i class="fas fa-retweet"></i>
              </span>
            </a>
            <a class="level-item">
              <span class="icon is-small">
                <i class="fas fa-heart"></i>
              </span>
            </a>
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

