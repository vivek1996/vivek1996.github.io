<template>
  <footer class="footer is-black has-text-weight-semibold">
    <div class="content has-text-centered">
      <p class="has-text-warning">
        &copy; 2018 - With
        <b-icon pack="fas" icon="heart" size="is-small" type="is-danger"></b-icon> by Vivek M
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: hsl(0, 0%, 4%);
  padding: 1rem 1.5rem 3rem;
  color: #fff;
}
</style>
