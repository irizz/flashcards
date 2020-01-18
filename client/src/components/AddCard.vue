<template>
  <form @submit.prevent="onSubmit">
    <input v-model="question" type="text" />
    <button type="submit" >Add new</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      question: ""
    }
  },
  methods: {
    onSubmit() {
      if(this.question !== "") {
        this.$emit("add-card", this.question);
        this.question = "";
      }
    }
  }
}
</script>