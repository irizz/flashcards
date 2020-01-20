<template>
  <div>
    <b-row align-h="center">
      <b-col lg="6">
        <h2>{{currCategoryName}}</h2>
        <router-link to="/">Return</router-link>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col lg="6">
        <AddCard @add-card="addCard" />
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col lg="3">
        <Box v-bind:cards="cardsLevel1" />
      </b-col>
      <b-col lg="3">
        <Box v-bind:cards="cardsLevel2" />
      </b-col>
      <b-col lg="3">
        <Box v-bind:cards="cardsLevel3" />
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
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          question: "This is question",
          answer: "This is answer",
          level: "3"
        },
        {
          id: 2,
          question: "This is another question",
          answer: "This is another answer",
          level: "2"
        }
      ],
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
        level: 3
      });
    }
  }
};
</script>