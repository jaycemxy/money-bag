<template>
  <div class="edit">
    <header class="header">
      <button class="back">
        <Icon name="left"/>
      </button>
      <div class="tag">
        <div class="icon">
          <Icon :name="record.tag.name"/>
        </div>
        <span>{{record.tag.value}}</span>
      </div>
      <div class="back"></div>
    </header>

    <main>
      <ul class="main">
        <li>
          <label>
            <span class="name">类型</span>
            <input type="text" v-model="record.type">
          </label>
        </li>
        <li>
          <label>
            <span class="name">金额</span>
            <input type="text" v-model="record.amount">
          </label>
        </li>
        <li>
          <label>
            <span class="name">日期</span>
            <span>2022年7月</span>
          </label>
        </li>
        <li>
          <label>
            <span class="name">备注</span>
            <input type="text" v-model="record.note">
          </label>
        </li>
      </ul>
    </main>
    <footer class="footer">
      <button>编辑完成</button>
      <button>删除</button>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';

@Component({
  components: {Icon}
})
export default class EditRecord extends Vue {
  record: RecordItem = {
    id: 1,
    tag: {name:'food',value: '餐饮'},
    type: '-',
    note: '请客吃饭',
    amount: 100,
    createAt: new Date()
  }
  @Watch('record.createAt')
  log(val: Date) {
    console.log(val);
  }
}
</script>

<style lang="scss" scoped>
.edit {
  position: relative;
  height: 100vh;
}
.header {
  background: #ffda47;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  .back {
    width: 32px;
    height: 32px;
    svg {}
  }
  .tag {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    .icon {
      svg {
        width: 32px;
        height: 32px;
      }
    }
  }
}

.main {
  font-size: 16px;
  > li {
    margin-left: 16px;
    padding: 12px 0px 12px 16px;
    border-bottom: 1px solid #ddd;
    > label {
      display: flex;
      align-items: center;
      .name {
        color: #999;
        margin-right: 16px;
      }
      input {
        border: none;
        font-size: inherit;
        height: 40px;
      }
    }
  }
}

.footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 0 16px;
  border-top: 1px solid #ddd;
  button {
    width: 50%;
    font-size: 14px;
    margin: 16px 0;
    &:first-child {
      border-right: 1px solid #ddd;
    }
    &:last-child {
      color: #b84e52;
    }
  }
}
</style>