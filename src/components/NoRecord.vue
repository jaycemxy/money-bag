<template>
  <div class="no-record">
    <div class="icon">
      <Icon name="no-record"/>
    </div>
    <span>暂时没有记录，赶快记一笔吧~</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';

@Component({
    components: {Icon}
})
export default class NoRecord extends Vue {
  
}
</script>

<style lang="scss" scoped>
.no-record {
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .icon {
    width: 80px;
    height: 80px;
  }
  span {
    color: #999;
    font-size: 12px;
    margin-top: 10px;
  }
}
</style>