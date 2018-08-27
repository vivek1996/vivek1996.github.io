<template>
  <div class="projects">
    <h1>This is an Projects page</h1>
    <div class="row">
  <div class="item">
    <div class="">
       <card
      :icon="'angle-right'"
      :title="'Github'"
      :content="'Welcome to Github'">

    </card>
    </div>
  </div>
  <div class="item">
    <div class="">
       <card
      :icon="'angle-left'"
      :title="'Giuyu'"
      :content="'Welegeett Github'">

    </card>
    </div>
  </div>
   <div class="item">
    <div class="">
       <card
      :icon="'angle-left'"
      :title="'Giuyu'"
      :content="'Welegeett Github'">

    </card>
    </div>
  </div>
   <div class="item">
    <div class=" ">
       <card
      :icon="'angle-left'"
      :title="'Giuyu'"
      :content="'Welegeett Github'">

    </card>
    </div>
  </div>
   <div class="item">
    <div class=" ">
       <card
      :icon="'angle-left'"
      :title="'Giuyu'"
      :content="'Welegeett Github'">

    </card>
    </div>
  </div>
</div>
    <!-- <card
      :icon="'angle-right'"
      :title="'Github'"
      :content="'Welcome to Github'">

    </card> -->
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
  min-height: 400px;
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
}

.item {
  flex: 0 0 auto;
  margin: 5px;
}
</style>
