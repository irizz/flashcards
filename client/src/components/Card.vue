<template>
  <b-col lg="3">
    <b-card class="qa-card" no-body>
      <b-card-header>
        <strong>Q:</strong>
        {{card.question}}
      </b-card-header>
      <b-card-body>
        <strong>A:</strong>
        {{card.answer}}
      </b-card-body>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.qa-card {
  text-align: justify;
  margin-top: 3%;
  margin-bottom: 2%;
}
</style>