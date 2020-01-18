<template>
  <div>
    <Card
      v-for="(card,key) of cards"
      v-bind:card="card"
      v-bind:key="key"
    />
  </div>
</template>

<script>
import Card from "@/components/Card"
export default {
  props: [
    "cards"
  ],
  components: {
    Card
  }
}
</script>