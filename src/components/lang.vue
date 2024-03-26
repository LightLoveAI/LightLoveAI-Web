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
const musicRef = ref()
const isPlay = ref(true)
const playMusic = () => {
  if (musicRef.value.paused) {
    musicRef.value.play()
    isPlay.value = false
  }
  else {
    musicRef.value.pause()
    isPlay.value = true
  }
}
</script>

<template>
  <div class="langWrapper">
    <div class="listBox">
      <div class="box btn" @click="toShowList">
        {{ langArr[langIndex] }}<van-icon name="play" class="icon" size="14" />
      </div>
      <div class="list">
        <div v-for="(item, index) in langArr" :key="item" class="item" :class="langIndex === index ? 'active' : ''" @click="selectLang(index)">
          {{ item }} <van-icon v-if="langIndex === index" name="success" />
        </div>
      </div>
    </div>
    <div class="music btn" @click="playMusic">
      <van-icon name="volume-o" />
      <div v-show="isPlay" class="line" />
    </div>
  </div>
  <audio ref="musicRef" src="/music/jiaotang.MP3" style="display: none;" loop />
</template>

<style scoped lang="scss">
.langWrapper {
  width: 113px;
  height: 50px;
  position: fixed;
  top: 40px;
  right: 130px;
  display: flex;
  align-items: center;
  z-index: 100;
  color: #ffffff;
}
.listBox {
  height: 50px;
}
.music {
  margin-left: 10px;
  font-size: 20px;
  padding: 10px 20px;
  box-sizing: border-box;
  position: relative;
  .line {
    width: 24px;
    height: 1px;
    background-color: #ffffff;
    transform: rotate(-45deg);
    position: absolute;
    left: 17px;
    top: 21px;
  }
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

@media (min-width: 0px) and (max-width: 768px) {
  .langWrapper {
    width: 100vw;
    height: 50px;
    position: fixed;
    top: 10px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 100;
    color: #ffffff;
    padding: 0 20px;
    flex-direction: row-reverse;
  }
  .listBox {
    height: 30px;
    width: 80px;
  }
  .music {
    font-size: 14px;
    padding: 2px 4px;
    box-sizing: border-box;
    position: relative;
    .line {
      width: 16px;
      height: 1px;
      background-color: #ffffff;
      transform: rotate(-45deg);
      position: absolute;
      left: 2px;
      top: 12px;
    }
  }
  .box {
    width: 80px;
    height: 30px;
    opacity: 1;
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "思源黑体";
    font-size: 14px;
    cursor: pointer;
    padding: 0;
    user-select: none;
    .icon {
      transform: rotate(90deg);
      margin-left: 4px;
    }
  }
  .list {
    width: 80px;
    height: 68px;
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
      width: 68px;
      height: 24px;
      opacity: 1;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      cursor: pointer;
      &:nth-last-child(1) {
        margin-top: 5px;
      }
    }

    .item.active {
      color: #000000;
      background: rgba(255, 255, 255, 0.8);
    }
  }
}
</style>
