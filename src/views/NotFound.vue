<template>
  <div>
    <div>当前页面不存在，请检查网址是否正确</div>
    <router-link to="/money">返回首页</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class NotFound extends Vue {
}
</script>

<style scoped>

</style>