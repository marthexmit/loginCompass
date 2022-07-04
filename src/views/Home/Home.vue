<template>
<div>
  <header>
    <HeaderComponent />
  </header>
  <main>
    <HomeMain />
  </main>
  <footer>TEXTO CONTADOR 2 BOTÃO</footer>
</div>
</template>

<script>
import HomeMain from '@/components/HomeMain/HomeMain.vue';
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue';
export default {
  name: "homePage",
  components: {
    HeaderComponent,
    HomeMain
  }
}
</script>

<style lang="scss" scoped>
 @import '@/views/Home/Home.scss';
</style>
