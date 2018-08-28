<template>
  <div class="projects">
    <h1 class=" has-text-centered has-text-warning is-size-1 " >Projects</h1>
    <div class="row">
  <div class="item">
       <card
      :title="'Github'"
      :content="'Welcome to Github'">
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
  }
}
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
