<template>
  <div class="tags">
    <header class="header">
      <div class="back" @click="back">
        <Icon name="left"/>
        <span>添加支出类别</span>
      </div>
      <button class="ok" @click="ok">完成</button>
    </header>

    <div class="current">
      <div class="label">
        <span>选中标签：</span>
        <div class="currentTag">
          <Icon :name="tag.name"/>
        </div>
      </div>
      <span>{{tag.value}}</span>
    </div>

    <div class="food">
      <div class="kind-name">
        餐饮
      </div>
      <TagList class-prefix="main" :tag-list="foodTags" :selected-tag.sync="tag"/>
    </div>
    <div class="shopping">
      <div class="kind-name">
        购物
      </div>
      <TagList class-prefix="main" :tag-list="shoppingTags" :selected-tag.sync="tag"/>
    </div>
    <div class="transport">
      <div class="kind-name">
        交通
      </div>
      <TagList class-prefix="main" :tag-list="transportTags" :selected-tag.sync="tag"/>
    </div>
    <div class="house">
      <div class="kind-name">
        居住
      </div>
      <TagList class-prefix="main" :tag-list="houseTags" :selected-tag.sync="tag"/>
    </div>
    <div class="entertainment">
      <div class="kind-name">
        娱乐
      </div>
      <TagList class-prefix="main" :tag-list="entertainmentTags" :selected-tag.sync="tag"/>
    </div>
    <div class="medical">
      <div class="kind-name">
        医疗
      </div>
      <TagList class-prefix="main" :tag-list="medicalTags" :selected-tag.sync="tag"/>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';
import TagList from '@/components/Money/TagList.vue';
import {foodTags, shoppingTags, transportTags, houseTags, entertainmentTags, medicalTags} from '@/constants/defaultTags';
import clone from '@/lib/clone';

@Component({
  components: {Icon ,TagList}
})
export default class Label extends Vue {
  tag: TagItem = {name: 'food', value: '餐饮'};
  foodTags = foodTags;
  shoppingTags = shoppingTags;
  transportTags = transportTags;
  houseTags = houseTags;
  entertainmentTags = entertainmentTags;
  medicalTags = medicalTags;

  get tagList(){
    return this.$store.state.tagList;
  }
  back(){
    this.$router.replace('/money');
  }
  ok(){
    this.$store.commit('insertTag', clone(this.tag));
    if(this.$store.state.tagListError === 'duplicate'){
      window.alert('标签名重复');
    } else {
      this.$router.replace('/money');
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin icon($color) {
  background: white;
  color: $color;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 24px;
    height: 24px;
  }
  &.selected {
    border: 1px solid $color;
  }
}

::v-deep {
  .main-tags > li:nth-child(4n+0) {
    .main-tags-item-icon {
      @include icon(#a4d09f);
    }
  }
  .main-tags > li:nth-child(4n+1) {
    .main-tags-item-icon {
        @include icon(#f7d680);
    }
  }
  .main-tags > li:nth-child(4n+2) {
      .main-tags-item-icon {
          @include icon(#b84e52);
      }
  }
  .main-tags > li:nth-child(4n+3) {
      .main-tags-item-icon {
          @include icon(#5079c8);
      }
  }
}

.header {
  background: #ffda47;
  padding: 12px 16px;
  font-size: 18px;
  line-height: 24px;
  border-bottom: 1px solid #dddddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .back {
    display: flex;
    background: inherit;
    svg {
      width: 24px;
      height: 24px;
    }
    span {
      padding-left: 8px;
    }
  }
  .ok {
    font-size: 16px;
    border: none;
    background: inherit;
  }
}

.current {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
  box-shadow: inset 0 -1px 1px -1px rgba(0, 0, 0, 0.3);
  .label {
    display: flex;
    align-items: center;
    .currentTag {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: #f7d680;
      border: 1px solid #f7d680;
      margin-left: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
}

.kind-name {
  font-size: 14px;
  color: #999999;
}
</style>