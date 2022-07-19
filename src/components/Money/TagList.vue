<template>
  <ul class="tags" :class="{[classPrefix+'-tags']: classPrefix}">
    <li 
      v-for="(tag,index) in tagList" :key="index" 
      @click="select(tag)"
      class="tags-item" 
      :class="{[classPrefix+'-tags-item']: classPrefix}"
    >
      <div class="tags-item-icon" :class="{'selected': tag.name === selectedTag.name, [classPrefix+'-tags-item-icon']: classPrefix}">
        <Icon :name="tag.name"/>
      </div>
      <span>{{tag.value}}</span>
    </li>

    <li v-if="dynamic" class="tags-item">
      <div class="tags-item-icon" @click="add">
        <Icon name="add"/>
      </div>
      <span>添加</span>
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
  @Prop(String) classPrefix?: string;
  @Prop({required:true, type:Object}) selectedTag!: TagItem;
  @Prop({default: false, type: Boolean}) dynamic!: boolean;
  @Prop({required: true, type: Array}) tagList!: TagItem[];
  // get tagList(): TagItem[] {
  //   return this.$store.state.tagList;
  // }
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
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  padding: 16px;
  overflow: auto;
  &-item {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    padding: 12px 0;
    &-icon {
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