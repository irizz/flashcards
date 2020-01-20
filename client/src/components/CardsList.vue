<template>
  <div>
    <router-link to="/category">Return</router-link>
    <b-row align-h="center">
      <Card v-for="(card,key) of cards" v-bind:card="card" v-bind:key="key" />
    </b-row>
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  data() {
    return {
      cards: []
    };
  },
  mounted: function() {
    this.cards = this.$store.state.currCards;
  },
  components: {
    Card
  }
};
</script>

<style>
</style>