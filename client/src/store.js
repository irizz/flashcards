import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    categories: [],
    cards: [],
    currCards: [],
    currBox: "",
    currCategoryName: ""
  },
  mutations: {
    addNewCategory(state, newCategoryName) {
      state.categories.push(newCategoryName)
    },
    setCurrCategoryName(state, currCategoryName) {
      state.currCategoryName = currCategoryName;
    },
    setCurrBox(state, boxLevel) {
      state.currBox = boxLevel;
    },
    setCurrCards(state, currCards) {
      state.currCards = currCards;
    }
  }
})