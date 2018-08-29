<template>
  <div class="about container">
    <article class="media is-hoverable">
      <figure class="media-left">
        <p class="image is-64x64">
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
.media {
  background-color: black;
  margin: 3rem 0;
  padding: 1rem;
  border-radius: 5px;
}
.image img {
  border-radius: 5rem;
}
</style>
<script>
import Time from "@/components/timeline.vue";
export default {
  data: function () {
    return {
      name: "Vivek M",
      desc: "An Aspiring Web Developer",
      avatar: "https://avatars0.githubusercontent.com/u/15796694"
    };
  },
  components: {
    Time
  }
};
</script>

