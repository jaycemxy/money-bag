<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/bill" class="item" active-class="selected">
      <Icon name="bill"/>
      标签
    </router-link>
    <router-link to="/chart" class="item" active-class="selected">
      <Icon name="chart"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';

@Component({
  components: {Icon}
})
export default class Nav extends Vue {
  
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  box-shadow: 0 0 3px rgb(0 0 0 / 25%);
  > .item {
    width: 33.3333%;
    padding: 2px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  > .item.selected {
    color: #ffda47;
  }
}
</style>