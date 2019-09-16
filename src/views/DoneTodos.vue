<template>
  <div class="done-todos">
    <BaseHeadline text="Done todos" />
  </div>
</template>

<script>
  import BaseHeadline from "../components/BaseHeadline";

  export default {
    name: 'done-todos',
    components: {
      BaseHeadline,
    },
  }
</script>
