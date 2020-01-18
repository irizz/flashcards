<template>
  <div>
    <small v-bind:class="{card}">
      {{card.id}}
      {{card.question | uppercase}}
    </small>
  </div>
</template>

<script>
  export default {
    props: {
      card: {
        type: Object,
        required: true
      }
    },
    filters: {
    uppercase(value) {
      console.log(value);
      return value;
    }
  }
  }
</script>

<style scoped>
  .card {
    color: red;
  }
</style>