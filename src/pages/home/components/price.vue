<script setup lang="ts">

</script>

<template>
  <div class="price">
    <h3 class="title">
      产品价格
    </h3>
    <p class="describe">
      产品买断费以及每月的产品服务费
    </p>
    <div class="list">
      <table class="table">
        <tr>
          <td class="first" />
          <td class="td header">
            <img src="/img/s/p1.png" alt="Product 1">
            <div>经典版</div>
          </td>
          <td class="td header">
            <img src="/img/s/p1.png" alt="Product 1">
            <div>高级定制版</div>
          </td>
          <td class="td header">
            <img src="/img/s/p1.png" alt="Product 1">
            <div>个人随身版</div>
          </td>
        </tr>
        <tr class="tr">
          <td class="first">
            线上版
          </td>
          <td class="td">
            ✓
          </td>
          <td class="td">
            ✓
          </td>
          <td class="td">
            ✓
          </td>
        </tr>
        <tr class="tr">
          <td class="first">
            硬件版
          </td>
          <td class="td">
            默认款
          </td>
          <td class="td">
            可定制
          </td>
          <td class="td">
            便携款
          </td>
        </tr>
        <tr class="tr">
          <td class="first">
            产品费
          </td>
          <td class="td">
            $99
          </td>
          <td class="td">
            $599
          </td>
          <td class="td">
            $199
          </td>
        </tr>
        <tr class="tr">
          <td class="first">
            服务费
          </td>
          <td class="td">
            $9.9
          </td>
          <td class="td">
            $9.9
          </td>
          <td class="td">
            $9.9
          </td>
        </tr>
        <tr class="tr">
          <td class="first">
            首月需
          </td>
          <td class="td">
            $99+$9.9
          </td>
          <td class="td">
            $599+$9.9
          </td>
          <td class="td">
            $199+$9.9
          </td>
        </tr>
      </table>
    </div>
    <div class="sub">
      <button class="btn">
        订阅
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.price {
  --w: 1560px;
  width: var(--w);
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
  width: var(--w);
}
.table {
  border-collapse: collapse;
  border-spacing: 0;
  width: var(--w);
}
.first {
  width: 15%;
}
.td {
  width: 25%;
  text-align: center;
  font-size: 20px;
}
.tr {
  height: 77px;
  border-bottom: 1px solid rgba(47, 47, 47, 1);
}
.header {
  img {
    width: 260px;
    height: 260px;
    border-radius: 18px;
    margin: 0 auto;
  }
  div {
    color: #CE9F43;
    padding: 30px 0 10px 0;
  }
}
.sub {
  padding: 100px 0 200px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .btn {
    width: 250px;
    height: 80px;
    border-radius: 30px;
    background: #CE9F43;
    box-shadow: 0px 2px 4px  #FFFFFF;
    font-size: 28px;
  }
}
</style>
