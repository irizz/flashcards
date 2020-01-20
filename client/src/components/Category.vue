<template>
  <div>
    <b-row align-h="center">
      <b-col lg="6">
        <h2>{{currCategoryName}}</h2>
        <router-link to="/">Back to all categories</router-link>
      </b-col>
    </b-row>
    <b-row class="add-card" align-h="center">
      <b-col lg="6">
        <AddCard @add-card="addCard" />
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col lg="2">
        <Box
          v-bind:boxName="'Know bad'"
          v-bind:cards="cardsLevel1"
          v-bind:bg="'danger'"
          class="cards-box"
        />
      </b-col>
      <b-col lg="2">
        <Box
          v-bind:boxName="'Know mediocre'"
          v-bind:cards="cardsLevel2"
          v-bind:bg="'warning'"
          class="cards-box"
        />
      </b-col>
      <b-col lg="2">
        <Box
          v-bind:boxName="'Know good'"
          v-bind:cards="cardsLevel3"
          v-bind:bg="'success'"
          class="cards-box"
        />
      </b-col>
    </b-row>
    <b-row align-h="center" class="start-quiz">
      <b-col lg="6">
        <b-button block variant="primary">Start quiz</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import AddCard from "@/components/AddCard";
import Box from "@/components/Box";
export default {
  components: {
    AddCard,
    Box
  },
  beforeMount: function() {
    this.currCategoryName = this.$store.state.currCategoryName;
    this.cards = this.$store.state.cards;
  },
  data() {
    return {
      cards: [],
      currCategoryName: ""
    };
  },
  computed: {
    cardsLevel1() {
      return this.cards.filter(item => item.level == 1);
    },
    cardsLevel2() {
      return this.cards.filter(item => item.level == 2);
    },
    cardsLevel3() {
      return this.cards.filter(item => item.level == 3);
    }
  },
  methods: {
    addCard(cardObj) {
      const lastEl = this.cards[this.cards.length - 1];
      const lastIdx = lastEl ? lastEl.id : 0;
      this.cards.push({
        id: lastIdx + 1,
        question: cardObj.question,
        answer: cardObj.answer,
        level: 1
      });
    }
  }
};
</script>

<style>
.add-card {
  margin-top: 2%;
  margin-bottom: 4%;
}
.cards-box:hover {
  cursor: pointer;
  color: #007bff;
}
.start-quiz {
  margin-top: 4%;
}
</style>