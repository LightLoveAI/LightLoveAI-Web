<script lang="ts" setup>
defineOptions({
  name: 'Home',
})
</script>

<template>
  <div overflow-hidden w-screen h-screen class="main">
    <div flex flex-col items-center justify-center class="box">
      <h2 class="title" text-center text-3xl v-html="$t('home.title')" />
      <div class="desc" text-center v-html="$t('home.describe')" />
      <div class="desc2" text-center v-html="$t('home.describe2')" />
      <div class="btnBox">
        <button w="155px" h="44px" class="btn" border="1px solid #ffffff" rounded="22px" text="#ffffff">
          <span class="mr-10px">{{ $t('home.btnText') }}</span><van-icon name="arrow" />
        </button>
      </div>
    </div>
    <div class="mainBg" />
  </div>
</template>

<style scoped lang="scss">
.main {
  color: #ffffff;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
}

@media (min-width: 0px) and (max-width: 768px) {
  .main {
    background-image: url(/img/bg.png);
    background-size: 100% 100%;
  }
  .box {
    width: 100vw;
    height: 100vh;
    background-color: rgba($color: #000000, $alpha: 0.5);
  }
  .mainBg {
    display: none;
  }
  .title {
    line-height: 37px;
  }
  .desc {
    display: block;
    line-height: 37px;
    height: 56%;
    padding-top: 20%;
    box-sizing: border-box;
  }

  .desc2 {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 1366px)  {
  .main {
    background-image: url(/img/big-bg.png);
    background-size: 100vw 100vh;
    background-position: 25vw;
  }
  .box {
    width: 70%;
    height: 100vh;
    .title {
      text-align: left;
      width: 400px;
      font-size: 40px;
      line-height: 80px;
    }
    .desc {
      text-align: left;
      display: none;
    }
    .desc2 {
      display: block;
      text-align: left;
      width: 400px;
      box-sizing: border-box;
      padding-top: 50px;
      height: 40%;
      line-height: 40px;
    }
    .btnBox {
      width: 400px;
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
    width: 50%;
    height: 100vh;
    .title {
      text-align: left;
      width: 480px;
      font-size: 60px;
      line-height: 80px;
    }
    .desc {
      text-align: left;
      display: none;
    }
    .btnBox {
      width: 480px;
    }
    .desc2 {
      display: block;
      text-align: left;
      width: 480px;
      height: 40%;
      box-sizing: border-box;
      padding-top: 50px;
      font-size: 18px;
      line-height: 44px;
    }
  }
}

@media (min-width: 1920px)  {
  .main {
    width: 1920px;
    background-image: url(/img/big-bg.png);
    background-size: 1920px auto;
    background-position: 25vw;
    margin: 0 auto;
  }
  .box {
    width: 60%;
    height: 100vh;
    .title {
      text-align: left;
      width: 480px;
      font-size: 60px;
      line-height: 80px;

    }
    .desc {
      text-align: left;
      display: none;
    }
    .btnBox {
      width: 480px;
    }
    .desc2 {
      display: block;
      text-align: left;
      width: 480px;
      height: 40%;
      box-sizing: border-box;
      padding-top: 50px;
      font-size: 18px;
      line-height: 44px;
    }
  }
}
.btn {
  background: transparent;
}
</style>
