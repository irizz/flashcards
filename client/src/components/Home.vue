<template>
  <b-container>
    <b-row v-if="categories" align-h="center">
      <b-col v-for="(cat, key) of categories" v-bind:cat="cat" v-bind:key="key" lg="3">
        <b-card
          @click="setCurrCategory(cat)"
          bg-variant="light"
          class="text-center cat-card"
        >{{cat}}</b-card>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col lg="3">
        <b-card class="text-center add-cat-btn" v-b-modal.add-cat-modal>
          <h1>+</h1>Add new category
        </b-card>
      </b-col>
    </b-row>
    <b-modal id="add-cat-modal" title="Enter name for new category: " @ok="handleSubmit">
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-input autofocus v-model="newCategoryName"></b-form-input>
      </form>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      newCategoryName: "",
      categories: []
    };
  },
  mounted: function() {
    this.categories = this.$store.state.categories;
  },
  methods: {
    handleSubmit() {
      this.$store.commit("addNewCategory", this.newCategoryName);
      this.$store.commit("setCurrCategoryName", this.newCategoryName);
      this.$router.push("/category");
    },
    setCurrCategory(cat) {
      this.$store.commit("setCurrCategoryName", cat);
      this.$router.push("/category");
    }
  }
};
</script>

<style>
.cat-card {
  margin-bottom: 3%;
}
.cat-card:hover,
.add-cat-btn:hover {
  cursor: pointer;
  color: #007bff;
}
</style>