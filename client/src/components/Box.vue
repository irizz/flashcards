<template>
  <div>
    <b-card @click="handleBoxClick" :border-variant="bg">
      {{boxName}}
      (
      {{cards.length}}
      )
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["cards", "boxName", "bg"],
  methods: {
    handleBoxClick() {
      this.$store.commit("setCurrCards", this.cards);
      this.$router.push("/cards-list");
    }
  }
};
</script>