import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

if(document.documentElement.clientWidth > 500) {
  window.alert('请用手机打开本页面，以保证预览效果');
  const img = document.createElement('img');
  img.src = '/qrcode.png';
  img.style.position = 'fixed';
  img.style.top = '50%';
  img.style.left = '50%';
  img.style.transform = 'translate(-50%,-50%)';
  img.style.boxShadow = '0 0 10px rgba(0,0,0,0.25)';
  document.body.appendChild(img);
}
