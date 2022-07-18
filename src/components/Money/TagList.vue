<template>
  <ul class="tags">
    <li v-for="(tag,index) in tagList" :key="index" @click="select(tag)">
      <div class="icon-wrapper" :class="{'selected': tag.name === selectedTag.name}">
        <Icon :name="tag.name"/>
      </div>
      <span>{{tag.value}}</span>
    </li>
    <li>
      <div class="icon-wrapper" @click="add">
        <Icon name="add"/>
        <span>添加</span>
      </div>
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
  @Prop({required:true, type:Object}) selectedTag!: TagItem;
  get tagList(): TagItem[] {
    return this.$store.state.tagList;
  }
  select(tag: TagItem) {
    this.$emit('update:selectedTag', tag);
  }
  add(){
    this.$router.replace('/tags');
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
    .icon-wrapper {
      width: 48px;
      height: 48px;
      padding: 4px;
      border-radius: 50%;
      background: #f5f5f5;
      margin-bottom: 4px;
      &.selected {
        background: #ffda47;
      }
      svg {
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>