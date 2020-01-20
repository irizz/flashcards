<template>
  <div>
    <small v-bind:class="{card}">
      {{card.id}}
      {{card.question}}
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
  }
};
</script>

<style scoped>
.card {
  color: red;
}
</style>