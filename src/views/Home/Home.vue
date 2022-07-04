<template>
<div>
  <header>
    IMAGEM
    <ClockComponent />
    <WeatherComponent />
  </header>
  <main>BODY IMAGEM TEXTOS</main>
  <footer>TEXTO CONTADOR 2 BOTÃO</footer>
</div>
</template>

<script>
import WeatherComponent from '@/components/WeatherComponent/WeatherComponent.vue';
import ClockComponent from '@/components/ClockComponent/ClockComponent.vue';
export default {
  name: "homePage",
  components: {
    WeatherComponent,
    ClockComponent,  
  }
}
</script>

<style lang="scss" scoped>
 @import '@/views/Home/Home.scss';
</style>
