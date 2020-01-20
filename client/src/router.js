import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Category from "@/components/Category";
import CardsList from "@/components/CardsList"
import Quiz from "@/components/Quiz";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cards-list',
      component: CardsList
    },
    {
      path: '/quiz',
      component: Quiz
    }
  ]
})