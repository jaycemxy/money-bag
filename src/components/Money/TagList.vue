<template>
  <ul class="tags">
    <li v-for="(tag,index) in tagList" :key="index" @click="select(tag)">
      <div class="icon">
        <Icon :name="tag.name"/>
      </div>
      <span>{{tag.value}}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';

@Component({
    components: {Icon}
})
export default class TagList extends Vue {
  @Prop({required:true, type:Object}) tag!: TagItem;
  get tagList(): TagItem[] {
    return [...this.$store.state.tagList, {name:'add', value:'添加'}]
  }
  select(tag: TagItem) {
    this.$emit('update:tag', tag);
  }
}
</script>

<style lang="scss" scoped>
.tags {
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 16px;
  > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    width: 25%;
    padding: 12px 0;
    .icon {
      width: 48px;
      height: 48px;
      padding: 4px;
      border-radius: 50%;
      background: #f5f5f5;
      margin-bottom: 4px;
      svg {
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>