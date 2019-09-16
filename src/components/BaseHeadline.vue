<template>
  <h1 class="headline">
    {{ text }}
  </h1>
</template>

<script>
  export default {
    props: {
      text: String
    }
  }
</script>

<style scoped lang="scss">
  .headline {
    margin-top: 0;
  }
</style>