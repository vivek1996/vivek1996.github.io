<template>
  <transition name="custom-classes-transition"
    enter-active-class="animated slideInDown"
    leave-active-class="animated slideOutDown">
    <div class="card card-cascade">
  <div class="view view-cascade gradient-card-header blue-gradient">
    <h2 class="card-header-title is-centered">{{ title }}</h2>
    <p class="card-header-subtitle"></p>
  </div>
  <div class="card-body card-body-cascade text-center">
    <p class="card-text">{{ content }}</p>

    <hr>
</div>
</div>
  </transition>
</template>

<script>
export default {
    name: "Card",
  props: {
    title: {
      type: String
    },
    content: String
  }
}
</script>
<style lang="scss" scoped>
h2 {
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: inherit;
}
h2 {
  font-size: 2rem;
}
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.card {
  width: 20rem;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: none;
  transition: all 0.55s ease-in-out;
  &:hover {
    box-shadow: 0 8px 17px 0 hsla(0, 0%, 30%, 0.746),
      0 6px 20px 0 hsla(0, 0%, 30%, 0.746);
    transition: all 0.55s ease-in-out;
  }
}
.card-body {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
}
card.card-cascade .view.view-cascade.gradient-card-header {
  color: #fff !important;
}
.card.card-cascade .view.view-cascade.gradient-card-header {
  color: #fff !important;
}
.card.card-cascade .view.view-cascade.gradient-card-header {
  color: #fff !important;
}
.card.card-cascade .view.view-cascade.gradient-card-header {
  color: #fff !important;
}
.view {
  position: relative;
  overflow: hidden;
  cursor: default;
}
.card {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border: 0;
  font-weight: 400;
}
.card .card-body .card-text {
  color: #747373;
  font-size: 0.9rem;
  font-weight: 400;
}
.card.card-cascade .view.view-cascade {
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}
.card.card-cascade .view.view-cascade.gradient-card-header {
  padding: 1.6rem 1rem;
  text-align: center;
}
.card.card-cascade .view.view-cascade.gradient-card-header .card-header-title {
  font-weight: 500;
}
.blue-gradient {
  background: -webkit-linear-gradient(50deg, #45cafc, #303f9f) !important;
  background: -o-linear-gradient(50deg, #45cafc, #303f9f) !important;
  background: linear-gradient(40deg, #45cafc, #303f9f) !important;
}
</style>
