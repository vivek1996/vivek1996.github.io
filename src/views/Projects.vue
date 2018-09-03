<template>
  <div class="projects container">
    <h1 class=" has-text-centered has-text-warning is-size-1 ">Projects</h1>
    <b-loading :is-full-page="isFullPage" :active.sync="isLoading"></b-loading>
    <div class="row" v-if="projects">
      <div class="item" v-for="project in projects">
        <card :title="project.title" :content="project.desc" :repo="project.repo" :url="project.url" :tech="project.tech">
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
      isLoading: false,
      isFullPage: true,
      projects: [],
      baseUrl:
        "https://bitbucket.org/!api/2.0/snippets/vivek1996/MeRbeL/13efe17f0bb72eb218cfbafd71cedb6bfa773f42/files/projects.json"
    };
  },
  created: function () {
    this.open();
    this.getJson();
  },
  methods: {
    getJson: function () {
      fetch(this.baseUrl)
        .then(this.handleErrors)
        .then(response => {
          return response.json();
        })
        .then(myJson => {
          // console.log(myJson);
          this.projects = myJson;
          // this.isLoading = false;
        })
        .catch(error => console.log(error));
    },
    handleErrors(response) {
      if (!response.ok) {
        this.$toast.open({ message: "Network Error", type: "is-danger" });
        throw Error(response.statusText);
      }
      return response;
    },
    open() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 2 * 1000);
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
