<script lang="ts" setup>
import { useLangConfig } from '~/lang'

defineOptions({
  name: 'Home',
})

const { config } = useLangConfig()
const fontText = ref(config.defaultLang === 'zh-cn' ? '花园明朝体' : 'EB Garamond')
const langIndex = ref(config.defaultLang === 'zh-cn' ? 0 : 1)
</script>

<template>
  <div overflow-hidden w-screen h-screen class="main">
    <div flex flex-col items-center justify-center class="box">
      <div class="content">
        <h2 class="title" text-center text-3xl v-html="$t('home.title')" />
        <div class="desc" text-center v-html="$t('home.describe')" />
        <div class="desc2" text-center v-html="$t('home.describe2')" />
        <div class="btnBox">
          <button w="155px" h="44px" bg="transparent" class="btn" border="1px solid #ffffff" rounded="22px" text="#ffffff">
            <span class="mr-10px">{{ $t('home.btnText') }}</span><van-icon name="arrow" />
          </button>
          <button w="155px" h="44px" class="btn2 btn" bg="#ffffff" border="1px solid #ffffff" rounded="22px" text="#000000">
            <span class="mr-10px">{{ $t('home.btnText') }}</span>
          </button>
        </div>
      </div>
    </div>
    <div class="mainBg" />
    <lang />
  </div>
</template>

<style scoped lang="scss">
.main {
  color: #ffffff;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
}

.box {
  font-family: v-bind(fontText);
}

@media (min-width: 0px) and (max-width: 375px) {
  .main {
    background-image: url(/img/bg.png);
    background-size: 100% 100%;
  }
  .box {
    width: 100vw;
    height: 100vh;
    background-color: rgba($color: #000000, $alpha: 0.5);
  }
  .content {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .mainBg {
    display: none;
  }
  .title {
    line-height: 37px;
    margin-bottom: 6%;
    font-size: 34px;
  }
  .desc {
    display: block;
    line-height: 37px;
    box-sizing: border-box;
    font-size: 14px;
  }
  .btnBox {
    display: flex;
    flex-direction: column;
    flex-direction: column-reverse;
  }
  .btn {
    margin-top: 20px;
  }
  .desc2 {
    display: none;
  }
}

@media (min-width: 375px) and (max-width: 768px) {
  .main {
    background-image: url(/img/bg.png);
    background-size: 100% 100%;
  }
  .box {
    width: 100vw;
    height: 100vh;
    background-color: rgba($color: #000000, $alpha: 0.5);
  }
  .content {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .mainBg {
    display: none;
  }
  .title {
    line-height: 37px;
    margin-bottom: 10%;
    font-size: 34px;
  }
  .desc {
    display: block;
    line-height: 37px;
    height: 50%;
    box-sizing: border-box;
    font-size: 18px;
  }
  .btnBox {
    display: flex;
    flex-direction: column;
    flex-direction: column-reverse;
  }
  .btn {
    margin-top: 33px;
  }
  .desc2 {
    display: none;
  }
}

@media (min-width: 769px) and (max-width: 1366px)  {
  .main {
    background-image: url(/img/big-bg.png);
    background-size: 100vw 100vh;
    background-position: 25vw;
  }
  .box {
    width: 60%;
    height: 100vh;
    --boxWidth: 420px;
    .title {
      text-align: left;
      width: var(--boxWidth);
      font-size: 50px;
      line-height: 80px;
    }
    .desc {
      text-align: left;
      display: none;
    }
    .desc2 {
      display: block;
      text-align: left;
      width: var(--boxWidth);
      box-sizing: border-box;
      padding-top: 81px;
      line-height: 40px;
      font-size: 16px;
    }
    .btnBox {
      width: var(--boxWidth);
      margin-top: 95px;
    }
    .btn2 {
      margin-left: 60px;
    }
  }
}

@media (min-width: 1366px) and (max-width: 1920px)  {
  .main {
    background-image: url(/img/big-bg.png);
    background-size: 100vw 100vh;
    background-position: 25vw;
  }
  .box {
    width: 60%;
    height: 100vh;
    --boxWidth: 480px;
    .title {
      text-align: left;
      width: var(--boxWidth);
      font-size: 60px;
      line-height: 80px;
    }
    .desc {
      text-align: left;
      display: none;
    }
    .btnBox {
      width: var(--boxWidth);
      margin-top: 95px;
    }
    .desc2 {
      display: block;
      text-align: left;
      width: var(--boxWidth);
      box-sizing: border-box;
      padding-top: 81px;
      font-size: 18px;
      line-height: 44px;
    }
    .btn2 {
      margin-left: 60px;
    }
  }
}

@media (min-width: 1920px)  {
  .main {
    width: 1920px;
    background-image: url(/img/big-bg.png);
    background-size: 1920px 100%;
    background-position: 25vw;
    margin: 0 auto;
  }
  .box {
    width: 60%;
    height: 100vh;
    --boxWidth: 700px;
    .title {
      text-align: left;
      width: var(--boxWidth);
      font-size: 80px;
      line-height: 110px;
    }
    .desc {
      text-align: left;
      display: none;
    }
    .btnBox {
      width: var(--boxWidth);
      margin-top: 95px;
    }
    .desc2 {
      display: block;
      text-align: left;
      width: var(--boxWidth);
      box-sizing: border-box;
      padding-top: 81px;
      font-size: 26px;
      line-height: 44px;
    }
    .btn2 {
      margin-left: 60px;
    }
  }
}
</style>
