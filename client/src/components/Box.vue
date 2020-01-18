<template>
  <div>
    <p>This is some box</p>
    <CardsList v-bind:cards="cards" />
  </div>
</template>

<script>
  import CardsList from "@/components/CardsList"
  export default {
    props: [
      "cards"
    ],
    components: {
      CardsList
    }
  }
</script>