<script setup lang="ts">

</script>

<template>
  <div class="classify">
    <h3 class="title">
      {{ $t('home.classify.title') }}
    </h3>
    <p class="describe">
      {{ $t('home.classify.describe') }}
    </p>
    <div class="list">
      <div class="item">
        <img src="/img/s/p3.png" alt="">
        <h3>{{ $t('home.classify.item1.title') }}</h3>
        <p v-html="$t('home.classify.item1.describe')" />
      </div>
      <div class="item">
        <img src="/img/s/p1.png" alt="">
        <h3>{{ $t('home.classify.item2.title') }}</h3>
        <p v-html="$t('home.classify.item2.describe')" />
      </div>
      <div class="item">
        <img src="/img/s/p2.png" alt="">
        <h3>{{ $t('home.classify.item3.title') }}</h3>
        <p v-html="$t('home.classify.item3.describe')" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// 移动端
@media (min-width: 0px) and (max-width: 768px) {
  .classify {
    width: 92vw;
    margin: 0 auto;
    color: #fff;
    margin-top: 80px;
  }
  .title {
    font-size: calc(100vw / 30);
    font-weight: bold;
    text-align: center;
  }
  .describe {
    text-align: center;
    font-size: calc(100vw / 50);
    font-weight: 400;
    padding: calc(100vw / 48) 0 calc(100vw / 32) 0;
  }
  .list {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .item {
    width: 46.04vw;
    height: 60.67vw;
    border-radius: 14px;
    background: rgba(38, 29, 17, 0.75);
    box-shadow: 0px 3.56px 26.68px 3.56px rgba(0, 0, 0, 0.5), 0px 0px 0px 0.89px rgba(255, 255, 255, 0.3);
    display: flex;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    &:nth-of-type(2) {
      margin: 3.64vw 0;
    }
    img {
      width: 46.04vw;
      height: 46.04vw;
    }
    h3 {
      text-align: center;
      margin-top: 1.56vw;
      font-size: 2.56vw;
    }
    p {
      text-align: center;
      width: 100%;
      height: 3.86vw;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.8vw;
      font-size: 1.6vw;
    }
  }
}

@media (min-width: 769px) and (max-width: 1920px)  {
  .classify {
    width: 92vw;
    margin: 0 auto;
    color: #fff;
    margin-top: 150px;
  }
  .title {
    font-size: calc(100vw / 30);
    font-weight: bold;
    text-align: center;
  }
  .describe {
    text-align: center;
    font-size: calc(100vw / 50);
    font-weight: 400;
    padding: calc(100vw / 48) 0 calc(100vw / 32) 0;
  }
  .list {
    display: flex;
    justify-content: center;
  }
  .item {
    width: 26.04vw;
    height: 36.67vw;
    border-radius: 14px;
    background: rgba(38, 29, 17, 0.75);
    box-shadow: 0px 3.56px 26.68px 3.56px rgba(0, 0, 0, 0.5), 0px 0px 0px 0.89px rgba(255, 255, 255, 0.3);
    display: flex;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    &:nth-of-type(2) {
      margin: 0 3.64vw;
    }
    img {
      width: 26.04vw;
      height: 26.04vw;
    }
    h3 {
      text-align: center;
      margin-top: 1.56vw;
      font-size: 1.56vw;
    }
    p {
      text-align: center;
      width: 100%;
      height: 3.86vw;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.8vw;
      font-size: 1.26vw;
    }
  }
}
@media (min-width: 1920px)  {
  .classify {
    width: 1920px;
    margin: 0 auto;
    color: #fff;
    margin-top: 150px;
  }
  .title {
    font-size: 66px;
    font-weight: bold;
    text-align: center;
  }
  .describe {
    text-align: center;
    font-size: 26px;
    font-weight: 400;
    padding: 40px 0 60px 0;
  }
  .list {
    display: flex;
    justify-content: center;
  }
  .item {
    width: 500px;
    height: 704px;
    border-radius: 20px;
    background: rgba(38, 29, 17, 0.75);
    box-shadow: 0px 3.56px 26.68px 3.56px rgba(0, 0, 0, 0.5), 0px 0px 0px 0.89px rgba(255, 255, 255, 0.3);
    display: flex;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    &:nth-of-type(2) {
      margin: 0 70px;
    }
    img {
      width: 500px;
      height: 500px;
    }
    h3 {
      text-align: center;
      margin-top: 30px;
      font-size: 30px;
    }
    p {
      text-align: center;
      width: 100%;
      height: 74px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      font-size: 18px;
    }
  }
}
</style>
