<script setup>

</script>

<template>
  <div class="introduce">
    <h2 class="title">
      产品介绍
    </h2>
    <div class="productImage">
      <div class="imageBox">
        <img src="/img/s/c3.png" alt="">
        <img src="/img/s/c1.png" alt="">
        <img src="/img/s/c5.png" alt="">
      </div>
      <div class="productText">
        <h3>线上版</h3>
        <p>复刻真人牧师的交流方式，包括性格、学识、<br>口吻和声音，可通过文字、语音、图像交流</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
</style>
