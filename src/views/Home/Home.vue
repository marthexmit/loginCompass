<template>
<div>
  <header>
    IMAGEM
    <ClockComponent />
    <WeatherComponent />
  </header>
  <main>
    <HomeMain />
  </main>
  <footer>TEXTO CONTADOR 2 BOTÃO</footer>
</div>
</template>

<script>
import HomeMain from '@/components/HomeMain/HomeMain.vue';
import WeatherComponent from '@/components/WeatherComponent/WeatherComponent.vue';
import ClockComponent from '@/components/ClockComponent/ClockComponent.vue';
export default {
  name: "homePage",
  components: {
    WeatherComponent,
    ClockComponent,
    HomeMain
  }
}
</script>

<style lang="scss" scoped>
 @import '@/views/Home/Home.scss';
</style>
