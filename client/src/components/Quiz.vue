<template>
  <div>
    <router-link to="/category">Back to current category</router-link>
    <b-card v-if="!isFlipped" bg-variant="light" class="quiz-card">
      <b-card-text>
        <small class="quiz-card__hint">Answer the question and click "Flip" to see the answer</small>
        <p class="quiz-card__question">
          <strong>Q.:</strong> Question
        </p>
      </b-card-text>
      <b-button class="quiz-card__flip-btn" variant="link" @click="flipCard">Flip</b-button>
    </b-card>
    <b-card v-if="isFlipped" bg-variant="light" class="quiz-card">
      <b-card-text>
        <p class="quiz-card__question">
          <strong>A.:</strong> Flipped
        </p>
        <small class="quiz-card__hint">Check yourself:</small>
        <div class="quiz-card__self-check">
          <b-button pill variant="success">✔</b-button>
          <b-button pill variant="warning" class="quiz-card__self-check_mediocre">?</b-button>
          <b-button pill variant="danger">✘</b-button>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFlipped: false
    };
  },
  methods: {
    flipCard() {
      this.isFlipped = true;
    }
  }
};
</script>

<style>
.quiz-card {
  margin-top: 4%;
  margin-left: 20%;
  width: 60%;
  text-align: left;
}
.quiz-card__hint {
  color: grey;
  font-size: 11px;
}
.quiz-card__question {
  text-align: center;
  margin-top: 3%;
  margin-bottom: 4%;
  font-size: 22px;
}
.quiz-card__flip-btn {
  position: absolute;
  bottom: 0;
  right: 0;
}
.quiz-card__self-check {
  text-align: center;
}
.quiz-card__self-check button {
  margin-right: 2%;
}
.quiz-card__self-check_mediocre {
  font-weight: bold;
  color: white;
  font-size: 16px;
}
</style>