<script setup lang="ts">
import { useLangConfig } from '~/lang'

const langArr = ['中文', 'English']
const showList = ref('scaleY(0)')
const { setLang, config } = useLangConfig()
const langIndex = ref(config.defaultLang === 'zh-cn' ? 0 : 1)
const toShowList = () => {
  showList.value = showList.value === 'scaleY(0)' ? 'scaleY(1)' : 'scaleY(0)'
}
const selectLang = (index: number) => {
  setLang(index === 0 ? 'zh-cn' : 'en')
  langIndex.value = index
  toShowList()
}
</script>

<template>
  <div class="langWrapper">
    <div class="box btn" @click="toShowList">
      {{ langArr[langIndex] }}<van-icon name="play" class="icon" size="14" />
    </div>
    <div class="list">
      <div v-for="(item, index) in langArr" :key="item" class="item" :class="langIndex === index ? 'active' : ''" @click="selectLang(index)">
        {{ item }} <van-icon v-if="langIndex === index" name="success" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.langWrapper {
  width: 113px;
  height: 50px;
  position: fixed;
  top: 40px;
  right: 200px;
}
.box {
  width: 113px;
  height: 50px;
  opacity: 1;
  border-radius: 16px;
  border: 2px solid rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "思源黑体";
  font-size: 18px;
  cursor: pointer;
  user-select: none;
  .icon {
    transform: rotate(90deg);
    margin-left: 10px;
  }
}
.list {
  width: 113px;
  height: 88px;
  opacity: 1;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.4);
  box-sizing: border-box;
  padding: 6px;
  font-family: "思源黑体";
  transform: v-bind(showList);
  transform-origin: top center;
  transition: transform 100ms;
  user-select: none;
  .item {
    width: 100px;
    height: 38px;
    opacity: 1;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    cursor: pointer;
  }
  .item.active {
    color: #000000;
    background: rgba(255, 255, 255, 0.8);
  }
}
</style>
