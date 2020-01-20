<template>
  <form @submit.prevent="onSubmit">
    <div class="left-col">
      <b-form-input v-model="question" placeholder="Enter card's question"></b-form-input>
      <b-form-input v-model="answer" placeholder="Enter card's answer"></b-form-input>
    </div>
    <div class="right-col">
      <b-button type="submit" variant="primary">+</b-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      question: "",
      answer: ""
    };
  },
  methods: {
    onSubmit() {
      if (this.question !== "") {
        this.$emit("add-card", {
          question: this.question,
          answer: this.answer
        });
        this.question = "";
        this.answer = "";
      }
    }
  }
};
</script>

<style>
.left-col {
  width: 90%;
  float: left;
}
.right-col {
  width: 10%;
  float: right;
}
.right-col button {
  font-size: 32px;
  width: 100%;
  height: 13vh;
}
</style>