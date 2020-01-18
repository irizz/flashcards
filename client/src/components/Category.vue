<template>
  <div>
    <h2>Category</h2>
    <router-link to="/">Return</router-link>
    <AddCard @add-card="addCard" />
    <Box v-bind:cards="cardsLevel2" />
    <hr />
    <Box v-bind:cards="cardsLevel3" />
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
    };
  },
  computed: {
    cardsLevel2() {
      return this.cards.filter(item => item.level == 2)
    },
    cardsLevel3() {
      return this.cards.filter(item => item.level == 3)
    }
  },
  methods: {
    addCard(question) {
      const lastEl = this.cards[this.cards.length - 1];
      const lastIdx = lastEl ? lastEl.id : 0;
      this.cards.push({
        id: lastIdx + 1,
        question: question,
        answer: "",
        level: 3
      });
    }
  }
};
</script>