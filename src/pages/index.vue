<script lang="ts" setup>
defineOptions({
  name: 'Home',
})
</script>

<template>
  <div overflow-hidden w-screen h-screen class="main">
    <div flex flex-col items-center justify-center h-screen w-screen class="box">
      <h2 text-center text-3xl leading="52px" v-html="$t('home.title')" />
      <div text-center h="54%" flex flex-col items-center justify-center leading="37px" v-html="$t('home.describe')" />
      <button w="155px" h="44px" class="btn" border="1px solid #ffffff" rounded="22px" text="#ffffff">
        <span class="mr-10px">{{ $t('home.btnText') }}</span><van-icon name="arrow" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  background-image: url(/img/bg.png);
  background-size: 100% 100%;
  color: #ffffff;
}
.box {
  background-color: rgba($color: #000000, $alpha: 0.5);

}
.btn {
  background: transparent;
}
</style>
