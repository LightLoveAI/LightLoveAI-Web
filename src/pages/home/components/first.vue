<script lang="ts" setup>
import { useLangConfig } from '~/lang'

defineOptions({
  name: 'First',
})

const { config } = useLangConfig()
const fontText = ref(config.defaultLang === 'zh-cn' ? '花园明朝体' : 'EB Garamond')
// const langIndex = ref(config.defaultLang === 'zh-cn' ? 0 : 1)
const open = () => {
  window.open('https://dbase.qingmeta.cn/chat/share?shareId=hibh5cotc6kednbenydjyfh3')
}
const vSrc = ref(window.innerWidth <= 375 ? '/img/02.mp4' : '/img/01.mp4')
function resize() {
  if (window.innerWidth / window.devicePixelRatio <= 375 && vSrc.value !== '/img/02.mp4')
    vSrc.value = '/img/02.mp4'
  else if (window.innerWidth / window.devicePixelRatio > 375 && vSrc.value !== '/img/01.mp4')
    vSrc.value = '/img/01.mp4'
}
onMounted(() => {
  resize()
  nextTick(() => {
    const video: any = document.getElementById('autoplayVideo')
    video.controls = false // Hide the video controls
  })
  window.addEventListener('resize', resize)
})
</script>

<template>
  <div overflow-hidden w-screen h-screen class="main">
    <div flex flex-col items-center justify-center class="box">
      <div class="content">
        <h2 class="title" text-center text-3xl v-html="$t('home.title')" />
        <div class="desc" text-center v-html="$t('home.describe')" />
        <div class="desc2" text-center v-html="$t('home.describe2')" />
        <div class="btnBox">
          <button w="155px" h="44px" class="btn2 btn" bg="#ffffff" border="1px solid #ffffff" rounded="22px" text="#000000" @click="open">
            <span class="mr-10px">{{ $t('home.btnText2') }}
            </span>
          </button>
          <button w="155px" h="44px" bg="transparent" class="btn btn3" border="1px solid #ffffff" rounded="22px" text="#ffffff">
            <span class="mr-10px">{{ $t('home.btnText') }}</span><van-icon name="arrow" />
          </button>
        </div>
      </div>
    </div>
    <div class="mainBg">
      <video v-if="vSrc === '/img/01.mp4'" id="autoplayVideo" autoplay muted loop>
        <source :src="vSrc" type="video/mp4">
      </video>
      <!-- <video v-else id="autoplayVideo" autoplay muted loop>
        <source :src="vSrc" type="video/mp4">
      </video> -->
      <img v-else class="autoplayPng" src="/public/img/00002.png" alt="">
    </div>
    <lang />
  </div>
</template>

<style scoped lang="scss">
.main {
  color: #ffffff;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;
}

.box {
  font-family: v-bind(fontText);
}
/* 隐藏控制条 */
video::-webkit-media-controls {
  display:none !important;
}

/* 防止控制条重新显示 */
video::-webkit-media-controls-enclosure {
  overflow:hidden !important;
}
@media (min-width: 0px) and (max-width: 375px) {
  .main {
    // background-image: url(/img/00002.webp);
    // background-size: 100% 100%;
    position: relative;
  }
  .mainBg {
    // background-image: url(/img/big-bg.png);
    // background-size: 100vw 100vh;
    // background-position: 25vw;
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
  }
  .box {
    width: 100vw;
    height: 100vh;
    background-color: rgba($color: #00010d, $alpha: 0.2);
    position: absolute;
    z-index: 10;
  }
  .content {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 0;
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
    // flex-direction: column-reverse;
  }
  .btn {
    margin-top: 20px;
  }
  .btn3 {
    margin-top: 20px;
    margin-left: 0 !important;
  }
  .desc2 {
    display: none;
  }
}

@media (min-width: 375px) and (max-width: 768px) {
  .main {
    // background-image: url(/img/bg.png);
    // background-size: 100% 100%;
  }
  .mainBg {
    // background-image: url(/img/big-bg.png);
    // background-size: 100vw 100vh;
    // background-position: 25vw;
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
  }
  .box {
    width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 2;
  }
  .content {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  }
  .btn {
    margin-top: 33px;
  }
  .btn3 {
    margin-top: 20px;
    margin-left: 0 !important;
  }
  .desc2 {
    display: none;
  }
}

@media (min-width: 769px) and (max-width: 1366px)  {
  .main {
    // background-image: url(/img/big-bg.png);
    // background-size: 100vw 100vh;
    // background-position: 25vw;
  }
  .mainBg {
    // background-image: url(/img/big-bg.png);
    // background-size: 100vw 100vh;
    // background-position: 25vw;
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
  }
  .box {
    width: 60%;
    height: 100vh;
    --boxWidth: 420px;
    position: relative;
    z-index: 2;
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
    // .btn2 {
    //   margin-left: 60px;
    // }
  }
}

@media (min-width: 1366px) and (max-width: 1920px)  {
  .main {
    // background-image: url(/img/big-bg.png);
    // background-size: 100vw 100vh;
    // background-position: 25vw;
  }
  .mainBg {
    // background-image: url(/img/big-bg.png);
    // background-size: 100vw 100vh;
    // background-position: 25vw;
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
  }
  .box {
    width: 60%;
    height: 100vh;
    --boxWidth: 100%;
    position: relative;
    z-index: 2;
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
      padding-top: 60px;
      font-size: 18px;
      line-height: 44px;
    }
    // .btn2 {
    //   margin-left: 60px;
    // }
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
  .mainBg {
    // background-image: url(/img/big-bg.png);
    // background-size: 100vw 100vh;
    // background-position: 25vw;
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
  }
  .box {
    width: 60%;
    height: 100vh;
    --boxWidth: 100%;
    position: relative;
    z-index: 2;
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
    .btn {
      font-size: 18px
    }
  }
}
#autoplayVideo {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: fill;
}
.autoplayPng {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: fill;
}
.btn3 {
  margin-left: 40px;
  border: none;
}
</style>
