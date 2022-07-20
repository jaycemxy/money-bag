<template>
  <div>
    <Layout>
      <header class="header">
        <div class="choose">
          <select v-model="type" class="type">
            <option v-for="(t, index) in typeList" :key="index" :value="t.value">{{t.name}}</option>
          </select>
          <Icon name="triangle"/>
        </div>
        <div class="period">
          <span :class="interval==='week' && 'selected'">周</span>
          <span :class="interval==='month' && 'selected'">月</span>
          <span :class="interval==='year' && 'selected'">年</span>
        </div>
      </header>

      <div class="chart">
        <div class="caption">
          <span v-if="interval==='week'">本周</span>
          <span v-else-if="interval==='month'">本月</span>
          <span v-else>今年</span>
        </div>
        <div class="info">
          <div class="total">总支出：￥2890</div>
          <div class="average">平均值：￥35.8</div>
        </div>
        <div id="figure"></div>
      </div>

      <div class="ranking">
        <div class="caption">
          <span>支出排行榜</span>
        </div>
        <ul class="tag-list">
          <li class="tag-item">
            <div class="tag-info">
              <div class="icon">
                <Icon name="food"/>
              </div>
              <span>餐饮</span>
              <span>65%</span>
            </div>
            <div>1200</div>
          </li>
          <li class="tag-item">
            <div class="tag-info">
              <div class="icon">
                <Icon name="food"/>
              </div>
              <span>餐饮</span>
              <span>65%</span>
            </div>
            <div>1200</div>
          </li>
        </ul>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import echarts from 'echarts';

@Component({
  components: {Layout, Icon}
})
export default class Chart extends Vue{
  type: '-' | '+' = '-';
  interval: 'week'|'month'|'year' = 'week';

  typeList = [
    {name: '支出', value: '-'},
    {name: '收入', value: '+'}
  ]
  intervalList = [
    {name: '周', value: 'week'},
    {name: '月', value: 'month'},
    {name: '年', value: 'year'}
  ]
}
</script>

<style lang="scss" scoped>
.header {
  background: #ffda47;
  padding: 4px 0;
  .choose {
    display: flex;
    justify-content: center;
    align-items: center;
    .type {
      font-size: 20px;
      padding: 8px 0;
    }
    .icon {
      width: 16px;
      height: 16px;
    }
  }
  .period {
    margin: 8px 16px;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .selected {
      background: #333;
      color: #ffda47;
    }
    span {
      width: 33.333%;
      border: 1px solid #333;
      &:first-child {
        border-radius: 4px 0 0 4px;
      }
      &:last-child {
        border-radius: 0 4px 4px 0;;
      }
    }
  }
}
.chart {
  border-bottom: 1px solid #ddd;
  .caption {
    display: flex;
    flex-direction: column;
    text-align: left;
    span {
      color: #333;
      border-bottom: 1px solid #ddd;
      padding: 8px 16px;
    }
  }
  .info {
    text-align: left;
    color: #999;
    font-size: 14px;
    .total {
      padding: 6px 6px;
    }
    .average {
      padding: 0 6px;
      margin-bottom: 16px;
    }
  }
  #figure {
    width: 100%;
    height: 150px;
  }
}
.ranking {
  .caption {
    text-align: left;
    font-size: 14px;
    padding: 6px 16px;
  }
  .tag-list {
    padding: 6px 16px;
    .tag-item {
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      box-shadow: inset 0 -1px 1px -1px rgba(0, 0, 0, 0.1);
      .tag-info {
        display: flex;
        align-items: center;
        .icon {
          width: 32px;
          height: 32px;
          background: #f5f5f5;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2px;
        }
        span {
          margin: 0 8px;
        }
      }
    }
  }
}
</style>