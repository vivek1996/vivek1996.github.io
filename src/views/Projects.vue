<template>
  <div class="projects">
    <h1>This is an Projects page</h1>
    <div class="columns">
  <div class="column">
    <div class="">
       <card
      :icon="'angle-right'"
      :title="'Github'"
      :content="'Welcome to Github'">

    </card>
    </div>
  </div>
  <div class="column">
    <div class="">
       <card
      :icon="'angle-left'"
      :title="'Giuyu'"
      :content="'Welegeett Github'">

    </card>
    </div>
  </div>
   <div class="column">
    <div class="">
       <card
      :icon="'angle-left'"
      :title="'Giuyu'"
      :content="'Welegeett Github'">

    </card>
    </div>
  </div>
   <div class="column">
    <div class=" ">
       <card
      :icon="'angle-left'"
      :title="'Giuyu'"
      :content="'Welegeett Github'">

    </card>
    </div>
  </div>
   <div class="column ">
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

