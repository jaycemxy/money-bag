<template>
  <nav>
    <router-link to="/money" class="item">
      <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/labels" class="item">
      <Icon name="bill"/>
      标签
    </router-link>
    <router-link to="/statistics" class="item">
      <Icon name="chart"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {
  
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
}
</style>