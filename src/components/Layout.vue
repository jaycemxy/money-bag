<template>
<div class="nav-wrapper">
  <div class="content">
    <slot/>
  </div>
  <Nav/>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Prop} from 'vue-property-decorator';

export default class Layout extends Vue {
  @Prop(String) classPrefix?: string
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .content {
    flex-grow: 1;
    overflow: hidden;
  }
}
</style>