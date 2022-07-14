<template>
  <div class="calculator" :class="classPrefix && `${classPrefix}-calculator`">
    <div class="panel">
      <label class="note">
        <Icon name="note" class="icon"/>
        <span>备注:</span>
        <input type="text" placeholder="写点备注吧~">
      </label>
      <div class="amount">0</div>
    </div>
    <div class="number-pad">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
      
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="ok">完成</button>
      
      <button>.</button>
      <button>0</button>
      <button>
        <Icon name="delete"/>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';

@Component({
  components: {Icon}
})
export default class Calculator extends Vue {
  @Prop(String) classPrefix?: string;
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/style.scss';
.calculator {
  .panel {
    display: flex;
    align-items: center;
    border: 1px solid #dddddd;
    .note {
      display: flex;
      align-items: center;
      padding: 4px 8px;
      font-size: 14px;
      .icon{
        margin-right: 8px;
      }
      span {
        width: 32px;
      }
      input {
        border: none;
        margin-left: 8px;
        height: 32px;
      }
    }
    .amount {
      font-size: 24px;
      font-family: Consolas, monospace;
      width: 50%;
      padding: 6px 12px 4px 12px;
      text-align: right;
    }
  }
  .number-pad {
    @extend %clear-fix;
    button {
      width: 25%;
      height: 64px;
      float: left;
      font-size: 16px;
      border: none;
      &.ok {
        height: 64*2px;
        float: right;
      }
      $bg: #f2f2f2;
      &:nth-child(1) {
          background: $bg;
      }
      &:nth-child(2), &:nth-child(5) {
          background: darken($bg, 4%);
      }
      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
          background: darken($bg, 4*2%);
      }
      &:nth-child(4), &:nth-child(7), &:nth-child(10), &:nth-child(13) {
          background: darken($bg, 4*3%);
      }
      &:nth-child(8), &:nth-child(11), &:nth-child(14) {
          background: darken($bg, 4*4%);
      }
      &:nth-child(15) {
          background: darken($bg, 4*5%);
      }
      &:nth-child(12) {
          background: darken($bg, 4*6%);
      }
    }
  }
}
</style>