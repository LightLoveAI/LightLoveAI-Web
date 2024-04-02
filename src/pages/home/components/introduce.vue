<script setup>

</script>

<template>
  <div class="introduce">
    <h2 class="title">
      {{ $t('home.introduce.title') }}
    </h2>
    <div class="productImage">
      <div class="imageBox">
        <img src="/img/s/c3.png" alt="">
        <img src="/img/s/c1.png" alt="">
        <img src="/img/s/c5.png" alt="">
      </div>
      <div class="productText">
        <h3>{{ $t('home.introduce.version') }}</h3>
        <p>{{ $t('home.introduce.describe') }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// 移动端
@media (min-width: 0px) and (max-width: 768px) {
  .introduce {
    width: 90%;
    margin: 0 auto;
    color: #fff;
    display: flex;
    flex-direction: column;
  }
  .title {
    text-align: center;
    font-size: calc(100vw / 30);
    padding-top: 50px;
    text-align: center;
  }
  .productImage {
    display: flex;
    align-items: center;
    margin-top: 20px;
    justify-content: center;
    flex-direction: column-reverse;
  }
  .imageBox {
    display: flex;
    margin-top: 40px;
    img {
      width: 299px;
      font-size: calc(100vw / 6.4);
      height: auto;
      overflow: hidden;
      border-radius: 10px;
      margin: 0 calc(100vw / 64);
      &:nth-of-type(2) {
        transform: translateY(calc(100vw / 30));
      }
    }
  }
  .productText {
    width: 30.21vw;
    text-align: center;
    h3 {
      font-size: calc(100vw / 30);
      font-weight: bold
    }
    p {
      font-size: calc(100vw / 50);
      font-weight: 400;
      line-height: 2.4vw;
      margin-top: 3.64vw;
    }
  }
}

@media (min-width: 769px) and (max-width: 1920px)  {
  .introduce {
    width: 90%;
    margin: 0 auto;
    color: #fff;
  }
  .title {
    text-align: center;
    font-size: calc(100vw / 30);
    padding-top: 100px;
  }
  .productImage {
    display: flex;
    align-items: center;
    margin-top: 60px;
    justify-content: center;
  }
  .imageBox {
    display: flex;
    img {
      width: 299px;
      font-size: calc(100vw / 6.4);
      height: auto;
      overflow: hidden;
      border-radius: 10px;
      margin: 0 calc(100vw / 64);
      &:nth-of-type(2) {
        transform: translateY(calc(100vw / 30));
      }
    }
  }
  .productText {
    width: 30.21vw;
    margin-left: calc(100vw / 32);
    h3 {
      font-size: calc(100vw / 30);
      font-weight: bold
    }
    p {
      font-size: calc(100vw / 50);
      font-weight: 400;
      line-height: 2.4vw;
      margin-top: 3.64vw;
    }
  }
}

@media (min-width: 1920px)  {
  .introduce {
    width: 1920px;
    margin: 0 auto;
    color: #fff;
  }
  .title {
    text-align: center;
    font-size: 66px;
    padding-top: 100px;
  }
  .productImage {
    display: flex;
    align-items: center;
    margin-top: 60px;
    justify-content: center;
  }
  .imageBox {
    display: flex;
    img {
      width: 299px;
      height: auto;
      overflow: hidden;
      border-radius: 10px;
      margin: 0 30px;
      &:nth-of-type(2) {
        transform: translateY(65px);
      }
    }
  }
  .productText {
    margin-left: 60px;
    width: 580px;
    h3 {
      font-size: 60px;
      font-weight: bold
    }
    p {
      font-size: 26px;
      font-weight: 400;
      line-height: 32px;
      margin-top: 70px;
    }
  }
}
</style>
