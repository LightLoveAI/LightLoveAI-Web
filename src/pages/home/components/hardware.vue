<script setup>

</script>

<template>
  <div class="introduce">
    <div class="productText">
      <h3>{{ $t('home.hardware.title') }}</h3>
      <p>{{ $t('home.hardware.describe') }}</p>
    </div>
    <div class="productImage">
      <div class="imageItem">
        <img class="picture" src="/img/s/p3.png" alt="">
        <img class="dot" src="/img/s/dot.png" alt="">
      </div>
      <div class="imageItem">
        <img class="dot" src="/img/s/dot.png" alt="">
        <img class="picture" src="/img/s/p4.png" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// 移动端
@media (min-width: 0px) and (max-width: 768px) {
  .introduce {
    width: 100vw;
    margin: 0 auto;
    color: #fff;
    display: flex;
    margin-top: 80px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .productImage {
    display: flex;
    align-items: center;
    margin-top: 40px;

  }
  .imageItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    .picture {
      width: calc(100vw / 3);
      height: calc(100vw / 3);
      border-radius: 10px;
    }
    .dot {
      width: calc(100vw / 3);
      height: auto;
    }
    &:nth-of-type(2) {
      margin-left: 35px;
    }
  }
  .productText {
    width: calc(100vw / 3.07);
    text-align: center;
    h3 {
      font-size: calc(100vw / 30);
      font-weight: bold
    }
    p {
      width: 100%;
      font-size: calc(100vw / 50);
      font-weight: 400;
      line-height: calc(100vw / 40);
      margin-top: calc(100vw / 27);
    }
  }
}

@media (min-width: 769px) and (max-width: 1920px)  {
  .introduce {
    width: 100vw;
    margin: 0 auto;
    color: #fff;
    display: flex;
    margin-top: 150px;
    align-items: center;
    justify-content: center;
  }

  .productImage {
    display: flex;
    align-items: center;
    margin-top: 60px;
  }
  .imageItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: calc(100vw / 48);
    .picture {
      width: calc(100vw / 3.84);
      height: calc(100vw / 3.84);
      border-radius: 20px;
    }
    .dot {
      width: calc(100vw / 4);
      height: auto;
    }
    &:nth-of-type(2) {
      margin-left: 35px;
    }
  }
  .productText {
    width: calc(100vw / 3.07);;
    margin-left: 60px;
    h3 {
      font-size: calc(100vw / 30);
      font-weight: bold
    }
    p {
      width: 100%;
      font-size: calc(100vw / 50);
      font-weight: 400;
      line-height: calc(100vw / 40);
      margin-top: calc(100vw / 27);
    }
  }
}
@media (min-width: 1920px)  {
  .introduce {
    width: 1920px;
    margin: 0 auto;
    color: #fff;
    display: flex;
    margin-top: 150px;
    align-items: center;
    justify-content: center;
  }

  .productImage {
    display: flex;
    align-items: center;
    margin-top: 60px;
  }
  .imageItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 40px;
    .picture {
      width: 500px;
      height: 500px;
      border-radius: 20px;
    }
    .dot {
      width: 480px;
      height: auto;
    }
    &:nth-of-type(2) {
      margin-left: 35px;
    }
  }
  .productText {
    width: 624px;
    margin-left: 60px;
    h3 {
      font-size: 60px;
      font-weight: bold
    }
    p {
      width: 100%;
      font-size: 26px;
      font-weight: 400;
      line-height: 32px;
      margin-top: 70px;
    }
  }
}
</style>
