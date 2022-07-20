<template>
  <div class="edit">
    <header class="header">
      <button class="back" @click="back">
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
            <div class="type">{{record.type === '-' ? '支出':'收入'}}</div>
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
            <DatePicker :initial-date="dayjs(record.createAt).toISOString()" 
              @update:year="updateYear" @update:month="updateMonth" @update:date="updateDate"/>
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
      <button @click="ok">编辑完成</button>
      <button @click="remove">删除</button>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';
import dayjs from 'dayjs';
import DatePicker from '@/components/DatePicker.vue';

@Component({
  components: {Icon, DatePicker}
})
export default class EditRecord extends Vue {
  record?: RecordItem;
  dayjs = dayjs;
  
  created() {
    this.$store.commit('findRecord', parseInt(this.$route.params.id));
    this.record = this.$store.state.currentRecord;
    if(!this.record) {
      this.record = {
        id: 0,
        tag: {name: 'food', value: '餐饮'},
        type: '-',
        note: '',
        amount: 0,
        createAt: new Date()
      }
    };
  }
  updateYear(year: number) {
    if (this.record) {
      this.record.createAt = dayjs(this.record.createAt).year(year).toDate();
    }
  }
  updateMonth(month: number) {
    if (this.record) {
      this.record.createAt = dayjs(this.record.createAt).month(month - 1).toDate();
    }
  }
  updateDate(date: number) {
    if (this.record) {
      this.record.createAt = dayjs(this.record.createAt).date(date).toDate();
    }
  }

  back() {
    this.$router.replace('/bill');
  }
  ok() {
    if (this.record) {
      this.$store.commit('updateRecord', {id: this.record.id, record: this.record});
    }
    this.$router.replace('/bill');
  }
  remove() {
    if(this.record) {
      this.$store.commit('removeRecord', this.record.id);
      if(this.$store.state.recordListError === 'notfound'){
        window.alert('记录不存在');
      } else {
        this.$router.replace('/bill');
      }
    }
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
      .type {
        height: 40px;
        display: flex;
        align-items: center;
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