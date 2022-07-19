import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Money from "@/views/Money.vue";
import Bill from "@/views/Bill.vue";
import Chart from "@/views/Chart.vue";
import NotFound from "@/views/NotFound.vue";
import Tags from "@/views/Tags.vue";
import EditRecord from "@/views/EditRecord.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/money",
  },
  {
    path: "/money",
    component: Money,
  },
  {
    path: "/bill",
    component: Bill,
  },
  {
    path: "/chart",
    component: Chart,
  },
  {
    path: "/tags",
    component: Tags,
  },
  {
    path: "/record/edit/:id",
    component: EditRecord,
  },
  {
    path: "*",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
