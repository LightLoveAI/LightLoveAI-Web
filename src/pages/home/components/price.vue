<script setup lang="ts">

</script>

<template>
  <div class="price">
    <h3 class="title">
      {{ $t('home.price.title') }}
    </h3>
    <p class="describe">
      {{ $t('home.price.describe') }}
    </p>
    <div class="list">
      <table class="table">
        <tr>
          <td class="first" />
          <td class="td header">
            <img src="/img/s/p1.png" alt="Product 1">
            <div>{{ $t('home.price.t1') }}</div>
          </td>
          <td class="td header">
            <img src="/img/s/p1.png" alt="Product 1">
            <div>{{ $t('home.price.t1') }}</div>
          </td>
          <td class="td header">
            <img src="/img/s/p1.png" alt="Product 1">
            <div>{{ $t('home.price.t1') }}</div>
          </td>
        </tr>
        <tr class="tr">
          <td class="first">
            {{ $t('home.price.t1') }}
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
            {{ $t('home.price.t2') }}
          </td>
          <td class="td">
            {{ $t('home.price.t6') }}
          </td>
          <td class="td">
            {{ $t('home.price.t7') }}
          </td>
          <td class="td">
            {{ $t('home.price.t8') }}
          </td>
        </tr>
        <tr class="tr">
          <td class="first">
            {{ $t('home.price.t3') }}
          </td>
          <td class="td">
            $99
          </td>
          <td class="td">
            <span>$599</span><i>/{{ $t('home.price.t10') }}</i>
          </td>
          <td class="td">
            $199
          </td>
        </tr>
        <tr class="tr">
          <td class="first">
            {{ $t('home.price.t4') }}
          </td>
          <td class="td">
            <span>$9.9</span><i>/{{ $t('home.price.t9') }}</i>
          </td>
          <td class="td">
            <span>$9.9</span><i>/{{ $t('home.price.t9') }}</i>
          </td>
          <td class="td">
            <span>$9.9</span><i>/{{ $t('home.price.t9') }}</i>
          </td>
        </tr>
        <tr class="tr">
          <td class="first">
            {{ $t('home.price.t5') }}
          </td>
          <td class="td">
            $99+$9.9
          </td>
          <td class="td">
            <span>$599+$9.9</span><i>/{{ $t('home.price.t10') }}</i>
          </td>
          <td class="td">
            $199+$9.9
          </td>
        </tr>
      </table>
    </div>
    <div class="sub">
      <button class="btn">
        {{ $t('home.subscription') }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
// 移动端
@media (min-width: 0px) and (max-width: 768px) {
  .price {
    width: 90vw;
    margin: 0 auto;
    color: #fff;
    margin-top: 50px;
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
    padding: 20px 0 20px 0;
  }
  .list {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }
  .first {
    width: 15%;
    font-size: 1.4vw;
  }
  .td {
    width: 25%;
    text-align: center;
    font-size: 1.4vw;
    i {
      font-size: 8px;
      color: rgba(160, 161, 168, .5);
      font-style: normal;
    }
  }
  .tr {
    height: 4.01vw;
    border-bottom: 1px solid rgba(47, 47, 47, 1);
  }
  .header {
    img {
      width: 13.55vw;
      height: 13.55vw;
      border-radius: 10px;
      margin: 0 auto;
    }
    div {
      color: #CE9F43;
      padding: 30px 0 10px 0;
    }
  }
  .sub {
    padding: 50px 0 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .btn {
      padding: 0;
      width: 20.02vw;
      height: 6.16vw;
      border-radius: 30px;
      background: #CE9F43;
      box-shadow: 0px 2px 4px  #FFFFFF;
      font-size: 1.25vw;
    }
  }
}

@media (min-width: 769px) and (max-width: 1920px)  {
  .price {
    width: 90vw;
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
    padding: 40px 0 50px 0;
  }
  .list {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }
  .first {
    width: 15%;
  }
  .td {
    width: 25%;
    text-align: center;
    font-size: 1.2vw;
    i {
      font-size: 10px;
      color: rgba(160, 161, 168, .5);
      font-style: normal;
    }
  }
  .tr {
    height: 4.01vw;
    border-bottom: 1px solid rgba(47, 47, 47, 1);
  }
  .header {
    img {
      width: 13.55vw;
      height: 13.55vw;
      border-radius: 10px;
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
      width: 13.02vw;
      height: 4.16vw;
      border-radius: 30px;
      background: #CE9F43;
      box-shadow: 0px 2px 4px  #FFFFFF;
      font-size: 1.25vw;
    }
  }
}
@media (min-width: 1920px)  {
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
    i {
      font-size: 10px;
      color: rgba(160, 161, 168, .5);
      font-style: normal;
    }
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
}
</style>
