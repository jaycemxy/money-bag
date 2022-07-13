<template>
  <div>
    <router-link to="/money">
      <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/labels">
      <Icon name="bill"/>
      标签
    </router-link>
    <router-link to="/statistics">
      <Icon name="chart"/>
      统计
    </router-link>
  </div>
</template>

<script lang="ts">
import x from '@/assets/icons/money.svg';
console.log(x);

export default {
  
}
</script>

<style lang="scss" scoped>

</style>