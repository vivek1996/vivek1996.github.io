<template>
  <div class="projects">
    <h1 class=" has-text-centered has-text-warning is-size-1 ">Projects</h1>
    <div class="row" v-if="projects">
      <div class="item" v-for="project in projects">
        <card :title="project.title" :content="project.desc">
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card.vue";
export default {
  components: {
    Card
  },
  data: function () {
    return {
      isFullPage: true,
      projects: [],
      baseUrl:
        "https://gist.githubusercontent.com/vivek1996/896077672d438b057cca20d52cf5ed42/raw/22eee4a7da43c841f13e26460dde0e8fc657b294/projects.json"
    };
  },
  created: function () {
    this.open();
    this.getJson();
  },
  methods: {
    getJson: function () {
      fetch(this.baseUrl)
        .then(response => {
          return response.json();
        })
        .then(myJson => {
          // console.log(myJson);
          this.projects = myJson;
        });
    },
    open() {
      const loadingComponent = this.$loading.open({
        container: this.isFullPage ? null : this.$refs.element.$el
      });
      setTimeout(() => loadingComponent.close(), 3 * 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
}
.item {
  // flex: 0 0 auto;
  margin: 5px;
  padding: 0.7rem;
  width: 100%;
}
@media (min-width: 481px) {
  .item {
    width: auto;
  }
}
</style>
