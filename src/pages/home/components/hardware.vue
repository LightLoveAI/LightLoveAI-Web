<script setup>

</script>

<template>
  <div class="introduce">
    <div class="productText">
      <h3>硬件版</h3>
      <p>想要更加身临其境地感受真人牧师的温暖吗硬件版复刻真人牧师的声音并与线上版共享同一人格设定和记忆当您接近时，硬件版将自然唤醒延续真人牧师的交流体验让您仿佛置身于真实的牧师交流之中</p>
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
</style>
