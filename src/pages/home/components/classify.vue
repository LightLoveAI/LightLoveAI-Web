<script setup lang="ts">

</script>

<template>
  <div class="classify">
    <h3 class="title">
      产品分类
    </h3>
    <p class="describe">
      以下十字架套餐均附带线上版APP，可根据需求购买不同类型的十字架
    </p>
    <div class="list">
      <div class="item">
        <img src="/img/s/p3.png" alt="">
        <h3>经典版</h3>
        <p>默认款十字架 + 木质底座</p>
      </div>
      <div class="item">
        <img src="/img/s/p1.png" alt="">
        <h3>高级定制版</h3>
        <p>可根据需求定制<br>十字架的外观与材质</p>
      </div>
      <div class="item">
        <img src="/img/s/p2.png" alt="">
        <h3>个人随身版</h3>
        <p>mini款十字架<br>便携式可随身携带</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
</style>
